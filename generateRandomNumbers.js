

function generateRandomNumbers() {
    let randomNumbers = [];

    for(let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 49)

        if(randomNumbers.includes(randomNumber)) {

         randomNumber = Math.floor(Math.random() * 49)
        }

        randomNumbers.push(randomNumber)
    }

    return randomNumbers;
}

let result = generateRandomNumbers();


console.log(result);