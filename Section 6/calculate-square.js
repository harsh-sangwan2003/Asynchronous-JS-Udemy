function calculateSquare(num){

    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            
            if(typeof num !== 'number')
            return reject(new Error('Argument must be of type number'));

            const result = num*num;
            resolve(result);

        }, 1000);
    })
}

module.exports = calculateSquare;