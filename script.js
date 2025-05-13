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
        description: "Description here",
        url: "https://infobiojr.com.br/",
        image: "assets/images/infobiojr_portal.png"
    },
    {
        title: "Contact Plugin InfobioJr",
        description: "Description here",
        url: "https://infobiojr.com.br/contato",
        image: "assets/images/infobiojr_contato.png"
    },
    {
        title: "Excel Landpage InfobioJr",
        description: "Description here",
        url: "https://infobiojr.com.br/excel",
        image: "assets/images/infobiojr_excel.png"
    },
    {
        title: "Sales Plugin InfobioJr",
        description: "Description here",
        url: "https://infobiojr.com.br/inscricao",
        image: "assets/images/infobiojr_sales.png"
    },
    {
        title: "Grupyum",
        description: "Description here",
        url: "https://github.com/josearandrade/grupyum",
        image: "assets/images/grupyum.png"
    },
    {
        title: "PictureToText",
        description: "Description here",
        url: "https://github.com/josearandrade/pictureToText",
        image: "assets/images/picturetotext.png"
    },
    {
        title: "PSQI forms",
        description: "Description here",
        url: "https://github.com/josearandrade/desafioInneraHealth",
        image: "assets/images/picturetotext.png"
    }
];

function createProjectTiles() {
    const projectsContainer = document.querySelector('#projects .grid');
    projects.forEach(project => {
        const tile = document.createElement('div');
        tile.className = 'project-tile';
        tile.innerHTML = `
            <div class="project-thumbnail mb-4">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                <div class="redirect-icon"><i data-lucide="external-link"></i></div>
            </div>
            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">${project.description}</p>
            <a href="${project.url}" target="_blank" class="read-more">find more <i data-lucide="github"></i></a>
            <div class="repo-actions">
                <a href="${project.url}/stargazers" target="_blank" class="repo-action">
                    <i data-lucide="star"></i> Star
                </a>
                <a href="${project.url}/fork" target="_blank" class="repo-action">
                    <i data-lucide="git-fork"></i> Fork
                </a>
            </div>`;
        tile.querySelector('.project-thumbnail').addEventListener('click', () => window.open(project.url, '_blank'));
        projectsContainer.appendChild(tile);
    });
    lucide.createIcons();
}
createProjectTiles();
