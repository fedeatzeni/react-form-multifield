import { useState } from "react";

const startList = [
    { id: 1, text: "primo" },
    { id: 2, text: "secondo" },
    { id: 3, text: "terzo" },
]

export default function Form() {
    // stati lista 
    const [articles, setArticles] = useState(startList);
    const [newArticle, setNewArticle] = useState("");


    function addArticle() {
        event.preventDefault();
        // crea il nuovo oggetto
        let newid = articles.length === 0 ? 1 : articles[articles.length - 1].id + 1
        let newobj = { id: newid, text: newArticle }
        // crea un nuovo array con l'aggiunta di un elemento 
        let updatedArticles = [...articles, newobj];
        //aggiorna l'array
        setArticles(updatedArticles);
        // pulisce l'input del form
        setNewArticle("");
    }

    function removeArticle(i) {
        setArticles(articles.filter((article) => article.id !== i));
    }

    return (
        <>
            <form onSubmit={addArticle}>
                <input type="text" value={newArticle} onChange={event => setNewArticle(event.target.value)} />
                <button>Invia</button>
            </form>

            <ul>
                {articles.map((el) => <li key={el.id}>{el.text} <button onClick={() => removeArticle(el.id)}>elimina</button></li>)}
            </ul>
        </>
    )
}
