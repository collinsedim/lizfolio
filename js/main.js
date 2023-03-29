function removeMobileGrid() {
    const colsGrid = document.querySelectorAll('#mobileGrid');
    const viewPortWidth = window.innerWidth || document.documentElement.clientWidth;
    for (let i = 0; i < colsGrid.length; i++) {
    if (viewPortWidth <= 768) {
        colsGrid[i].classList.remove('col') &&colsGrid[i].classList.add('bottomMargin');
    } else {
        colsGrid[i].classList.add('col');
    }
}
}
window.addEventListener('load', removeMobileGrid);
window.addEventListener('resize', removeMobileGrid);