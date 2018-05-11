var myArr = [3, 2, 3, 1, 4, 5, 5, 6, 2, 2, 4, 2, 3, 2, 4, 1, 4, 3, 4, 5, 4, 6, 4, 7, 1, 1, 3, 1, 4, 1, 5, 1, 6, 1, 8];

var maxcount = 0;

for (var b = 0; b < myArr.length; b++) {
    var count = 0;

    for (var c = b; c < myArr.length; c++) {

        if (myArr[b] === myArr[c]) {
            count++;
        }

        if (count > maxcount) {
            maxcount = count;
            var number = b;
        }
    }
}

console.log("The most often value is " + myArr[number] + ", repeats " + maxcount + " times");