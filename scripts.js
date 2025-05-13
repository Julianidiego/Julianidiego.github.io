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
    createThemeToggle();
    restoreThemePreference();
    initDataVisualization(); // Inicializar gráficos interactivos

    // Variables globales para los gráficos
    let skillsChart, progressChart, projectsChart, languagesChart;
    let chartsInitialized = false;

    // Función para inicializar todos los gráficos de visualización de datos
    function initDataVisualization() {
        const vizNavButtons = document.querySelectorAll('.viz-nav-btn');
        const vizPanels = document.querySelectorAll('.viz-panel');
        
        if (vizNavButtons.length > 0) {
            // Inicializar el evento de cambio de panel
            vizNavButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remover clase active de todos los botones y paneles
                    vizNavButtons.forEach(b => b.classList.remove('active'));
                    vizPanels.forEach(p => p.classList.remove('active'));
                    
                    // Añadir clase active al botón seleccionado
                    btn.classList.add('active');
                    
                    // Mostrar el panel correspondiente
                    const chartId = btn.getAttribute('data-chart');
                    const panel = document.getElementById(`${chartId}-panel`);
                    if (panel) {
                        panel.classList.add('active');
                        
                        // Inicializar los gráficos si no se ha hecho ya
                        if (!chartsInitialized) {
                            initAllCharts();
                            chartsInitialized = true;
                        }
                        
                        // Actualizar el gráfico visible para asegurar el renderizado correcto
                        updateVisibleChart(chartId);
                    }
                });
            });
            
            // Inicializar los gráficos cuando la sección sea visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !chartsInitialized) {
                        initAllCharts();
                        chartsInitialized = true;
                    }
                });
            }, { threshold: 0.2 });
            
            const vizSection = document.querySelector('.data-viz-section');
            if (vizSection) observer.observe(vizSection);
            
            // Animar las barras de progreso
            animateProficiencyBars();
        }
    }

    // Función para actualizar el gráfico visible cuando cambia el panel
    function updateVisibleChart(chartId) {
        switch (chartId) {
            case 'skills':
                if (skillsChart) skillsChart.update();
                break;
            case 'progress':
                if (progressChart) progressChart.update();
                break;
            case 'projects':
                if (projectsChart) projectsChart.update();
                break;
            case 'languages':
                if (languagesChart) languagesChart.update();
                break;
        }
    }

    // Función para inicializar todos los gráficos
    function initAllCharts() {
        initSkillsChart();
        initProgressChart();
        initProjectsChart();
        initLanguagesChart();
    }

    // Inicializar el gráfico de habilidades (gráfico de dona)
    function initSkillsChart() {
        const ctx = document.getElementById('skills-chart');
        if (!ctx) return;
        
        // Configuración del gráfico de habilidades
        const skillsData = {
            labels: ['Frontend', 'Backend', 'Bases de Datos', 'DevOps'],
            datasets: [{
                data: [30, 40, 20, 10],
                backgroundColor: [
                    'rgba(88, 166, 255, 0.7)',
                    'rgba(63, 185, 80, 0.7)',
                    'rgba(249, 117, 131, 0.7)',
                    'rgba(255, 171, 76, 0.7)'
                ],
                borderColor: [
                    'rgba(88, 166, 255, 1)',
                    'rgba(63, 185, 80, 1)',
                    'rgba(249, 117, 131, 1)',
                    'rgba(255, 171, 76, 1)'
                ],
                borderWidth: 2,
                hoverOffset: 15
            }]
        };
        
        skillsChart = new Chart(ctx, {
            type: 'doughnut',
            data: skillsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            family: "'Inter', sans-serif",
                            size: 14,
                            weight: 500
                        },
                        bodyFont: {
                            family: "'Inter', sans-serif",
                            size: 13
                        },
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true,
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Inicializar el gráfico de progreso (gráfico de línea)
    function initProgressChart() {
        const ctx = document.getElementById('progress-chart');
        if (!ctx) return;
        
        // Configuración del gráfico de progreso
        const years = ['2020', '2021', '2022', '2023', '2024', '2025'];
        const progressData = {
            labels: years,
            datasets: [
                {
                    label: 'Python',
                    data: [40, 55, 65, 75, 85, 90],
                    borderColor: 'rgba(88, 166, 255, 1)',
                    backgroundColor: 'rgba(88, 166, 255, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'SQL',
                    data: [30, 45, 60, 70, 80, 85],
                    borderColor: 'rgba(249, 117, 131, 1)',
                    backgroundColor: 'rgba(249, 117, 131, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'C#',
                    data: [20, 35, 50, 65, 70, 75],
                    borderColor: 'rgba(63, 185, 80, 1)',
                    backgroundColor: 'rgba(63, 185, 80, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'JavaScript',
                    data: [10, 25, 40, 50, 60, 70],
                    borderColor: 'rgba(255, 171, 76, 1)',
                    backgroundColor: 'rgba(255, 171, 76, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }
            ]
        };
        
        progressChart = new Chart(ctx, {
            type: 'line',
            data: progressData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Nivel de dominio (%)',
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            },
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            family: "'Inter', sans-serif",
                            size: 14
                        },
                        bodyFont: {
                            family: "'Inter', sans-serif",
                            size: 13
                        },
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Inicializar el gráfico de proyectos (gráfico de barras)
    function initProjectsChart() {
        const ctx = document.getElementById('projects-chart');
        if (!ctx) return;
        
        // Configuración del gráfico de proyectos
        const projectCategories = ['Académicos', 'Personales', 'Profesionales', 'Open Source'];
        const projectsData = {
            labels: projectCategories,
            datasets: [
                {
                    label: 'Python',
                    data: [5, 3, 2, 1],
                    backgroundColor: 'rgba(88, 166, 255, 0.7)',
                    borderColor: 'rgba(88, 166, 255, 1)',
                    borderWidth: 1
                },
                {
                    label: 'C#',
                    data: [3, 1, 2, 0],
                    backgroundColor: 'rgba(63, 185, 80, 0.7)',
                    borderColor: 'rgba(63, 185, 80, 1)',
                    borderWidth: 1
                },
                {
                    label: 'JavaScript',
                    data: [1, 2, 0, 2],
                    backgroundColor: 'rgba(255, 171, 76, 0.7)',
                    borderColor: 'rgba(255, 171, 76, 1)',
                    borderWidth: 1
                },
                {
                    label: 'SQL',
                    data: [4, 1, 3, 0],
                    backgroundColor: 'rgba(249, 117, 131, 0.7)',
                    borderColor: 'rgba(249, 117, 131, 1)',
                    borderWidth: 1
                }
            ]
        };
        
        projectsChart = new Chart(ctx, {
            type: 'bar',
            data: projectsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Número de proyectos',
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            },
                            usePointStyle: true,
                            pointStyle: 'rectRounded'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            family: "'Inter', sans-serif",
                            size: 14
                        },
                        bodyFont: {
                            family: "'Inter', sans-serif",
                            size: 13
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Inicializar el gráfico de lenguajes (gráfico de radar)
    function initLanguagesChart() {
        const ctx = document.getElementById('languages-chart');
        if (!ctx) return;
        
        // Configuración del gráfico de lenguajes
        const languagesData = {
            labels: ['Python', 'SQL', 'C#', 'C++', 'Delphi', 'JavaScript'],
            datasets: [{
                label: 'Tiempo Dedicado (Horas)',
                data: [800, 700, 600, 400, 500, 350],
                backgroundColor: 'rgba(88, 166, 255, 0.2)',
                borderColor: 'rgba(88, 166, 255, 0.8)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(88, 166, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(88, 166, 255, 1)',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        };
        
        languagesChart = new Chart(ctx, {
            type: 'radar',
            data: languagesData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        angleLines: {
                            color: 'rgba(200, 200, 200, 0.2)'
                        },
                        grid: {
                            color: 'rgba(200, 200, 200, 0.2)'
                        },
                        pointLabels: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 14,
                                weight: 600
                            },
                            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color')
                        },
                        ticks: {
                            backdropColor: 'transparent',
                            color: 'rgba(150, 150, 150, 0.8)',
                            font: {
                                size: 10
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleFont: {
                            family: "'Inter', sans-serif",
                            size: 14
                        },
                        bodyFont: {
                            family: "'Inter', sans-serif",
                            size: 13
                        },
                        callbacks: {
                            label: function(context) {
                                return `${context.raw} horas`;
                            }
                        }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Animación de las barras de progreso de habilidades
    function animateProficiencyBars() {
        const proficiencyLevels = document.querySelectorAll('.proficiency-level');
        
        if (proficiencyLevels.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const width = bar.parentElement.getAttribute('style') ? 
                                     bar.parentElement.getAttribute('style').match(/width: (\d+)%/)[1] : 
                                     bar.getAttribute('style').match(/width: (\d+)%/)[1];
                        
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, 300);
                        
                        observer.unobserve(bar);
                    }
                });
            }, { threshold: 0.2 });
            
            proficiencyLevels.forEach(bar => {
                observer.observe(bar);
            });
        }
    }
});
