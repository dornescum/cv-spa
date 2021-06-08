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
    if (sidebarOverlay.classList.contains('show')){
        sidebarOverlay.classList.remove('show')
    }
})
sbPast.addEventListener('click', () => {
    if (sidebarOverlay.classList.contains('show')){
        sidebarOverlay.classList.remove('show')
    }
})
sbFuture.addEventListener('click', () => {
    if (sidebarOverlay.classList.contains('show')){
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
    setTimeout(hideLoading, 500);
})
// past
const pastLeftBtn = document.getElementById('pastLeftBtn');
const pastRightBtn = document.getElementById('pastRightBtn');
const pastLeftCard = document.getElementById('past-left');
const pastRightCard = document.getElementById('past-right');
const cardPastR = document.getElementById('cardPastRight');
// const hideBtn = () => {
//     pastRightCard.classList.add('hide-loading')
// };
pastLeftBtn.addEventListener('click', () => {

    pastLeftCard.classList.add('hide-loading')
})
pastRightBtn.addEventListener('click', () => {
    // pastRightCard.classList.add('animate__fadeOut')
    pastRightCard.classList.add('hide-loading')
    // setTimeout(hideBtn, 500);
})

//footer
const footer = document.getElementById('footer');

const contact = document.createElement('div');
console.log(contact)
contact.innerHTML=`<a href="tel:0762369717">
<i class="fas fa-phone"></i>
</a>
<a href="mailto:webmaster@example.com">
<i class="far fa-envelope-open"></i>
</a>`

footer.append(contact)

console.timeEnd("timer")
