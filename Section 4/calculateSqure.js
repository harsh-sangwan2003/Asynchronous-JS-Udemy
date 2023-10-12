function calculateSquare(number, callback) {

    setTimeout(() => {

        if (typeof number !== 'number') {

            callback(new Error("Arguments must of type number."));
            return;
        }

        const result = number * number;
        callback(null, result);

    }, 1000);
}

module.exports = calculateSquare