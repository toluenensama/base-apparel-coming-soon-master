document.getElementById('emailSubmit').addEventListener('click', function(event) {
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailErrorText');
    const emailErrorIcon = document.getElementById('emailErrorIcon');
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
        emailError.classList.remove('hidden');
        emailErrorIcon.classList.remove('hidden');
        emailInput.classList.add('border-soft-red');
        event.preventDefault();
    } else {
        emailError.classList.add('hidden');
        emailErrorIcon.classList.add('hidden');
        emailInput.classList.remove('border-soft-red');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}