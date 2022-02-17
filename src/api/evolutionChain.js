import instance from "../utils/commonAxios";
const evolutionChain = (url) => {
    return new Promise((resolve,reject)=>{
        instance.get(url)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
       })
}

export default evolutionChain