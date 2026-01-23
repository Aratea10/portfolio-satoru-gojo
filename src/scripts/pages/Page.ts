export abstract class Page {
    protected pageTitle: string;

    constructor(title: string) {
        this.pageTitle = title;
    }

    public mount(): void {
        console.log(`Montando página: ${this.pageTitle}`);
        this.init();
    }

    protected abstract init(): void;
}