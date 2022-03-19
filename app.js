function productUpdate(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber)+1;
    } else if(productNumber>0){
        productNumber = parseInt(productNumber)-1;
    }
productInput.value = productNumber;
// update product total
const productTotal = document.getElementById(product + "-total");
productTotal.innerText = parseInt (productNumber) * price;
// calculate total
calculateTotal()
}

function getInputValue(product){
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const iphoneTotal = getInputValue("iPhone") * 147000;
    const speakersTotal = getInputValue("speakers") * 24800;
    const gimbalTotal = getInputValue("gimbal") * 8200;
    const shoesTotal = getInputValue("shoes") * 1800;
    const subTotal = iphoneTotal + speakersTotal + gimbalTotal + shoesTotal;
    const discount = subTotal * .05;
    const totalPrice = subTotal - discount;
    //   update on the html
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("discount").innerText = discount;
    document.getElementById("total-price").innerText = totalPrice;
}
// handle increase decrease events
document.getElementById("iPhone-plus").addEventListener("click", function () {
    productUpdate("iPhone", 147000, true);
});
  
document.getElementById("iPhone-minus").addEventListener("click", function () {
    productUpdate("iPhone", 147000, false);
});
document.getElementById("gimbal-plus").addEventListener("click", function () {
    productUpdate("gimbal", 8200, true);
});
  
document.getElementById("gimbal-minus").addEventListener("click", function () {
    productUpdate("gimbal", 8200, false);
});
document.getElementById("speakers-plus").addEventListener("click", function () {
    productUpdate("speakers", 24800, true);
});
  
document.getElementById("speakers-minus").addEventListener("click", function () {
    productUpdate("speakers", 24800, false);
});
document.getElementById("shoes-plus").addEventListener("click", function () {
    productUpdate("shoes", 1800, true);
});
  
document.getElementById("shoes-minus").addEventListener("click", function () {
    productUpdate("shoes", 1800, false);
});