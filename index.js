//landing popups
function blueAlert() {
  alert("Your choice: to remain in contented ignorance");
}

/// Iteration 2: getMaxNum

function getMaxNum (array) {
  let maxNumber = array[0];
  if (typeof maxNumber === 'string') {
    maxNumber = maxNumber.length;
  } else if (typeof maxNumber === 'object') {
    maxNumber = maxNumber[0] * maxNumber[1] * maxNumber[2]
  }
  if (array.length === 0) return null;
  if (array.length === 1) return maxNumber;

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (typeof element === 'string') {
      element = element.length;
    } else if (typeof element === 'object') {
      element = element[0] * element[1] * element[2]
    }
    if (element > maxNumber) {
      maxNumber = element;
    }
  }
  return maxNumber;
};

console.log(getMaxNum([45, 67, 12, 34])) // Should return 67
console.log(getMaxNum(['hello', [5, 400, 2], 34, 45, 12, 0])) // Should return 45

/// Iteration 3: changeItem

function changeItem (array, num1, num2) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== num1) {
      newArray.push(array[i])
    }
    else if (array[i] === num1) {
      newArray.push(num2)
    }
  }
  return newArray;
}

console.log(changeItem([3, 5, 7], 3, 4)) // Should return [4,5,7]
console.log(changeItem([17, 18, 6, 18, 3], 18, 2)) // Should return [17, 2, 6, 2, 3];
console.log(changeItem([1, 1, 3, 2, 4, 1, 1], 1, 8)) // Should return [8, 8, 3, 2, 4, 8, 8] 

/// Iteration 4: orderByDate

function orderByDate (array) {
  const newArray = JSON.parse(JSON.stringify(array));
  const sortedArray = newArray.sort((a,b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else { return 0}
  })
  return sortedArray;
};

const birthdays = [
  {
    name: 'Bob',
    year: 1989,
  },
  {
    name: 'Rosita',
    year: 1990,
  },
  {
    name: 'Stevie',
    year: 1988,
  },
  {
    name: 'Marlon',
    year: 1979,
  },
]

const importantDates = [
  {
    title: 'Wedding aniversary',
    year: 2014,
  },
  {
    name: "Daddy's birthday",
    year: 2013,
  },
  {
    name: 'Graduation party',
    year: 2019,
  }
]

console.log(orderByDate(birthdays)) // Should return them ordered 1979, 1988, 1989, 1990
console.log(orderByDate(importantDates)) // Should return them ordered 2013, 2014, 2019

/// Iteration 5: new machine gun
class Weapon {
  constructor (type, power, ammo = 10) {
    this.type = type;
    this.power = power;
    this.ammo = ammo;
    this.interval = this.interval;
  }

  shoot() {
    this.interval = setInterval(() => {
      if (this.ammo > 0) {
        this.ammo--;
        console.log(this.ammo)
      }
    }, 30)
  }

  stopShooting() {
    clearInterval(this.interval)
  }

  reload(num) {
    this.ammo = this.ammo + num;
    console.log(this.ammo)
    }
}

/// Iteration 5 tests
const machineGun = new Weapon('Machine gun', 90, 50);
console.log('Begin:')
machineGun.shoot();
setTimeout(() => machineGun.stopShooting(), 1000);
setTimeout(() => machineGun.reload(35), 2000);



