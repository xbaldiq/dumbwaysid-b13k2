let datalain = [
    ['g', 'h', 'i', 'j'],
    ['a', 'c', 'b', 'e', 'd'],
    ['g', 'e', 'f'],
    ['x','y','a','b','q','d','z']
];

function sort_array(data){
    function bubbleSort(array) {
        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < array.length; i += 1) {
                if (array[i - 1].length > array[i].length) {
                    done = false;
                    var tmp = array[i - 1];
                    array[i - 1] = array[i];
                    array[i] = tmp;
                }
            }
        }
        // return array;
    }
    
    function bubbleSortChar(array) {
        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < array.length; i += 1) {
                if (array[i - 1]> array[i]) {
                    done = false;
                    var tmp = array[i - 1];
                    array[i - 1] = array[i];
                    array[i] = tmp;
                }
            }
        }
        // return array;
    }
    
    bubbleSort(data);
    for(i in data){
        bubbleSortChar(data[i]);
    }
    console.log(data);
}
sort_array(datalain);