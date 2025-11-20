import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'

import './styles/App.css'

import menino from '../public/Ilustracao-menino.png'
import menina from '../public/ilustracao-menina.png'
import vector from '../public/Vector.png'
import question from '../public/question-icon.svg'
import people from '../public/people-icon.svg'
import maleta from '../public/suitcase-icon.svg'

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

        {/* HERO */}
        <section id="inicio" aria-labelledby="hero-title" className="hero container py-5">
          <div className="row justify-content-center text-center">

            <div className="col-12 col-md-10 col-lg-8">
              <p className="subtitulo fs-4 mb-2">Próxima Parada: Conheça o teste vocacional do futuro</p>

              <h1 id="hero-title" className="titulo-hero fw-bold mb-2">
                Projete um futuro promissor.
              </h1>
              <h2 className="titulo-hero fw-bold mb-2">
                Aqui. Agora.
              </h2>

              <div className="d-flex gap-3 justify-content-center mt-3">
                <Botaoprimario text="Fazer o teste"/>
                <Botaosecundario text="Consultar Mentor"/>
              </div>
            </div>

          </div>
        </section>


        {/* INSTRUÇÕES */}
        <section id="instrucoes" aria-labelledby="instr-title" className="section container px-md-4 p-4 bg-white rounded-4 shadow">

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
              <h2 id="instr-title" className='fw-bold fs-1 text-center text-md-start'>
                Instruções iniciais
              </h2>

              <Step number="01" text="Responda a algumas perguntas sobre seus interesses, habilidades e valores." />
              <Step number="02" text="O teste é dividido em 5 partes com 12 blocos." />
              <Step number="03" text="Você terá 5 etapas com 12 blocos podendo selecionar até 3 por etapa." />
              <Step number="04" text="Ao final, você recebe um guia com a area mais indicada." />
            </div>

          </div>
        </section>


        {/* DADOS */}
        <section id="dados" aria-labelledby="dados-title" className="section container">

          <h2 id="dados-title" className='text-center fw-bold fs-1'>
            O mercado está se transformando — e você já pode estar sendo afetado.
          </h2>

          <p className='text-center fs-4'>
            Entenda como a tecnologia está influenciando decisões profissionais — 
            e por que a orientação é mais necessária do que nunca.
          </p>

          {/* CARROSSEL MOBILE */}
          <div 
            id="carouselCards" 
            className="carousel slide d-md-none" 
            data-bs-ride="carousel"
            aria-label="Carrossel com dados sobre o mercado de trabalho"
          >

            <div className="carousel-inner">

              <div className="carousel-item active">
                <CardBox
                  icon={people}
                  title="Mais comum do que você pensa"
                  descricaoicone="Ícone de um grupo de pessoas"
                  description="82% dos jovens têm dificuldades em escolher uma carreira profissional."
                  link="https://blog.unigrancapital.com.br/82-dos-jovens-tem-dificuldades-em-escolher-uma-carreira-profissional/"
                  source="Fonte: CMOV"
                />
              </div>

              <div className="carousel-item">
                <CardBox
                  icon={vector}
                  title="Novas profissões"
                  descricaoicone="Ícone de chapéu de formando"
                  description="As profissões do futuro estão em expansão e impulsionadas pela tecnologia."
                  link="http://fia.com.br/blog/profissoes-do-futuro/"
                  source="Fonte: Fórum Econômico Mundial"
                />
              </div>

              <div className="carousel-item">
                <CardBox
                  icon={question}
                  title="42% sem conhecimento de oportunidades"
                  descricaoicone="Ícone de ponto de interrogação"
                  description="42% dos jovens desconhecem a educação profissional."
                  link="https://www.metropoles.com/brasil/educacao-profissional/pesquisa-aponta-que-42-dos-jovens-desconhecem-educacao-profissional"
                  source="Fonte: SENAI"
                />
              </div>

              <div className="carousel-item">
                <CardBox
                  icon={maleta}
                  title="Pessimismo crescente"
                  descricaoicone="Ícone de maleta"
                  description="57% dos jovens formandos de 2025 estão pessimistas sobre sua carreira."
                  link="https://exame.com/carreira/57-dos-jovens-formandos-de-2025-estao-pessimistas-sobre-o-inicio-de-suas-carreiras-diz-pesquisa/"
                  source="Fonte: Exame"
                />
              </div>

            </div>

            {/* SETAS */}
            <button 
              className="carousel-control-prev bg-secondary" 
              type="button" 
              data-bs-target="#carouselCards" 
              data-bs-slide="prev"
              aria-label="Anterior"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button 
              className="carousel-control-next bg-secondary" 
              type="button" 
              data-bs-target="#carouselCards" 
              data-bs-slide="next"
              aria-label="Próximo"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>


          {/* DESKTOP GRID */}
          <div className="row align-items-center d-none d-md-flex mt-4">

            <CardBox
              icon={people}
              title="Mais comum do que você pensa"
              descricaoicone="Ícone de um grupo de pessoas"
              description="Cerca de 82% dos jovens têm dificuldades em escolher uma carreira profissional, reflexo das inúmeras possibilidades do mercado e das constantes mudanças no mundo do trabalho."
              link="https://blog.unigrancapital.com.br/82-dos-jovens-tem-dificuldades-em-escolher-uma-carreira-profissional/"
              source="Fonte: CMOV"
            />

            <CardBox
              icon={vector}
              title="Mais de 40 profissões"
              descricaoicone="Ícone de chapéu de formando"
              description="As profissões do futuro são carreiras em expansão, impulsionadas pela tecnologia e com grande potencial de valorização nos próximos anos"
              link="http://fia.com.br/blog/profissoes-do-futuro/"
              source="Fonte: Fórum Econômico Mundial"
            />

            <CardBox
              icon={question}
              title="42% sem conhecimento"
              descricaoicone="Ícone de ponto de interrogação"
              description="Uma pesquisa revela que 42% dos jovens desconhecem a educação profissional, o que evidencia a falta de acesso a informações sobre cursos técnicos"
              link="https://www.metropoles.com/brasil/educacao-profissional/pesquisa-aponta-que-42-dos-jovens-desconhecem-educacao-profissional"
              source="Fonte: SENAI"
            />

            <CardBox
              icon={maleta}
              title="Pessimismo crescente"
              descricaoicone="Ícone de maleta"
              description="Cerca de 57% dos jovens que se formam em 2025 estão pessimistas sobre o início das suas carreiras, refletindo incertezas sobre o mercado de trabalho"
              link="https://exame.com/carreira/57-dos-jovens-formandos-de-2025-estao-pessimistas-sobre-o-inicio-de-suas-carreiras-diz-pesquisa/"
              source="Fonte: Exame"
            />

          </div>

        </section>


        {/* SOBRE O MÉTODO */}
        <section id="sobre" aria-labelledby="sobre-title" className="section container">
          <div className="row align-items-center">

            <div className="order-2 order-md-1 col-md-7">
              <h2 id="sobre-title" className='fw-bold fs-1 text-center text-lg-start'>
                Sobre o método
              </h2>

              <ul className="ms-3 list-unstyled text-center text-lg-start fs-4">
                <li>• Mapeie como você sente, age e pensa</li>
                <li>• Tenha clareza do seu perfil comportamental</li>
                <li>• Linguagem simples e acessível</li>
                <li>• Veja instantaneamente seu resultado</li>
                <li>• Receba indicações reais de cursos e carreiras</li>
              </ul>

              <div className="d-flex gap-3 mt-3">
                <Botaoprimario text="Quero ver meu perfil"/>
                <Botaosecundario text="Contatar mentor"/>
              </div>
            </div>

            <div className="order-1 order-md-2 col-md-5 text-center mb-4 mb-md-0">
              <img
                src={menina}
                alt="Ilustração de uma mulher negra com um caderno nas mãos fazendo anotações"
                className="img-fluid"
                style={{ width:"300px"}}
              />
            </div>

          </div>
        </section>


        {/* PÚBLICO-ALVO */}
        <section aria-labelledby="publico-title" className="section container">
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
              <h2 id="publico-title" className='fw-bold fs-1 text-center text-lg-start'>
                A Próxima Jornada é para você que…
              </h2>

              <ul className="ms-3 list-unstyled text-center text-lg-start fs-4">
                <li>• Está terminando o ensino médio e não sabe qual profissão escolher.</li>
                <li>• Trabalha para ajudar a família, mas quer algo melhor no futuro.</li>
                <li>• Quer uma carreira estável e não ameaçada pela IA.</li>
                <li>• Tem medo de tomar a decisão errada.</li>
              </ul>

              <div className="d-flex gap-3 mt-3">
                <Botaoprimario text="Quero ver meu perfil"/>
                <Botaosecundario text="Contatar mentor"/>
              </div>
            </div>

          </div>
        </section>


        {/* FAQ */}
        <section aria-labelledby="faq-title" className="section container">
          <h2 id="faq-title" className='fw-bold fs-1'>
            Perguntas frequentes (FAQ)
          </h2>

          <Accordion
            id="item1"
            titulo="O que é essa solução?"
            texto="É uma plataforma digital que ajuda jovens a descobrir seus interesses profissionais e encontrar cursos e oportunidades alinhadas ao seu perfil atravez de um teste vocacional. O objetivo é facilitar o primeiro passo no futuro do trabalho"
          />
          <Accordion
            id="item2"
            titulo="Como funciona o teste?"
            texto="O usuário responde um mini-questionário simples e rápido. Com base nas respostas, o sistema identifica as áreas de afinidade e mostra sugestões de cursos e trilhas de aprendizado."
          />
          <Accordion
            id="item3"
            titulo="Precisa pagar?"
            texto="Não. A plataforma é gratuita e oferece acesso a informações, perfis de interesse e recomendações iniciais de cursos, incluindo opções gratuitas."
          />
          <Accordion
            id="item4"
            titulo="Os cursos recomendados são confiáveis?"
            texto="Sim. Selecionamos cursos de plataformas reconhecidas e instituições de ensino confiáveis, garantindo qualidade e segurança para o usuário"
          />
          <Accordion
            id="item5"
            titulo="Ajuda a encontrar emprego?"
            texto="O foco principal é orientação e capacitação, ajudando o jovem a entender onde começar. No futuro, podem ser adicionados recursos relacionados ao mercado de trabalho, como vagas no likedin."
          />
          <Accordion
            id="item6"
            titulo="Por que usar essa plataforma?"
            texto="O foco principal é orientação e capacitação, ajudando o jovem a entender onde começar. No futuro, podem ser adicionados recursos relacionados ao mercado de trabalho, como vagas no likedinPorque ela oferece orientação prática, rápida e acessível, algo que muitos jovens não recebem. Aqui, você encontra clareza sobre seus interesses e caminhos reais para começar sua carreira."
          />

        </section>

      </main>

      <Footer/>
    </>
  )
}

export default App
