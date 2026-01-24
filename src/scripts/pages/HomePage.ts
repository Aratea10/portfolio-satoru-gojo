import { Page } from './Page';

export class HomePage extends Page {
    constructor() {
        super('Home');
    }

    protected init(): void {
        console.log('Inicializando lógica de la Home...');
        this.handleContactForm();
    }

    private handleContactForm(): void {
        const form = document.querySelector('.contact-form') as HTMLFormElement;

        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (form.checkValidity()) {
                console.log('Formulario válido. Enviando datos...');
                alert('¡Mensaje enviado correctamente! (Simulación)');
                form.reset();
            } else {
                form.classList.add('was-validated');
                console.error('El formulario tiene errores');
            }
        });

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.classList.remove('is-invalid');
            });
        });
    }
}