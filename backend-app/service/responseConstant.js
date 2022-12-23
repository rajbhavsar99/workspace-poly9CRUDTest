//For Error console
exports.consoleError = ( (msg,value) => {
    console.log('\x1b[1m\x1b[41m\x1b[30m%s\x1b[0m',msg,value)
});

//For Success console
exports.consoleSuccess = ( (msg,value) => {
    console.log('\x1b[1m\x1b[42m\x1b[30m%s\x1b[0m',msg,value)
});

//For Request console
exports.consoleRequest = ( (msg,value) => {
    console.log('\x1b[1m\x1b[46m\x1b[30m%s\x1b[0m',msg,value)
});

//for success message
exports.responseSuccess = 'success';

//for error message
exports.responseError = 'error';
