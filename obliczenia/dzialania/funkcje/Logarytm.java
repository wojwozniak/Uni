package obliczenia.dzialania.funkcje;

import obliczenia.Wyrazenie;

public class Logarytm extends Wyrazenie {
    private final Wyrazenie podstawa;
    private final Wyrazenie liczba;

    public Logarytm(Wyrazenie podstawa, Wyrazenie liczba) {
        this.podstawa = podstawa;
        this.liczba = liczba;
    }

    @Override
    public double oblicz() {
        // Korzystamy ze wzoru: log_a(b) = log_c(b) / log_c(a)
        return Math.log(liczba.oblicz()) / Math.log(podstawa.oblicz());
    }

    @Override
    public String toString() {
        return "log(" + podstawa.toString() + ", " + liczba.toString() + ")";
    }
}