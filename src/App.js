import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import  './style.css';
import api from './services/api'


function App() {

const [input, setInput] = useState("")
const [cep , setCep] = useState({})

async function handeleSearch(){
  if(input == "")
  {
    alert("Digite algum CEP")
    return; 
  }
  try{
const resposta = await api.get(`${input}/json`)
  setCep(resposta.data)
  setInput("")
  }
  catch{
    alert("ERRO AO BUSCAR O CEP")
    setInput ('')

  }
}



  return (
    <div className="container">
     <h1 className="title">Dados do CEP</h1>

      <div className = "containerInput">
      
        <input type = "text" placeholder="Digite o CEP" value = {input} onChange={(e => setInput(e.target.value))} />

        <button className="ButtonProcurar" onClick={handeleSearch}>
          <FiSearch size={20} color ="#fff"/> 
        </button>

      </div>
      <div className="conteudo">
      {Object.keys(cep).length > 0 && 
      (
        <main  className="main">
        <h2>CEP : {cep.cep}</h2>

        <span>Rua: {cep.logradouro}</span>
        <span>Complemento : {cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>Cidade: {cep.localidade} - Estado: {cep.uf}</span>
        <span>DDD do local: {cep.ddd}</span>

      </main>
      )}
      </div>
    </div>
  );
}

export default App;
