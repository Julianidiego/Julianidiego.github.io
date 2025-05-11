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
    
    // Formulario de contacto con validación y animaciones
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const mensaje = document.getElementById('mensaje');
            let isValid = true;
            
            // Validación básica
            if (!nombre.value.trim()) {
                showError(nombre, 'Por favor ingresa tu nombre');
                isValid = false;
            } else {
                removeError(nombre);
            }
            
            if (!validateEmail(email.value)) {
                showError(email, 'Por favor ingresa un email válido');
                isValid = false;
            } else {
                removeError(email);
            }
            
            if (!mensaje.value.trim()) {
                showError(mensaje, 'Por favor ingresa un mensaje');
                isValid = false;
            } else {
                removeError(mensaje);
            }
            
            if (isValid) {
                // Simular envío exitoso
                const btn = form.querySelector('button');
                const originalText = btn.textContent;
                
                btn.disabled = true;
                btn.innerHTML = '<span class="spinner"></span> Enviando...';
                
                setTimeout(() => {
                    btn.innerHTML = '¡Enviado con éxito! <span class="check">✓</span>';
                    
                    // Mostrar notificación tipo toast
                    showToast('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
                    
                    // Reiniciar el formulario después de un tiempo
                    setTimeout(() => {
                        form.reset();
                        btn.disabled = false;
                        btn.textContent = originalText;
                    }, 3000);
                }, 1500);
            }
        });
    }
    
    // Función para validar email
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    
    // Mostrar error en input
    function showError(input, message) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message') || document.createElement('div');
        
        if (!errorElement.classList.contains('error-message')) {
            errorElement.classList.add('error-message');
            errorElement.style.color = '#ff3e3e';
            errorElement.style.fontSize = '0.8rem';
            errorElement.style.marginTop = '-0.8rem';
            errorElement.style.marginBottom = '1rem';
            errorElement.style.transform = 'translateY(0)';
            errorElement.style.opacity = '0';
            errorElement.style.transition = 'all 0.3s ease';
            formControl.appendChild(errorElement);
        }
        
        input.style.borderColor = '#ff3e3e';
        input.style.boxShadow = '0 0 0 2px rgba(255, 62, 62, 0.2)';
        
        errorElement.textContent = message;
        
        // Triggerear la animación
        setTimeout(() => {
            errorElement.style.transform = 'translateY(0)';
            errorElement.style.opacity = '1';
        }, 10);
    }
    
    // Remover error de input
    function removeError(input) {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');
        
        input.style.borderColor = '';
        input.style.boxShadow = '';
        
        if (errorElement) {
            errorElement.style.transform = 'translateY(-10px)';
            errorElement.style.opacity = '0';
            
            setTimeout(() => {
                errorElement.remove();
            }, 300);
        }
    }
    
    // Inicializar efectos de scroll
    function initScrollEffects() {
        // Animación de aparición al scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        
        // Observar todas las secciones
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Efecto parallax en scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            // Efecto parallax para las secciones
            sections.forEach(section => {
                const speed = 0.05;
                const yPos = -(scrollPosition * speed);
                section.style.backgroundPosition = `50% ${yPos}px`;
            });
            
            // Efecto de cambio para el header
            if (scrollPosition > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }
    
    // Inicializar efectos de mouse
    function initMouseEffects() {
        // Mouse trailer effect
        const mouseTrailer = document.createElement('div');
        mouseTrailer.classList.add('mouse-trailer');
        document.body.appendChild(mouseTrailer);
        
        // Posición inicial fuera de la vista
        mouseTrailer.style.top = '-100px';
        mouseTrailer.style.left = '-100px';
        
        // Seguir el cursor con efecto suavizado
        let mouseX = 0, mouseY = 0;
        let trailerX = 0, trailerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Actualizar posición del trailer con suavizado
        const updateTrailerPosition = () => {
            const speed = 0.15;
            
            // Calcular nueva posición con interpolación
            trailerX += (mouseX - trailerX) * speed;
            trailerY += (mouseY - trailerY) * speed;
            
            // Actualizar posición del elemento
            mouseTrailer.style.transform = `translate(${trailerX - 15}px, ${trailerY - 15}px)`;
            
            requestAnimationFrame(updateTrailerPosition);
        };
        
        updateTrailerPosition();
        
        // Efecto de hover en links
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                mouseTrailer.style.width = '50px';
                mouseTrailer.style.height = '50px';
                mouseTrailer.style.opacity = '0.2';
            });
            
            link.addEventListener('mouseleave', () => {
                mouseTrailer.style.width = '30px';
                mouseTrailer.style.height = '30px';
                mouseTrailer.style.opacity = '0.5';
            });
        });
    }
    
    // Inicializar partículas de fondo
    function initParticles() {
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');
        document.body.appendChild(starsContainer);
        
        // Crear estrellas
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            // Posición aleatoria
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            // Tamaño y opacidad aleatorios
            const size = Math.random() * 2 + 1;
            const opacity = Math.random() * 0.5 + 0.1;
            
            // Tiempo de animación aleatorio
            const duration = Math.random() * 3 + 1;
            const delay = Math.random() * 5;
            
            // Aplicar estilos
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;
            
            starsContainer.appendChild(star);
        }
    }
    
    // Inicializar cambio de tema
    function initThemeSwitch() {
        const themeSwitch = document.createElement('div');
        themeSwitch.classList.add('theme-switch');
        themeSwitch.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c9d1d9">
                <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
        `;
        document.body.appendChild(themeSwitch);
        
        // Manejar cambio de tema
        let isDark = true;
        themeSwitch.addEventListener('click', () => {
            if (isDark) {
                // Cambiar a modo claro
                document.documentElement.style.setProperty('--color-bg-primary', '#f8f8fa');
                document.documentElement.style.setProperty('--color-bg-secondary', '#ffffff');
                document.documentElement.style.setProperty('--color-border', '#dcdcdc');
                document.documentElement.style.setProperty('--color-text-primary', '#24292e');
                document.documentElement.style.setProperty('--color-text-secondary', '#6a737d');
                
                // Actualizar icono
                themeSwitch.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#24292e">
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7-7-3.14 7-7 7z"/>
                    </svg>
                `;
                isDark = false;
            } else {
                // Restaurar modo oscuro
                document.documentElement.style.setProperty('--color-bg-primary', '#0d1117');
                document.documentElement.style.setProperty('--color-bg-secondary', '#161b22');
                document.documentElement.style.setProperty('--color-border', '#30363d');
                document.documentElement.style.setProperty('--color-text-primary', '#c9d1d9');
                document.documentElement.style.setProperty('--color-text-secondary', '#8b949e');
                
                // Actualizar icono
                themeSwitch.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c9d1d9">
                        <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z"/>
                    </svg>
                `;
                isDark = true;
            }
            
            // Animación de transición
            body.style.transition = 'background-color 0.6s ease, color 0.6s ease';
            body.classList.toggle('theme-light');
            
            // Mostrar notificación
            showToast('Tema cambiado correctamente', 'info');
        });
    }
    
    // Toast notification system
    function showToast(message, type = 'info') {
        // Crear elemento toast si no existe
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast-${type}`);
        toast.innerHTML = `
            <div class="toast-content">
                <span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
                <span class="toast-message">${message}</span>
            </div>
            <button class="toast-close">×</button>
        `;
        
        // Estilar toast
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.padding = '12px 20px';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        toast.style.backgroundColor = type === 'success' ? '#10B981' : '#3B82F6';
        toast.style.color = 'white';
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        toast.style.transition = 'all 0.4s ease';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';
        toast.style.justifyContent = 'space-between';
        toast.style.zIndex = '10000';
        
        document.body.appendChild(toast);
        
        // Mostrar el toast con animación
        setTimeout(() => {
            toast.style.transform = 'translateY(0)';
            toast.style.opacity = '1';
        }, 10);
        
        // Cerrar el toast
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.color = 'white';
        closeBtn.style.fontSize = '18px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.marginLeft = '15px';
        
        closeBtn.addEventListener('click', () => {
            closeToast(toast);
        });
        
        // Auto close después de 4 segundos
        setTimeout(() => {
            closeToast(toast);
        }, 4000);
    }
    
    function closeToast(toast) {
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        
        setTimeout(() => {
            toast.remove();
        }, 400);
    }
    
    // Inicializar efectos para el formulario
    function initFormEffects() {
        const inputs = document.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            // Efecto de entrada y salida del campo
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('input-focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value.trim()) {
                    input.parentElement.classList.remove('input-focused');
                }
            });
            
            // Efecto de escritura
            input.addEventListener('input', () => {
                if (input.value.trim()) {
                    input.parentElement.classList.add('input-has-text');
                } else {
                    input.parentElement.classList.remove('input-has-text');
                }
            });
        });
    }
    
    // Inicializar efectos 3D para las tarjetas
    function init3DEffects() {
        // Efecto 3D en tarjetas de lenguajes
        langCards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${y * 10}deg) 
                    rotateY(${-x * 10}deg) 
                    translateZ(20px)
                `;
                
                // Efecto de luz dinámica
                const light = card.querySelector('.lenguaje-logo');
                if (light) {
                    light.style.backgroundImage = `
                        radial-gradient(
                            circle at ${50 + x * 100}% ${50 + y * 100}%, 
                            rgba(255, 255, 255, 0.1) 0%, 
                            rgba(255, 255, 255, 0) 60%
                        )
                    `;
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
        
        // Efecto 3D en proyectos
        proyectos.forEach(proyecto => {
            proyecto.addEventListener('mousemove', e => {
                const rect = proyecto.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                proyecto.style.transform = `
                    perspective(1000px) 
                    rotateX(${y * 5}deg) 
                    rotateY(${-x * 5}deg) 
                    translateZ(10px)
                `;
            });
            
            proyecto.addEventListener('mouseleave', () => {
                proyecto.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
        });
    }
    
    // Inicializar barra de progreso de scroll
    function initScrollProgress() {
        const scrollProgress = document.createElement('div');
        scrollProgress.classList.add('scroll-progress');
        document.body.appendChild(scrollProgress);
        
        window.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            scrollProgress.style.width = `${scrolled}%`;
        });
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

    // Inicializar efecto de tarjetas sociales
    function initSocialCards() {
        socialCards.forEach(card => {
            card.addEventListener('mouseenter', createFloatingParticles);
        });

        function createFloatingParticles(e) {
            const card = e.currentTarget;
            const icon = card.querySelector('.social-icon');
            const rect = card.getBoundingClientRect();
            
            // Crear partículas
            for (let i = 0; i < 5; i++) {
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
                particle.style.backgroundColor = window.getComputedStyle(icon).color;
                particle.style.opacity = '0.7';
                particle.style.animation = `floatUp ${duration}s ease-in-out ${delay}s forwards`;
                
                card.appendChild(particle);
                
                // Remover partícula después de la animación
                setTimeout(() => {
                    particle.remove();
                }, (duration + delay) * 1000);
            }
        }
        
        // Añadir estilos para la animación de partículas
        if (!document.getElementById('particle-styles')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'particle-styles';
            styleEl.textContent = `
                @keyframes floatUp {
                    0% { transform: translateY(0); opacity: 0.7; }
                    100% { transform: translateY(-100px); opacity: 0; }
                }
            `;
            document.head.appendChild(styleEl);
        }
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
});

// Función para animaciones de texto por letra
function typeWriterEffect(element, text, speed = 100) {
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Función para animar los números
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;
        
        const updateCounter = () => {
            const count = +counter.innerText;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCounter();
    });
}
