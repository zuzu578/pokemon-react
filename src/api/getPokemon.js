import instance from "../utils/commonAxios";
const getPokemon = (pokemonName) => { 
  if(pokemonName === undefined){
    return false;
  }
    return new Promise((resolve,reject)=>{
        instance.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
       })
}

export default getPokemon