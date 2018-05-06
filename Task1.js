var Object = {
    parameter1 : 'value1',
    parameter2 : 'value2',
    parameter3 : 'value3'};

var parameter = [], value = [];
i=0;

for (var key in Object)
{
    parameter[i] = key;
    value[i] = Object[key];
    i++;
}

i=0;

for (var key in Object)
{
    delete Object[key];
    key = value[i];
    Object[key] = parameter[i];
    i++
}

console.log(Object);