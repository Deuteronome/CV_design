export class PanelChange {
    profileTrigger;
    proTrigger;
    persoTrigger;

    profileLeft;
    profileRight;
    proLeft;
    proRight;

    profileFunc;
    proFunc;
    persoFunc;

    constructor() {
        this.profileFunc = this.profileChange.bind(this);
        this.proFunc = this.proChange.bind(this);
        this.persoFunc = this.persoChange.bind(this);
        this.profileTrigger = document.querySelector('#trigger-profile');
        this.proTrigger = document.querySelector('#trigger-pro');
        console.log(this.proTrigger);
        this.persoTrigger = document.querySelector('#trigger-perso');

        this.profileLeft = document.querySelector('.profile-left');
        this.profileRight = document.querySelector('.profile-right');

        this.proLeft = document.querySelector('.pro-left');
        this.proRight = document.querySelector('.pro-right');

        this.proTrigger.addEventListener('click', this.proFunc);
        console.log(this.proTrigger);

        this.persoTrigger.addEventListener('click', this.persoFunc);
    }

    profileChange() {
        //console.log('profil');
        this.proTrigger.removeEventListener('click', this.profileFunc);
        this.proTrigger.removeEventListener('click', this.proFunc);
        this.persoTrigger.removeEventListener('click', this.persoFunc);
        this.proTrigger.classList.remove('nav-button-active');
        this.proTrigger.classList.add('nav-button');
        this.persoTrigger.classList.remove('nav-button-active');
        this.persoTrigger.classList.add('nav-button');
        this.proLeft.style.left = '';
        this.proRight.style.right= '';
        setTimeout(()=>{
            this.profileLeft.style.left='0';
            this.profileRight.style.right='0';
        },1200)
        setTimeout(()=>{
            this.profileTrigger.classList.remove('nav-button');
            this.profileTrigger.classList.add('nav-button-active');
            this.proTrigger.addEventListener('click', this.proFunc);
            this.persoTrigger.addEventListener('click', this.persoFunc);
        },2400)

    }

    proChange() {
        //console.log(this.proTrigger);
        this.proTrigger.removeEventListener('click', this.profileFunc);
        this.proTrigger.removeEventListener('click', this.proFunc);
        this.persoTrigger.removeEventListener('click', this.persoFunc);
        this.profileTrigger.classList.remove('nav-button-active');
        this.profileTrigger.classList.add('nav-button');
        this.persoTrigger.classList.remove('nav-button-active');
        this.persoTrigger.classList.add('nav-button');
        this.profileLeft.style.left='';
        this.profileRight.style.right='';
        setTimeout(()=>{
            this.proLeft.style.left='0';
            this.proRight.style.right='0';
        },1200)
        setTimeout(()=>{
            this.proTrigger.classList.remove('nav-button');
            this.proTrigger.classList.add('nav-button-active');
            this.profileTrigger.addEventListener('click', this.profileFunc);
            this.persoTrigger.addEventListener('click', this.persoFunc);
        },2400)
    }

    persoChange() {
        console.log(this);
    }
}