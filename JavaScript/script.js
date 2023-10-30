// Navigation

const hamburgerButton = document.querySelector('.hamburger-button');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
    navigation.hasAttribute('data-visible')
        ? hamburgerButton.setAttribute('aria-expanded', false)
        : hamburgerButton.setAttribute('aria-expanded', true);
    navigation.toggleAttribute('data-visible');

    navigation.hasAttribute('data-visible')
        ? hamburgerButton.style.background = 'var(--clr-neutral-900)'
        : hamburgerButton.style.background = 'transparent';
});

// Scroll up

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "flex";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#31e981 ${scrollValue}%, #fcfcfc ${scrollValue}%)`;
    };

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;