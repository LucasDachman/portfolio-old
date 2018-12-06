
const sidebar = document.getElementsByClassName('sidebar')[0];
const navItems = document.getElementsByClassName('nav-item');
const dots = document.getElementsByClassName('dot');


sidebar.onmouseleave = () => {
  setTimeout(() => {
    [].forEach.call(dots, (dot) => {
      dot.style.display = 'block';
    });
    [].forEach.call(navItems, (item) => {
      item.style.display = 'none';
    });
  }, 300);
};

sidebar.onmouseenter = () => {
  [].forEach.call(dots, (dot) => {
    dot.style.display = 'none';
  });
  [].forEach.call(navItems, (item) => {
    item.style.display = 'block';
  });

}