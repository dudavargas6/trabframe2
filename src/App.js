import './App.css';
import { Component } from 'react';
import {BuscadeODA} from './components/BuscadeODAs';
import { ListadeODA } from './components/ListadeODAs';
import {Cabecalho} from'./components/Cabecalho'
import { Rodape } from './components/Rodape';


class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome=' + busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }
  
  render(){
    const{busca, odas} = this.state;
    return(
      <section className='container'>

        <Cabecalho/>
    
        <BuscadeODA
          busca={this.state.busca}
          buscaODA={this.buscaODA}
        />

        <div className='lista'>
            <p> {odas.length} odas</p>
            {odas.map(oda=>(
              <ListadeODA
              nome = {oda.nome}
              usuario = {oda.usuario}
              descricao = {oda.descricao}
              data_inclusao = {oda.data_inclusao}
              palavras_chave= {oda.palavras_chave}
              />
            ))}
        </div>
  
        <Rodape/>
  
      </section>
    )
  
  }
}



export default App;
