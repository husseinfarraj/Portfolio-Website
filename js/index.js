// Find the class with the index page called .nav-toggle
const navToggle = document.querySelector('.nav-toggle');
// Finding all nav links
const navLinks = document.querySelectorAll('.nav__link');

// when clicked on navigation, open to nav
navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

// For any of the navigation links click on, get rid of navigation section
navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})

