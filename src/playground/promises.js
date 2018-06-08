const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'this is my result',
            other: false
        });
    }, 3000);
    
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error:', error);
});

console.log('after');
