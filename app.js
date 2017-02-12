// OBJECT AND METHOD
// FOR PIKE PLACE

var pikePlace = {
  min: 17,
  max: 88,
  cookiesPerHour:[],
  avgCookiesPerCustomer: 5.2,
  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour[i] = Math.round(this.customersPerHour(this.min, this.max) * this.avgCookiesPerCustomer);
    }
  }
}

// Call function to generate cookies
// for Pike Place

pikePlace.generateCookies();

// Create <li> for
// Pike Place elements on page

var parent = document.getElementById('Pike-Place');
var child;
var total = 0;
for (i = 0; i < 8; i++){
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
  } else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
  }
  total += pikePlace.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}

// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);

// OBJECT AND METHOD
// FOR SEATAC AIRPORT

var seaTac = {
  min: 6,
  max: 24,
  cookiesPerHour:[],
  avgCookiesPerCustomer: 1.2,
  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour[i] = Math.round(this.customersPerHour(this.min, this.max) * this.avgCookiesPerCustomer);
    }
  }
}

// Call function to generate cookies
// for SeaTac Airport

seaTac.generateCookies();

// Create <li> for
// SeaTac Airport elements on page

var parent = document.getElementById('SeaTac-Airport');
var child;
var total = 0;
for (i = 0; i < 8; i++){
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
  } else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + seaTac.cookiesPerHour[i] + ' cookies');
  }
  total += seaTac.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}

// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);

// OBJECT AND METHOD
// FOR SOUTHCENTER

var southCenter = {
  min: 11,
  max: 38,
  cookiesPerHour:[],
  avgCookiesPerCustomer: 1.9,
  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour[i] = Math.round(this.customersPerHour(this.min, this.max) * this.avgCookiesPerCustomer);
    }
  }
}

// Call function to generate cookies
// for Southcenter

southCenter.generateCookies();

// Create <li> for
// Southcenter elements on page

var parent = document.getElementById('Southcenter');
var child;
var total = 0;
for (i = 0; i < 8; i++){
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  } else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + southCenter.cookiesPerHour[i] + ' cookies');
  }
  total += southCenter.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}

// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);

// OBJECT AND METHOD
// FOR BELLEVUE SQUARE

var bellevueSquare = {
  min: 20,
  max: 48,
  cookiesPerHour:[],
  avgCookiesPerCustomer: 3.3,
  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour[i] = Math.round(this.customersPerHour(this.min, this.max) * this.avgCookiesPerCustomer);
    }
  }
}

// Call function to generate cookies
// for Bellevue Square

bellevueSquare.generateCookies();

// Create <li> for
// Bellevue Square elements on page

var parent = document.getElementById('Bellevue-Square');
var child;
var total = 0;
for (i = 0; i < 8; i++){
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + bellevueSquare.cookiesPerHour[i] + ' cookies');
  } else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + bellevueSquare.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + bellevueSquare.cookiesPerHour[i] + ' cookies');
  }
  total += bellevueSquare.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}

// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);


// OBJECT AND METHOD
// FOR ALKI

var alki = {
  min: 3,
  max: 24,
  cookiesPerHour:[],
  avgCookiesPerCustomer: 2.6,
  customersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateCookies: function() {
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour[i] = Math.round(this.customersPerHour(this.min, this.max) * this.avgCookiesPerCustomer);
    }
  }
}

// Call function to generate cookies
// for Alki

alki.generateCookies();

// Create <li> for
// Alki elements on page

var parent = document.getElementById('Alki');
var child;
var total = 0;
for (i = 0; i < 8; i++){
  child = document.createElement('li');
  if (i < 2){
    child.textContent= ( (10+i) + ' am:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
  } else  if (i===2){
    child.textContent= ( '12 pm:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
  }else{
    child.textContent= ( (i-2) + ' pm:' + ' ' + alki.cookiesPerHour[i] + ' cookies');
  }
  total += alki.cookiesPerHour[i];
  parent.appendChild(child);
  console.log(total);
}

// Adding total to the <ul>

child = document.createElement('li');
child.textContent = ('Total: ' + total + ' cookies');
parent.appendChild(child);
