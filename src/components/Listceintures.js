import { useEffect, useState } from 'react';
import ElementsCeintures from './ElementsCeintures';
import axios from 'axios';


function Listceintures() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/ceintures")
            .then((response) => setArticles(response.data)); 
       
    }, []);

    const deleteCeinture = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
            return;
        }

        // Mettez à jour les données localement après la suppression
        setArticles(prevArticles => prevArticles.filter(article => article.id !== id));
    }

    return (
        <>
            <h2 style={{ color: "pink" }}>Nos Ceintures:</h2>
            <ElementsCeintures articles={articles} deleteCeinture={deleteCeinture} />
        </>
    );
}

export default Listceintures;
