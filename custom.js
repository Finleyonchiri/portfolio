// js/custom.js

// Load HTML includes (header.html, footer.html)
document.addEventListener('DOMContentLoaded', function() {
    
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Reinitialize Bootstrap components after header loads
            if (typeof bootstrap !== 'undefined') {
                // Enable all offcanvas toggles
                var offcanvasElements = document.querySelectorAll('[data-bs-toggle="offcanvas"]');
                offcanvasElements.forEach(function(el) {
                    new bootstrap.Offcanvas(el, { backdrop: true });
                });
            }
        })
        .catch(err => console.warn('Header not loaded yet:', err));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(err => console.warn('Footer not loaded yet:', err));
});