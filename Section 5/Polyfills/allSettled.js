const promiseAllSettled = (arrayOfPromises) => {

    if (arrayOfPromises.length === 0)
        return Promise.resolve([]);

    const promiseValues = [];
    let settledPromiseCount = 0;

    return new Promise((resolve, reject) => {

        arrayOfPromises.forEach((promise, value) => {

            promise.then(result => {

                settledPromiseCount += 1;
                promiseValues[index] = {

                    status: 'FULFILLED',
                    value: result
                };
                if (settledPromiseCount === arrayOfPromises.length)
                    resolve(promiseValues);

            }).catch(err => {

                settledPromiseCount += 1;
                promiseValues[index] = {

                    status: 'REJECTED',
                    value: err
                };
                if (settledPromiseCount === arrayOfPromises.length)
                    resolve(promiseValues);
            })
        })
    })
}