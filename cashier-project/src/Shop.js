import { useEffect, useState }from "react";
import axios from 'axios';
import './Shop.css';

function Item(props){
    return(<div key={props.id} onClick={()=>props.callback(props)}>
        <img src={props.img} width={200} height={200}/><br/>
        id: {props.id} <br/>
        name: {props.name} <br/>
        price: {props.price} <br/>
    </div>);
}

export default function Shop(){
    const [products, setProducts]=useState([]);
    const URL="http://localhost:3000";
    useEffect(()=>{
        axios.get(URL+'/api/products')
        .then(response=>{
            setProducts(response.data);
        })
        .catch(error=>{
            console.log("error");
        });
    }
    ,[]);
    const [cart,setCart]=useState([]);
    function addCart(item){
        setCart([...cart,{id:item.id,name:item.name,price:item.price,img:item.img}]);
    }
    const productList=products.map(item=><Item {...item} callback={addCart}/>);
    const cartList=cart.map((item,index)=><li>{item.id} {item.name} {item.price}
    <button onClick={()=>{
        alert('you click' +index);
        setCart(cart.filter((i,_index)=>index!=_index));
    }}>
    Delete</button>
    </li>);
    let totalprice=0;
    for(let i=0;i<cart.length;i++){
        totalprice+=cart[i].price;
    }
    return (<>
    <div className="grid-container">{productList}</div>
    <h1>Cart</h1>
    <button onClick={()=>setCart([])}>Clear all</button>
    <ol>{cartList}</ol>
    <h2>total price {totalprice} Bath</h2>
    </>);
}