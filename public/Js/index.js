console.time("timer");

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
	sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
	sidebarOverlay.classList.remove('show');
});

// sidebar
const sbPresent = document.getElementById('sidebar-present');
const sbPast = document.getElementById('sidebar-past');
const sbFuture = document.getElementById('sidebar-future');
sbPresent.addEventListener('click', () => {
	if (sidebarOverlay.classList.contains('show')) {
		sidebarOverlay.classList.remove('show');
	}
});
sbPast.addEventListener('click', () => {
	if (sidebarOverlay.classList.contains('show')) {
		sidebarOverlay.classList.remove('show');
	}
});
sbFuture.addEventListener('click', () => {
	if (sidebarOverlay.classList.contains('show')) {
		sidebarOverlay.classList.remove('show');
	}
});


// loading
const loading = getElement('.loading');
const hideLoading = () => {
	loading.classList.add('hide-loading');
};

// incarca
window.addEventListener("DOMContentLoaded", function () {
	setTimeout(hideLoading, 1500);
});
// past
const pastLeftBtn = document.getElementById('pastLeftBtn');
const pastRightBtn = document.getElementById('pastRightBtn');
const pastLeftCard = document.getElementById('past-left');
const pastRightCard = document.getElementById('past-right');

pastLeftBtn.addEventListener('click', () => {
	pastLeftCard.classList.add('hide-loading');
});
pastRightBtn.addEventListener('click', () => {
	pastRightCard.classList.add('hide-loading');
});

//footer
const footer = document.getElementById('footer');

const contact = document.createElement('div');
contact.innerHTML = `
        <a href="tel:0762369717">
        <i class="fas fa-phone"></i>
        </a>
        <a href="mailto:dornescu@gmail.com">
        <i class="far fa-envelope-open"></i>
        </a>`;

footer.append(contact);

// future
const future = document.getElementById('future-start');
const projects = [
	{
		desc: 'A basic html, css, javascript.',
		id: 'p-1',
		link: "http://misu.topo-online.ro/FirmeCadastruTemplate/index.html",
		title: 'Firme-Cadastru.ro template',
		img: '@../../assets/img/cadastru.webp',
		icon: 'fas fa-camera fa-lg',
		btnId: 'btn-1'
	},
	{
		desc: 'Testing everything',
		id: 'p-2',
		link: "https://dornescum.github.io/Mihai-Dornescu/",
		title: 'Playground',
		img: '@../../assets/img/resume.webp',
		icon: 'fas fa-camera fa-lg',
		btnId: 'btn-2'
	},
	{
		desc: 'Simple react web app.',
		id: 'p-3',
		link: "https://apartament-1a2c9.web.app/",
		title: 'Apartament sale',
		img: '@../../assets/img/Living-1.webp',
		icon: 'fas fa-camera fa-lg',
		btnId: 'btn-3'
	},
	{
		desc: 'Html, css, javascript ',
		id: 'p-4',
		link: "http://pi-frontend.cpco.ro/index.html",
		title: 'Poetii-inchisorilor',
		img: '@../../assets/img/poetii.webp',
		icon: 'fas fa-camera fa-lg',
		btnId: 'btn-4'
	},
	{
		desc: 'Next.js Sale ',
		id: 'p-5',
		link: "https://sale-next.vercel.app/",
		title: 'New Sale',
		img: '@../../assets/img/L3.webp',
		icon: 'fas fa-camera fa-lg',
		btnId: 'btn-5'
	},
	{
		desc: 'Want to a buy a car? ',
		id: 'p-6',
		link: "http://opelutul.ro/",
		title: 'Opelutul.ro',
		img: '@../../assets/img/car.webp',
		icon: 'fas fa-camera fa-lg',
		btnId: 'btn-6'
	},
	{
		desc: 'Admin panel ',
		id: 'p-7',
		link: "https://github.com/dornescum/cadastru-final",
		title: 'Firme cadastru admin',
		img: '@../../assets/img/cadastru-admin.webp',
		icon: 'fas fa-camera fa-lg',
		btnId: 'btn-7'
	},


];

class Message {
	constructor(info) {
		this.info = info;
	}
}


