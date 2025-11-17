import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './styles/App.css'

import Header from './components/header/header'
import Botaoprimario from './components/botao_primario/botaoprimario'
import Botaosecundario from './components/botao_secundario/botaosecundario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <main>
        <section className="hero container-fluid py-5">
          <div className="row justify-content-center text-center">

            <div className="col-12 col-md-10 col-lg-8">
              <p className="fs-4 mb-2">Conheça o teste vocacional do futuro </p>
              <h1 className="titulo-hero fw-bold mb-2">Projete um futuro promissor.</h1>
              <h1 className="titulo-hero fw-bold mb-2">Aqui. Agora.</h1>
              <div className="d-flex gap-3 justify-content-center mt-3">
                <Botaoprimario text="Fazer o teste"/>
                <Botaosecundario text="Consultar Mentor"/>
              </div>
            </div>

          </div>
        </section>
        
      </main>
    </>
  )
}

export default App
