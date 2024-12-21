export class CvSetting {

    info;
    photo;
    nav;
    profileLeft;
    profileRight;

    constructor() {
        this.info = document.querySelector(".info");
        this.photo = document.querySelector(".photo");
        this.nav = document.querySelector("nav");
        this.profileLeft = document.querySelector(".profile-left");
        this.profileRight = document.querySelector(".profile-right");
    }

    setProd() {
        this.info.style.left = "0";
        this.photo.style.right = "0";
        this.photo.style.transform = "rotate(-360deg)";

        setTimeout(()=>{
            this.profileLeft.style.left = "0";
            this.profileRight.style.right = "0";
        }, 2000);

        setTimeout(()=>{
            this.nav.style.opacity = "1";
        }, 4000);
    }

    setDev() {
        this.info.style.left = "0";
        this.photo.style.right = "0";
        this.nav.style.opacity = "1";
    }
}