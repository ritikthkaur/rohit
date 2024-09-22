// Add event listeners to buttons to open modals
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', (event) => {
        const modal = document.querySelector(event.target.getAttribute('href')); // Get modal by href
        modal.style.display = 'flex'; // Display the modal
    });
});

// Add event listeners to close buttons to close modals
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', (event) => {
        const modal = event.target.closest('.modal'); // Get the closest modal
        modal.style.display = 'none'; // Hide the modal
    });
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    alert('Login Successful!'); // Alert user
    document.getElementById('login').style.display = 'none'; // Hide modal
});

// Handle sign-up form submission
document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    alert('Sign Up Successful!'); // Alert user
    document.getElementById('signup').style.display = 'none'; // Hide modal
});

// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide links
}

// Event listener for mobile menu button
document.querySelector('.mobile-menu-button').addEventListener('click', toggleMobileMenu);

// Function to handle footer link clicks
function handleFooterLinkClick(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const linkText = event.target.textContent; // Get the clicked link text
    alert(`You clicked on "${linkText}"`); // Display an alert with the link text
}

// Add event listeners to footer links
document.querySelectorAll('.footer-section a').forEach(link => {
    link.addEventListener('click', handleFooterLinkClick);
});
