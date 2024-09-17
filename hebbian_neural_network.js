// X1 - цифра 5
// X2 - літера "Я"
// const init_x1 = [-1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, 1, -1]
// const init_2 = [-1, -1, 1, 1, 1, -1, 1, -1, -1, 1, -1, -1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, -1]
let X1 = [-1, -1, -1, -1, 1, -1, 1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, 1, -1];
let X2 = [-1, -1, 1, 1, 1, -1, 1, -1, -1, 1, -1, -1, 1, 1, 1, -1, 1, -1, -1, 1, 1, -1, -1, -1, 1];

// Вибираємо перші два елементи з класом .square
const square1 = document.querySelectorAll('.square')[0];
const square2 = document.querySelectorAll('.square')[1];

// Додаємо плитки для square1 на основі масиву X1
X1.forEach(x => {
  const tile = document.createElement('div');
  tile.classList.add('tile');

  // Додати стилі в залежності від значення елемента масиву
  if (x === 1) {
    tile.style.backgroundColor = 'green';  // Плитка зелена для значення 1
  } else {
    tile.style.backgroundColor = 'red';    // Плитка червона для значення -1
  }

  square1.appendChild(tile);
});

// Додаємо плитки для square2 на основі масиву X2
X2.forEach(x => {
  const tile = document.createElement('div');
  tile.classList.add('tile');

  // Додати стилі в залежності від значення елемента масиву
  if (x === 1) {
    tile.style.backgroundColor = 'blue';  // Плитка синя для значення 1
  } else {
    tile.style.backgroundColor = 'yellow'; // Плитка жовта для значення -1
  }

  square2.appendChild(tile);
});


const y_plus = 1
const y_minus = -1

let weights = Array(26).fill(0)

function calcWeights(weights, xArray, yOutput) {
  let newX = [1, ...xArray];

  // console.log(weights.length)
  return newX.map((x, index) => weights[index] += x * yOutput);  
}

function sumHebbian(xArray, weights) {
  let newX = [1, ...xArray];
  let sum = weights.reduce((accum, weight, index) => accum + weight * newX[index], 0);
  // console.log(xArray.length)
  return sum;
}

// Навчання для першого зображення
weights = calcWeights(weights, X1, y_plus);


pyatirka = [
  1, -1,  1,  1, 1,  1, -1,  1,
 -1, -1, -1, -1, 1,  1,  1, -1,
 -1, -1, -1, -1, 1, -1,  1,  1,
  1, -1
]

// console.log(weights);

let supposedForX2 = sumHebbian(X2, weights);

function calcDifferce(oldArray, newArray) {
  let diff = 0

  for (let i = 0; i < oldArray.length; i++) {
    if (oldArray[i] != newArray[i]) {
      diff++
    }
  }

  return diff
}

const difference1 = calcDifferce(pyatirka, weights)
// console.log('різниця', difference1);

weights = calcWeights(weights, X2, y_minus);
// console.log(weights)
bukva = [
  0,  0,  2, 0, 0, 0, 0,  0,
  0,  0, -2, 0, 2, 0, 0, -2,
  0, -2,  0, 0, 0, 0, 0,  0,
  0,  0
]

const difference2 = calcDifferce(bukva, weights)
// console.log(difference2);

if (difference1 >= X1.length * 15 / 100) {
  console.log('Зображення 1 не розпізнано')
} else {
  console.log('Зображення 1 розпізнано')

}

if (difference2 <= X1.length * 15 / 100) {
  console.log('Зображення 2 не розпізнано')
} else {
  console.log('Зображення 2 розпізнано')
}