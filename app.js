var pikePlace = {
  min: 17,
  max: 88,
  cookiesPerHour:[],
  avgCookiesPerCustomer: 5.2,
  CustomersPerHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  generateCookies:function(){
    for (var i = 0; i < 8; i++){
      this.cookiesPerHour[i]=Math.round(this.customerPerHourFnctn(this.min, this.max)*this.averageCookiesPerCustomer);
    }
  }
}
