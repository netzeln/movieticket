describe("Ticket", function() {
  it("displays the name of a given movie", function() {
    var testTicket = new Ticket ("Star Wars","17:30",true,false,false);
    expect(testTicket.name).to.equal("Star Wars");
    expect(testTicket.time).to.equal("17:30");
    expect(testTicket.firstRun).to.equal(true);
    expect(testTicket.senior).to.equal(false);
    expect(testTicket.matinee).to.equal(false);
  });

  it("display base price of a first run movie", function() {
    var testTicket = new Ticket ("Star Wars","17:30",true,false,false);
    expect(testTicket.name).to.equal("Star Wars");
    expect(testTicket.time).to.equal("17:30");
    expect(testTicket.firstRun).to.equal(true);
    expect(testTicket.senior).to.equal(false);
    expect(testTicket.matinee).to.equal(false);
    expect(testTicket.price).to.equal(10);
  });
});
