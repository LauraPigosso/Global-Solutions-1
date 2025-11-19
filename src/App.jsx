import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './styles/App.css'

import menino from '../public/Ilustracao-menino.png'
import menina from '../public/ilustracao-menina.png'
import vector from '../public/Vector.png'
import howillustration from '../public/how-illustration.png'

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
              <p className="subtitulo fs-4 mb-2">Proxíma Parada: Conheça o teste vocacional do futuro </p>
              <h1 className="titulo-hero fw-bold mb-2">Projete um futuro promissor.</h1>
              <h1 className="titulo-hero fw-bold mb-2">Aqui. Agora.</h1>
              <div className="d-flex gap-3 justify-content-center mt-3">
                <Botaoprimario text="Fazer o teste"/>
                <Botaosecundario text="Consultar Mentor"/>
              </div>
            </div>

          </div>
        </section>

        <section id='Instrucoes' className=" section container px-md-4 p-4 bg-white rounded-4 shadow">
          <div className="row align-items-center">

            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src={howillustration}
                alt="Ilustração de um homem branco com um nootbook apoiado na coxas fazendo um teste vocacional"
                className="img-fluid"
                style={{ maxWidth: "330px" }}
              />
            </div>

            <div className="col-md-7">

                <h2 className='fw-bold fs-1 text-center text-md-start'>Instruções iniciais</h2>

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

        <section id='Dados' className="section container">

          <h2 className='text-center fw-bold fs-1'>
            O mercado está se transformando. E você já pode estar sendo afetado por isso.
          </h2>
          <p className='text-center fs-4'>
            Entenda, em números, como as mudanças tecnológicas estão influenciando as decições profissionais - 
            e porque a orientação é mais necessária do que nunca.
          </p>

          {/* Carrossel - mobile */}
          <div id="carouselCards" className="carousel slide d-md-none" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active">
                <CardBox
                  icon={vector}
                  title="Mais comum do que você pensa"
                  descricaoicone="Icone de chapeu de formando"
                  description='Cerca de 82% dos jovens têm dificuldades em escolher uma carreira profissional, reflexo das inúmeras possibilidades do mercado e das constantes mudanças no mundo do trabalho.'
                  link="https://blog.unigrancapital.com.br/82-dos-jovens-tem-dificuldades-em-escolher-uma-carreira-profissional/"
                  source="Fonte: CMOV"
                />
              </div>

              <div className="carousel-item">
                <CardBox
                  icon={vector}
                  title="Novas profissões"
                  descricaoicone="Icone de chapeu de formando"
                  description="As profissões do futuro são carreiras em diferentes áreas sobre as quais há grandes expectativas de valorização para os próximos anos e décadas, gerando boas oportunidades profissionais para quem as escolhe."
                  link="http://fia.com.br/blog/profissoes-do-futuro/"
                  source="Fonte: Fórum Econômico Mundial"
                />
              </div>

              <div className="carousel-item">
                <CardBox
                  icon={vector}
                  title="42% sem conhecimento de suas oportunidades"
                  descricaoicone="Icone de chapeu de formando"
                  description="Uma pesquisa revela que 42% dos jovens desconhecem a educação profissional, o que evidencia a falta de acesso a informações sobre cursos técnicos."
                  link="https://www.metropoles.com/brasil/educacao-profissional/pesquisa/aponta-que-42-dos-jovens-desconhecem-educacao-profissional"
                  source="Fonte: SENAI"
                />
              </div>

              <div className="carousel-item">
                <CardBox
                  icon={vector}
                  title="A maioria dos jovens estão pessimistas"
                  descricaoicone="Icone de chapeu de formando"
                  description="Cerca de 57% dos jovens que se formam em 2025 estão pessimistas sobre o início das suas carreiras, refletindo incertezas sobre o mercado de trabalho."
                  link="https://exame.com/carreira/57-dos-jovens-formandos-de-2025-estao-pessimistas-sobre-o-inicio-de-suas-carreiras-diz-pesquisa/"
                  source="Fonte: Exame"
                />
              </div>

            </div>

            {/* setas */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselCards" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselCards" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>

          {/* Grid normal - desktop */}
          <div className="row align-items-center d-none d-md-flex mt-4">
            <CardBox
              icon={vector}
              title="Mais comum do que você pensa"
              descricaoicone="Icone de chapeu de formando"
              description='Cerca de 82% dos jovens têm dificuldades em escolher uma carreira profissional, reflexo das inúmeras possibilidades do mercado e das constantes mudanças no mundo do trabalho.'
              link="https://blog.unigrancapital.com.br/82-dos-jovens-tem-dificuldades-em-escolher-uma-carreira-profissional/"
              source="Fonte: CMOV"
            />

            <CardBox
              icon={vector}
              title="Mais de 40 profissões"
              descricaoicone="Icone de chapeu de formando"
              description="As profissões do futuro são carreiras em expansão, impulsionadas pela tecnologia e com grande potencial de valorização nos próximos anos"
              link="http://fia.com.br/blog/profissoes-do-futuro/"
              source="Fonte: Fórum Econômico Mundial"
            />

            <CardBox
              icon={vector}
              title="42% sem conhecimento de suas oportunidades"
              descricaoicone="Icone de chapeu de formando"
              description="Uma pesquisa revela que 42% dos jovens desconhecem a educação profissional, o que evidencia a falta de acesso a informações sobre cursos técnicos."
              link="https://www.metropoles.com/brasil/educacao-profissional/pesquisa/aponta-que-42-dos-jovens-desconhecem-educacao-profissional"
              source="Fonte: SENAI"
            />

            <CardBox
              icon={vector}
              title="A maioria dos jovens estão pessimistas"
              descricaoicone="Icone de chapeu de formando"
              description="Cerca de 57% dos jovens que se formam em 2025 estão pessimistas sobre o início das suas carreiras, refletindo incertezas sobre o mercado de trabalho."
              link="https://exame.com/carreira/57-dos-jovens-formandos-de-2025-estao-pessimistas-sobre-o-inicio-de-suas-carreiras-diz-pesquisa/"
              source="Fonte: Exame"
            />
          </div>

        </section>


        <section id='Sobre' className="section container">
          <div className="row align-items-center">

            <div className=" order-2 order-md-1 col-md-7">
              <h2 className='fw-bold fs-1 text-center text-lg-start'>Sobre o método</h2>

              <ul className="ms-3 list-unstyled text-center text-lg-start">
                <li className="fs-4 mb-2 texto-responsivo">• Mapeie como você sente, age e pensa</li>
                <li className="fs-4 mb-2 texto-responsivo">• Tenha clareza do seu perfil comportamental</li>
                <li className="fs-4 mb-2 texto-responsivo">• Linguagem simples e acessível</li>
                <li className="fs-4 mb-2 texto-responsivo">• Veja instantaneamente o seu resultado</li>
                <li className="fs-4 mb-2 texto-responsivo">• Receba indicações atualizadas de formações e carreiras profissionais reais</li>
              </ul>

               <div className="d-flex gap-3 mt-3">
                <Botaoprimario text="Quero ver meu perfil"/>
                <Botaosecundario text="Contatar um mentor"/>
              </div>
            </div>

            <div className=" order-1 order-md-2 col-md-5 text-center mb-4 mb-md-0">
              <img
                src={menina}
                alt="Ilustração de uma mulher negra com um caderno nas mãos fazendo anotações"
                className="img-fluid"
                style={{ width:"300px"}}
              />
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="row align-items-center">

            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src={menino}
                alt="Ilustração de um homem negro com uma das mãos no queixo e com um ponto de interrogação ao lado"
                className="img-fluid"
                style={{ width:"300px"}}
              />
            </div>

            <div className="col-md-7">
              <h2 className='fw-bold fs-1 text-center text-lg-start'>A Proxíma Jornada é para você que...</h2>

              <ul className="ms-3 list-unstyled text-center text-lg-start">
                <li className="fs-4 mb-2 texto-responsivo">• Está terminando o ensino médio e não sabe qual profissão escolher.</li>
                <li className="fs-4 mb-2 texto-responsivo">• Trabalha para ajudar a família, mas quer algo melhor para o futuro.</li>
                <li className="fs-4 mb-2 texto-responsivo">• Quer uma carreira estável, com crescimento e que não seja ultrapassada pela IA.</li>
                <li className="fs-4 mb-2 texto-responsivo">• Fica ansioso só de pensar em tomar a decisão errada.</li>
              </ul>

               <div className="d-flex gap-3 mt-3">
                <Botaoprimario text="Quero ver meu perfil"/>
                <Botaosecundario text="Contatar um mentor"/>
              </div>
            </div>

          </div>
        </section>

        <section className="section container">
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
