const arr = [ 10, 9, 8, 7]

// for(let i=9999; i>=0; i--) {
//     arr.push(i)
// }

const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

const insertSort = (arr) => {

    const dateOne = Date.now()

    // const sortedArr = []
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let  j
        for ( j = i; j > 0 && temp < arr[j]; j--) {
            arr[j] = arr[j-1]
        }
        arr[j] = temp
    }

    console.log(arr)

    const dateTwo = Date.now()
    console.log(dateTwo - dateOne)
}

insertSort(arr)

