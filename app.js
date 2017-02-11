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
// Pike Place elements on page

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
