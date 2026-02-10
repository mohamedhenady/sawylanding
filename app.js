import CONFIG from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject Site Info
    document.title = CONFIG.siteName;
    document.getElementById('site-name').textContent = CONFIG.siteName;
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
        logoContainer.innerHTML = `<img src="${CONFIG.logoPath}" alt="${CONFIG.siteName}" class="site-logo">`;
    }

    // Initialize Vanta 3D Background - Pharmacy Related Theme
    if (typeof VANTA !== 'undefined') {
        VANTA.CELLS({
            el: "body",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            color1: 0x00d2ff,
            color2: 0x0a192f, // Deeper medical blue-black
            size: 2.50,
            speed: 0.80
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
            socialElement.className = 'social-icon';
            socialElement.style.color = link.color;
            socialElement.innerHTML = `<i class="${link.icon}"></i>`;
            socialContainer.appendChild(socialElement);
        } else {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.target = "_blank";
            linkElement.className = 'link-card';
            linkElement.style.animationDelay = `${index * 0.1}s`;

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
