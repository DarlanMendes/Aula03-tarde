import { useEffect, useState } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import imagem from "./assets/sanduba.png"
import kebab from "./assets/kebab.png"


function App() {
  
  
  const [carrinho, setCarrinho] = useState ([])
console.log(carrinho)
  
  const products = [{id: "1",titulo: "sanduba", descricao: "Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.", figura: imagem}, 
  {id: "2",titulo: "kebab", descricao: "Experimente nosso hambúrguer premium: carne suculenta, queijo derretido, vegetais frescos (alface, tomate, cebola roxa) e molho especial. Uma combinação perfeita de sabores e texturas em cada mordida.", figura: kebab}]

  return (
    <>
     <Header/>
    <div className="flex flex-col gap-5 items-center">
    {products.map((product)=> (<Card  product={product}  setCarrinho={setCarrinho} key={product.id}/>))}    
    </div>
    
     {carrinho.length>0?<Footer carrinho={carrinho}/>:null}
     

      
    </>
  )
}

export default App
