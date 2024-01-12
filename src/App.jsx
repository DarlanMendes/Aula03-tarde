import { useEffect, useState } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import imagem from "./assets/sanduba.png"
import kebab from "./assets/kebab.png"


function App() {
  
  
  const [total, setTotal] = useState (0)

  

  const products = [{id: "1",titulo: "sanduba", descricao: "Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.", figura: imagem}, {id: "2",titulo: "kebab", descricao: "Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.", figura: kebab}]

  return (
    <>
     <Header/>
    <div className="flex flex-col gap-5 items-center">
    {products.map((product)=> (<Card  product={product}  setTotal={setTotal} key={product.id}/>))}    
    </div>
     {/* <Card cachorro={itens} setItens2={setItens}/>
     <Card cachorro={itens2} setItens2={setItens2}/> */}
     {total>0?<Footer quente={total}/>:null}
     

      
    </>
  )
}

export default App
