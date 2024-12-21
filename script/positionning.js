export class Position {
    header;
    nav;
    main;
    mainTop;
    mainHeight;

    constructor() {
        this.header = document.querySelector('header');
        this.nav = document.querySelector('nav');
        this.main = document.querySelector('main');
        this.mainTop = this.header.offsetHeight + this.nav.offsetHeight;
        this.mainHeight = window.innerHeight - this.mainTop ;
    }

    adjust() {
        this.nav.style.top = `${this.header.offsetHeight + 15}px`;
        this.main.style.top = `${this.mainTop + 5 }px`;
        this.main.style.height =`${this.mainHeight}px`;
    }
}