describe("Ticket", function() {
  it("displays the name of a given movie", function() {
    var testTicket = new Ticket ("Star Wars","17:30",false,false,false);
    expect(testTicket.name).to.equal("Star Wars");
    expect(testTicket.time).to.equal("17:30");
    expect(testTicket.notFirstRun).to.equal(false);
    expect(testTicket.senior).to.equal(false);
    expect(testTicket.matinee).to.equal(false);
  });

  it("display base price of a first run movie", function() {
    var testTicket = new Ticket ("Star Wars","17:30",false,false,false);
    expect(testTicket.ticketPrice()).to.equal(10);
  });

  it("display a first run attended by a senior", function() {
    var testTicket = new Ticket ("Star Wars","17:30",false,true,false);
    expect(testTicket.ticketPrice()).to.equal(10);
  });
});
