// Componente: (É uma função que retorna algum conteudo HTML,CSS, JS) Podendo também criar componentes para serem usados independente separados .
// Estado: Informações mantidas pelo componente (Lembrar: IMUTABILIDADE)
// Propriedade: (Atributos)Informações que um componente PAI passa para um componente FILHO.
import React,{useState, useEffect } from "react";
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api.js'

import DevItem from './components/DevItem';
import DevForms from './components/DevForms'

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    } 
    loadDevs();
  },[]);
  async function handleAddDev(data){
    const response = await api.post('/devs',data);
    setDevs([...devs, response.data]);
  }
  return (
   <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <DevForms onSubmit = {handleAddDev}/>
    </aside>

    <main>
      <ul>
        {devs.map(dev =>(
         <DevItem key={dev._id} dev={dev} />
        ))};  
      </ul>
    </main>
   </div>  
  );
}
export default App;
