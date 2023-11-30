function changeBackgroundColor() {
  const color = document.querySelector('[data-color]').value
  // console.log(color)
  document.body.style.backgroundColor = color
}

function addItemsToList() {
  const form = document.querySelector('[data-form]')
  const ul = document.querySelector('[data-ul]')

  const value = form.value
  const li = document.createElement('li')
  li.innerHTML = value
  ul.appendChild(li)
}

function addParagraph() {
  const input = document.querySelector('#text')
  const val = input.value;
  const p = document.createElement('p')
  //  p.innerHTML = val
  p.textContent = val
  document.querySelector('article').appendChild(p)

}

// you will add comments here
function addImageToPage() {
  const fig = document.querySelector('figure');

  let image = document.createElement('img');
  image.src = 'https://picsum.photos/id/1020/640/480';
  image.alt = "this is a sample image of something";
  image.width = 400;
  image.style.rotate = '45deg'
  fig.appendChild(image)
}


// console.log('hello'+ 1000 + 'world')
for (let i = 0; i < 200; i++) {
  const figure = document.querySelector('figure')
  const image = document.createElement('img');
  image.src = 'https://picsum.photos/id/' + i + '/50';
  figure.appendChild(image)
}