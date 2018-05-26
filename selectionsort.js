
//-----------------------------------------------------------
// FUNCTION selectionSort
//-----------------------------------------------------------
function selectionSort(data)
{
    let data_length = data.length;

    output("Unsorted...<br/>");

    printData(data, 0);

    output("Selection Sorting...<br/>");

    let sorted_to = 0;
    let index_of_lowest = 0;

    while(sorted_to < data_length - 1)
    {
        index_of_lowest = findLowestIndex(data, sorted_to);

        swap(data, sorted_to, index_of_lowest);

        sorted_to++;

        printData(data, sorted_to);
    }

    output("Sorted!");
}

//--------------------------------------------------------
// FUNCTION swap
//--------------------------------------------------------
function swap(data, i1, i2)
{
    if(i1 != i2)
    {
        data[i1] = data[i1] ^ data[i2];
        data[i2] = data[i1] ^ data[i2];
        data[i1] = data[i1] ^ data[i2];
    }
}

//--------------------------------------------------------
// FUNCTION findLowestIndex
//--------------------------------------------------------
function findLowestIndex(data, start)
{
    let lowest_index = start;

    for(let i = start, l = data.length; i < l; i++)
    {
        if(data[i] < data[lowest_index])
        {
            lowest_index = i;
        }
    }

    return lowest_index;
}

//--------------------------------------------------------
// FUNCTION printData
//--------------------------------------------------------
function printData(data, sorted_to)
{
    let n;

    for(let i = 0; i < data.length; i++)
    {
        n = String(data[i]).padStart(4, " ").replace(/ /g, "&nbsp;");

        if(i < sorted_to)
            output("<span class='greenbg'>" + n + "</span> ");
        else
            output("<span class='redbg'>" + n + "</span> ");
    }

    output("<br/><br/>");
}
