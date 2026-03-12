
import { useState } from "react"



function App() {

  const articles = [
    {title:"Tutorial html", id: 1},
    {title:"Le basi di CSS" , id:2} ,
    {title:"Differenza tra JAVA e JAVASCRIPT" , id:3 } ,
    {title:"il protocollo https" , id:4}
   ]

  const [newArticle, setnewArticle] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log(newArticle)
  }

  return (
    <>
    <div className="container">
      <div className="row text-center">
        <div className="col m-4">
          <h4>Inserisci un nuovo titolo</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" value={newArticle}onChange={e => setnewArticle(e.target.value)}></input>
            <button type="submit" className="btn-primary" >Inserisci</button>
          </form>
        </div>
      </div>
    </div>


    <div className="container">
      <h2 className="text-center">Titoli degli articoli</h2>
      <div className="row d-flex flex-column text-center">
        {
         articles.map(article =>(
          <div className="col m-2 text-center" key={article.id}>
            {article.title}
          </div>
         ))
        }
      </div>
    </div>
     
     </>
  )
}

export default App