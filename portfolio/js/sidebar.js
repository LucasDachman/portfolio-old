
const sidebar = document.getElementsByClassName('sidebar')[0];
const navItems = document.getElementsByClassName('nav-item');
const dots = document.getElementsByClassName('dot');
const overlay = document.getElementsByClassName('overlay')[0];


sidebar.onmouseleave = () => {
  overlay.style.backgroundColor = 'transparent';
  setTimeout(() => {
    overlay.style.visibility = 'hidden';
    [].forEach.call(dots, (dot) => {
      dot.style.display = 'block';
    });
    [].forEach.call(navItems, (item) => {
      item.style.display = 'none';
    });
  }, 300);
};

sidebar.onmouseenter = () => {
  overlay.style.visibility = 'visible';
  overlay.style.backgroundColor = 'rgba(100%, 100%, 100%, 0.95)';
  [].forEach.call(dots, (dot) => {
    dot.style.display = 'none';
  });
  [].forEach.call(navItems, (item) => {
    item.style.display = 'block';
  });

}