import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './styles/App.css'

import Header from './components/header/header'
import Botaoprimario from './components/botao_primario/botaoprimario'
import Botaosecundario from './components/botao_secundario/botaosecundario'
import Step from './components/step/Step'
import CardBox from './components/CardBox/Cardbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <main>

        <section className="hero container py-5">
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

        <section className="container my-5 p-4 bg-white rounded-4 shadow">
          <div className="row align-items-center">

            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src="../public/how-illustration.png"
                alt="Ilustração de um homem branco com um nootbook apoiado na coxas fazendo um teste vocacional"
                className="img-fluid"
                style={{ maxWidth: "330px" }}
              />
            </div>

            <div className="col-md-7">

                <h2 className='fw-bold fs-1'>Instruções iniciais</h2>

                <Step
                number="01"
                text="Responda a algumas perguntas sobre seus interesses, suas habilidades e seus valores."
                />

                <Step
                number="02"
                text="O teste é dividido em 4 partes."
                />

                <Step
                number="03"
                text="No total, são 14 perguntas, nas quais você pode selecionar de 1 a 3 opções de respostas."
                />

                <Step
                number="04"
                text="E no final você vai ter um guia para saber qual curso escolher e qual profissão seguir na vida."
                />

            </div>

          </div>
        </section>

        <section className="container my-5"> 
          <div className="row align-items-center">
            <h2 className='text-center fw-bold fs-1'>O mercado está se transformando. E você  já pode estar sendo afetado por isso.</h2>
            <p className='text-center fs-4'>Entenda, em números, como as mudanças tecnológicas estão influenciando as decições profissionais - e porque a orientação é mais necessária do que nunca.</p>
                
            <CardBox
                icon="../public/Vector.png"
                title="Mais comum do que você pensa"
                description="Mais de 57% de jovens estão indecisos ou não têm ideia sobre com que profissão seguir."
                link="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"
                source="Fonte: TechRadar"
            />

            <CardBox
              icon="../public/Vector.png"
              title="Mais comum do que você pensa"
              description="Mais de 57% de jovens estão indecisos ou não têm ideia sobre com que profissão seguir."
              link="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"
              source="Fonte: TechRadar"
            />

            <CardBox
              icon="../public/Vector.png"
              title="Mais comum do que você pensa"
              description="Mais de 57% de jovens estão indecisos ou não têm ideia sobre com que profissão seguir."
              link="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"
              source="Fonte: TechRadar"
            />

            <CardBox
              icon="../public/Vector.png"
              title="Mais comum do que você pensa"
              description="Mais de 57% de jovens estão indecisos ou não têm ideia sobre com que profissão seguir."
              link="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"
              source="Fonte: TechRadar"
              />
          </div>
        </section>

        <section className="container my-5">
          <div className="row align-items-center">

            <div className="col-md-7">
              <h2 className='fw-bold fs-1'>Sobre o método</h2>

              <ul class="ms-3">
                <li class="fs-4 mb-2">Mapeie como você sente, age e pensa</li>
                <li class="fs-4 mb-2">Tenha clareza do seu perfil comportamental</li>
                <li class="fs-4 mb-2">Linguagem simples e acessível</li>
                <li class="fs-4 mb-2">Veja instantaneamente o seu resultado</li>
                <li class="fs-4 mb-2">Receba indicações atualizadas de formações e carreiras profissionais reais</li>
              </ul>

               <div className="d-flex gap-3 mt-3">
                <Botaoprimario text="Quero ver meu perfil"/>
                <Botaosecundario text="Contatar um mentor"/>
              </div>
            </div>

            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src="../public/ilustracao-menina.png"
                alt="Ilustração de um homem branco com um nootbook apoiado na coxas fazendo um teste vocacional"
                className="img-fluid"
                style={{ maxWidth:"456px"}}
              />
            </div>

          </div>
        </section>

      </main>
    </>
  )
}

export default App
