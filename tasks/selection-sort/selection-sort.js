const arr = [4, 3, 2, 1, -1, -10]

const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}


const selectSort = arr => {
    for (let j =0; j<arr.length-1; j++) {
        let minIndex = j
        let min = arr[minIndex]
        for(let i=j+1; i<arr.length; i++) {
            if(min > arr[i]){
                min = arr[i]
                minIndex = i
            }
        }
        swap(arr, j, minIndex)
    }
    console.log(arr)
    return arr
}

selectSort(arr)