function filter(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
}
module.exports = {
    filter
};