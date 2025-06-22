document.addEventListener('DOMContentLoaded', function() {
    console.log('Strona załadowana');
    // Dodaj interaktywność tutaj
});
// Inicjalizacja AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Symulacja ładowania
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Zamykanie menu po kliknięciu na link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling dla linków nawigacji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Articles Navigation Tabs
const navTabs = document.querySelectorAll('.nav-tab');
const articles = document.querySelectorAll('.article-full');

// Funkcja do aktualizacji aktywnych zakładek
function updateActiveTab(targetId) {
    // Usuń aktywną klasę ze wszystkich zakładek
    navTabs.forEach(tab => tab.classList.remove('active'));
    
    // Dodaj aktywną klasę do klikniętej zakładki
    const activeTab = document.querySelector(`[href="#${targetId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Obsługa kliknięć na zakładki
navTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        updateActiveTab(targetId);
        
        // Płynne przewijanie do artykułu
        const targetArticle = document.getElementById(targetId);
        if (targetArticle) {
            targetArticle.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer dla automatycznej aktualizacji zakładek podczas scrollowania
const articleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const articleId = entry.target.id;
            updateActiveTab(articleId);
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '-100px 0px -100px 0px'
});

// Obserwuj wszystkie artykuły
articles.forEach(article => {
    articleObserver.observe(article);
});

// Player Controls
const playBtn = document.getElementById('playBtn');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    const icon = playBtn.querySelector('i');
    const text = playBtn.querySelector('span') || document.createTextNode('Słuchaj teraz');
    
    if (isPlaying) {
        icon.className = 'fas fa-pause';
        playBtn.innerHTML = '<i class="fas fa-pause"></i> Pauza';
        playBtn.style.background = '#e74c3c';
        // Tutaj można dodać logikę odtwarzania
        console.log('Rozpoczęto odtwarzanie');
    } else {
        icon.className = 'fas fa-play';
        playBtn.innerHTML = '<i class="fas fa-play"></i> Słuchaj teraz';
        playBtn.style.background = '#1db954';
        // Tutaj można dodać logikę pauzowania
        console.log('Zatrzymano odtwarzanie');
    }
});

// Symulacja aktualnie odtwarzanego utworu
const trackInfo = {
    artist: 'The Weeknd',
    title: 'Blinding Lights'
};

// Aktualizacja informacji o utworze
function updateTrackInfo() {
    const artistElement = document.querySelector('.artist');
    const titleElement = document.querySelector('.title');
    
    if (artistElement && titleElement) {
        artistElement.textContent = trackInfo.artist;
        titleElement.textContent = trackInfo.title;
    }
}

// Wywołanie aktualizacji informacji o utworze
updateTrackInfo();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Pobieranie danych z formularza
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Temat"]').value;
        const message = this.querySelector('textarea').value;
        
        // Walidacja
        if (!name || !email || !message) {
            alert('Proszę wypełnić wszystkie wymagane pola.');
            return;
        }
        
        // Symulacja wysłania formularza
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Wysyłanie...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Playlist hover effects
document.querySelectorAll('.playlist-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Playlist interactions
document.querySelectorAll('.playlist-card').forEach(card => {
    card.addEventListener('click', function() {
        const playlistName = this.querySelector('h3').textContent;
        const curator = this.querySelector('.curator').textContent;
        
        // Symulacja otwarcia playlisty w Spotify
        console.log(`Otwieranie playlisty: ${playlistName} (${curator})`);
        
        // Tutaj można dodać rzeczywiste linki do Spotify
        // window.open('spotify-link', '_blank');
    });
});

// Schedule item interactions
document.querySelectorAll('.schedule-item').forEach(item => {
    item.addEventListener('click', function() {
        const showName = this.querySelector('h3').textContent;
        const djName = this.querySelector('p').textContent;
        const time = this.querySelector('.time').textContent;
        
        // Symulacja pokazania szczegółów audycji
        console.log(`Audycja: ${showName} z ${djName} o ${time}`);
        
        // Tutaj można dodać modal z szczegółami audycji
        // showShowDetails(showName, djName, time);
    });
});

// Counter animation dla statystyk
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('K') ? 'K+' : '');
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + (counter.textContent.includes('K') ? 'K+' : '');
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer dla animacji liczników
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(statsSection);
}

// Parallax effect dla hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (hero && heroContent && heroVisual) {
        const rate = scrolled * -0.5;
        heroContent.style.transform = `translateY(${rate}px)`;
        heroVisual.style.transform = `translateY(${rate * 0.5}px)`;
    }
});

// Equalizer animation control
function startEqualizer() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        bar.style.animationDelay = `${index * 0.1}s`;
    });
}

// Start equalizer animation
startEqualizer();

// Newsletter subscription (dodatkowa funkcjonalność)
function addNewsletterSubscription() {
    const newsletterHTML = `
        <div class="newsletter-section" style="background: #667eea; color: white; padding: 50px 0; text-align: center;">
            <div class="container">
                <h3 style="margin-bottom: 20px;">Zapisz się do newslettera</h3>
                <p style="margin-bottom: 30px;">Otrzymuj najnowsze informacje o audycjach i playlistach</p>
                <form class="newsletter-form" style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <input type="email" placeholder="Twój email" required style="padding: 15px; border: none; border-radius: 25px; min-width: 300px;">
                    <button type="submit" style="background: #1db954; color: white; border: none; padding: 15px 30px; border-radius: 25px; cursor: pointer;">Zapisz się</button>
                </form>
            </div>
        </div>
    `;
    
    // Dodanie sekcji newsletter przed footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.insertAdjacentHTML('beforebegin', newsletterHTML);
        
        // Obsługa formularza newsletter
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                alert(`Dziękujemy za zapisanie się do newslettera! Email: ${email}`);
                this.reset();
            });
        }
    }
}

// Dodanie newsletter po załadowaniu strony
setTimeout(addNewsletterSubscription, 3000);

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#1db954' : type === 'error' ? '#e74c3c' : '#667eea'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Dodanie stylów animacji dla powiadomień
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// Test notification
setTimeout(() => {
    showNotification('Witamy w Radio Nextwave.fm! 🎵', 'success');
}, 2500);

console.log('Radio Nextwave.fm - Strona załadowana pomyślnie! 🎵');