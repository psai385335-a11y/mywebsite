
// demo form (doesn't actually send anywhere)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value || 'Friend';
  const resp = document.getElementById('formResponse');
  resp.textContent = `Thanks ${name}! This is a demo — no email was sent.`;
  resp.classList.remove('hidden');
});
