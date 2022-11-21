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
    this.interval = setInterval(() => {
      if (this.ammo >= 0) {
        this.ammo = this.ammo + num;
        console.log(this.ammo)
      }
    }, 30)
  }
}

/// Iteration 5 tests
const machineGun = new Weapon('Machine gun', 90, 50);
console.log('Begin:')
machineGun.shoot();
setTimeout(() => machineGun.stopShooting(), 1000);
setTimeout(() => machineGun.reload(35), 1500);