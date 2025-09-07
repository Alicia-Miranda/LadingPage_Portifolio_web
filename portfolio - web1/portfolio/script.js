
// Rolagem suave para o topo
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Newsletter form submit
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pela sua inscrição!');
    e.target.reset();
});