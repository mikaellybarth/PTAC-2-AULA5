import { useParams } from "react-router-dom"
import Card from '../Componentes/card';

export default function detalhe (){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    
   const produto = lista.filter((objeto)=>{
        if(objeto.id == id){
                  return objeto;
        }
        return null;
    })

    console.log(produto[0])

    return(
        <div>
           <Card produto={produto[0] } />
        </div>
    )
} 