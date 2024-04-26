import React from 'react'
import { Box, Tab, Tabs } from "@mui/material"
import { useState } from "react";
import CustomTabPanel from "../../ui/CustomTabPanel";

const Infotabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Edukacja" />
          <Tab label="Doświadczenie" />
          <Tab label="Umiejętności" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </div>
  )
}

export default Infotabs