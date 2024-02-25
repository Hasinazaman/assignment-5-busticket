const allSeat = document.getElementsByClassName('seat');

let count = 0;

for (const seat of allSeat) {
    seat.addEventListener('click',function(e) {
        count = count + 1;

        const seatName = e.target.innerText;
        console.log(seatName);

        const seatPrice = document.getElementById('ticket-price').innerText;
        
        console.log(seatPrice);

        const emptyContainer = document.getElementById('select-bus-price');

        const div = document.createElement('div');

        const p1 = document.createElement('p');
        p1.innerText = seatName;

        const p2 = document.createElement('p');
        p2.innerText = seatPrice;

        div.appendChild(p1)
        div.appendChild(p2)

        emptyContainer.appendChild(div);

        const totalCost = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalCost);
        const sum = convertedTotalPrice + parseInt(seatPrice);

        const grandTotal =document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const sum2 = convertedGrandTotal + parseInt(seatPrice);
    
     

        setInnerText('total-price',sum)

        setInnerText('grand-total',sum2)

        setInnerText('seat-up', count)
      
    });
    
}
function totalCost(id,value) {
    const totalCost = document.getElementById(id).InnerText;
    const convertedTotalPrice = parseInt(totalCost);
    const sum = convertedTotalPrice + parseInt(value);
}



function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}