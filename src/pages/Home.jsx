import { Hero } from "../commponets/general/Hero";
import { Navar } from "../commponets/general/navar";
import { Footer } from "../commponets/general/Footer";
import { usePeliculas } from "../hook/UsePeliculas";
import { SeccionHomePeliculas } from "../commponets/SeccionHomePeliculas";

export function Home() {
  const {
    peliculas: enCartelera,
    loading: loadingenCartelera,
    error: errorEnCartelera,
  } = usePeliculas("en-cartelera", 3, 1, true);
  const {
    peliculas: proximamente,
    loading: loadingProximamente,
    error: errorProximamente,
  } = usePeliculas("proximamente", 3);

  return (
    <>
      <div className="m-5">
        <Navar />
        <section className="mt-10 mb-50">
          <Hero />
          <SeccionHomePeliculas
            peliculas={enCartelera}
            loading={loadingenCartelera}
            error={errorEnCartelera}
            etiqueta={"esta semana"}
            titulo={"En cartelera"}
            linkTexto={"explorar cartelera ->"}
            linkTo={"/cartelera/en-cartelera"}
          ></SeccionHomePeliculas>

          <SeccionHomePeliculas
            peliculas={proximamente}
            loading={loadingProximamente}
            error={errorProximamente}
            etiqueta={"proxiamamente"}
            titulo={"Proximamente"}
            linkTexto={"explorar proximos estrenos ->"}
            linkTo={"/cartelera/proximamente"}
          ></SeccionHomePeliculas>
        </section>
      </div>
      <Footer />
    </>
  );
}
