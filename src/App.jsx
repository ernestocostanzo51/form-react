
import { useState } from "react"



function App() {
  const articles = ["Tutorial html", "Le basi di CSS", "Differenza tra JAVA e JAVASCRIPT", "il protocollo https"]
  

  return (
    <>
    <div className="container">
      <div className="row text-center">
        <div className="col m-4">
          <h4>Inserisci un nuovo titolo</h4>
          <form>
            <input type="text"></input>
            <button type="submit" className="btn-primary">Inserisci</button>
          </form>
        </div>
      </div>
    </div>


    <div className="container">
      <h2 className="text-center">Titoli degli articoli</h2>
      <div className="row d-flex flex-column text-center">
        {
         articles.map(article =>(
          <div className="col m-2 text-center">
            {article}
          </div>
         ))
        }
      </div>
    </div>
     
     </>
  )
}

export default App