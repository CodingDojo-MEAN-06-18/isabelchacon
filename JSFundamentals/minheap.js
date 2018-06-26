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
    // your code here
}
// sample outputs:
insertIntoHeap([], 13);  // alters the empty array to be [undefined, 13]
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); // alters the array to [undefined, 3, 7, 10, 8, 9, 20, 14, 11]