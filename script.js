const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');
const title = document.querySelector('h1');
const InputChange = document.querySelector('input')
var whatchVideo = ''

function typewritter(element) {
  const textarray = element.innerHTML.split('');
  element.innerHTML = '';
  textarray.forEach((letra, i) => {
    setTimeout(() => {
      element.innerHTML += letra;
    }, 75 * i);
  });
}
typewritter(title);

form.addEventListener('animationstart', (event) => {
  if (event.animationName === 'down') {
    document.querySelector('body').style.overflow = 'hidden';
  }
});

form.addEventListener('animationend', (event) => {
  if (event.animationName === 'down') {
    form.style.display = 'none';
    document.querySelector('body').style.overflow = 'none';
  }
});


function Onchange() {
  whatchVideo = InputChange.value
  
  if(whatchVideo === ''){
     window.alert('Por favor digite um codigo de Vídeo ❌');
  }else(whatchVideo === String);{
   console.log(whatchVideo)
  }

  function handleVideo() {
    function handleFormat() {

    }
    handleFormat()
  }
  handleVideo()
}