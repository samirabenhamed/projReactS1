import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementsCentureCard from './ElementsCentureCard';

function ListCentureCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/ceintures')
      .then((res) => {
        const data = res.data;
        setArticles(data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

   return (
    <div className="container">
          <ElementsCentureCard articles={articles}  />
    </div>
  );
}

export default ListCentureCard;


