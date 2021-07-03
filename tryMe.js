let player1 = {
  name: "Lily",
  battery: 70,
  chargeBattery: function () {
    this.battery = 100;
  },
};

let player2 = {
  name: "John",
  battery: 30,
};

player1.chargeBattery.call(player2);
console.log(player1);
console.log(player2);
