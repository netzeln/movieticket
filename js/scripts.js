function Ticket (name,time) {
  this.name = name;
  this.time = time;
  this.senior = false;
  this.matinee = false;
  this.notFirstRun = false;
  this.discounts = [];

}

Ticket.prototype.seniorDiscount = function() {
  this.senior = true;
  this.discounts.push(this.senior);
}

Ticket.prototype.matineeDiscount = function() {
  this.matinee = true;
  this.discounts.push(this.matinee);
}

Ticket.prototype.notFirstRunDiscount = function() {
  this.notFirstRun = true;
  this.discounts.push(this.notFirstRun);
}

Ticket.prototype.ticketPrice = function() {
// var numOfDiscounts = 0
//   for (i = 0; i < this.discounts.length; i++) {
//       if (this.discounts[i] === "true")
//       numOfDiscounts++;
//   }
//   this.price -= numOfDiscounts
var price = 10
if (this.senior === true) {
price -= 1;
}

if (this.matinee === true) {
price -= 1;
}

if (this.notFirstRun === true) {
price -= 1;
}


return price;}
var testTick = new Ticket();

// function Ticket (name,time,discounts) {
//   this.name = name;
//   this.time = time;
//   var notFirstRun = false;
//   var matinee = false;
//   var senior = false;
//   this.discounts = [notFirstRun,matinee,senior]
// }



// function Ticket(name,time,notFirstRun,senior,matinee) {
//   this.name = name;
//   this.time = time;
//   this.notFirstRun = notFirstRun
//   this.senior = senior
//   this.matinee = matinee
// }

// Ticket.prototype.ticketPrice = function() {
//   var basePrice = 10;
//
//   if (this.notFirstRun === false && this.matinee === false && this.senior === false) {
//     return basePrice;
//   }
// }
