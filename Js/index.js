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
console.log(loading)
const hideLoading = () => {
    loading.classList.add('hide-loading')
};

// incarca
window.addEventListener("DOMContentLoaded", function () {
    setTimeout(hideLoading, 500);
})
console.timeEnd("timer")
