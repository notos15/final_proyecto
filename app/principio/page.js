import styles from "@/app/principio/styles/inicio.css";
export default function Home() {
  return (
    <div>
      <h1 className="titulo">Alegandria</h1>
      <div className="container">
        <div className="botonera">
          <div className="boton">Escanear</div>
          <div className="boton">Donar</div>
          <div className="boton">Repositorio</div>
          <div className="boton">Reglas</div>
        </div>
      </div>
    </div>
  );
}
