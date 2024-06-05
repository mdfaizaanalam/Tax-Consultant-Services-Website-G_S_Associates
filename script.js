/*----------------------Contact Form-----------------------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbwEEjl730E7NGo9pNWPL33bmoifxR6UzBvXHr3EVbBdyIz1HSKATGAoVZzaD21awxlL/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message Sent Successfully"
          setTimeout(function(){
            msg.innerHTML = ""
          }, 3000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


/*    ----------------------Slide Bar--------------------------*/
    
      var sidemenu = document.getElementById("sidemenu");
      function openmenu() {
        sidemenu.style.right = "0";
      }
      function closemenu() {
        sidemenu.style.right = "-200px"
      }

/*---------------------Navigation Bar-------------------------*/

// Function to handle click event on navigation links
function handleNavigationClick(event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Remove the 'active' class from all navigation links
    var links = document.querySelectorAll('nav ul li');
    links.forEach(function (link) {
      link.classList.remove('active');
    });

    // Add the 'active' class to the clicked link's parent li element
    event.target.parentNode.classList.add('active');

    // Smooth scroll to the target section
    var targetId = event.target.getAttribute('href').substring(1);
    var targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Add event listeners to all navigation links
  var links = document.querySelectorAll('nav ul li a');
  links.forEach(function (link) {
    link.addEventListener('click', handleNavigationClick);
  });
    