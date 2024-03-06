function setReducer(arr) {
    var reduceArray = function (arr) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            var count = 1;
            while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
                count++;
                i++;
            }
            result.push(count);
        }
        return result;
    };
    while (arr.length > 1) {
        arr = reduceArray(arr);
    }
    return arr[0];
}
var arr1 = [1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0];
var res1 = setReducer(arr1);
console.log(res1);
