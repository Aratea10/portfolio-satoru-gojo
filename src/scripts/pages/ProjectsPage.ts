import { Page } from './Page';
import { GitHubService } from '../services/github.service';

export class ProjectsPage extends Page {
    private container: HTMLElement | null;

    constructor() {
        super('Proyectos');
        this.container = document.getElementById('github-projects-container');
    }

    protected init(): void {
        this.loadRepositories();
    }

    private async loadRepositories(): Promise<void> {
        if (!this.container) return;

        const repos = await GitHubService.getRepos();

        this.container.innerHTML = '';

        if (repos.length === 0) {
            this.container.innerHTML = '<p>No se encontraron repositorios o hubo un error.</p>';
            return;
        }

        repos.forEach(repo => {
            const card = document.createElement('article');
            card.className = 'project-card';

            card.innerHTML = `
                <div class="project-info" style="width: 100%">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'Sin descripción'}</p>
                    <div class="project-meta">
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>💻 ${repo.language || 'Code'}</span>
                    </div>
                    <a href="${repo.html_url}" target="_blank" class="cta-button" style="margin-top: 1rem; display: inline-block">Ver en GitHub</a>
                </div>
            `;

            this.container?.appendChild(card);
        });
    }
}