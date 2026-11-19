function closeDrawer() {
  var d = document.querySelector('.mdl-layout');
  if (d && d.MaterialLayout) {
    d.MaterialLayout.toggleDrawer();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var drawer = document.querySelector('.mdl-layout__drawer');
  if (drawer) {
    drawer.addEventListener('click', closeDrawer);
  }
});
