const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');
const signUpForm = document.querySelector('.sign-up-container form');
const emailContainer = document.querySelector('.email-container');
const signUpBtn = document.querySelector('.sign-up-btn');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
    emailContainer.style.display = 'block';
    signUpBtn.innerHTML = 'Create Account';
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    emailContainer.style.display = 'none';
    signUpBtn.innerHTML = 'Sign in';
});