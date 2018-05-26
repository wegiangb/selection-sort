
function output(text)
{
    try
    {
        document.getElementById('maindiv').innerHTML += text;
    }
    catch (e)
    {
        alert(e);
    }

}
