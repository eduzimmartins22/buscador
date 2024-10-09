import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="container">
     <h1>JOGO DO CEP</h1>

    <div className = "containerInput">
      
       <input type = "text" placeholder="Digite o Cep que quer descobrir"></input>
      <button className="ButtonProcurar">
         <FiSearch size={20} color ="#fff"/> 

      </button>

    </div>
      <main  className="main">
      <h2>CEP : 29181973</h2>
      <span>Rua bla bla bla</span>
      <span>Ponto de referência</span>
      <span>avenida Rosa</span>
      <span>Numer tal tal tal</span>
      </main>
    </div>
  );
}

export default App;
