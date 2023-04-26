const envelopeFlap = document.querySelector('.envelope-flap');

envelopeFlap.addEventListener('animationend', () => {
  envelopeFlap.classList.remove('envelope-flap-open');
});

envelopeFlap.addEventListener('click', () => {
  envelopeFlap.classList.add('envelope-flap-open');
});
