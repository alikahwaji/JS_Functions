//TODO - Make a function that sorts an array and deletes any duplicates.

//NOTE - duplicatesArray([1,2,3,3,4,5]) -> [1,2,3,4,5]

function duplicatesArray(arr) {
    const newArray = []

    let currentArray = arr[0]

    newArray.push(currentArray)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== currentArray) {
            currentArray = arr[i]
            newArray.push(currentArray)
        }
    }
    return newArray
}


//TODO - Develop a function that counts number (0)/s in 2D array.

//NOTE - twoArrays([[0,0],[0,1]]) -> 3

function twoArrays(arr) {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                count++
            }
        }
    }
    return count
}

//TODO - Write a function that returns the largest even number in an array.
//NOTE - evenLargestNumber([1,10,17]) -> 10
//NOTE - evenLargestNumber([1,3,5,7,9]) -> "No even number"

function evenLargestNumber(arr) {
    let benchmark = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (arr[i] > benchmark) {
                benchmark = arr[i]
            }
        }
    }
    return benchmark
}
