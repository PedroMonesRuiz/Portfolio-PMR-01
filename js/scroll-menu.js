window.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('.body__section');
  var menuLinks = document.querySelectorAll('#menu li a');

  sections.forEach(function(section, index) {
    var bounding = section.getBoundingClientRect();

    if (bounding.top <= 3) {
      menuLinks.forEach(function(link) {
        link.parentElement.classList.remove('active');
      });

      menuLinks[index].parentElement.classList.add('active');
    } else {
      menuLinks[index].parentElement.classList.remove('active');
    }
  });
});




  
  
  