window.addEventListener('DOMContentLoaded', () => {

	future.innerHTML = projects.map(({
										 desc,
										 id, link, title, img, icon, btnId
									 }) => {
		return `
                    <div class="card-3" id=${id}>
                        <div class="card-project">
                            <p class="title-project">${title}</p>
                             <img src=${img} alt={title} loading="lazy" id=${btnId}>
                            <p class="card-desc" id=${id}>${desc}</p>
                           
                            <a href=${link} class="card-link" target="_blank">
                           		<p>go</p>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
        `;
	}).join('');
	const modal = document.querySelector('.modal');
	const btnModal = document.querySelector('.close-modal-btn');
	const btn1 = document.getElementById('btn-1');
	const btn2 = document.getElementById('btn-2');
	const btn3 = document.getElementById('btn-3');
	const btn4 = document.getElementById('btn-4');
	const btn5 = document.getElementById('btn-5');
	const btn6 = document.getElementById('btn-6');
	const btn7 = document.getElementById('btn-7');
	let messageModal = document.getElementById('message-modal');


	btn1.addEventListener('click', () => {
		modal.classList.add('show-modal');
		// messageModal.innerHTML = 'This website was built with classic HTML,Bootstrap, SCCS, and Javascript.'
		const mess = new Message('This website was built with classic HTML,Bootstrap, SCCS, and Javascript.');
		messageModal.innerHTML = mess.info;
	});
	btn2.addEventListener('click', () => {
		modal.classList.add('show-modal');
		const mess = new Message('My personal playground. I tested everything in here from sccs, js, vue js (olso this was my first website)');

		messageModal.innerHTML = mess.info;
	});
	btn3.addEventListener('click', () => {
		modal.classList.add('show-modal');
		const mess = new Message('This website was built with <b>React</b>  , modules.css.');
		messageModal.innerHTML = mess.info;


	});
	btn4.addEventListener('click', () => {
		modal.classList.add('show-modal');
		const mess = new Message('  I volunteer for this open-source project, I was in charged to continue the work on Html, CSS, and Javascript. I introduced new Css concepts like modules and variables. I am also working on the <b>Next</b>  js for a version of the project.' +
			'<br> Here is a bitbucket repository :' +
			' <a href="https://bitbucket.org/fericiticeiprigoniti/poetiiinchisorilor/src/master/"  target="_blank" style="color: #222222"><br>  <br><i> Poetii inchisorilor</i></a>	' +
			'<br> <br> also the link to the website, for credentials contact me please  <br> <br> <a href="http://pi-frontend.cpco.ro/" target="_blank" style="color: #222222">Poetii inchisorilor</a>  ');
		messageModal.innerHTML = mess.info;
	});
	btn5.addEventListener('click', () => {
		modal.classList.add('show-modal');
		const mess = new Message('This website was built with <b>Next js</b>, &nbsp; <b>Scss</b> .');
		messageModal.innerHTML = mess.info;
	});
	btn6.addEventListener('click', () => {
		modal.classList.add('show-modal');
		const mess = new Message('This website was built with <b>React js</b>, &nbsp; <b>Styled Components</b>,&nbsp; Simple-react-lightbox, &nbsp; React Icons.');
		messageModal.innerHTML = mess.info;
	});
	btn7.addEventListener('click', () => {
		modal.classList.add('show-modal');
		const mess = new Message('This version is with vanilla js, sccs. And olso a react js version here <br>' +
			'<a href="https://github.com/dornescum/AdminReactFC" target="_blank" style="color: #222222"> ' +
			'<br> <br> <b> Admin panel React js</b> </a> ');
		messageModal.innerHTML = mess.info;
	});

	btnModal.addEventListener('click', () => {
		if (btnModal.classList.contains('show-modal')) {
			modal.classList.remove('show-modal');
		} else {
			modal.classList.remove('remove-modal');
			modal.classList.remove('show-modal');
		}
	});

});

// =======cookie====
const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

setTimeout(() => {
	cookieContainer.classList.add('active');
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

console.timeEnd("timer");
// <button id=${btnId}>x</button>
