var crypto = require("crypto");

var id = crypto.randomBytes(20).toString('hex');

function* tenRandomNumberGenerator(){
    for (let i=0 ; i<10; i++) yield [''+i];
}

function* tenPromisesGenerator(){
    for (let i=0 ; i<10; i++) yield returnResolveTimerPromise('Promise ' + i);
    yield returnRjectedPromise('Max number of promises');
}

function returnResolveTimerPromise(name) {
    return new Promise((res, rej)=>{
        setTimeout(()=>res(name), 1000);
    });
}

function returnRjectedPromise(reason) {
    return new Promise((res, rej)=>{
        setTimeout(()=>rej(reason), 1000);
    });
}

function printValue(generatorFunc) {
    let data = {};
    while (generatorFunc.next().done === false){
        console.log(generatorFunc.next());
    }
}

async function printPromises(promisesGenerator) {
    let promises = [];
    for (let i = 0; i < 0; i++)
        promises.push(promisesGenerator.next().value);
    //Promise.all(promises).then(values=>console.log(values)).catch(err=>console.log('Rejected by error: ' + err));
    console.log('await result: ' + await returnRjectedPromise('await').catch(err=>err));
    return;
}

// printValue(tenRandomNumberGenerator());
printPromises(tenPromisesGenerator());