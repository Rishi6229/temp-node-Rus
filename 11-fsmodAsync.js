//FS Module sync methods.
const { readFile, writeFile, read } = require('fs');
console.log('start');

//IF WE DON'T PROVIDE THE UTF CODING  WE WILL GET THE BUFFER.
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `here is the result:${first},${second}`
            , (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with thw task');
            })
    })

})
console.log('starting with the new task');