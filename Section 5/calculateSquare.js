// then takes two arguments
function calculateSquare(number) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof number !== 'number')
                reject(new Error("Arguments must be of type number."));

            const result = number * number;
            resolve(result);
        }, 1000);
    })
}

const pr = calculateSquare('3')
pr.then(value => {

    console.log(value);
}, err => {

    console.log(err);
})