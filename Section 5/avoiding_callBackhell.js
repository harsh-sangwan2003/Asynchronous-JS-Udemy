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