const arr = [10, 9, 8, 7, 6, 100, 5, ]

const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

const bubbleSort = (arr) => {
    let index = arr.length - 1

    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < index; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
        index--
    }
    console.log(arr)
}

bubbleSort(arr)