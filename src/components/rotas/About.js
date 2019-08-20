import React, {useState, useEffect} from 'react';
import './About.css';

function About({ match }) {

useEffect(() => {
  PesquisaDeputad()
}, []);

const [item, setItem] = useState({});

const PesquisaDeputad = async () => {
  const PesquisaDeputad = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados/${match.params.id}`);
  const item = await  PesquisaDeputad.json();
  setItem(item.dados);
  console.log(item.dados);
}


useEffect(() => {
  PesquisaDeputado()
}, []);

const [items, setItems] = useState({});

const PesquisaDeputado = async () => {
  const PesquisaDeputado = await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados/${match.params.id}/despesas`);
  const items = await  PesquisaDeputado.json();
  setItems(items.dados);
  console.log(items.dados);
}

  return (

    <div className="Deputados">
      <p className="paragrafo">
      <img className='foto' src={item.urlFoto}/>
      <span>DATA DE NASCIMENTO<p>{item.dataNascimento}</p></span>
      <span>SEXO<p> {item.sexo}</p></span>
      <span>CPF<p> {item.cpf}  </p></span>
      <span>NOME CIVIL<p> {item.nomeCivil}  </p></span>
      <br/>
      </p>
  </div> 
  );
}

export default About;
