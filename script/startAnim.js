export class StartAnim {

    startScreen;
    startQuotes;
    audio;

    constructor() {
        this.startScreen = document.querySelector(".start-screen");
        this.startQuotes = document.querySelectorAll(".start-quote");
        this.audio = new Audio("./asset/introCV.mp3");
        console.log(this.audio);
    }

    playAnim() {
        setTimeout(() => {
            this.audio.play();
        }, 500);
        
        setTimeout(() => {
            this.startQuotes[0].style.left = "-10vw";
            this.startQuotes[0].style.opacity ="1";
        }, 1000);        

        setTimeout(()=>{
            this.startQuotes[1].style.left = "+5vw";
            this.startQuotes[1].style.opacity ="1";
        },4000)

        setTimeout(()=>{
            this.startScreen.style.opacity = "0";
            this.startQuotes[0].style.opacity ="0";
            this.startQuotes[1].style.opacity ="0";
        },7000)
    }
}