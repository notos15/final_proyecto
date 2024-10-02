"use client";
import styles from "@/app/globals.css";
import Link from "next/link";
import Image from 'next/image';
export default function Home() {
  return (
    <div>
      <h1 className="titulo">Donar Libros</h1>
      <div className="cuestionario">
        <div className="tex">Gracias por donar un libro</div>
        <div className="tex">Ahora por favor imprima y pegue el siguiente codigo QR</div>
      </div>
      <div className='imagen-contenedor'>
        < Image 
          src="/Elemento/miqr.png"
          alt="codigo qr"
          width={300}
          height={300}
          display="center"
        />  
      </div>
      <div className='contenedor1'>
        <div>
        
          <button className='btn'>
            <Link href={"/principio"}style={{ textDecoration: 'none' }}>
              <div className="tex">Pagina principal</div>
            </Link>
          </button>
        </div>
      </div>
    </div>
    
  );
}
