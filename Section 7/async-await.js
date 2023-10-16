function getSpecifiedNumber(){
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(42);
        }, 2000);
    })
}

async function f(){

    const specifiedNumber = await getSpecifiedNumber();
    console.log(specifiedNumber);
}

f();