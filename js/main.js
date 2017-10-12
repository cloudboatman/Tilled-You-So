// Change the tab in the stock section
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => tab.addEventListener('click', changeTab));
const tabPages = document.querySelectorAll('#tab-page');

function changeTab(e) {
  //Change the active tab icon at the top
  tabs.forEach(tab => tab.classList.remove('active-tab'));
  e.target.classList.add('active-tab');
  //Change the actual tab
  tabPages.forEach(page => page.classList.remove('active-tab-page'));
  let chosenTab = e.target.innerHTML.toLowerCase();
  let activatedPage = document.querySelector(`.${chosenTab}`);
  activatedPage.classList.add('active-tab-page');

}

// Disable any buttons for out of stock items and show 'Out Of Stock'
const buttons = document.querySelectorAll('.out');
buttons.forEach(button => {
  button.innerHTML = "Out Of Stock",
  button.disabled = true;
});

// Make the popup happen
const itemImages = document.querySelectorAll('.stock-image');
const itemNames = document.querySelectorAll('.item-name');
const popup = document.querySelector('.popup');

itemImages.forEach(image => image.addEventListener('click', openPopup));
itemNames.forEach(name => name.addEventListener('click', openPopup));

function openPopup(e) {
  popup.style.display = "block";
}

// Make the popup vanish
const exit = document.querySelector('.exit');

exit.addEventListener('click', closePopup);

function closePopup() {
  popup.style.display = "none";
}
