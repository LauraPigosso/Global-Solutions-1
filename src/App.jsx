import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './styles/App.css'

import Header from './components/header/header'
import Botaoprimario from './components/botao_primario/botaoprimario'
import Botaosecundario from './components/botao_secundario/botaosecundario'
import Step from './components/step/Step'
import CardBox from './components/CardBox/Cardbox'
import Accordion from './components/Acordeao/acordeao'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>

      <main>

        <section id='inicio' className="hero container py-5">
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

        <section id='Instrucoes' className="container my-5 p-4 bg-white rounded-4 shadow">
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

        <section id='Dados' className="container my-5"> 
          <div className="row align-items-center">
            <h2 className='text-center fw-bold fs-1'>O mercado está se transformando. E você  já pode estar sendo afetado por isso.</h2>
            <p className='text-center fs-4'>Entenda, em números, como as mudanças tecnológicas estão influenciando as decições profissionais - e porque a orientação é mais necessária do que nunca.</p>
                
            <CardBox
                icon="../public/Vector.png"
                title="Mais comum do que você pensa"
                descricaoicone="Icone de chapeu de formando"
                link="https://blog.unigrancapital.com.br/82-dos-jovens-tem-dificuldades-em-escolher-uma-carreira-profissional/"
                source="Fonte: CMOV"
            />

            <CardBox
              icon="../public/Vector.png"
              title="19.8% dos jovens não estudam nem trabalham"
              descricaoicone="Icone de chapeu de formando"
              description="19,8% dos jovens não estavam ocupados nem estudando nem trabalhando."
              link="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal"
              source="Fonte: IBGE"
            />

            <CardBox
              icon="../public/Vector.png"
              title="42% sem conhecimento de suas oportunidades"
              descricaoicone="Icone de chapeu de formando"
              description="Pesquisa aponta que 42% dos jovens desconhecem educação profissional"
              link="https://www.metropoles.com/brasil/educacao-profissional/pesquisa-aponta-que-42-dos-jovens-desconhecem-educacao-profissional"
              source="Fonte: SENAI"
            />

            <CardBox
              icon="../public/Vector.png"
              title="A maioria dos jovens estão pessimistas"
              descricaoicone="Icone de chapeu de formando"
              description="57% dos jovens formandos de 2025 estão pessimistas sobre o início de suas carreiras."
              link="https://exame.com/carreira/57-dos-jovens-formandos-de-2025-estao-pessimistas-sobre-o-inicio-de-suas-carreiras-diz-pesquisa/"
              source="Fonte: Exame"
              />
          </div>
        </section>

        <section id='Sobre' className="container my-5">
          <div className="row align-items-center">

            <div className=" order-2 order-md-1 col-md-7">
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

            <div className=" order-1 order-md-2 col-md-5 text-center mb-4 mb-md-0">
              <img
                src="../public/ilustracao-menina.png"
                alt="Ilustração de uma mulher negra com um caderno nas mãos fazendo anotações"
                className="img-fluid"
                style={{ width:"300px"}}
              />
            </div>

          </div>
        </section>

        <section className="container my-5">
          <div className="row align-items-center">

            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src="../public/ilustracao-menino.png"
                alt="Ilustração de um homem negro com uma das mãos no queixo e com um ponto de interrogação ao lado"
                className="img-fluid"
                style={{ width:"300px"}}
              />
            </div>

            <div className="col-md-7">
              <h2 className='fw-bold fs-1'>A Proxíma Jornada é para você que...</h2>

              <ul class="ms-3">
                <li class="fs-4 mb-2">Está terminando o ensino médio e não sabe qual profissão escolher.</li>
                <li class="fs-4 mb-2">Trabalha para ajudar a família, mas quer algo melhor para o futuro.</li>
                <li class="fs-4 mb-2">Quer uma carreira estável, com crescimento e que não seja ultrapassada pela IA.</li>
                <li class="fs-4 mb-2">Fica ansioso só de pensar em tomar a decisão errada.</li>
              </ul>

               <div className="d-flex gap-3 mt-3">
                <Botaoprimario text="Quero ver meu perfil"/>
                <Botaosecundario text="Contatar um mentor"/>
              </div>
            </div>

          </div>
        </section>

        <section className="container my-5">
          <div className="row align-items-center">

            <h2 className='fw-bold fs-1'>Perguntas frequentes (FAQ)</h2>

              <Accordion
                id="item1"
                titulo="O que é essa solução?"
                texto="É uma plataforma digital que ajuda jovens a descobrir seus interesses profissionais e encontrar cursos e oportunidades alinhadas ao seu perfil atravez de um teste vocacional. O objetivo é facilitar o primeiro passo no futuro do trabalho."
              />

              <Accordion
                id="item2"
                titulo="Como funciona o teste de interesses?"
                texto="O usuário responde um mini-questionário simples e rápido. Com base nas respostas, o sistema identifica as áreas de afinidade e mostra sugestões de cursos e trilhas de aprendizado."
              />

              <Accordion
                id="item3"
                titulo="Preciso pagar para usar a plataforma?"
                texto="Não. A plataforma é gratuita e oferece acesso a informações, perfis de interesse e recomendações iniciais de cursos, incluindo opções gratuitas."
              />

              <Accordion
                id="item4"
                titulo="Os cursos recomendados são confiáveis?"
                texto="Sim. Selecionamos cursos de plataformas reconhecidas e instituições de ensino confiáveis, garantindo qualidade e segurança para o usuário."
              />

              <Accordion
                id="item5"
                titulo="A plataforma ajuda a encontrar emprego?"
                texto="O foco principal é orientação e capacitação, ajudando o jovem a entender onde começar. No futuro, podem ser adicionados recursos relacionados ao mercado de trabalho, como vagas no likedin."
              />

              <Accordion
                id="item6"
                titulo="Por que devo usar essa plataforma?"
                texto="Porque ela oferece orientação prática, rápida e acessível, algo que muitos jovens não recebem. Aqui, você encontra clareza sobre seus interesses e caminhos reais para começar sua carreira."
              />

          </div>
        </section>

      </main>

      <Footer></Footer>

      
    </>
  )
}

export default App
