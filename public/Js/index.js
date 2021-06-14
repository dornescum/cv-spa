console.time("timer")

const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(
        `Please check "${selection}" selector, no such element exist`
    );
};
// navbar
const toggleNav = getElement('.toggle-nav');
const sidebarOverlay = getElement('.sidebar-overlay');
const closeBtn = getElement('.sidebar-close');

toggleNav.addEventListener('click', () => {
    sidebarOverlay.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    sidebarOverlay.classList.remove('show')
})

// sidebar
const sbPresent = document.getElementById('sidebar-present');
const sbPast = document.getElementById('sidebar-past');
const sbFuture = document.getElementById('sidebar-future');
sbPresent.addEventListener('click', () => {
    if (sidebarOverlay.classList.contains('show')) {
        sidebarOverlay.classList.remove('show')
    }
})
sbPast.addEventListener('click', () => {
    if (sidebarOverlay.classList.contains('show')) {
        sidebarOverlay.classList.remove('show')
    }
})
sbFuture.addEventListener('click', () => {
    if (sidebarOverlay.classList.contains('show')) {
        sidebarOverlay.classList.remove('show')
    }
})


// loading
const loading = getElement('.loading');
const hideLoading = () => {
    loading.classList.add('hide-loading')
};

// incarca
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoading, 1500);
})
// past
const pastLeftBtn = document.getElementById('pastLeftBtn');
const pastRightBtn = document.getElementById('pastRightBtn');
const pastLeftCard = document.getElementById('past-left');
const pastRightCard = document.getElementById('past-right');

pastLeftBtn.addEventListener('click', () => {
    pastLeftCard.classList.add('hide-loading')
})
pastRightBtn.addEventListener('click', () => {
    pastRightCard.classList.add('hide-loading')
})

//footer
const footer = document.getElementById('footer');

const contact = document.createElement('div');
contact.innerHTML = `
        <a href="tel:0762369717">
        <i class="fas fa-phone"></i>
        </a>
        <a href="mailto:webmaster@example.com">
        <i class="far fa-envelope-open"></i>
        </a>`

footer.append(contact)

// future
const future = document.getElementById('future-start');
const projects = [
    {
        desc: 'A basic html, css, javascript.',
        id: 'p-1',
        link: "http://misu.topo-online.ro/FirmeCadastruTemplate/index.html",
        title: 'Firme Cadastru',
        img: '@../../assets/img/worker.webp',
        icon: 'fas fa-camera fa-lg'

    },
    {
        desc: 'Html, css, bootstrap, javascript.',
        id: 'p-2',
        link: "https://dornescum.github.io/Mihai-Dornescu/",
        title: 'Github Page',
        img: '@../../assets/img/github.webp',
        icon: 'fas fa-camera fa-lg'

    },
    {
        desc: 'Simple react web app.',
        id: 'p-3',
        link: "https://apartament-1a2c9.web.app/",
        title: 'Apartament sale',
        img: '@../../assets/img/Living-1.webp',
        icon: 'fas fa-camera fa-lg'
    },
    {
        desc: 'Html, css, javascript ',
        id: 'p-4',
        link: "http://pi-frontend.cpco.ro/index.html",
        title: 'voluntary work',
        img: '@../../assets/img/volunteer.webp',
        icon: 'fas fa-camera fa-lg'
    },

]

window.addEventListener('DOMContentLoaded', () => {
    future.innerHTML = projects.map(({desc, id, link, title, img, icon}) => {
        return `
                    <div class="card-3" id=${id}>
                        <div class="card-project">
                            <p class="title-project">${title}</p>
                             <img src=${img} alt={title} loading="lazy">
                            <p class="card-desc" id="open">${desc}</p>
                            <a href=${link} class="card-link" target="_blank">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
        `
    }).join('');
})

// =======cookie====
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

setTimeout(() => {
    cookieContainer.classList.add('active')
}, 15000);

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.add("hide-loading");
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
    if (!localStorage.getItem("cookieBannerDisplayed")) {
        cookieContainer.classList.remove("hide-loading");
    }
}, 5000);

console.timeEnd("timer")
