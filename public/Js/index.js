console.time("timer");
import {projects} from "./modules/Projects.js";
// const url = 'http://localhost:3002/api/v1/agency/resume-stats';
const url = 'https://api.mp.dornescu.ro/api/v1/agency/resume-stats';


const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) return element;
    throw new Error(`Please check "${selection}" selector, no such element exist`);
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


class Message {
    constructor(info) {
        this.info = info;
    }
}


window.addEventListener('DOMContentLoaded', () => {

    future.innerHTML = projects.map(({
                                         desc, id, link, title, img, icon, btnId
                                     }) => {
        return `
                    <div class="card-3" id=${id}>
                        <div class="card-project">
                            <p class="title-project">${title}</p>
                             <img src=${img} alt={title} loading="lazy" id=${btnId}>
                            <p class="card-desc" id=${id}>${desc}</p>
                           
                            <a href=${link} class="card-link" target="_blank">
                           		
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

    let messageModal = document.getElementById('message-modal');


    btn1.addEventListener('click', () => {
        modal.classList.add('show-modal');
        // messageModal.innerHTML = 'This website was built with classic HTML,Bootstrap, SCCS, and Javascript.'
        const mess = new Message('This web site is build with  jQuery for dynamic content manipulation and interactive features. Implemented Bootstrap to create a responsive, user-friendly interface, Used Cypress to perform end-to-end testing, ensuring the functionality and reliability of the web application.');
        messageModal.innerHTML = mess.info;
    });
    btn2.addEventListener('click', () => {
        modal.classList.add('show-modal');
        const description = `
This full-stack web application,  <span style='color: #ef3333; font-weight: bold'> POC Meseriași </span> ,
 <br>
 <br>
 showcases a robust frontend built with Angular, employing the latest features for dynamic content rendering and interactive user experiences.
   <br>
  Key frontend technologies include <span style='color: #000000; font-weight: bold'>Angular Universal</span>  for server-side rendering, enhancing <span  style='color: #000000; font-weight: bold'>SEO </span> and performance, and Tailwind CSS for sleek, responsive designs.
 <br>
The inclusion of custom directives and services in Angular ensures a modular and efficient frontend architecture. 
 <br>
On the backend, <span  style='color: #000000; font-weight: bold'>Express </span>serves as the backbone, providing a lightweight yet powerful framework for handling server-side logic. 
 <br>
  <br>
The use of middleware like <span style='color: #000000; font-weight: bold'>Bcrypt</span>  for secure password handling, CORS for cross-origin resource sharing, and <span style='color: #000000; font-weight: bold'>Helmet</span>  for security headers, together with <span style='color: #000000; font-weight: bold'>JWT</span>  for authentication, ensures a secure and scalable environment, additionally, the integration of <span style='color: #000000; font-weight: bold'>html-es6cape</span>  fortifies the application against XSS attacks by safely escaping HTML entities, <span style='color: #000000; font-weight: bold'>Express Validator</span> and  is also employed to validate and sanitize user inputs, further enhancing the security and robustness of the application.
 
  <br>
  <br>
 The application is further augmented with <span  style='color: #f29221; font-weight: bolder'>MySql</span> for reliable data storage and <span  style='color: #000000; font-weight: bold'>Sequelize ORM</span>  for efficient database interactions, making it an exemplary demonstration of full-stack capabilities in a modern web application. 
  <br>
   <br>
 Hosted on a dedicated <span style='color: #000000; font-weight: bold'>Linux</span>  cloud server, 
the server environment is tuned with essential packages, supporting Angular's dynamic capabilities and Express's efficient processing. 
 <br>
 <br>
Additionally, MySQL is seamlessly integrated, offering robust data management and storage solutions, this setup ensures optimal interaction between the server, the database, and all the applications on the server.


`
        const mess = new Message(description);
        messageModal.innerHTML = mess.info;
    });
    btn3.addEventListener('click', () => {
        modal.classList.add('show-modal');
        // const mess = new Message('This website was built with <b>React</b>  , modules.css.');
        const mess = new Message('My personal playground. The place where I test different technologies or frameworks.');

        messageModal.innerHTML = mess.info;


    });
    btn4.addEventListener('click', () => {
        modal.classList.add('show-modal');
        const description = `
        This full-stack SaaS project is an  electronic warehouse simulation platform where users, after account creation, can manage a plethora of
         electronic products across various categories and brands.
          <br>
          <br>
          Embracing a mobile-first design philosophy, the client-side is crafted using 
         <span style='color: #ef3333; font-weight: bold'>Angular</span> , ensuring an optimal and responsive experience across devices. 
         <br>
         The system facilitates full CRUD operations, allowing for the addition, modification, and movement of inventory items between virtual storages.
         <br>
          A key feature is the real-time transactional database management powered by <span style='color: #000000; font-weight: bold'>SQLite</span> ,
           ensuring data integrity as items are transferred across storages. 
           
           <br>
           <br>
           The backend, constructed with <span style='color: #000000; font-weight: bold'>Express</span> , delivers robust MVC architecture for
            efficient data filtering by brand, category, and price, as well as search functionality for product names and fallback brand searches.
            <br>
             Each product is uniquely identified by a barcode, incorporating storage, category, brand, and owner details.
              <br>
              <span style='color: #000000; font-weight: bold'>Chart js</span> 
              integration provides insightful visualizations of storage metrics. 
              <br>
              Moreover, users can download complete SQL product lists, enabling easy data portability and backup. 
              <br>
        This platform exemplifies a comprehensive warehouse management solution with a keen focus on user-centric design, data accuracy, and operational efficiency
        `
        const mess = new Message(description);

        messageModal.innerHTML = mess.info;
    });
    btn5.addEventListener('click', () => {
        modal.classList.add('show-modal');
        const description = `
       This e-commerce mockup project, developed as an online electronic store platform, 
       leverages <span style='color: #000000; font-weight: bold'>Next js</span> , a formidable framework for server-rendered 
       React applications. 
       <br>
       <br>
       Emphasizing a mobile-first design approach, the platform ensures optimal usability and aesthetics on 
       smaller screens, progressively enhancing the experience for larger devices. This strategy is pivotal in today's mobile-centric world,
        ensuring a broad reach and user satisfaction. 
        <br>
        <br>
        The project capitalizes on Next js strengths in efficient page rendering and routing,
         contributing to an exceptionally performant user experience. Interactive charts powered by
          <span style='color: #000000; font-weight: bold'>Chart js</span> , and engaging visual elements like 
           <span style='color: #000000; font-weight: bold'>React Icons</span> and <span style='color: #000000; font-weight: bold'>Slick Carousel</span> ,
            are seamlessly integrated to enrich the interface. React Popup enhances interactivity, offering intuitive modal and dialogue display. 
            Frontend styling with <span style='color: #000000; font-weight: bold'>Tailwind CSS</span>  guarantees a modern,
             responsive design that elegantly adapts across various devices. 
             <br>
             <br>
             
             The application's robust setup includes dotenv for 
             environment variable management and ESLint for code quality assurance, embodying best practices in configuration and development. 
             This project stands out as a state-of-the-art e-commerce solution, with its focus on interactivity, mobile-first user engagement, 
             and compelling aesthetic appeal.
        `
        const mess = new Message(description);
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


function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to read a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


// getOs information is mobile, browser etc
const isMobile = /Mobi/i.test(window.navigator.userAgent);
const browser = window.navigator.userAgent;
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const os = getOS();
const visitTime = new Date().toISOString();


const clientCookies = document.cookie;

const visitData = {
    browser, os, visitTime, isMobile, screenWidth, screenHeight, clientCookies
};

//todo check if cookie accepted

window.onload = function () {
    const consent = getCookie('consent');
    const cookieButton = document.querySelector('.cookie-btn');
    const cookieContainer = document.querySelector('.cookie-container');
    const statsElement = document.getElementById('stats');


    if (!consent) {
        cookieContainer.classList.remove('hide-loading');
        cookieContainer.classList.add('active');
        statsElement.classList.add('hide');
    } else {
        cookieContainer.classList.add('hide-loading');
        cookieContainer.classList.remove('active');
        statsElement.classList.remove('hide');

        console.log('consent given');
        fetchDataAndDisplayChart();
    }

    cookieButton.addEventListener("click", () => {
        cookieContainer.classList.add('hide-loading');
        cookieContainer.classList.remove('active');
        statsElement.classList.remove('hide');

        setCookie('consent', true, 1);
        localStorage.setItem('cookieBannerDisplayed', 'true');
        console.log('visit data ', visitData)

        // Call the postData and fetchDataAndDisplayChart functions after consent
        getOS();
        postData(url, visitData);
        fetchDataAndDisplayChart();
    });

    setTimeout(() => {
        if (!localStorage.getItem('cookieBannerDisplayed')) {
            cookieContainer.classList.remove('hide-loading');
            cookieContainer.classList.add('active');
        }
    }, 1000);
}


// == get os error
function getOS() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (macosPlatforms.includes(platform)) {
        return 'Mac OS';
    } else if (iosPlatforms.includes(platform)) {
        return 'iOS';
    } else if (windowsPlatforms.includes(platform)) {
        return 'Windows';
    } else if (/Android/.test(userAgent)) {
        return 'Android';
    } else if (!platform && /Linux/.test(userAgent)) {
        return 'Linux';
    }
    return 'Unknown OS';
}

function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('data from post client ', data)
            return data;
        })
        .catch(error => console.error('There was a problem with the fetch operation: ', error));
}

function fetchDataAndDisplayChart() {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((response) => {
            console.log('response from get stats ', response)
            const labels = response.data.map(item => item.device_os);
            const data = response.data.map(item => item.count);

            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# Clients OSs',
                        data: data,
                        borderWidth: 1,
                        backgroundColor: 'gray',
                    }],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    color: '#5e5e5e',
                }
            });
        })
        .catch((error) => console.error('There was a problem with the fetch operation: ', error));
}


// chart js
console.timeEnd("timer");

