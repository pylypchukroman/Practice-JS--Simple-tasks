const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listElem = document.querySelector('.gallery');
console.log(listElem);

// const galleryElem = images.map(image => {

//   const imgElem = document.createElement('img');
//   imgElem.src = image.url;
//   imgElem.alt = image.alt;
//   imgElem.width = 600;
//   const imgItemElem = document.createElement('li');
//   imgItemElem.append(imgElem);
//   return imgItemElem;

// });
// // console.log(galleryElem);
// listElem.append(...galleryElem);
function renderList() {
  const galleryElem = images.map(image => {
    return `<li>
    <img src="${image.url}" alt="${image.alt}" width ="400px"></img>
    </li>`;
  }).join('')
listElem.insertAdjacentHTML('afterbegin', galleryElem)
}
renderList();