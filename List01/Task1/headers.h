/*
Wojciech Wo�niak
Lista 1: zadanie 1
gnu gcc [-std=11]
*/
typedef struct Figura Figura;
Figura *setup_fig();
float dl_boku(float x1, float x2, float y1, float y2);
Figura *new_circle(float r, float x, float y);
Figura *new_triangle(float a, float b, float c, float d, float e, float f);
Figura *new_square(float a, float b, float c, float d, float e, float f);
