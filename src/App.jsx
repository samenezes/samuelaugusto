
import './App.css'

function App() {

  var valor1 = 0
  var valor2 = 0

  function primaryRequest() {
    const valores= fetch('https://opentdb.com/api.php?amount=30&category=18').then(batata=>{

    batata.json().then(bacon=>{

        console.log(bacon.results[0].category)
        
        var btn=document.querySelector('#botao')

        btn.addEventListener('click',()=>{

          var legenda = document.querySelector("#legenda")
          var legenda2 = document.querySelector("#legenda2")

                legenda.innerHTML = `${bacon.results[valor1].difficulty}`
                legenda2.innerHTML = `${bacon.results[valor2].question}`

                valor1++
                valor2++
            

        })

    }) 

    })
      
}

  

  return (
    <>
      
        <div>
            <button id="botao" onClick={primaryRequest()}>CLICK HERE!</button>
        </div>
        <div>
            <figure>
                <figcaption id="legenda">dificuldade</figcaption>
                <figcaption id="legenda2">questao</figcaption>
            </figure>
                
        </div>
    </>
  )
}

export default App
