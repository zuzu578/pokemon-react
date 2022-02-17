import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from "./component/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,InputGroup,FormControl} from "react-bootstrap";
import getPokemon from './api/getPokemon';
import List from "./component/pokemonList";

const App = () =>{
  const [input , setInput] = useState('');
  const [inintialPokemonData , setInitialPokemonData] = useState([]);
 
  const getInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <Header/>
    <div className = "inputArea">
      <InputGroup className="mb-3" onChange={getInput}>
        <FormControl aria-label=""/>
        <Button onClick={(e)=>{getPokemon(input, e).then((res)=>{setInitialPokemonData(res.data)})}}>검색</Button>
        
      </InputGroup>
        
    <List props = {inintialPokemonData}/>
    </div>
    </div>
  );
}

export default App;
