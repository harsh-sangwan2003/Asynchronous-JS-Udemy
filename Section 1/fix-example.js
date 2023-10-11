function print1() {

    const number1 = 1;
    console.log(number1);
}

function print2() {

    function getNumber2() {
        return 2;
    }

    const number2 = getNumber2();
    console.log(number2);
}

function print3() {

    const fs = require('fs');
    fs.readFile('./number3.txt', (err, data) => {
        console.log(data.toString());
        print4();
    })
}

function print4() {

    const number4 = 4;
    console.log(number4);
}

print1();
print2();
print3();