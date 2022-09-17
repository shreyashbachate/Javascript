var listingPrice = 799;
var sellingPrice = 199;

var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount is of : " + Math.round(discountPercentage));