function fib(n, pos = 0, arr = []){

    if(n >= pos) {

        if (pos == 0) {
            arr.push(0)
        } 
        else if (pos == 1) {
            arr.push(1)
        }
        else {
        arr.push(arr[pos-1] + arr[pos-2])
        }

        fib(n, pos + 1, arr)
    }

    return arr;
}