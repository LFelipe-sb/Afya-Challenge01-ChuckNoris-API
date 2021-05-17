import { api } from '../../../service/api';
import afyaLogo from '../../../assets/img/Afya.gif';
import picture01 from '../../../assets/img/medicos.png';
import picture02 from '../../../assets/img/equipe-afya.jpg';
import picture03 from '../../../assets/img/business.jpg';

const getJokesRandom = async () => {
  const request = await api.get('random');
  return request.data;
};

const getJokesCategory = async () => {
  const request = await api.get('categories');
  return request.data;
};

let renderPage = {
  is_private: false,

  render: async () => {
    const jokes = await getJokesRandom();
    const categories = await getJokesCategory();

    let home = 
      `
      <header>
        <a href="index.html"">
            <img src=${afyaLogo} alt="Logo da empresa Afya se movimentando" title="Logo Afya">
        </a>
        <nav class="header_menu">
            <ul>
                <li class="menu_item" id="home">Home</li>
                <li class="menu_item" id="chuck_norris">Chuck Norris</li>
                <li class="menu_item" id="pokemon">Pokemon</li>
                <li class="menu_item" id="star_wars">Star Wars</li>
            </ul>
        </nav>
      </header>
      <div>
        <main>
          <section class="home active container hidden">
            <h1>Bem Vindos</h1>
            <p>Este é um dos mini projeto desenvolvido durante as aulas de um super projeto entre a <strong>Afya</strong> e a <strong>Gama-Academy</strong>, chamado de <strong>Afya-Labs.</strong></p>
            <p>Iniciado durante a primeira aula ao vivo com o professor Douglas, ele propos que continuassemos o projeto e publicassemos no GitHub e na Vercel.</p>
            <p>O projeto consiste em consumir uma API publica e apresentar os dados em tela para visualização do conteúdo, inicialmente o escopo estava em consumir a API do <em>"Chuck Norris"</em>, porém, expandi-o fazendo uso de outras APIs e permitindo ao usuário visualizar o conteudo de acordo com o seu gosto.</p>
            <p>Para visualizar, basta ligar em um dos links disponíveis acima.</p>
            Gostaria de saber mais sobre a Afya? <span class="show_details">Clique Aqui!</span>
          </section>
          <section class="about_afya">           
            <div class="afya hidden">
              <div class="info">
                <h1>Propósito</h1>
                <p>Revolucionar o jeito de ensinar e aprender medicina para formar os melhores médicos em todas as fases de sua trajetória profissional.</p>
                
                <h1>Missão</h1>                  
                <p>Tornar-se referência em educação médica e de saúde, capacitando nossos alunos para transformarem seus sonhos em experiências extraordinárias de aprendizagem ao longo da vida.</p>
                
                <h1>Nossa Visão</h1>
                <p>Um mundo com melhor educação, saúde e bem-estar.</p>

                <h1>A Marca</h1>
                <p>Em novembro de 2020, a marca Afya ganhou uma revitalização. Mudanças estéticas sutis com o objetivo de reforçar nosso propósito:</p>

                <p>“Revolucionar o jeito de ensinar e aprender medicina para formar os melhores médicos em todas as fases de sua trajetória profissional”.</p>
              </div>
              <div class="galery">
                <h2>Galeria de Fotos</h2>
                <div class="photos">
                  <ul>
                    <li>
                      <img src="${picture01}" alt="Dois medicos conversando em um consultórios odontologico" title="Consultorios parceiros">
                    </li>
                    <li>
                      <img src="${picture02}" alt="Equipe de profissionais reunidos atrás de uma bancada em um evento chamado Nasdeq" title="Equipe  motivada">
                    </li>
                    <li>
                      <img src="${picture03}" alt="Dois homens sorrindo e comprimentando-se com um apertando de mãos" title="Comprometimento">
                    </li>
                  </ul>
                </div>
              <div>
            </div>
          </section>

          <section class="chuck_norris hidden">
          <h1>Página consumindo API do Chuck Norris</h1>
            <div class="menu_list container">
              <h2>Mas o que é a API do Chuck Norris?</h2>
              <p><strong>chucknorris.io</strong> é uma API JSON gratuita para fatos de Chuck Norris.</p>

              <p>Os fatos de Chuck Norris são factóides satíricos sobre o artista marcial e ator Chuck Norris que se tornaram um fenômeno da Internet e, como resultado, se espalharam pela cultura popular. Os "fatos" são normalmente afirmações hiperbólicas absurdas sobre a dureza, atitude, virilidade, sofisticação e masculinidade de Norris.</p>

              <p>Os fatos de Chuck Norris se espalharam pelo mundo, levando não apenas a versões traduzidas, mas também gerando versões localizadas que mencionam anúncios específicos de países e outros fenômenos da Internet. Às vezes, também são feitas alusões ao uso de chutes circulares para realizar aparentemente qualquer tarefa, sua grande quantidade de pelos corporais com relação específica à sua barba e seu papel na série de televisão de ação Walker, Texas Ranger.</p>
              <br>
              <p>Veja a lista de alguns temas que você pode encontrar aqui:</p>
              <div class="categories">
                <ul>  
                  ${categories
                    .map(
                      (category, index) =>
                        `<li class="topics" key=${index}>${category}</li>`
                    )
                    .join('')}
                </ul>
                <div class="chuck_facts">
                  <img src=${jokes.icon_url}>
                  <h2>Alguns fatos sobre Chuck Norris:</h2>
                  <blockquote>— "${jokes.value}"</blockquote>
                </div>
              </div>
            </div>
          </section>

          <section class="pokemon">
            <h1>Pokemon</h1>      
          </section>

          <section class="star_wars hidden">
            <h1>Star Wars</h1>
          </section>
        </main>
        <footer class="bottom">
            &copy; Afya | Gama Academy - Afya Labs - Por Luís Felipe dos Santos
        </footer>
      </div>
    `;

    setTimeout(() => {
      document.querySelectorAll('.menu_item').forEach(item => {
        item.addEventListener('click', changeContent);
      });
      document.querySelector('li').classList.add('active');
      
      document.querySelector('.show_details').addEventListener('click', () => { 
        document.querySelector('.afya').classList.toggle('hidden');
        document.querySelector('footer').classList.toggle('bottom');
      });
    }, 0);
    
    function changeContent(e) {
      document.querySelectorAll('section').forEach(item => {
        item.classList.add('hidden');
      });
      document.querySelectorAll('.menu_item').forEach(item => {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
      document.querySelector(`section.${e.target.id}`).classList.remove('hidden');
    }    

    return home;
  },

  after_render: async () => {},
};

export default renderPage;