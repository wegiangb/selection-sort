
window.onload = function()
{
    output("Selection Sort<br/><br/>");

    const size = 16;

    data = [];

    for(let i = 0; i < size; i++)
    {
        data[i] = parseInt(Math.random() * 128);
    }

    selectionSort(data);
};
