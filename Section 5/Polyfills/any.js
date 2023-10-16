const promiseAny = (arrayOfPromises)=>{

    if(arrayOfPromises.length===0){
        return Promise.reject(new AggregateError([], 'No promises in array'));
    }

    const error = [];
    let rejectedPromiseCount = 0;

    return new Promise((resolve, reject)=>{

        arrayOfPromises.forEach((promise, index)=>{

            if(promise instanceof Promise === false)
            promise = Promise.resolve(promise);

            promise.then(value=>{

                resolve(value);
            })

            promise.catch(err=>{

                rejectedPromiseCount++;
                error[index] = err;

                if(rejectedPromiseCount===arrayOfPromises.length){

                    reject(new AggregateError(error , 'All promises rejected'));
                }
            })
        })
    })
}