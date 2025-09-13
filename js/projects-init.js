document.addEventListener('DOMContentLoaded', function() {
    // Initialize all accordions
    var accordions = document.querySelectorAll('.accordion-collapse');
    accordions.forEach(function(accordion) {
        accordion.addEventListener('show.bs.collapse', function() {
            this.closest('.accordion-item').classList.add('active');
        });
        accordion.addEventListener('hide.bs.collapse', function() {
            this.closest('.accordion-item').classList.remove('active');
        });
    });
});