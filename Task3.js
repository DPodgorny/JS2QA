Object1 = {
    parameter1 : 2,
    parameter2 : 3,
    parameter3 : 4,
}

Object2 = {
    parameter2 : 1,
    parameter3 : 2,
}

Object3 = {
    a1 : 2,
    a2 : 3,
    a3 : 1,
    a4 : 1,
}
var Array = [Object1, Object2, Object3];

var LengthArray = [];

for (var e=0; e<Array.length; e++)
{
    var count=0;
    for (var key in Array[e])
    {
        count++;
    }
    LengthArray[e]=count
}

for (var j=0; j<Array.length; j++)
{
    for(var i=0; i<Array.length; i++)
    {
        if (LengthArray[i]<LengthArray[i+1])
        {
            var temp=Array[i];
            Array[i]=Array[i+1];
            Array[i+1]=temp;
            temp = LengthArray[i];
            LengthArray[i] = LengthArray[i+1];
            LengthArray[i+1] = temp;
        }
    }
}
console.log(Array);