var TestObj = {
    parameter1 : 'value1',
    parameter2 : 'value2',
    parameter3 : 'value3'};

var TestObjNew = {};

for (var key in TestObj)
{
    var a=TestObj[key];
    TestObjNew[a] = key;
}
TestObj=TestObjNew;
console.log(TestObj);
