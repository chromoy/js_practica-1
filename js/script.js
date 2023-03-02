document.querySelector('title').innerHTML = 'ИЗУЧАЕМ JS';

const btns = document.querySelectorAll('button');
      wrapper = document.querySelector('.btn-block');

// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue'));

// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

// btns[0].addEventListener('click', () => {
//   if (!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red');
//   } else {
//     btns[1].classList.remove('red');
//   }
// });
// ------------ с методом toggle() происходит тоже самое! ------------------

btns[0].addEventListener('click', () => {
  btns[1].classList.toggle('red');
});

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.tagName == "BUTTON") {
//     console.log('Hello!');
//   }
// });

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('Hello baby!');
//   });
// });
//----------- Ещё один способ ДЕЛЕГИРОВАНИЯ! ---------------- 
wrapper.addEventListener('click', (event) => {
  if (event.target && event.target.matches("button")) {
    console.log('Hello!');
  }
});

const btn = document.createElement('button');
btn.classList.add('green');
wrapper.append(btn);