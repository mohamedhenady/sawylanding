import CONFIG from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject Site Info
    document.title = CONFIG.siteName;
    document.getElementById('site-name').textContent = CONFIG.siteName;
    document.getElementById('tagline').textContent = CONFIG.tagline;
    document.getElementById('about-text').textContent = CONFIG.aboutText;

    // Set Background if specified
    if (CONFIG.theme.backgroundImg) {
        document.body.style.backgroundImage = `url('${CONFIG.theme.backgroundImg}')`;
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
