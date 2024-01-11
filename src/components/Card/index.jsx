export default function Card(props) {
    
    const handleItens = (action) =>{
        if(action === "+"){
            props.setItens2(props.cachorro + 1)
        }else if(action === "-" && props.cachorro > 0) {
            props.setItens2(props.cachorro - 1)
        }
    }
    return (
        <div>
            <article>
                <img src="#" alt="" />
                <div>
                    <h2>Hamburguer</h2>
                    <p>Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.</p>
                    <div>
                        <button onClick={()=>{
                            handleItens("-")
                        
                        }} >-</button>
                            <p>{props.cachorro===0?"Adicionar item":props.cachorro===1?"1 Item":`${props.cachorro} Itens`}</p>
                        <button onClick={()=>{
                            handleItens("+")
                        }}>+</button>
                    </div>
                </div>


            </article>
        </div>
    )
}