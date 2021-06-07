import sideDrawerClasses from "../SideDrawer/Sidedrawer.module.css";
const toggleSideMenu = () =>
  document
    .getElementById("mobileMenu")
    .classList.toggle(sideDrawerClasses.open);

export default toggleSideMenu;
