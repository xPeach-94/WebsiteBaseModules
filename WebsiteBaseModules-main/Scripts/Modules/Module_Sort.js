const sortNumbers = function(array, reversed = false)
{
    for (let i = 0; i < array.length; i++) 
    {
        for (let x = 0; x < array.length; x++) 
        {
            if (reversed == true) 
            {
                if (array[i] > array[x]) 
                {
                    let temp = array[i];
                    array[i] = array[x]
                    array[x] = temp;
                }
            }
            else
            {
                if (array[i] < array[x]) 
                {
                    let temp = array[i];
                    array[i] = array[x]
                    array[x] = temp;
                }
            }
        }
    }

    // console.log(array);
    return array
}

const CapitalizeFirstChar = function(string)
{
    let first = string[0].toUpperCase();

    let newString = string.slice(1);

    string = first + newString;

    // console.log(string);
    return string
}

const sortNames = function(array)
{
    for (let i = 0; i < array.length; i++) 
    {
        array[i] = CapitalizeFirstChar(array[i])
    }

    array.sort();

    // console.log(array);
    return array
}