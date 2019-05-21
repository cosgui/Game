function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value++;
    document.getElementById('number').value = value;
}
