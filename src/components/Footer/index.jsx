export default function Footer(props){console.log(props)
    return(
        <footer className=" flex justify-between p-6 text-white fixed bottom-0 w-svw items-center  bg-primary" >
            <p>Total de itens</p>
            <p>{props.quente===0?"Adicionar item":props.quente===1?"1 Item":`${props.quente} Itens`}</p>
        </footer>
    )
}