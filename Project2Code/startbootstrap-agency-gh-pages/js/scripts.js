const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const raccoon_btn = document.getElementById('raccoon_btn');
const fox_btn = document.getElementById('fox_btn');

const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const raccoon_result = document.getElementById('raccoon_result');
const fox_result = document.getElementById('fox_result');


cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
raccoon_btn.addEventListener('click', getRandomRaccoon);
fox_btn.addEventListener('click', getRandomFox);


function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
function getRandomRaccoon(){
	fetch('https://some-random-api.ml/animal/raccoon')
	.then(res => res.json())
		.then(data => {
			raccoon_result.innerHTML = `<img src=${data.image} alt="Raccoon" />`
		});
}
function getRandomFox(){
	fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
        fox_result.innerHTML = `<img src=${data.image} alt="fox" />`
    });
  

}

async function start() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await response.json()
      createBreedList(data.message)
    } catch (e) {
      console.log("There was a problem fetching the breed list.")
    }
  }
  
  start()
  
  function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
          <option>Choose a dog breed</option>
          ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
          }).join('')}
        </select>
    `
  }
  
  async function loadByBreed(breed) {
    if (breed != "Choose a dog breed") {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
      const data = await response.json()
    console.log(data)
    DisplaytheImage(data.message)
    }
  }
  function DisplaytheImage(images){
  document.getElementById("Display").innerHTML = `
  <div class="slide" style="background-image: url('${images[1]}')"></div>
  `
  }
  





window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
  
