main();

function main()
{
var favNum = prompt("Enter your favorite number: ");
alert(favNum);
aboveOrBelow(favNum)
}
function aboveOrBelow(favNum)
{
    if (favNum < 100)
    {
        alert("Below")
    }
    else if (favNum > 100)
    {
        alert("Above");
    }
}