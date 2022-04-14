const arr = [10, 11]

const arr2 = [0, 100, 101]

const mergeSortedArrays = (arr1, arr2) => {
    const mergeArr = []

    let firstArrLoopIndex = 0
    let secondArrLoopIndex = 0
    let firstElem = arr1[firstArrLoopIndex]
    let secondElem = arr2[secondArrLoopIndex]

    while(firstElem!==undefined || secondElem!==undefined){
        if(secondElem===undefined || firstElem < secondElem){
            mergeArr.push(firstElem)
            firstElem=arr1[++firstArrLoopIndex]
        }
        else {
            mergeArr.push(secondElem)
            console.log(secondElem)
            secondElem=arr2[++secondArrLoopIndex]
        }
    }

    console.log(mergeArr)
}

mergeSortedArrays(arr, arr2)