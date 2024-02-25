// seat or seat count work here
// const allSeat = document.getElementsByClassName('seat');

// // let count = 0;

// for (const seat of allSeat) {
   
//     seat.addEventListener('click', function (event) {

//         count = count + 1;

//        const seatName = event.target.innerText;

//        console.log(event.target )

//         setInnerText('seat-up', count);
         
//     });
// }

// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }

// now
const allSeat = document.getElementsByClassName('seat');

for (const seat of allSeat) {
   
    seat.addEventListener('click', function (event) {

      const seat = event.target.innerText;

//       const economy = document.createElement("p");
//       const node = document.createTextNode("economy");
//       economy.appendChild(node);
//       const element = document.getElementById("select-bus-price");
// element.appendChild(economy); 

            
      const price = document.getElementById('ticket-price').innerText;
     console.log(price);

      const emptyContainer = document.getElementById('select-bus-price')

      const div = document.createElement('div');
      div.classList.add('flex');
      div.classList.add('justify-between');

      const p1 =document.createElement('p')
    //   const p2 =document.createElement('p')
      const p3 =document.createElement('p')

        p1.innerText = seat;
        // p2.innerText = economy;
        p3.innerText = price;

        div.appendChild(p1)
        // div.appendChild(p2)
        div.appendChild(p3)

        emptyContainer.appendChild(div);

        updateTotalCost('price')
         
    });
}

function updateTotalCost(price) {
    const totalCost = getConvertedValue('total-price');

    const convertedPrice = parseInt(price);

    const sum = totalCost + convertedPrice;

    document.getElementById('total-price').innerText = sum;

}



function getConvertedValue (id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

