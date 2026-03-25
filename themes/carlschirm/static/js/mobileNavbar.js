document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // Toggle dropdowns on click/tap for touch devices
  const $dropdownLinks = document.querySelectorAll('.navbar-item.has-dropdown > .navbar-link');

  $dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const dropdown = link.parentElement;

      // Close other open dropdowns
      $dropdownLinks.forEach(otherLink => {
        const otherDropdown = otherLink.parentElement;
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('is-active');
        }
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle('is-active');
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', () => {
    $dropdownLinks.forEach(link => {
      link.parentElement.classList.remove('is-active');
    });
  });

});