import CONFIG from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject Site Info
    document.title = CONFIG.siteName;
    document.getElementById('site-name').textContent = CONFIG.siteName;
    document.getElementById('tagline').textContent = CONFIG.tagline;
    document.getElementById('about-text').textContent = CONFIG.aboutText;

    // Inject Logo
    if (CONFIG.logoPath) {
        const logoContainer = document.getElementById('logo-container');
        logoContainer.innerHTML = `<img src="${CONFIG.logoPath}" alt="${CONFIG.siteName}" class="site-logo">`;
    }

    // Initialize Vanta 3D Background
    if (typeof VANTA !== 'undefined') {
        VANTA.NET({
            el: "body",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x00d2ff,
            backgroundColor: 0x07090f, // Darker for more contrast
            points: 15.00, // More points for a "molecular" look
            maxDistance: 20.00,
            spacing: 15.00,
            showDots: true // Added dots for a scientific feel
        });
    }

    // Inject Links
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = ''; // Clear loading state

    CONFIG.links.forEach((link, index) => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = "_blank";
        linkElement.className = 'link-card';
        linkElement.style.animationDelay = `${index * 0.1}s`;

        linkElement.innerHTML = `
            <div class="link-icon" style="color: ${link.color}">
                <i class="${link.icon}"></i>
            </div>
            <div class="link-info">
                <span class="link-name">${link.name}</span>
                <span class="link-url-placeholder">Visit Now</span>
            </div>
        `;

        linksContainer.appendChild(linkElement);
    });
});
