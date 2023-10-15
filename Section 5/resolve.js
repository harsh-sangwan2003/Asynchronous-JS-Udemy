function logToConsole(somePromise){

    somePromise.then(value=>console.log(value));
}

const somePromise = new Promise((resolve,reject)=>{

    resolve('Hello');
})

logToConsole(somePromise);

const promisifiedValue = Promise.resolve('Hello');
logToConsole(promisifiedValue);