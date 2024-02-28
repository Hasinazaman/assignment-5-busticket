// button add

const allBtn = document.getElementsByClassName('add-btn');

for(const btn of allBtn){
  btn.addEventListener('click', function (event) {

    const name = event.target.innerText;

    const price = document.getElementById('ticket-price').innerText;
        
const selectContainer = document.getElementById("select-bus-price");

// update 4 seat is not take 
const fourCartCount = getConvertedValue('seat-up');
    if (fourCartCount + 1 > 4) {
      alert('limit shes');
      return;
    }


// one time after button is dissabled
    event.target.setAttribute('disabled', false);
event.target.style.backgroundColor = '#1dd100';
event.target.style.color = 'white';


// update seat count
const seatUp = getConvertedValue("seat-up");
document.getElementById("seat-up").innerText = seatUp + 1; 

// update seat down 
const seatDown = getConvertedValue("seat-down");
document.getElementById("seat-down").innerText = seatDown - 1; 


const div = document.createElement('div');
div.classList.add('flex');
div.classList.add('justify-between');

const p1 = document.createElement('p');

const p2 = document.createElement('p');
const node = document.createTextNode("economy");
p2.appendChild(node);

const element = document.getElementById("demo");
element.appendChild(p2);

const p3 = document.createElement('p');


p1.innerText = name;
p3.innerText = price;

div.appendChild(p1);
div.appendChild(p2)
div.appendChild(p3);

selectContainer.appendChild(div);


// function caall
updateTotalCost(price);
updateGrandTotal();

  });
}

// function 4


// function 3
function updateGrandTotal(status){

  const totalCost = getConvertedValue('total-cost');

  if(status == undefined) {
  
    document.getElementById('grand-total').innerText = totalCost;
    
  } else {
      const couponCode = document.getElementById("coupon-code").value;
        
      if(couponCode == 'NEW15' || couponCode == 'COUPLE20') {
        const discounted = totalCost * 0.2;
        document.getElementById('grand-total').innerText = totalCost - discounted;
      } 
      else {
        alert('please enter valid coupon code')
      }
    
  }
}

// function 2
function updateTotalCost(value){
  const totalCost = getConvertedValue('total-cost');
  const convertedPrice = parseInt(value);
  const sum = totalCost + convertedPrice;
  document.getElementById('total-cost').innerText = sum;
}

// function 1
function getConvertedValue(id){
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}


