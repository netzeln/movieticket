function Ticket(name,time,firstRun,senior,matinee) {
  this.name = name;
  this.time = time;
  this.firstRun = firstRun
  this.senior = senior
  this.matinee = matinee
}

Ticket.prototype.ticketPrice = function() {
  var basePrice = 10;
  if (this.firstRun === true && this.matinee === false && this.senior === false) {
    return basePrice;
  }
}
