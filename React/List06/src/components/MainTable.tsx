import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { UserContext } from '../UserContext';
import { useContext } from 'react';
import BooleanEditCell from './../ui/BooleanEditCell';
import { Product } from '../types/Product';

const booleanToStringFormatter = (params: any) => {
  return params ? 'Tak' : 'Nie';
}

const formatCurrency = (value: number): string => {
  return value.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' });
};


const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70
  },
  {
    field: 'name',
    headerName: 'Nazwa',
    width: 200,
    editable: true
  },
  {
    field: 'price',
    headerName: 'Cena',
    width: 100,
    type: 'number',
    editable: true,
    valueFormatter: formatCurrency,
  },
  {
    field: 'avability',
    headerName: 'Dostępne',
    valueFormatter: booleanToStringFormatter,
    width: 130,
    editable: true,
    renderEditCell: (params) => <BooleanEditCell {...params} />,
  },
  {
    field: 'stock',
    headerName: 'Ilość',
    width: 130,
    type: 'number',
    editable: true,
  },
];

const MainTable = () => {
  const { state, dispatch } = useContext(UserContext);

  const stateUpdated = (newState: any) => {
    const arr = Object.values(newState.rows.dataRowIdToModelLookup) as Product[];
    if (arr !== state.products) {
      dispatch({ type: 'UPDATE_PRODUCTS', payload: arr });
    }
  }

  return (
    <div style={{ height: 400, width: '90%' }}>
      <DataGrid
        editMode='row'
        rows={state.products}
        columns={columns}
        onStateChange={(state) => stateUpdated(state)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default MainTable