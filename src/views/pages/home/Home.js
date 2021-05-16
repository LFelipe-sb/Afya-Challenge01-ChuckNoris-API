import { api } from '../../../service/api';
import afyaLogo from '../../../assets/img/Afya.gif';

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
      <div>
      </div>
    `;

    setTimeout(() => {
      document.querySelectorAll('.menu_item').forEach(item => {
        item.addEventListener('click', changeContent);
      });
      document.querySelector('li').classList.add('active');
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