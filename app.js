import CONFIG from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject Site Info
    document.title = `${CONFIG.siteNameAr} | ${CONFIG.siteNameEn}`;

    document.getElementById('site-name-ar').textContent = CONFIG.siteNameAr;
    document.getElementById('site-name-en').textContent = CONFIG.siteNameEn;

    document.getElementById('tagline').textContent = CONFIG.tagline;
    document.getElementById('about-text').textContent = CONFIG.aboutText;

    // Contact Info Footer
    const footerInfo = document.getElementById('footer-contact-info');
    footerInfo.innerHTML = `
        <p>التواصل: ${CONFIG.phone} | ${CONFIG.whatsapp}</p>
        <p>موبايل 2: ${CONFIG.mobile2}</p>
    `;

    // Inject Logo
    if (CONFIG.logoPath) {
        const logoContainer = document.getElementById('logo-container');
        logoContainer.innerHTML = `<img src="${CONFIG.logoPath}" alt="${CONFIG.siteNameEn}" class="site-logo">`;
    }

    // Initialize Vanta 3D Background - Darker & Deeper Pharmacy Theme
    if (typeof VANTA !== 'undefined') {
        VANTA.CELLS({
            el: "body",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 0.80, // More zoomed in for depth
            color1: 0x00a8cc, // Slightly more vibrant medical blue
            color2: 0x020a1a, // Near black for deep contrast
            size: 3.50, // Larger cells
            speed: 0.60  // Slower, calmer movement
        });
    }

    // Inject Links
    const linksContainer = document.getElementById('links-container');
    const socialContainer = document.getElementById('social-container');
    linksContainer.innerHTML = ''; // Clear loading state
    socialContainer.innerHTML = '';

    CONFIG.links.forEach((link, index) => {
        if (link.type === 'social') {
            const socialElement = document.createElement('a');
            socialElement.href = link.url;
            socialElement.target = "_blank";
            socialElement.className = 'social-card';
            socialElement.style.color = link.color;
            socialElement.style.animationDelay = `${index * 0.1}s`;
            socialElement.innerHTML = `<i class="${link.icon}"></i>`;
            socialContainer.appendChild(socialElement);
        } else {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.target = "_blank";
            linkElement.className = 'link-card';
            linkElement.style.animationDelay = `${index * 0.15}s`;

            let linkInnerContent = '';

            // Add Thumbnail if exists
            if (link.thumbnail) {
                linkInnerContent += `
                    <div class="thumbnail-box">
                        <img src="${link.thumbnail}" alt="${link.name}">
                    </div>
                `;
            } else {
                linkInnerContent += `
                    <div class="link-icon" style="color: ${link.color}">
                        <i class="${link.icon}"></i>
                    </div>
                `;
            }

            linkInnerContent += `
                <div class="link-info">
                    <span class="link-name">
                        ${link.name}
                        ${link.status ? `<span class="link-status">${link.status}</span>` : ''}
                    </span>
                    <span class="link-url-placeholder">اضغط هنا</span>
                </div>
            `;

            linkElement.innerHTML = linkInnerContent;
            linksContainer.appendChild(linkElement);
        }
    });
});
