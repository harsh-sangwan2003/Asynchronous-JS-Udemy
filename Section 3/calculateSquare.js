function calculateSquare(number, callBack) {

    setTimeout(() => {

        if (typeof number !== 'number') {
            callBack(new Error('Argument of type string is expected.'));
            return;
        }

        else {

            const result = number * number;
            callBack(null, result);
        }
    }, 1000);

}

calculateSquare('bad argument', function (error, result) {

    if (error !== null)
        console.log('Caught error: ', String(error));

    console.log(result);
})

calculateSquare(2, function (error, result) {

    if (error !== null)
        console.log('Caught error: ', String(error));

    console.log(result);
})