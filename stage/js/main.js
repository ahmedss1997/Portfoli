

// Fixed Navbar


let nav = document.getElementsByClassName('navbar');
let header = document.getElementsByClassName('header');
let win = window;

window.addEventListener('scroll', function() {
  // console.log('helloo')
  if (window.scrollY >= 250) {
    nav[0].classList.add('fixed');
    header[0].classList.remove('marg');
  } else {
    nav[0].classList.remove('fixed');
    header[0].classList.add('marg');
  }
});

// TypeWriter Effect

window.onload = function () {
  'use strict';
  
  let typingP    = document.getElementById('type');
  let typingText = document.getElementById('type').dataset.text.split('#');
  let sentence   = 0;
  
  // start typing
  typing();
  
  function typing () {
    let letter = 0;

    // if the sentence is the last sentence then return to the beginning => 0    typingText.length = 2
    // sentence = sentence < typingText.length ? sentence : 0;
    if (sentence < typingText.length) {
      sentence = sentence; 
    } else {
      sentence = 0;
    }

    let typingInterval = setInterval(function ()  {

      let typingSentence = typingText[sentence];

      typingP.textContent += typingSentence[letter];       // first = 13 index & 14 length   // second = 21 index & 22 length 
      letter++;
      // console.log(letter++)

      // if the letter is the last letter of the sentence then go to next sentence
      // sentence = letter < typingSentence.length ? sentence : sentence + 1;
      if (letter < typingSentence.length) {
        sentence = sentence; 
      } else {
        sentence = sentence + 1;
      }

      if (letter > typingSentence.length - 1) {
        clearInterval(typingInterval);
        clearing();
      }
    }, 300);
  }
  
  function clearing () {
    let clearingInterval = setInterval(function ()  {
      
      let str = typingP.textContent;

      typingP.textContent = typingP.textContent.substring(str.length -1, 0);
      
      if (typingP.textContent.length == 0) {
        clearInterval(clearingInterval);
        typing();
        
      }
    }, 50);
  }
};


// JavaScript Counting

let nums = document.querySelectorAll(".my-services .state .number");
let statsSection = document.querySelector(".my-services .state");
let started = false; // Function Started ? No

window.addEventListener('scroll', function() {
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal
  // console.log(goal);
  let count = setInterval(() => {
    el.textContent++;
    if(el.textContent == goal) {
      clearInterval(count)
    }
  }, 2000 / goal)
}

// Transform Image To Top

let box = document.getElementsByClassName('box');
let imge = document.getElementById('scrol');
let i = 0;

for (i = 0; i <= 8; i++) {
  box[i].onmouseover = function() {
    console.log('zero');
    let imgeselect = this.firstElementChild.firstElementChild.firstElementChild;
    let headselect = this.firstElementChild.firstElementChild;
    let nuum =  imgeselect.height - headselect.clientHeight;
    let mines = '-' + nuum;
    console.log(parseInt(mines));
    console.log(typeof(parseInt(mines)));
    //imgeselect.style.transform = 'translateY(' + mines + 'px)'   // the problem here in the variables
    imgeselect.style.transform  = `translateY(${mines}px)`   // the problem here in the variables
  }
  box[i].onmouseleave = function() {
    console.log('good');
    let imgeselect = this.firstElementChild.firstElementChild.firstElementChild;
    console.log(imgeselect);
    imgeselect.style.transform = "translateY(0px)"
  }
}


// Show / Hidden Other Work Boxies

let myBtnn = document.getElementsByClassName('show-more');
let myBox = document.getElementsByClassName('box');

myBtnn[0].onclick = function() {
  for (i = 9; i <= 14; i++) {
    myBox[i].classList.toggle('hidden');
  }
  if (myBtnn[0].innerHTML == 'Show More') {
    myBtnn[0].innerHTML = 'Less Hide';
  } else {
    myBtnn[0].innerHTML = 'Show More';
  }
}


// Validation + Effects

let input = document.getElementById('main-input');

input.onblur = function() {
  if (this.value !== "") {
    console.log('yes')
    this.parentElement.parentElement.classList.add("has-words-right");
    this.parentElement.parentElement.classList.remove("has-words-wrong");
    this.parentElement.nextElementSibling.style.display = "none";
  } else {
    this.parentElement.parentElement.classList.remove("has-words-right");
    this.parentElement.parentElement.classList.add("has-words-wrong");
    this.parentElement.nextElementSibling.style.display = "block";
  }
}



// Scroll To Top Button


let mybtn = document.getElementById('scroll-top');

window.onscroll = function() {
  console.log('test')
  if(window.pageYOffset > nav[0].offsetHeight + 2000) {
    mybtn.style.display = 'block';
  } else {
    mybtn.style.display = 'none';
  }
}

mybtn.onclick = function() {
  var pos = window.pageYOffset;
  var scrollToTop = setInterval(function upp() {
    console.log(pos);
    if( pos > 0 ) {
      pos = pos - 200;
      console.log(pos);
      window.scrollTo( 0,  pos);  // how far to scroll on each step
      
    } else {
      
      window.clearInterval( scrollToTop );
      
    }
    
  }, 100);  // how fast to scroll ( this equals roughly 60 fps )
}





