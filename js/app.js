// This is for ExtraMemorycost
const ExtraMemorycost = document.getElementById('Extra-memory');
const free = document
  .getElementById('8Gb-m')
  .addEventListener('click', function () {
    ExtraMemorycost.innerText = '0';
    upDateTotal();
  });
const giveCost = document
  .getElementById('16Gb-m')
  .addEventListener('click', function () {
    ExtraMemorycost.innerText = '180';
    upDateTotal();
  });
// This is for ExtraMemorycost
// Storagecost
const StorageCost = document.getElementById('Extra-storage');

const firstSsd = document
  .getElementById('fistSSD')
  .addEventListener('click', function () {
    StorageCost.innerText = '0';
    upDateTotal();
  });

const secondSsd = document
  .getElementById('secondSSD')
  .addEventListener('click', function () {
    StorageCost.innerText = '100';
    upDateTotal();
  });

const thirdSsd = document
  .getElementById('thirdSSD')
  .addEventListener('click', function () {
    StorageCost.innerText = '180';
    upDateTotal();
  });

//   end

// delivery Charge

const deliveryCharge = document.getElementById('delivery-cost');

const PrimeOffer = document
  .getElementById('Prime')
  .addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    upDateTotal();
  });
const noOffer = document
  .getElementById('Charge')
  .addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    upDateTotal();
  });
// end

// total
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');

function upDateTotal() {
  const besTotal = Number(bestPrice.innerText);
  const memoryCharge = Number(ExtraMemorycost.innerText);
  const storagesPrice = Number(StorageCost.innerText);
  const deliveryChost = Number(deliveryCharge.innerText);
  const fullTotalPrice =
    besTotal + memoryCharge + storagesPrice + deliveryChost;
  totalPrice.innerText = fullTotalPrice;
}

// end-total
