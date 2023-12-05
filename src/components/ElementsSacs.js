import {Link } from "react-router-dom";
function ElementsSacs(props) {
    return ( 
        <div className="container">
            <div className="row">
                {props.articles.map(article => {
                    return (
                        <div key={article.id} className="col-sm-4">
                            <div className="card" style={{"width": "18rem"}}>
                                <img src={article.imageartpetitf} className="card-img-top" alt={article.designation}/>
                                <div className="card-body">
                                    <h5 className="card-title">{article.designation}</h5>
                                    <p className="card-text">{article.marque}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{article.prixVente} TND</li>
                                </ul>
                                <div className="card-body">
                                <Link exact to={`/EditSac/${article.id}`} className="btn btn-primary">Modifier</Link>
                                <button onClick={()=>{props.deleteSac(article.id)}} className="btn btn-danger">Supprimer</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ElementsSacs;
