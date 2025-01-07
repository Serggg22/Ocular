const movilNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const movilNav = document.querySelector('.movil-nav');
    const movilLinks = document.querySelectorAll('.movil-nav__link');

    let isMovileNavOpen = false;

    //Con esto abrimos y cerramos el menú de navegación móvil

    headerBtn.addEventListener('click', () => {
        isMovileNavOpen = !isMovileNavOpen;
        movilNav.style.display = isMovileNavOpen ? 'flex' : 'none';
        document.body.style.overflowY = isMovileNavOpen ? 'hidden' : 'auto';
    });

    movilLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMovileNavOpen = false;
            movilNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        });
    });
};

export default movilNav;