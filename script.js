lucide.createIcons();

// Scroll reveal effect
function revealSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Theme setting functions...
function setTheme(isDark) {
    if (isDark) html.classList.add('dark');
    else html.classList.remove('dark');
    updateIcon(isDark);
    localStorage.setItem('darkMode', isDark);
}

function updateIcon(isDark) {
    themeToggle.innerHTML = isDark
    ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
    : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>';
}

function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) setTheme(JSON.parse(savedTheme));
    else setTheme(getSystemPreference());
}
themeToggle.addEventListener('click', () => setTheme(!html.classList.contains('dark')));
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) setTheme(e.matches);
});
setInitialTheme();

// RDK hover links
document.addEventListener('DOMContentLoaded', function() {
    const rdkElements = document.querySelectorAll('.rdk-hover');
    rdkElements.forEach(element => {
        element.addEventListener('click', function () {
            if (this.textContent === 'RDK-B') {
                window.open('https://wiki.rdkcentral.com/display/RDK/RDK-Broadband', '_blank');
            } else if (this.textContent === 'RDK') {
                window.open('https://en.wikipedia.org/wiki/Reference_Design_Kit', '_blank');
            }
        });
    });
});

// Dummy project example
const projects = [
    {
        title: "Portal InfobioJr",
        description: "Portal made for the InfobioJr company, a junior company in the field of biotechnology. Hosted by São Paulo University (USP).",
        url: "projects/portalinfobiojr.html",
        image: "assets/images/infobiojr_portal.png"
    },
    {
        title: "Contact Plugin InfobioJr",
        description: "A contact experience for InfobioJr that makes it easy for prospective clients to send questions and project requests.",
        url: "https://infobiojr.com.br/contato",
        image: "assets/images/infobiojr_contato.png"
    },
    {
        title: "Excel Landpage InfobioJr",
        description: "A conversion-focused landing page presenting InfobioJr's Excel solution and guiding visitors toward the next step.",
        url: "https://infobiojr.com.br/excel",
        image: "assets/images/infobiojr_excel.png"
    },
    {
        title: "Sales Plugin InfobioJr",
        description: "A registration flow for InfobioJr, designed to collect leads and support the company's sales process.",
        url: "https://infobiojr.com.br/inscricao",
        image: "assets/images/infobiojr_sales.png"
    },
    {
        title: "Grupyum",
        description: "A Python desktop application that automates image-processing tasks for a medical-imaging research workflow.",
        url: "https://github.com/josearandrade/grupyum",
        image: "assets/images/grupyum.png"
    },
    {
        title: "PictureToText",
        description: "A Python utility that extracts text from images, turning visual content into editable and searchable text.",
        url: "https://github.com/josearandrade/pictureToText",
        image: "assets/images/picturetotext.png"
    },
    {
        title: "PSQI forms",
        description: "Digital forms for the Pittsburgh Sleep Quality Index (PSQI), created for a health-focused technical challenge.",
        url: "https://github.com/josearandrade/desafioInneraHealth",
        image: "assets/images/picturetotext.png"
    },
    {
        title: "DANI — Digital Pathology",
        description: "A Streamlit application for reviewing large digital pathology slides, annotating regions, and exporting catalogued findings.",
        url: "https://github.com/josearandrade/dani-app"
    },
    {
        title: "Desafio Lacrei Saúde",
        description: "A technical challenge developed for Lacrei Saúde, focused on creating a thoughtful health-care digital experience.",
        url: "https://github.com/josearandrade/desafioLacreiSaude"
    },
    {
        title: "Universo do Presente",
        description: "A personalized-gift experience that combines art, 3D printing, and care to turn occasions into lasting memories.",
        url: "https://universodopresente.vercel.app/"
    },
    {
        title: "Lista da Patinha",
        description: "An MVP gift-list platform for pet birthdays, featuring personalized 3D items for celebrating each companion.",
        url: "https://www.listadapatinha.com.br/"
    },
    {
        title: "Dark River",
        description: "The official studio website for Dark River, showcasing its game portfolio, news, and latest updates.",
        url: "https://www.darkriver.com.br/"
    }
];

function createProjectTiles() {
    const projectsContainer = document.querySelector('#projects .grid');
    projects.forEach(project => {
        const tile = document.createElement('div');
        tile.className = 'project-tile';
        const repositoryUrl = project.url.startsWith('https://github.com/');
        const repositoryActions = repositoryUrl ? `
            <div class="repo-actions">
                <a href="${project.url}/stargazers" target="_blank" rel="noopener noreferrer" class="repo-action">
                    <i data-lucide="star"></i> Star
                </a>
                <a href="${project.url}/fork" target="_blank" rel="noopener noreferrer" class="repo-action">
                    <i data-lucide="git-fork"></i> Fork
                </a>
            </div>` : '';
        const thumbnail = project.image
            ? `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">`
            : `<div class="project-placeholder" aria-hidden="true">${project.title}</div>`;
        tile.innerHTML = `
            <div class="project-thumbnail mb-4">
                ${thumbnail}
                <div class="redirect-icon"><i data-lucide="external-link"></i></div>
            </div>
            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="read-more">find more <i data-lucide="external-link"></i></a>
            ${repositoryActions}`;
        tile.querySelector('.project-thumbnail').addEventListener('click', () => window.open(project.url, '_blank'));
        projectsContainer.appendChild(tile);
    });
    lucide.createIcons();
}
createProjectTiles();
