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

const pr = calculateSquare(1);
pr.then(val => {

    console.log(val);
    return calculateSquare(2);
})
    .then(val => {

        console.log(val);
        return calculateSquare(3);
    })
    .then(val => {

        console.log(val);
    })
    .catch(err => {

        console.log(err);
    })