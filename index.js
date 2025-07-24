

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

// contact form 
// Form submission handling
// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const submitBtn = this.querySelector('.form__submit');
//     const originalText = submitBtn.textContent;
    
//     // Show loading state
//     submitBtn.textContent = 'Sending...';
//     submitBtn.style.background = '#666666';
//     submitBtn.disabled = true;
    
//     // Simulate form submission
//     setTimeout(() => {
//         submitBtn.textContent = 'Message Sent!';
//         submitBtn.style.background = '#22c55e';
        
//         // Reset form
//         this.reset();
        
//         // Reset button after delay
//         setTimeout(() => {
//             submitBtn.textContent = originalText;
//             submitBtn.style.background = '';
//             submitBtn.disabled = false;
//         }, 3000);
//     }, 2000);
// });

// download resume 
   function downloadResume() {
            // Replace this with your actual resume file path
            const link = document.createElement('a');
            link.href = './Pranav-Resume.pdf'; // Update this path
            link.download = 'Pranav-Kulkarni-Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
