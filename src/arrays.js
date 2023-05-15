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
