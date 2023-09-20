import { useState } from "react";
import { Link } from "react-router-dom";
import '../style.css';

export default function ToDo() {
   const [produto, setProduto ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [img, setImg ] = useState("");
   const [lista, setLista ] = useState([]);
   const [id,setId] = useState(1);
    const salvar =(e) =>{
        e.preventDefault();
        setLista([...lista, {
                produto: produto, marca:marca, preco:preco, img: img,
                id: id
        }]);
        setId(id + 1);
        setProduto("");
        setMarca("");
        setPreco("");
        setImg("");
    };

    return (
        <div class = "center">
            <Link to="/">home</Link>
            <h1 class = "titulo">Produtos Petshop</h1>    
            <form onSubmit={salvar}>
           
            <p class = "nome">Produto:</p>
            <input value={produto} type="text"
            onChange={(e)=>{ setProduto(e.target.value)}}/>
            
           <p class = "nome">Marca do produto:</p>
           <input value={marca} type="text"
            onChange={(e)=>{ setMarca(e.target.value)}}/>
           
           <p class= "nome">Valor do produto:</p>
           <input value={preco} type="number"
            onChange={(e)=>{ setPreco(e.target.value)}}/>

           <p class = "nome"> img:</p>
           <input value={img} type="text"
            onChange={(e)=>{ setImg(e.target.value)}}/>

            <button>ADD</button>   
            </form>      
            {lista.map((ativ)=>
            <div class= "card" key= {ativ.id}>
                <img src= {ativ.img}alt="" class = "img" />
                <p class = "name">Produto:{ativ.produto}</p>
                <p class = "name"> Marca:{ativ.marca}</p>
                <p class = "name"> R$:{ativ.preco}</p>
            </div>
            )} 
        </div>
    );
}