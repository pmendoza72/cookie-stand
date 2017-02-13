// Building a constructor function
// from previous literal

function Store(name, min, max, avgCookiesPerCustomer){
  this.name= name;
  this.min = min;
  this.max = max;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersPerHour = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Cookies per hour generator

  this.cookiesPerHour = [];
  this.generateCookies = function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour[i] = Math.round(this.customersPerHour(this.min, this.max)*this.avgCookiesPerCustomer);
    }
  }

  // Render a table row
  // for each cookie stand

  this.renderAsRow = function() {
    var cookieTable = document.getElementById('cookieTable');
    var trElement = document.createElement('tr');
    var nameData = document.createElement('td');
    nameData.textContent = this.name;
    trElement.appendChild(nameData);
    cookieTable.appendChild(trElement);
    for (i = 0; i < 8; i++) {
      nameData = document.createElement('td');
      nameData.textContent = this.cookiesPerHour[i];
      trElement.appendChild(nameData);
      cookieTable.appendChild(trElement);
    }
  }
}

// Creating a row for each store

var storeStand = new Store('Pike Place',	17,	88,	5.2);
console.log(storeStand);
storeStand.generateCookies();
storeStand.renderAsRow();

var storeStand = new Store('SeaTac Airport', 6, 24, 1.2);
console.log(storeStand);
storeStand.generateCookies();
storeStand.renderAsRow();

var storeStand = new Store('Southcenter',	11,	38,	1.9);
console.log(storeStand);
storeStand.generateCookies();
storeStand.renderAsRow();

var storeStand = new Store('Bellevue Square', 24, 48, 3.3);
console.log(storeStand);
storeStand.generateCookies();
storeStand.renderAsRow();
