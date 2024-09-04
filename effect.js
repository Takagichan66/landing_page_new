document.addEventListener("DOMContentLoaded", function() {
    const shades = document.querySelectorAll('.shade1, .shade2, .shade3, .shade4, .shade5, .shade6, .shade7');
    shades.forEach((shade, index) => {
        setTimeout(() => {
            shade.classList.add('visible');
        }, index * 100);
    });

    const elementsToFadeIn = document.querySelectorAll('.two_pp, .three_pp, .grass, .Viegrand, .Description');
    elementsToFadeIn.forEach(element => {
        element.classList.add('fade-in');
    });

    // Adding fade-in to containerOne when scrolled into view
    const containerOne = document.querySelector('.sectionOne');
    if (sectionOne) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once the element is visible
                }
            });
        }, {
            threshold: 3 // Trigger when 10% of the element is visible
        });

        observer.observe(sectionOne);
    }

    // Snowflake effect code (unchanged)
    const snowContainer = document.querySelector('.snow-container');
    const snowflakeImages = [
        'assets/13 1icon1_intro.png',
        'assets/14 1icon2_intro.png',
        'assets/15 1icon4_intro.png',
    ];
    let snowflakeCount = 0;
    const maxSnowflakes = 40;
    function createSnowflake() {
        if (snowflakeCount >= maxSnowflakes) return;
        const snowflake = document.createElement('img');
        const randomIndex = Math.floor(Math.random() * snowflakeImages.length);
        snowflake.src = snowflakeImages[randomIndex];
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.animationDuration = (Math.random() * 5 + 7) + 's';
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;
        snowContainer.appendChild(snowflake);
        snowflakeCount++;
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            snowflakeCount--;
        });
    }
    setInterval(createSnowflake, 1300);
});
