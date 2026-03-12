
import { useState } from "react"



function App() {
  const articles = ["Tutorial html", "Le basi di CSS", "Differenza tra JAVA e JAVASCRIPT", "il protocollo https"]
  

  return (
    <>
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