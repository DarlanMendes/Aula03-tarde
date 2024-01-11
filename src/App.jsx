import { useEffect, useState } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"


function App() {
  const [itens, setItens] = useState(0)
  const [itens2, setItens2] = useState(0)
  const [total, setTotal] = useState (itens+itens2)

  useEffect(()=>{
    setTotal(itens+itens2);
  },[itens,itens2])

  return (
    <>
     <Header/>

     <Card cachorro={itens} setItens2={setItens}/>
     <Card cachorro={itens2} setItens2={setItens2}/>
     {total>0?<Footer quente={total}/>:null}
     

      
    </>
  )
}

export default App
