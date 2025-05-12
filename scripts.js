// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    // Referencias a elementos DOM
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const body = document.body;
    const links = document.querySelectorAll('a');
    const langCards = document.querySelectorAll('.aprendiendo-card[data-language]'); // Actualizado para los nuevos elementos
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
    initLanguageCards(); // Este método se está conservando pero ahora trabaja con los nuevos elementos
    initProjectFilters();
    initTestimonialCarousel();
    initAprendiendoCards();
    addAprendiendoNavLink();
    initImprovedAnimations();

    // Efecto para tarjetas de lenguaje que coincide con el estilo de tarjetas sociales
    function initLanguageCards() {
        langCards.forEach(card => {
            // Determinar color según el lenguaje
            const language = card.getAttribute('data-language');
            let glowColor;
            
            // Preparar para añadir el contenedor de partículas si no existe
            if (!card.querySelector('.particles-container')) {
                const particlesContainer = document.createElement('div');
                particlesContainer.className = 'particles-container';
                card.prepend(particlesContainer);
            }
            
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
                createLanguageParticles(card, language, glowColor);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
                card.style.borderColor = '';
                // Eliminar partículas
                removeLanguageParticles(card);
            });
        });
    }
    
    // Función para crear partículas para tarjetas de lenguaje
    function createLanguageParticles(card, language, color) {
        const particlesContainer = card.querySelector('.particles-container');
        if (!particlesContainer) return;
        
        // Configurar partículas según el lenguaje
        let config = { count: 30, shapes: ['square'] };
        
        switch(language) {
            case 'Python':
                config.shapes = ['snake', 'square', 'code', 'indentation'];
                break;
            case 'Delphi':
                config.shapes = ['component', 'form', 'square', 'object'];
                break;
            case 'SQL':
                config.shapes = ['table', 'query', 'square', 'database'];
                break;
            case 'C#':
                config.shapes = ['sharp', 'dotnet', 'square', 'class'];
                break;
            case 'C++':
                config.shapes = ['cpp', 'square', 'pointer', 'template'];
                break;
        }
        
        // Crear partículas
        for (let i = 0; i < config.count; i++) {
            createLanguageParticle(particlesContainer, language, color, config.shapes);
        }
    }
    
    // Crear partículas individuales para lenguajes
    function createLanguageParticle(container, language, color, shapes = ['square']) {
        const particle = document.createElement('div');
        particle.classList.add('tech-particle');
        
        // Posicionar en el centro
        const centerX = container.offsetWidth / 2;
        const centerY = container.offsetHeight / 2;
        
        // Seleccionar una forma aleatoria de las disponibles
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        // Tamaño base aleatorio entre 6px y 14px
        const baseSize = 6 + Math.random() * 8;
        
        // Aplicar forma según el tipo de lenguaje
        switch(shape) {
            case 'square':
                // Cuadrado estándar
                particle.style.width = `${baseSize}px`;
                particle.style.height = `${baseSize}px`;
                // Rotar aleatoriamente
                particle.style.transform = `rotate(${Math.random() * 180}deg)`;
                break;
                
            case 'snake': // Python
                // Símbolo de serpiente (S)
                particle.innerHTML = '~';
                particle.style.fontSize = `${baseSize * 1.5}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.fontWeight = 'bold';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'indentation': // Python
                // Indentación
                particle.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'component': // Delphi
                particle.innerHTML = 'T';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.fontWeight = 'bold';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'form': // Delphi
                particle.innerHTML = '[]';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'table': // SQL
                particle.innerHTML = '═';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'query': // SQL
                particle.innerHTML = ['SELECT', 'FROM', 'WHERE', 'JOIN'][Math.floor(Math.random() * 4)];
                particle.style.fontSize = `${baseSize * 0.6}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                particle.style.padding = '0 2px';
                break;
                
            case 'database': // SQL
                particle.innerHTML = '{ }';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'sharp': // C#
                particle.innerHTML = '#';
                particle.style.fontSize = `${baseSize * 1.5}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.fontWeight = 'bold';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'dotnet': // C#
                particle.innerHTML = '.NET';
                particle.style.fontSize = `${baseSize * 0.7}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'cpp': // C++
                particle.innerHTML = '++';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.fontWeight = 'bold';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'pointer': // C++
                particle.innerHTML = '*&';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'code':
                // Símbolos generales de código
                particle.innerHTML = ['{ }', '( )', '[ ]', '/*', '*/'][Math.floor(Math.random() * 5)];
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'object': // General
                particle.innerHTML = '{}';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'class': // General OOP
                particle.innerHTML = 'class';
                particle.style.fontSize = `${baseSize * 0.7}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            case 'template': // C++
                particle.innerHTML = '<T>';
                particle.style.fontSize = `${baseSize}px`;
                particle.style.fontFamily = 'monospace';
                particle.style.color = color;
                particle.style.backgroundColor = 'transparent';
                break;
                
            default:
                // Cuadrado por defecto con borde
                particle.style.width = `${baseSize}px`;
                particle.style.height = `${baseSize}px`;
                particle.style.border = `1px solid ${color}`;
                particle.style.backgroundColor = 'transparent';
        }
        
        // Si es una forma geométrica, aplicar color de fondo
        if (shape === 'square') {
            particle.style.backgroundColor = color;
            // Añadir borde y transparencia para más efecto visual
            particle.style.border = `1px solid ${color}`;
            particle.style.opacity = (0.5 + Math.random() * 0.5).toString(); // Opacidad variable
        }
        
        // Posición inicial en el centro
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;
        
        // Añadir la partícula al contenedor
        container.appendChild(particle);
        
        // Pequeño retraso antes de la animación para un efecto escalonado
        setTimeout(() => {
            // Ángulo aleatorio para la dirección
            const angle = Math.random() * Math.PI * 2;
            // Distancia aleatoria desde el centro
            const distance = 40 + Math.random() * 120;
            
            // Destino X e Y basado en el ángulo y la distancia
            const destX = centerX + Math.cos(angle) * distance;
            const destY = centerY + Math.sin(angle) * distance;
            
            // Aplicar transformación con rotación adicional para más dinamismo
            const rotation = Math.random() * 360;
            particle.style.transform = `translate(${destX - centerX}px, ${destY - centerY}px) rotate(${rotation}deg)`;
            
            // Variar la opacidad final
            const finalOpacity = 0.3 + Math.random() * 0.7;
            particle.style.opacity = finalOpacity.toString();
            
            // Configurar transición para animación suave con velocidades variables
            const duration = 0.7 + Math.random() * 1.5;
            particle.style.transition = `transform ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1), opacity ${duration * 0.8}s ease-out`;
            
            // Eliminar la partícula después de la animación
            setTimeout(() => {
                particle.style.opacity = '0';
                setTimeout(() => {
                    if (container && container.contains(particle)) {
                        container.removeChild(particle);
                    }
                }, 1000);
            }, duration * 800);
        }, Math.random() * 200);
    }
    
    // Eliminar todas las partículas de un contenedor
    function removeLanguageParticles(card) {
        const particlesContainer = card.querySelector('.particles-container');
        if (!particlesContainer) return;
        
        const particles = particlesContainer.querySelectorAll('.tech-particle');
        
        particles.forEach(particle => {
            // Fade out rápido
            particle.style.opacity = '0';
            particle.style.transition = 'opacity 0.3s ease-out';
            
            setTimeout(() => {
                if (particlesContainer.contains(particle)) {
                    particlesContainer.removeChild(particle);
                }
            }, 300);
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
        // En lugar de usar canvas con animaciones pesadas,
        // creamos un fondo estático inspirado en GitHub usando CSS
        const canvas = document.getElementById('particles-canvas');
        
        if (canvas) {
            // Eliminamos el canvas
            canvas.remove();
            
            // Creamos un elemento div para el fondo
            const githubBackground = document.createElement('div');
            githubBackground.id = 'github-background';
            githubBackground.className = 'github-background';
            document.body.insertBefore(githubBackground, document.body.firstChild);
            
            // Añadimos estilos CSS para el fondo
            if (!document.getElementById('github-background-styles')) {
                const styleEl = document.createElement('style');
                styleEl.id = 'github-background-styles';
                styleEl.textContent = `
                    .github-background {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: -1;
                        background-color: var(--background-color);
                        background-image: 
                            radial-gradient(circle at 25px 25px, 
                                var(--background-color) 2px, 
                                transparent 0),
                            radial-gradient(circle at 75px 75px, 
                                var(--border-color) 1px, 
                                transparent 0);
                        background-size: 100px 100px;
                        opacity: 0.3;
                    }
                    
                    body.theme-light .github-background {
                        background-image: 
                            radial-gradient(circle at 25px 25px, 
                                var(--border-color) 2px, 
                                transparent 0),
                            radial-gradient(circle at 75px 75px, 
                                var(--border-color) 1px, 
                                transparent 0);
                        opacity: 0.2;
                    }
                `;
                document.head.appendChild(styleEl);
            }
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

// Función para inicializar la sección "Estoy aprendiendo" con las animaciones de partículas
function initAprendiendoCards() {
    const cards = document.querySelectorAll('.aprendiendo-card');
    
    cards.forEach(card => {
        // Añadir listeners para mouseenter y mouseleave
        card.addEventListener('mouseenter', () => createParticles(card));
        card.addEventListener('mouseleave', () => removeParticles(card));
    });
}

// Función para crear partículas cuando el mouse pasa sobre una tarjeta
function createParticles(card) {
    const tech = card.getAttribute('data-tech');
    const particlesContainer = card.querySelector('.particles-container');
    
    // Configuración por tecnología
    const configs = {
        'javascript': { color: '#f7df1e', count: 40, shapes: ['square', 'code', 'triangle'] }, // Amarillo JavaScript
        'html': { color: '#e34c26', count: 40, shapes: ['bracket', 'tag', 'square'] }, // Naranja HTML
        'css': { color: '#264de4', count: 40, shapes: ['curly', 'hash', 'square'] }, // Azul CSS
        'java': { color: '#5382a1', count: 40, shapes: ['coffee', 'curly', 'square'] } // Azul Java
    };
    
    const config = configs[tech] || { color: '#ffffff', count: 40, shapes: ['square'] };
    
    // Crear partículas
    for (let i = 0; i < config.count; i++) {
        createTechParticle(particlesContainer, config.color, config.shapes);
    }
}

// Crear una partícula tecnológica individual con formas variadas
function createTechParticle(container, color, shapes = ['square']) {
    const particle = document.createElement('div');
    particle.classList.add('tech-particle');
    
    // Posicionar en el centro
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    
    // Seleccionar una forma aleatoria de las disponibles
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Tamaño base aleatorio entre 6px y 14px
    const baseSize = 6 + Math.random() * 8;
    
    // Aplicar forma según el tipo
    switch(shape) {
        case 'square':
            // Cuadrado estándar
            particle.style.width = `${baseSize}px`;
            particle.style.height = `${baseSize}px`;
            // Rotar aleatoriamente
            particle.style.transform = `rotate(${Math.random() * 180}deg)`;
            break;
            
        case 'triangle':
            // Triángulo (usando clip-path)
            particle.style.width = `${baseSize}px`;
            particle.style.height = `${baseSize}px`;
            particle.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            break;
            
        case 'code':
            // Símbolos de código
            particle.innerHTML = ['{ }', '( )', '[ ]', '< >', '//', '/*', '*/', '==', '!=', '=>'][Math.floor(Math.random() * 10)];
            particle.style.fontSize = `${baseSize}px`;
            particle.style.fontFamily = 'monospace';
            particle.style.color = color;
            particle.style.backgroundColor = 'transparent';
            break;
            
        case 'bracket':
            // Símbolo de HTML
            particle.innerHTML = ['<>', '</>'][Math.floor(Math.random() * 2)];
            particle.style.fontSize = `${baseSize}px`;
            particle.style.fontFamily = 'monospace';
            particle.style.color = color;
            particle.style.backgroundColor = 'transparent';
            break;
            
        case 'tag':
            // Etiqueta HTML
            particle.innerHTML = ['div', 'span', 'p', 'h1', 'a'][Math.floor(Math.random() * 5)];
            particle.style.fontSize = `${baseSize}px`;
            particle.style.fontFamily = 'monospace';
            particle.style.color = color;
            particle.style.backgroundColor = 'transparent';
            particle.style.border = `1px solid ${color}`;
            particle.style.padding = '0 2px';
            break;
            
        case 'coffee':
            // Símbolo de Java (taza de café)
            particle.innerHTML = '☕';
            particle.style.fontSize = `${baseSize * 1.2}px`;
            particle.style.color = color;
            particle.style.backgroundColor = 'transparent';
            break;
            
        case 'curly':
            // Llaves
            particle.innerHTML = ['{ }', '[ ]', '( )'][Math.floor(Math.random() * 3)];
            particle.style.fontSize = `${baseSize}px`;
            particle.style.fontFamily = 'monospace';
            particle.style.color = color;
            particle.style.backgroundColor = 'transparent';
            break;
            
        case 'hash':
            // Símbolo de CSS
            particle.innerHTML = ['#', '.', '*', '{}'][Math.floor(Math.random() * 4)];
            particle.style.fontSize = `${baseSize}px`;
            particle.style.fontFamily = 'monospace';
            particle.style.color = color;
            particle.style.fontWeight = 'bold';
            particle.style.backgroundColor = 'transparent';
            break;
            
        default:
            // Cuadrado por defecto con borde
            particle.style.width = `${baseSize}px`;
            particle.style.height = `${baseSize}px`;
            particle.style.border = `1px solid ${color}`;
            particle.style.backgroundColor = 'transparent';
    }
    
    // Si es una forma geométrica, aplicar color de fondo
    if (['square', 'triangle'].includes(shape)) {
        particle.style.backgroundColor = color;
        // Añadir borde y transparencia para más efecto visual
        particle.style.border = `1px solid ${color}`;
        particle.style.opacity = (0.5 + Math.random() * 0.5).toString(); // Opacidad variable
    }
    
    // Posición inicial en el centro
    particle.style.left = `${centerX}px`;
    particle.style.top = `${centerY}px`;
    
    // Añadir la partícula al contenedor
    container.appendChild(particle);
    
    // Pequeño retraso antes de la animación para un efecto escalonado
    setTimeout(() => {
        // Ángulo aleatorio para la dirección
        const angle = Math.random() * Math.PI * 2;
        // Distancia aleatoria desde el centro (mayor que antes)
        const distance = 40 + Math.random() * 150;
        
        // Destino X e Y basado en el ángulo y la distancia
        const destX = centerX + Math.cos(angle) * distance;
        const destY = centerY + Math.sin(angle) * distance;
        
        // Aplicar transformación con rotación adicional para más dinamismo
        const rotation = Math.random() * 360;
        particle.style.transform = `translate(${destX - centerX}px, ${destY - centerY}px) rotate(${rotation}deg)`;
        
        // Variar la opacidad final
        const finalOpacity = 0.3 + Math.random() * 0.7;
        particle.style.opacity = finalOpacity.toString();
        
        // Configurar transición para animación suave con velocidades variables
        const duration = 0.7 + Math.random() * 2;
        particle.style.transition = `transform ${duration}s cubic-bezier(0.165, 0.84, 0.44, 1), opacity ${duration * 0.8}s ease-out`;
        
        // Eliminar la partícula después de la animación
        setTimeout(() => {
            particle.style.opacity = '0';
            setTimeout(() => {
                if (container && container.contains(particle)) {
                    container.removeChild(particle);
                }
            }, 1000);
        }, duration * 800);
    }, Math.random() * 200);
}

// Eliminar todas las partículas cuando el mouse sale de la tarjeta
function removeParticles(card) {
    const particlesContainer = card.querySelector('.particles-container');
    const particles = particlesContainer.querySelectorAll('.tech-particle');
    
    particles.forEach(particle => {
        // Fade out más rápido
        particle.style.opacity = '0';
        particle.style.transition = 'opacity 0.3s ease-out';
        
        setTimeout(() => {
            if (particlesContainer.contains(particle)) {
                particlesContainer.removeChild(particle);
            }
        }, 300);
    });
}

// Añadir el enlace a la sección "Estoy aprendiendo" en la navegación
function addAprendiendoNavLink() {
    const navUl = document.querySelector('nav ul');
    const sobreMiLink = document.querySelector('nav ul li a[href="#sobre-mi"]');
    
    if (navUl && sobreMiLink) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#aprendiendo';
        a.className = 'nav-link';
        
        const span = document.createElement('span');
        span.textContent = 'Aprendiendo';
        a.appendChild(span);
        li.appendChild(a);
        
        // Insertar después del enlace "Sobre mí"
        const sobreMiLi = sobreMiLink.parentNode;
        navUl.insertBefore(li, sobreMiLi.nextSibling);
    }
}

/**
 * Animaciones de carga mejoradas
 * Sistema de animaciones con efectos personalizados para cada tipo de elemento
 */
function initImprovedAnimations() {
    // Animación para títulos de sección
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach(title => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Efecto de aparición con borde deslizante
                    title.style.opacity = '1';
                    title.style.transform = 'translateY(0)';
                    
                    // Si tiene un pseudo-elemento after (línea debajo)
                    if (getComputedStyle(title, '::after').content !== 'none') {
                        title.classList.add('title-animated');
                    }
                    
                    observer.unobserve(title);
                }
            });
        }, { threshold: 0.2 });
        
        // Estilos iniciales
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        observer.observe(title);
    });
    
    // Animación para tarjetas (proyectos, lenguajes, redes)
    const cards = document.querySelectorAll('.proyecto, .aprendiendo-card, .social-card');
    cards.forEach((card, index) => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Aplicar un retraso escalonado basado en el índice
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100); // 100ms de retraso entre cada tarjeta
                    
                    observer.unobserve(card);
                }
            });
        }, { threshold: 0.1 });
        
        // Estilos iniciales
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(card);
    });
    
    // Efecto de entrada para la sección Hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        // Animación de aparición secuencial para elementos del hero
        const elements = heroContent.children;
        Array.from(elements).forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            // Tiempo de retraso escalonado
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 300 + (index * 200)); // El primer elemento aparece a los 300ms, luego cada 200ms
        });
    }
    
    // Animación para las barras de habilidades que sea más fluida
    const skillBars = document.querySelectorAll('.progress-bar');
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Definir la animación con CSS para mayor fluidez
                const bar = entry.target;
                const percent = bar.dataset.percent || 0;
                
                // Reset inicial
                bar.style.width = '0%';
                
                // Permitir que el navegador renderice el reset antes de la animación
                setTimeout(() => {
                    bar.style.width = percent + '%';
                    bar.style.transition = 'width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                }, 50);
                
                skillObserver.unobserve(bar);
                
                // Añadir contador numérico
                const parent = bar.parentNode;
                const percentCounter = document.createElement('span');
                percentCounter.className = 'percent-counter';
                percentCounter.textContent = '0%';
                percentCounter.style.position = 'absolute';
                percentCounter.style.right = '10px';
                percentCounter.style.top = '50%';
                percentCounter.style.transform = 'translateY(-50%)';
                percentCounter.style.fontSize = '0.85rem';
                percentCounter.style.fontWeight = '600';
                percentCounter.style.color = '#fff';
                
                parent.style.position = 'relative';
                parent.appendChild(percentCounter);
                
                // Animación de contador
                let currentCount = 0;
                const targetCount = parseInt(percent);
                const duration = 1500; // ms
                const interval = 20; // ms
                const steps = duration / interval;
                const increment = targetCount / steps;
                
                const counter = setInterval(() => {
                    currentCount += increment;
                    if (currentCount >= targetCount) {
                        currentCount = targetCount;
                        clearInterval(counter);
                    }
                    percentCounter.textContent = Math.round(currentCount) + '%';
                }, interval);
            }
        });
    }, { threshold: 0.2 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Mejorar animación de la línea de tiempo
    const timelineContainers = document.querySelectorAll('.timeline-container');
    timelineContainers.forEach((container, index) => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Retraso basado en la posición en la línea de tiempo
                    setTimeout(() => {
                        container.style.opacity = '1';
                        container.style.transform = 'translateY(0)';
                    }, index * 200); // 200ms de retraso entre cada elemento
                    
                    observer.unobserve(container);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(container);
    });
    
    // Efecto parallax suave para el fondo
    if (window.innerWidth > 768) { // Solo en pantallas más grandes
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            
            // Mover fondo a velocidad reducida (efecto parallax)
            const background = document.getElementById('github-background') || document.querySelector('.github-background');
            if (background) {
                background.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            }
        });
    }
}

// Iniciar las animaciones mejoradas después de que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // ...existing code from DOMContentLoaded...
    initImprovedAnimations();
});
