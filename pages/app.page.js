class AppPage {
    get forteachersButton() {
        return $('.navbar-nav*=Pro učitelé');
    }

    get orderButton() {
        return $('.dropdown-menu*=Objednávka pro');
    }

    goHome() {
        browser.url('/');
    }
}

module.exports = AppPage;
