import { registerImage } from "./lazy";
const mountNOde = document.querySelector('#images');
const addButton = document.querySelector('button');
const removeBUtton = document.querySelector('#remove');

const maximum = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createIMageNOde = () => {
  const container = document.createElement('div');
  container.className = 'p-4';

  const image = document.createElement('img');
  image.className= ('mx-auto');
  image.width = '320';
  image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(image)

  return container;
}

const removeImage = () => {
  const nodeElementsImages = mountNOde.children;
  const listEelement = [...nodeElementsImages];

  listEelement.forEach(element => element.remove());
}


const addIMage = () => {
  const newImage = createIMageNOde();
  mountNOde.appendChild(newImage);
  registerImage(newImage);
}

addButton.addEventListener('click', addIMage);
removeBUtton.addEventListener('click', removeImage);
