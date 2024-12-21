export class StartAnim {

    startScreen;
    startQuotes;

    constructor() {
        this.startScreen = document.querySelector(".start-screen");
        this.startQuotes = document.querySelectorAll(".start-quote");        
    }

    playAnim() {        
        
        setTimeout(() => {
            this.startQuotes[0].style.left = "-10vw";
            this.startQuotes[0].style.opacity ="1";
        }, 1000);        

        setTimeout(()=>{
            this.startQuotes[1].style.left = "+5vw";
            this.startQuotes[1].style.opacity ="1";
        },4000);

        setTimeout(()=>{
            this.startScreen.style.opacity = "0";
            this.startQuotes[0].style.opacity ="0";
            this.startQuotes[1].style.opacity ="0";
        },7000);

        setTimeout(()=>{
            this.startScreen.style.display ="none";
        },11000);
    }

    devMode() {
        this.startScreen.style.display ="none";
    }
}