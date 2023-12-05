import axios from 'axios';
import { useEffect, useState } from 'react';
import ElementsSacs from './ElementsSacs';

function Listsacs() { // Renommez le composant ici
    const [articles, setArticles] = useState([]);   

    useEffect(() => {
        axios.get("http://localhost:3001/sacsamain")
            .then((response) => setArticles(response.data));
    }, []);
    const deleteSac = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
          return;
        }
      
        axios.delete('http://localhost:3001/sacsamain/' + id)
          .then(() => {
            console.log('successfully deleted!')
            setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
          }).catch((error) => {
            console.log(error)
          })
      }
      
    return (
        <>
            <h2 style={{ color: "pink" }}>Nos Sacs:</h2>
            <ElementsSacs articles={articles} deleteSac={deleteSac} />
        </>
    );
}

export default Listsacs; // Assurez-vous de renommer l'export également
