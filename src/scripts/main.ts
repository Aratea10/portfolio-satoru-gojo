import { HomePage } from './pages/HomePage';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path === '/' || path.includes('index.html')) {
        new HomePage().mount();
    }
    else {
        console.log('Página sin lógica específica de TS definida aún.');
    }
});