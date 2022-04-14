const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

const permute = (nums) => {
    const result = []
    const dfs = (i, nums) => {
        if (i === nums.length - 1) {
            result.push(nums.slice())
            return
        }
        for (let j = i; j < nums.length; j++) {
            swap(arr, i, j)
            dfs(i + 1, nums)
            swap(arr, i, j)
        }
    }
    dfs(0, nums)
    return result
}


const arr = [1, 2, 3, 4]

console.log(permute(arr))