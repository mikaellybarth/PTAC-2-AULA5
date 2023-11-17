import { useParams } from "react-router-dom"

export default function detalhe (){
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));

    return(
        <div>
            <h1>{id} bolsonaro presidente e o resto fia da puta,... Eu tomei um prejuizo com o bolsonaro de...</h1>
        </div>
    )
} 