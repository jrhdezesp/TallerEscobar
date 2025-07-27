document.addEventListener("DOMContentLoaded", () => {

    const lensObject = document.querySelector(".carusel"); // contenedor del carrusel
    const trackObject = document.querySelector(".carusel-track"); // carril de imágenes
    const slideObjects = [...document.querySelectorAll(".carusel-slide")]; // slides
    const maxSlide = slideObjects.length;
    let currentSlide = 0;
    const waitTime = 5000;
    let iterationId = null;
    let dots = null; // variable global para los puntos

    const caruselInit = () => {
        createNavigation();
        dots = document.querySelectorAll('.carusel-dot'); // asignar después de crearlos
        updateDots(currentSlide); // inicializar el primer punto activo
        tick();
    }

    const tick = () => {
        iterationId = setTimeout(() => {
            moveTo(currentSlide + 1);
        }, waitTime);
    }

    const moveTo = (slideIndex) => {
        if (iterationId) clearTimeout(iterationId);

        if (slideIndex >= maxSlide) {
            slideIndex = 0; // vuelve al primero
        }
        if (slideIndex < 0) {
            slideIndex = maxSlide - 1; // vuelve al último
        }

        currentSlide = slideIndex;
        trackObject.style.transform = `translateX(-${currentSlide * 100}vw)`;
        
        // Actualizar puntos activos
        updateDots(currentSlide);

        tick();
    }

    const createNavigation = () => {
        const btnPrevious = document.createElement("DIV");
        const btnNext = document.createElement("DIV");
        const dotSection = document.createElement("SECTION");

        btnPrevious.innerHTML = "&lt;";
        btnPrevious.classList.add("carusel-btn-pre");
        btnNext.innerHTML = "&gt;";
        btnNext.classList.add("carusel-btn-nxt");

        btnPrevious.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            moveTo(currentSlide - 1);
        });

        btnNext.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            moveTo(currentSlide + 1);
        });

        dotSection.classList.add("carusel-dots");

        slideObjects.forEach((_, index) => {
            const dot = document.createElement("DIV");
            dot.classList.add("carusel-dot");
            dot.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                moveTo(index); // usa la misma función para que actualice puntos
            })
            dotSection.appendChild(dot);
        });

        lensObject.appendChild(btnPrevious);
        lensObject.appendChild(btnNext);
        lensObject.appendChild(dotSection);
    }

    // Función para actualizar los puntos
    function updateDots(index) {
        if (!dots) return;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    caruselInit();

});
