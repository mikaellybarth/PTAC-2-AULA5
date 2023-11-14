import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style.css';

export default function ToDo() {
   const listaLocalStorage = JSON.parse( localStorage.getItem ("Lista"));
   const [produto, setProduto ] = useState("");
   const [marca, setMarca ] = useState("");
   const [preco, setPreco ] = useState("");
   const [img, setImg ] = useState("");
   const [lista, setLista ] = useState(listaLocalStorage || []);
   const [id,setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);

   useEffect (() => { localStorage.setItem("Lista", JSON.stringify(lista))}, [lista]);

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

    const excluir = (id) => {
    const excluirLista = [];
    lista.map ((lista) =>{
    if(lista.id !==id){
        excluirLista.push(lista);
    }
    });
    setLista(excluirLista)
     
    }


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

            <button class = "button">ADD</button>   
            </form>   
               
            {lista.map((objeto)=>
            <div class= "card" key = {objeto.id}>

                <Link to={`/detalhe/${objeto.id}`}>
                    <p>{objeto.produto}</p>
                </Link>
                
                <img src= {objeto.img}alt="" class = "img" />
                <p class = "name">Produto:{objeto.produto}</p>
                <p class = "name"> Marca:{objeto.marca}</p>
                <p class = "name"> R$:{objeto.preco}</p>
                <button class = "button" onClick={()=> excluir(objeto.id)}>ExcluirProduto</button>
            </div>
            )} 
        </div>
    );
}