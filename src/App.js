import './App.css';
import { useState } from 'react';
import Header from "./component/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,InputGroup,FormControl} from "react-bootstrap";
import getPokemon from './api/getPokemon';
import List from "./component/pokemonList";
import pokemonSpec from './api/pokemonSpec';
import evolutionChain from './api/evolutionChain';

const App = () =>{
  const [input , setInput] = useState('');
  const [inintialPokemonData , setInitialPokemonData] = useState([]);
  const [anotherPokemonData , setAnotherPokemonData] = useState([]);
  const [evolutionInfo , setEvolutionInfo] = useState({})
  
  const getInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <Header/>
    <div className = "inputArea">
      <InputGroup className="mb-3" onChange={getInput}>
        <FormControl aria-label=""/>
        <Button onClick={(e)=>{getPokemon(input, e)
          .then((res)=>{
            setInitialPokemonData(res.data)
            pokemonSpec(res.data.id)
            .then((res=>{
                setAnotherPokemonData(res.data);
                evolutionChain(res.data.evolution_chain.url)
              .then((res)=>{
                const evolution_chain = [];
                console.log(res.data)
                evolution_chain.push(res.data.chain.species.name)
                res.data.chain.evolves_to.map((item)=>{
                    item.evolves_to.map((item)=>{
                      evolution_chain.push(item.species.name)
                    })
                  });
                  for(let item of evolution_chain){
                    getPokemon(item)
                    .then((res)=>{
                  
                    }).catch((e)=>{
                      throw new Error(e.message)
                    });
                  }
              })
            }))
            .catch((e)=>{
              throw new Error(e.message)
            })
           })
          .catch((e)=>{
            throw new Error(e.message)
          })
          }}>검색</Button>
      </InputGroup>
        
    <List props = {inintialPokemonData} anotherData = {anotherPokemonData} evoultionChain = {evolutionInfo}/>
    </div>
    </div>
  );
}

export default App;
