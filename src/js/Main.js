export class Main {
    constructor() {
        this.mobileMenu = document.querySelector('.mobile-menu');
        this.menuBtnOpen = document.querySelector('.menu-btn-open');
        this.menuBtnClose = document.querySelector('.menu-btn-close');

        this.goal = parseFloat(document.querySelector("#goalAmount").value);
        this.months = parseInt(document.querySelector("#months").value);
        this.resultDiv = document.querySelector("#result");

        this.form = document.querySelector("#saving-form");

        this.addEventListeners();
    }

    addEventListeners() {
        this.menuBtnOpen.addEventListener('click', this.handleMenuButton.bind(this));
        this.menuBtnClose.addEventListener('click', this.handleMenuButton.bind(this));

        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }


    handleMenuButton() {
        this.toggleMenu();
        this.disableScroll();
    }

    toggleMenu() {
        this.mobileMenu.classList.toggle('is-open');
    }

    disableScroll() {
        document.body.classList.toggle('is-scroll-disable');
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if (this.goal > 0 && this.months > 0) {
            const monthlySaving = (this.goal / this.months).toFixed(2);
            this.resultDiv.textContent = `Sie müssen monatlich ${monthlySaving}€ sparen, um Ihr Ziel in ${months} Monaten zu erreichen.`;
            this.resultDiv.classList.remove("hidden");
        } else {
            this.resultDiv.textContent = "Bitte geben Sie gültige Werte ein.";
            this.resultDiv.classList.remove("hidden");
        }
    }
}
