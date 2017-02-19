// Building a constructor function
// from previous literal


function Store(name, min, max, avg){
  this.name= name;
  this.min = min;
  this.max = max;
  this.total = 0;
  this.avg = avg;
  this.customersPerHour = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Cookies per hour generator

  this.cookiesPerHour = [];

  this.generateCookies = function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour[i] = Math.round(this.customersPerHour(this.min, this.max)*this.avg);
      this.total += this.cookiesPerHour[i];
    }
  }

  // Render a table row
  // for each cookie stand


  this.renderAsRow = function() {
    this.generateCookies();
    var cookieTable = document.getElementById('cookieTable');
    var trElement = document.createElement('tr');
    var nameData = document.createElement('td');
    var total = document.createElement('td');
    nameData.textContent = this.name;
    trElement.appendChild(nameData);
    cookieTable.appendChild(trElement);

    for (i = 0; i < 8; i++) {
      nameData = document.createElement('td');
      nameData.textContent = this.cookiesPerHour[i];
      trElement.appendChild(nameData);
    }
    nameData = document.createElement('td');
    nameData.textContent = this.total;
    trElement.appendChild(nameData);
  };

}


function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var name = event.target.name.value;
  var min = parseFloat(event.target.min.value);
  var max = parseFloat(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);

  var store = new Store(name, min, max, avg);
  store.renderAsRow();

  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}


// Creating a row for each store
form.addEventListener('submit', handleFormSubmit);

var storeStand = new Store('Pike Place',	17,	88,	5.2);
console.log(storeStand);
storeStand.renderAsRow();

var storeStand = new Store('SeaTac Airport', 6, 24, 1.2);
console.log(storeStand);
storeStand.renderAsRow();

var storeStand = new Store('Southcenter',	11,	38,	1.9);
console.log(storeStand);
storeStand.renderAsRow();

var storeStand = new Store('Bellevue Square', 24, 48, 3.3);
console.log(storeStand);
storeStand.renderAsRow();

var storeStand = new Store('Alki', 3, 24, 2.6);
console.log(storeStand);
storeStand.renderAsRow();
