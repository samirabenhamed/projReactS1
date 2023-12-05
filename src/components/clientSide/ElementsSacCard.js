import { useShoppingCart} from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link}  from 'react-router-dom';
import React from "react";



   



const ElementsSacCard= (props)=> {
  const { cartCount,addItem } = useShoppingCart();
  const addToCart = (article) => {
      
    const target = { 
    id : article.id,
    title : article.designation,
    image : article.imageartpetitf,
    price : article.prixVente,
    qtestock : article.qtestock,
    quantity : 1
    };
    addItem(target);
    console.log('Item added to cart:', target);
    
   
  };


 
    return ( 
     <>
       <AppBar position="static" color='default'>
                
                    <Button color="inherit"><Link to="/Cart">{ cartCount}<ShoppingCartIcon fontSize="large" /></Link></Button>
               
  </AppBar>


<div className="row">
       {props.articles && props.articles.map((article) => (
         
         <article className="col-sm-3" key={article.id}>
<div className="card">
<img
 src={article.imageartpetitf}
 className="card-img-top p-5"
 alt={article.designation}
/>
</div>
<div className="text-center">
<div>{article.designation.substr(0,20)} ... </div>
<div>Prix : {article.prixVente} TND </div>
</div>
<div className="text-center">
<button
  disabled={article.qtestock <= 1}
  className="btn btn-warning"
  onClick={() => addToCart(article)}>
  Add to Cart
</button>




</div>
</article>
        
       ))}
     </div>
     </>

  );
  
}

export default ElementsSacCard;
