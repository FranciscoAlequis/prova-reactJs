import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Depu.css';

function Deputados() {

useEffect(() => {
  PesquisaDeputado();
}, []);

const [items, setItems] = useState([]);

const PesquisaDeputado = async () => {
  const depu = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados/');
  const items = await depu.json();
  console.log(items.depu);
  setItems(items.dados)
}

  return (
    <div className="Deputados">
      {items.map(item => (
        <p key={item.id}>
        <img className='foto' src={item.urlFoto}/>
        <br/>
        <p className="paragrafo"><a>Dados Pessoais: </a><Link className="dec" to={`/deputados/${item.id}`}>{item.uriPartido}</Link></p>
        </p>
    ))}
    </div>
  );
}

export default Deputados;
