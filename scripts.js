// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos DOM
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const body = document.body;
    const links = document.querySelectorAll('a');
    const langCards = document.querySelectorAll('.lenguaje-card');
    const proyectos = document.querySelectorAll('.proyecto');
    const socialCards = document.querySelectorAll('.social-card');
    const progressBars = document.querySelectorAll('.progress-bar');
    const themeToggle = document.getElementById('theme-toggle');
    
    // Inicializar efectos
    initScrollEffects();
    initMouseEffects();
    initParticles();
    initThemeSwitch();
    initFormEffects();
    init3DEffects();
    initScrollProgress();
    initSkillBars();
    initBackToTop();
    initSocialCards();
    initLanguageCards();
    initProjectFilters();
    initTestimonialCarousel();

    // Efecto para tarjetas de lenguaje que coincide con el estilo de tarjetas sociales
    function initLanguageCards() {
        langCards.forEach(card => {
            // Determinar color según el lenguaje
            const language = card.getAttribute('data-language');
            let glowColor;
            
            switch(language) {
                case 'Python':
                    glowColor = 'rgba(55, 118, 171, 0.7)'; // Azul de Python
                    break;
                case 'Delphi':
                    glowColor = 'rgba(235, 73, 35, 0.7)'; // Naranja de Delphi
                    break;
                case 'SQL':
                    glowColor = 'rgba(0, 96, 143, 0.7)'; // Azul oscuro de SQL
                    break;
                case 'C#':
                    glowColor = 'rgba(104, 33, 122, 0.7)'; // Morado de C#
                    break;
                case 'C++':
                    glowColor = 'rgba(0, 68, 130, 0.7)'; // Azul marino de C++
                    break;
                default:
                    glowColor = 'rgba(88, 166, 255, 0.6)'; // Azul predeterminado
            }
            
            // Crear efecto de brillo único para cada tarjeta
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${glowColor}`;
                card.style.borderColor = glowColor.replace('0.7', '1');
                // Crear partículas para los lenguajes
                createFloatingParticles(card, glowColor);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
                card.style.borderColor = '';
            });
        });
    }
    
    // Inicializar efecto de tarjetas sociales
    function initSocialCards() {
        socialCards.forEach(card => {
            // Configurar colores específicos para cada red social
            const classList = card.classList;
            let glowColor;
            
            if (classList.contains('linkedin')) {
                glowColor = 'rgba(0, 119, 181, 0.7)'; // Color LinkedIn
            } else if (classList.contains('github')) {
                glowColor = 'rgba(36, 41, 46, 0.7)'; // Color GitHub
            } else if (classList.contains('twitter')) {
                glowColor = 'rgba(29, 161, 242, 0.7)'; // Color Twitter
            } else if (classList.contains('email')) {
                glowColor = 'rgba(234, 67, 53, 0.7)'; // Color Email/Gmail
            } else if (classList.contains('instagram')) {
                glowColor = 'rgba(193, 53, 132, 0.7)'; // Color Instagram
            } else if (classList.contains('credly')) {
                glowColor = 'rgba(255, 88, 0, 0.7)'; // Color Credly/Naranja
            } else if (classList.contains('orcid')) {
                glowColor = 'rgba(166, 206, 57, 0.7)'; // Color ORCID/Verde
            } else if (classList.contains('facebook')) {
                glowColor = 'rgba(66, 103, 178, 0.7)'; // Color Facebook
            } else {
                glowColor = 'rgba(88, 166, 255, 0.7)'; // Color predeterminado
            }
            
            // Crear efecto de brillo único para cada tarjeta
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px ${glowColor}`;
                card.style.borderColor = glowColor.replace('0.7', '1');
                // Crear partículas para las tarjetas sociales
                createFloatingParticles(card, glowColor);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
                card.style.borderColor = '';
            });
        });
    }
    
    // Función compartida para crear partículas flotantes
    function createFloatingParticles(element, color = 'rgba(88, 166, 255, 0.7)') {
        const rect = element.getBoundingClientRect();
        
        // Crear partículas
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('span');
            particle.className = 'floating-particle';
            
            // Propiedades aleatorias
            const size = Math.random() * 8 + 4;
            const x = Math.random() * rect.width;
            const duration = Math.random() * 2 + 1;
            const delay = Math.random() * 0.5;
            
            // Posicionar y estilar partícula
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}px`;
            particle.style.bottom = '0';
            particle.style.position = 'absolute';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = color;
            particle.style.opacity = '0.7';
            particle.style.animation = `floatUp ${duration}s ease-in-out ${delay}s forwards`;
            
            element.appendChild(particle);
            
            // Remover partícula después de la animación
            setTimeout(() => {
                if (element.contains(particle)) {
                    element.removeChild(particle);
                }
            }, (duration + delay) * 1000);
        }
    }
    
    // Inicializar animación de barras de habilidades
    function initSkillBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const percent = bar.dataset.percent || 0;
                    bar.style.width = percent + '%';
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.2 });

        progressBars.forEach(bar => {
            observer.observe(bar);
        });
    }

    // Inicializar botón de volver arriba
    function initBackToTop() {
        const backToTop = document.getElementById('back-to-top');
        
        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });
            
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    
    // Inicializar efectos de scroll para animaciones en secciones
    function initScrollEffects() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        // Observar todas las secciones para animaciones de entrada
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Efecto en navbar al hacer scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Inicializar efectos de ratón
    function initMouseEffects() {
        // Efecto para links de navegación
        links.forEach(link => {
            if (link.classList.contains('nav-link')) {
                link.addEventListener('mouseover', () => {
                    link.classList.add('hover');
                });
                
                link.addEventListener('mouseout', () => {
                    link.classList.remove('hover');
                });
            }
        });
    }

    // Inicializar sistema de partículas en el fondo
    function initParticles() {
        const canvas = document.getElementById('particles-canvas');
        
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const particles = [];
            const particleCount = 50;
            
            // Ajustar tamaño del canvas al tamaño de la ventana
            function resizeCanvas() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            
            // Crear partículas iniciales
            function createParticles() {
                for (let i = 0; i < particleCount; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        vx: Math.random() * 1 - 0.5,
                        vy: Math.random() * 1 - 0.5,
                        size: Math.random() * 3 + 1,
                        color: body.classList.contains('theme-light') ? 'rgba(9, 105, 218, 0.3)' : 'rgba(88, 166, 255, 0.3)'
                    });
                }
            }
            
            // Animar partículas
            function animateParticles() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;
                    
                    if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
                    if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
                    
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                });
                
                connectParticles();
                requestAnimationFrame(animateParticles);
            }
            
            // Conectar partículas cercanas con líneas
            function connectParticles() {
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i + 1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 150) {
                            const opacity = 1 - distance / 150;
                            ctx.strokeStyle = body.classList.contains('theme-light') ? 
                                `rgba(9, 105, 218, ${opacity * 0.2})` : 
                                `rgba(88, 166, 255, ${opacity * 0.2})`;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.stroke();
                        }
                    }
                }
            }
            
            // Iniciar canvas
            resizeCanvas();
            createParticles();
            animateParticles();
            
            // Redimensionar canvas si cambia el tamaño de la ventana
            window.addEventListener('resize', () => {
                resizeCanvas();
                particles.length = 0; // Limpiar partículas existentes
                createParticles(); // Crear nuevas partículas
            });
        }
    }

    // Inicializar cambio de tema (oscuro/claro)
    function initThemeSwitch() {
        const themeToggle = document.getElementById('theme-toggle');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                body.classList.toggle('theme-light');
                
                // Actualizar el estado del tema en el localStorage
                const isLightTheme = body.classList.contains('theme-light');
                localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
                
                // Actualizar el color de las partículas
                const canvas = document.getElementById('particles-canvas');
                if (canvas) {
                    const ctx = canvas.getContext('2d');
                    const particles = [];
                    
                    // Obtener todas las partículas del canvas
                    document.querySelectorAll('.particle').forEach(p => {
                        if (p.color) {
                            p.color = isLightTheme ? 'rgba(9, 105, 218, 0.3)' : 'rgba(88, 166, 255, 0.3)';
                        }
                    });
                }
            });
            
            // Cargar tema guardado
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'light') {
                body.classList.add('theme-light');
            }
        }
    }

    // Inicializar efectos para formularios
    function initFormEffects() {
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        
        formInputs.forEach(input => {
            // Añadir efecto de foco
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
            
            // Mantener la clase si el campo ya tiene valor
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
        
        // Simular envío del formulario
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const submitButton = contactForm.querySelector('.submit-btn');
                const originalContent = submitButton.innerHTML;
                
                // Mostrar cargando
                submitButton.innerHTML = '<span class="spinner"></span> Enviando...';
                submitButton.disabled = true;
                
                // Simular llamada AJAX (3 segundos)
                setTimeout(() => {
                    submitButton.innerHTML = '<span class="check">✓</span> ¡Enviado!';
                    
                    // Reiniciar form después de 2 segundos
                    setTimeout(() => {
                        submitButton.innerHTML = originalContent;
                        submitButton.disabled = false;
                        contactForm.reset();
                        formInputs.forEach(input => {
                            input.parentElement.classList.remove('focused');
                        });
                        alert('¡Gracias por tu mensaje! Te responderé lo antes posible.');
                    }, 2000);
                }, 3000);
            });
        }
    }

    // Inicializar efectos 3D para tarjetas
    function init3DEffects() {
        // Efecto 3D para proyectos
        proyectos.forEach(proyecto => {
            proyecto.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = proyecto.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;
                
                const xPercent = x / width - 0.5;
                const yPercent = y / height - 0.5;
                
                const rotateX = yPercent * -10;
                const rotateY = xPercent * 10;
                
                proyecto.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            });
            
            proyecto.addEventListener('mouseleave', () => {
                proyecto.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    // Inicializar animación de progreso de scroll
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });
    }
    
    // Añadir estilos de animación para partículas
    if (!document.getElementById('particle-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'particle-styles';
        styleEl.textContent = `
            @keyframes floatUp {
                0% { transform: translateY(0); opacity: 0.7; }
                100% { transform: translateY(-100px); opacity: 0; }
            }
            
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(90deg, #58a6ff, #3fb950);
                z-index: 1010;
                width: 0%;
                transition: width 0.1s;
            }
        `;
        document.head.appendChild(styleEl);
    }
});

// Sistema de filtrado de proyectos
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectItems = document.querySelectorAll('.proyecto');
    
    if (!filterBtns.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to current button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Show all projects if "all" is selected, otherwise filter
            projectItems.forEach(project => {
                if (filterValue === 'all') {
                    project.style.display = 'block';
                    setTimeout(() => {
                        project.style.opacity = '1';
                        project.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    const projectTechnologies = project.getAttribute('data-technologies').split(',');
                    if (projectTechnologies.includes(filterValue)) {
                        project.style.display = 'block';
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        project.style.opacity = '0';
                        project.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Inicializar carrusel de testimonios
function initTestimonialCarousel() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (!testimonials.length) return; // Exit if no testimonials found
    
    let currentIndex = 0;
    
    // Function to show the current testimonial
    function showTestimonial(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        // Update dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current testimonial and dot
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    // Initialize the first testimonial
    showTestimonial(currentIndex);
    
    // Event listeners for navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        });
    }
    
    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            showTestimonial(currentIndex);
        });
    });
    
    // Auto-rotate testimonials every 8 seconds
    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }, 8000);
    
    // Pause auto-rotation when hovering over testimonials
    const testimonialContainer = document.querySelector('.testimonial-container');
    if (testimonialContainer) {
        testimonialContainer.addEventListener('mouseenter', () => {
            clearInterval(interval);
        });
        
        testimonialContainer.addEventListener('mouseleave', () => {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(currentIndex);
            }, 8000);
        });
    }
}

// Añadir evento para cargar tema guardado cuando la página esté completamente cargada
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('theme-light');
    }
});
