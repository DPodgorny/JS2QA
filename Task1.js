var testObj = {
    parameter1: 'value1',
    parameter2: 'value2',
    parameter3: 'value3'};

var testObjNew = {};

for (var key in testObj)
{
    var a = testObj[key];
    testObjNew[a] = key;
}

testObj = testObjNew;
console.log(testObj);
