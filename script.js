function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const menuItems = document.querySelector('.nav-menu');

  // Toggle the "open" class on the menu icon
  menuIcon.classList.toggle('open');

  // Toggle the "show-menu" class on the menu items container
  menuItems.classList.toggle('show-menu');
}