typedef struct Figura {
    // 0 - kolo, 1 - trojkat, 2 - kwadrat
    int typfig;
    /*
    Dla kola:
    a - promien,
    b - wsp. x srodka figury,
    c - wsp. y srodka figury
    Dla trojkata i kwadratu:
    a,b,c - wsp. x pierwszego, drugiego i trzeciego wierzcholka
    d,e,f - wsp. y -,,-
    (nie przyjmujemy 4. wierzcholka kwadratu - obliczymy go)
    */
    float a;
    float b;
    float c;
    float d;
    float e;
    float f;
} Figura;

// Funkcja przydzielajaca pamiec figurze
Figura *setup_fig() {
    Figura *output = malloc(sizeof(Figura));
    if(output != NULL) {
        output->typfig = 0;
        output->a = 0;
        output->b = 0;
        output->c = 0;
        output->d = 0;
        output->e = 0;
        output->f = 0;
    }
    return output;
}

// Funkcja liczaca dlugosc boku ze wsporzednych
float dl_boku(float x1, float x2, float y1, float y2) {
    return sqrtf((x2-x1)*(x2-x1) - (y2-y1)*(y2-y1));
}

// Funkcja tworzaca nowe kolo
//r - promien, x - wsp. x srodka, y - wsp. y srodka
Figura *new_circle(float r, float x, float y) {
    if(r <= 0) {
        printf("Nie mozna stworzyc kola o promieniu <=0 !\n");
        return NULL;
    }
    Figura *output = setup_fig();
    output->a = r;
    output->b = x;
    output->c = y;
    return output;
}

// Funkcja tworzaca trojkat
Figura *new_triangle(float a, float b, float c, float d, float e, float f) {
    if( a==b || a==c || b==c || d==e || d==f || e==f ) {
        printf("Wsporzedne wierzcholkow musza byc od siebie rozne!\n");
        return NULL;
    }
    int x = dl_boku(a, b, d, e);
    int y = dl_boku(a, c, d, f);
    int z = dl_boku(b, c, e, f);
    if(x+y < z || y+z < x || x+z < y) {
        printf("Kazdy z bokow musi byc krotszy od sumy dwoch pozostalych!\n");
        return NULL;
    }
    Figura *output = setup_fig();
    output->typfig = 1;
    output->a = a;
    output->b = b;
    output->c = c;
    output->d = d;
    output->e = e;
    output->f = f;
    return output;
}

Figura *new_square(float a, float b, float c, float d, float e, float f) {
    if( a==b || a==c || b==c || d==e || d==f || e==f ) {
        printf("Wsporzedne wierzcholkow musza byc od siebie rozne!\n");
        return NULL;
    }
    if((a!=b && a!=c && b!=c) || (d!=e && d!=f && e!=f)) {
        printf("Figura nie jest kwadratem!\n");
        return NULL;
    }
    Figura *output = setup_fig();
    output->typfig = 2;
    output->a = a;
    output->b = b;
    output->c = c;
    output->d = d;
    output->e = e;
    output->f = f;
    return output;
}

float pole(Figura *f) {
    switch(f->typfig) {
        //Pole kola: PI * r^2
        case 0:
            return M_PI*f->a*f->a;
        // Pole trojkata - wzor z polowa obwodu
        case 1:
            // Printf aby uniknac bledu przy deklaracji zaraz po case
            printf("");
            float x = dl_boku(f->a, f->b, f->d, f->e);
            float y = dl_boku(f->a, f->c, f->d, f->f);
            float z = dl_boku(f->b, f->c, f->e, f->f);
            float p = (x+y+z)/2;
            return sqrtf(p*(p-x)*(p-y)*(p-z));
        // Pole kwadratu - bok * bok
        case 2:
            printf("");
            /* Obliczamy dlugosc boku kwadratu korzystajac
            z faktu ze boki sa rownolegle do osi ukladu wsporzednych */
            float bok;
            if(f->a == f->b) {
                bok = fabs(f->e - f->d);
            } else if (f->a == f->c) {
                bok = fabs(f->f - f->d);
            } else if (f->d == f->e) {
                bok = fabs(f->b - f->a);
            } else {
                bok = fabs(f->c - f->a);
            }
            return bok*bok;
        default:
            printf("Blad!\n");
            return 0;
    }
}
