const mountNOde = document.querySelector('#images');
const addButton = document.querySelector('button');

const maximum = 122;
const minimum = 1;

const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createIMageNOde = () => {
  const container = document.createElement('div');
  container.className = 'p-4';

  const image = document.createElement('img');
  image.className= ('mx-auto');
  image.width = '320';
  image.src = `https://randomfox.ca/images/${random()}.jpg`;

  container.appendChild(image)

  return container;
}

const addIMage = () => {
  const newImage = createIMageNOde();
  mountNOde.appendChild(newImage);
}

addButton.addEventListener('click', addIMage);
