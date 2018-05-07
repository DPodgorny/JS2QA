var Array = [3,2,3,1,4,5,5,6,2,2,4,2,3,2,4,1,4,3,4,5,4,6,4,7];

var maxcount=0;

for (var b=0; b<Array.length; b++)
{
    var count=0;
    for (var c=b; c<Array.length; c++)
    {
        if (Array[b]==Array[c])
        {
            count++;
        }
        if (count>maxcount)
        {
            maxcount=count;
            var number= b;
        }
    }
}

console.log("The most often value is " + Array[number]+", repeats "+maxcount+" times");