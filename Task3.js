testObj1 = {
    param1: 2,
    param2: 3,
    param3: 4
};

testObj2 = {
    param1: 1,
    param2: 2
};

testObj3 = {
    param1: 2,
    param2: 3,
    param3: 1,
    param4: 1
};

testObj4 = {
    param1: 2,
    param2: 3,
    param3: 1
};

testObj5 = {
    param1: 2,
    param2: 3,
    param3: 1,
    param4: 1,
    param5: 3
};

var mainArr = [testObj1, testObj2, testObj3, testObj4, testObj5];

var lengthArr = [];

for (var a = 0; a < mainArr.length; a++) {
    var count = 0;

    for (var key in mainArr[a]) {
        count++;
    }
    lengthArr[a] = count;
}

for (var b = 0; b < mainArr.length; b++) {

    for (var c = 0; c < mainArr.length; c++) {

        if (lengthArr[c] < lengthArr[c + 1]) {

            var temp = mainArr[c];
            mainArr[c] = mainArr[c + 1];
            mainArr[c + 1] = temp;

            temp = lengthArr[c];
            lengthArr[c] = lengthArr[c + 1];
            lengthArr[c + 1] = temp;
        }
    }
}

console.log(mainArr);