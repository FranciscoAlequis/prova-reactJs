import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Deputados() {

useEffect(() => {
  PesquisaDeputado();
}, []);

const [items, setItems] = useState([]);

const PesquisaDeputado = async () => {
  const deputados = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados/');
  const items = await deputados.json();
  console.log(items.deputados);
  setItems(items.dados)
}

  return (
    <div className="Deputados">
      {items.map(item => (
        <p key={item.id}>
        <img className='foto' src={item.urlFoto}/>
        <br/>
        <p>Dados do Deputado: <Link className="dec" to={`/deputados/${item.id}`}>{item.uriPartido}</Link></p>
        </p>
    ))}
    </div>
  );
}

export default Deputados;
