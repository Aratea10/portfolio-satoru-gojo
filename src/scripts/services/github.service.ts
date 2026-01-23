export interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    language: string;
}

export class GitHubService {
    private static readonly BASE_URL = 'https://api.github.com/users/Aratea10/repos';

    public static async getRepos(): Promise<GitHubRepo[]> {
        try {
            console.log('Fetching repos from GitHub...');
            const response = await fetch(this.BASE_URL);

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }

            const data = await response.json();
            return data as GitHubRepo[];
        } catch (error) {
            console.error('Error obteniendo repositorios:', error);
            return [];
        }
    }
}