import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementsSacCard from './ElementsSacCard';

function ListSacCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(' http://localhost:3001/sacsamain')
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
          <ElementsSacCard articles={articles}  />
    </div>
  );
}

export default ListSacCard;
