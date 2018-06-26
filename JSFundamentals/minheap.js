function insertIntoHeap(heap, val){
    if (heap.length == 0){
        heap.push(undefined);
    }
    heap.push(val);

    function findplace(heap, index){
        var parent = Math.trunc(index / 2);
        if (heap[index]<heap[parent]){
            var temp = heap[index];
            heap[index] = heap[parent];
            heap[parent] = temp;
            index = parent;
            findplace(heap, index);
        }
        return;
    }

    var index = heap.length - 1;
    findplace(heap, index);
    console.log(heap);
    console.log(heap.length);
}


function removeFromMinHeap(heap){
    // your code here

    var i = 1;
    var temp = heap[heap.length - 1];
    heap[heap.length - 1] = heap[i];
    heap[i]= temp;

    var value = heap.pop();

    var low = heap[i * 2] < heap[i * 2 + 1] ? i * 2 : i * 2 + 1;
    
    while (heap[i]>heap[low]){

        let temp = heap[low];
        heap[low]=heap[i];
        heap[i]= temp;
        i = low;

        low = heap[i * 2] < heap[i * 2 + 1] ? i * 2 : i * 2 + 1;

    }

    console.log(heap);
    return value;

}



insertIntoHeap([], 13);  
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); 
console.log(removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]));
console.log(removeFromMinHeap([undefined, 8]));

