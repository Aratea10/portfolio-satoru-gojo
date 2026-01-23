import { Page } from './Page';

export class HomePage extends Page {
    constructor() {
        super('Home');
    }

    protected init(): void {
        console.log('Inicializando lógica de la Home...');
    }
}