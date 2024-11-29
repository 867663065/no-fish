document.addEventListener('DOMContentLoaded', (enevt) => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('main section');
    
    sections.forEach((section, index) => {
        if (index != 3) {
            section.classList.add('hidden-section');
        }
    })

    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = navLink.getAttribute('link-target');
            const targetElement = document.getElementById(targetId);

            sections.forEach((section) => {
                section.classList.add('hidden-section')
            })
            targetElement.classList.remove('hidden-section')
        })
    })
})