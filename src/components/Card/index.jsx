import { useState } from "react"

export default function Card(props) {
  const [item, setItem] = useState(0)
    
    const handleItens = (action) =>{
        if(action === "+"){
            setItem(item + 1)
            props.setTotal((prev) => prev + 1)
            
        }else if(action === "-" && item > 0) {
            setItem(item - 1)
            props.setTotal((prev) => prev - 1)
        }
    }
    return (
        <div>
            <article className="border-black border rounded-lg flex text-[8px] h-full w-[90vw]" >
                <img className="w-[39.6vw] h-[47.8vw]" src={props.product.figura} alt="" />
                <div className="flex flex-col p-[3.75vw] justify-between" >
                    <h2 className="font-bold text-base">{props.product.titulo}</h2>
                    <p>{props.product.descricao}</p>
                    <div className="flex justify-between bg-primary rounded-md items-center text-white py-[6px]">
                        <button onClick={()=>{
                            handleItens("-")
                        
                        }} className="pl-[11px]">-</button>
                            <p>{item===0?"Adicionar item":item===1?"1 Item":`${item} Itens`}</p>
                        <button onClick={()=>{
                            handleItens("+")
                        }} className="pr-[11px]">+</button>
                    </div>
                </div>


            </article>
        </div>
    )
}