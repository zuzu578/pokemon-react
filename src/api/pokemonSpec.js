import instance from "../utils/commonAxios";
const pokemonSpec = (id) => {
    if(id === undefined){
        return false;
    }
    return new Promise((resolve,reject)=>{
        instance.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
        .then((res)=>{
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

export default pokemonSpec;