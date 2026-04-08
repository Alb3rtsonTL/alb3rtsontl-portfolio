// script.js

// Project filtering functionality
const filterProjects = (category) => {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (project.dataset.category === category || category === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
};

// Contact form validation functionality
const validateContactForm = () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        if (name === '' || email === '') {
            alert('All fields are required!');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
};

// Parallax scrolling functionality
const parallaxScrolling = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(elem => {
            const speed = elem.dataset.speed;
            const yPos = -((window.pageYOffset || document.documentElement.scrollTop) * speed);
            elem.style.transform = `translateY(${yPos}px)`;
        });
    });
};

// Smooth navigation functionality
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Lightbox for project images functionality
const lightbox = () => {
    const images = document.querySelectorAll('.lightbox-image');
    const lightboxContainer = document.getElementById('lightboxContainer');
    images.forEach(image => {
        image.addEventListener('click', () => {
            lightboxContainer.style.display = 'block';
            lightboxContainer.querySelector('img').src = image.src;
        });
    });
    lightboxContainer.addEventListener('click', () => {
        lightboxContainer.style.display = 'none';
    });
};

// Dynamic data rendering from CMS structure functionality
const renderDataFromCMS = (data) => {
    const container = document.getElementById('projectContainer');
    data.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.dataset.category = project.category;
        projectElement.innerHTML = `<h3>${project.title}</h3><img src='${project.image}' alt='${project.title}'>`;
        container.appendChild(projectElement);
    });
};

// Initialize all functionalities
const initialize = () => {
    validateContactForm();
    parallaxScrolling();
    smoothScroll();
    lightbox();
};

initialize();