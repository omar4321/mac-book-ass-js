// This is for ExtraMemorycost
const ExtraMemorycost = document.getElementById('Extra-memory');
// 8GB mamory
const free = document
  .getElementById('8Gb-m')
  .addEventListener('click', function () {
    ExtraMemorycost.innerText = '0';
    upDateTotal();
  });
//   16GB mamory
const giveCost = document
  .getElementById('16Gb-m')
  .addEventListener('click', function () {
    ExtraMemorycost.innerText = '180';
    upDateTotal();
  });
// This is for ExtraMemorycost
// Storagecost
const StorageCost = document.getElementById('Extra-storage');
// 256Gb SSD Storage
const firstSsd = document
  .getElementById('fistSSD')
  .addEventListener('click', function () {
    StorageCost.innerText = '0';
    upDateTotal();
  });
// end
// 512Gb SSD Storage
const secondSsd = document
  .getElementById('secondSSD')
  .addEventListener('click', function () {
    StorageCost.innerText = '100';
    upDateTotal();
  });
// end
// 1TB SSD Storage
const thirdSsd = document
  .getElementById('thirdSSD')
  .addEventListener('click', function () {
    StorageCost.innerText = '180';
    upDateTotal();
  });

//   end

// delivery Charge

const deliveryCharge = document.getElementById('delivery-cost');
// Prime Delivery
const PrimeOffer = document
  .getElementById('Prime')
  .addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    upDateTotal();
  });

//   end
// Delivery Charge
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
const fotter = document.getElementById('Fotter-total');

function upDateTotal() {
  const besTotal = Number(bestPrice.innerText);
  const memoryCharge = Number(ExtraMemorycost.innerText);
  const storagesPrice = Number(StorageCost.innerText);
  const deliveryCost = Number(deliveryCharge.innerText);
  const fullTotalPrice = besTotal + memoryCharge + storagesPrice + deliveryCost;
  totalPrice.innerText = fullTotalPrice;
  fotter.innerText = fullTotalPrice;
}

// end-total

// promo-code

const apply = document
  .getElementById('promo-btn')
  .addEventListener('click', function () {
    const input = document.getElementById('inputFiled');
    const userInput = input.value;
    if (userInput == 'stevekaku') {
      fotter.innerText =
        parseInt(totalPrice.innerText) -
        parseInt(totalPrice.innerText) * (20 / 100);
    } else {
      alert('Invalid Promo code');
    }
    input.value = '';
  });
