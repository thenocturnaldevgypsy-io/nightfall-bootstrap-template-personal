/* ========================================================
* Template: NightFall - Free Porfolio / Personal Website Theme build with Bootstrap 5.3.3 by TheNocturnalDevGypsy
* Version and Updated: Version 1.2, Oct 13 2024 with Bootstrap v5.3.3
* Author: github.com/TheNocturnalDevGypsy [ Abegail Baustista Torrendon ]
* GitHub Source: https://github.com/thenocturnaldevgypsy/nightfall-bootstrap-template-developer-portfolio
* License: MIT License - https://github.com/thenocturnaldevgypsy/nightfall-bootstrap-template-developer-portfolio/blob/master/LICENSE
======================================================== */

/*--------------------------------------------------------------
# General - Start
--------------------------------------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 100; // Adjust this value based on your padding/margin
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
/*--------------------------------------------------------------
# General - End
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# Home Section / Typing Animation - Start
--------------------------------------------------------------*/
const keywords = document.querySelectorAll('.keyword');
let index = 0;

function type() {
    // Hide all keywords first
    keywords.forEach(keyword => {
        keyword.style.display = 'none';
    });

    // Show the current keyword
    const currentKeyword = keywords[index];
    currentKeyword.style.display = 'inline'; // Show the current keyword
    currentKeyword.textContent = ''; // Clear the text content for typing effect

    let charIndex = 0;

    function typeChar() {
        if (charIndex < currentKeyword.dataset.text.length) {
            currentKeyword.textContent += currentKeyword.dataset.text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 150); // Typing speed
        } else {
            setTimeout(erase, 1000); // Time before erasing
        }
    }

    function erase() {
        if (charIndex > 0) {
            currentKeyword.textContent = currentKeyword.textContent.slice(0, -1); // Erase last character
            charIndex--;
            setTimeout(erase, 100); // Erasing speed
        } else {
            index = (index + 1) % keywords.length; // Move to the next keyword
            type(); // Start typing the next keyword
        }
    }

    // Start typing the characters
    typeChar();
}

// Initialize the keywords' text
keywords.forEach(keyword => {
    keyword.dataset.text = keyword.textContent; // Store the text in a data attribute
    keyword.textContent = ''; // Clear the displayed text
});

// Start the typing effect
type();
/*--------------------------------------------------------------
# Home Section / Typing Animation - End
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# About Section / Counting Happy Clients Animation - Start
--------------------------------------------------------------*/
function animateStats() {
   const stats = document.querySelectorAll('.stats'); // Select all elements with class 'stats'
   stats.forEach((stat) => {
      let targetValue = parseInt(stat.innerHTML); // Get the final value from the innerHTML
      let startValue = 0; // Starting value for the count
      let duration = 6000; // Total duration of the animation in milliseconds
      let increment = targetValue / (duration / 60); // Increment per frame

      // Function to update the value of the stats
      function updateCount() {
         startValue += increment; // Increment the starting value
         if (startValue < targetValue) {
            stat.innerHTML = Math.floor(startValue); // Set the innerHTML to the rounded value
            requestAnimationFrame(updateCount); // Call the function recursively
         } else {
            stat.innerHTML = targetValue; // Ensure the final value is correct
         }
      }

      updateCount(); // Start the animation
   });
}

// Call the function when the window is loaded or the section becomes visible
window.addEventListener('load', animateStats);
/*--------------------------------------------------------------
# About Section / Counting Happy Clients Animation - End
--------------------------------------------------------------*/

/*--------------------------------------------------------------
# About Section / Skills Metrics Animation - Start
--------------------------------------------------------------*/
function animateSkillBars() {
   const skillLevels = document.querySelectorAll('.skill-level');

   skillLevels.forEach(skill => {
      const level = skill.getAttribute('data-skill-level');
      skill.style.width = level + '%'; // Grow the bar to the skill percentage
   });
}

// Trigger the animation on page load or scroll to the skill section
window.addEventListener('load', animateSkillBars);
/*--------------------------------------------------------------
# About Section / Skills Metrics Animation - Start
--------------------------------------------------------------*/