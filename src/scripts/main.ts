import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    if (path === '/' || path.includes('index.html')) {
        new HomePage().mount();
    }
    else if (path.includes('proyectos.html')) {
        new ProjectsPage().mount();
    }
    else {
        console.log('Página sin lógica específica de TS definida aún.');
    }
});