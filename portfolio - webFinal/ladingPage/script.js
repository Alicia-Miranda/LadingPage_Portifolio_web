
// Newsletter form submit
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado pela sua inscrição!');
            e.target.reset();
        });
    }
    
});