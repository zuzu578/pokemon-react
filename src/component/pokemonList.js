import { Table} from 'react-bootstrap';
const PokeMonList = (inintialPokemonData) =>{
    console.log(inintialPokemonData.evoultionChain.name);
    if(inintialPokemonData.props.length === 0){
        return(
            <>
            </>
        )
    }else{
        return(
            <div>
                <div className="dataArea">
                  <div className="pokemon">
                    <h1>{inintialPokemonData.props.name}</h1>
                    <img src={inintialPokemonData.props.sprites.other["official-artwork"].front_default}></img>
                  </div>
                <div className="infoMation">
                    <h1> 포켓몬 정보 </h1>
                    <span>기본 경험치:{inintialPokemonData.props.base_experience}</span><br/>
                    <span>체중:{inintialPokemonData.props.weight}</span><br/>
                    <span>키 : {inintialPokemonData.props.height}</span><br/>
                    <span>지닌 아이템</span>
                    {inintialPokemonData.props.held_items?inintialPokemonData.props.held_items.map((item)=>{
                        return(
                            <div>
                                {item.item.name}
                            </div>
                        )
                    }): null}
                </div>
                </div>
            <div className="evolutionChain">
                <h2>다음 진화 </h2>
                    {inintialPokemonData.evoultionChain.name}
                    <img src={inintialPokemonData.evoultionChain.image}></img>
            </div>
            <div className="dataArea2">
                <h2>포켓몬 모습</h2>
                <div className="sprites">
                    <img src={inintialPokemonData.props.sprites.back_default}></img>
                    <img src={inintialPokemonData.props.sprites.back_female}></img>
                    <img src={inintialPokemonData.props.sprites.back_shiny}></img>
                    <img src={inintialPokemonData.props.sprites.back_shiny_female}></img>
                    <img src={inintialPokemonData.props.sprites.front_default}></img>
                    <img src={inintialPokemonData.props.sprites.front_female}></img>
                    <img src={inintialPokemonData.props.sprites.front_shiny}></img>
                    <img src={inintialPokemonData.props.sprites.front_shiny_female}></img>
                </div>
                <div className="type">
                    <h2>타입</h2>
                    <Table striped bordered hover>
                        <tbody>
                        {inintialPokemonData.props.types.map(function (item,index) {
                            return(
                                <tr key={index}>
                                    <td>{item.type.name}</td>
                                </tr>
                            )
                        })}    
                        </tbody>
                 </Table>
                </div>
                <div className="ability">
                <h2>stat</h2>
                 <Table striped bordered hover>
                        <tbody>
                        {inintialPokemonData.props.stats.map(function (item,index) {
                            return(
                                <tr key={index}>
                                    <td>{item.stat.name}</td>
                                    <td>{item.base_stat}</td>
                                </tr>
                            )
                        })}    
                        </tbody>
                 </Table>
                 <h2>특성</h2>
                <Table striped bordered hover>
                        <tbody>
                        {inintialPokemonData.props.abilities.map(function (item,index) {
                            return (
                            <tr key={index}>
                                <td>{item.ability.name}</td>
                                
                            </tr>
                            );
                        })}    
                        </tbody>
                </Table>
         </div> 
         <div className="ability">
                <h2>출현게임</h2>
                <Table striped bordered hover>
                        <tbody>
                        {inintialPokemonData.props.game_indices.map((item,index)=>{
                            return (
                            <tr key={index}>
                                <td>{item.version.name} 버전</td>
                            </tr>
                            );
                        })}    
                        </tbody>
                </Table>
         </div>    
         <div className="moves">
                <h2>배우는 기술</h2>
                <Table striped bordered hover>
                        <tbody>
                        {inintialPokemonData.props.moves.map((item,index)=>{
                            return (
                            <tr key={index}>
                                <td>{item.move.name}</td>
                            </tr>
                            );
                        })}    
                        </tbody>
                </Table>
         </div>     
    </div>
 </div>
        )
    }
}

export default PokeMonList;