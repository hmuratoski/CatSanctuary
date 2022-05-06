const baseUrl = 'https://api.thecatapi.com/v1/images/search'
const section = document.querySelector('div')
const button = document.querySelector('.btn')


// fetching from the api & check (with try/catch);
async function getRandomCats() {
    section.innerHTML = ''
    
  try {
    const response = await fetch(baseUrl)
    const json = await response.json()
    console.log('JSON:', json)
    return randomCatPhoto(json)
  } catch (e) {
    console.log('This is an error')
    console.log(e)
  }
}
//Final adding of contents to HTML components;
randomCatPhoto = json => {
    let photo = json[0].url
    section.classList.add('cats')
    
    let image = document.createElement('img')
    image.src = photo
    image.classList.add('random_cats')
    image.alt = photo
    section.appendChild(image)
}
//Eventlistener, that follows the click on the buttons and provides content;
button.addEventListener('click', getRandomCats)