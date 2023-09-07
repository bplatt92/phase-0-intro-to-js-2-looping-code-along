// Code your solutions in this file
function writeCards(names) {
    const thankYouMessage = [];

    for (let i = 0; i < names.length; i++) {
        thankYouMessage.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

return thankYouMessage;
}

function countDown(number) {
    let countDown = 10
    while (countDown >= 0) 
    console.log(countDown--);
}