import { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
   
    return (
        <div>
            <h1 class= "nome-home">Petshop</h1>
            <Link to="/todo">todo</Link>

         <div class="card-home">
        <img src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkpq9gppb9ew0c" class = "imgg" alt="foto de um gato"></img>
        <h2>Caixa de Transporte</h2>
        <p> Cama Iglu e Comedouro Pet para Cachorro e Gato Caminha</p>
        </div>

        <div class="card-home">
        <img src="https://down-br.img.susercontent.com/file/sg-11134201-22100-7ruv050j54hvc5" class = "imgg" alt="foto de um gato"></img>
        <h2>Kit</h2>
        <p>Caixa de Transporte N1 + Cama Pet + Rastelo Escova para Cachorro e Gato</p>
        </div>

        <div class="card-home">
        <img src="https://images.tcdn.com.br/img/img_prod/1061113/nero_gato_20kg_adulto_peixe_e_frango_2479_1_77a1495acd19872de50c004d179b40bf.png" class = "imagem" alt="foto de um gato"></img>
        <h2>Ração</h2>
        <p>Ração Nero Gato 20kg Adulto Peixe E Frango</p>
        </div>

        </div>

       

    );
}