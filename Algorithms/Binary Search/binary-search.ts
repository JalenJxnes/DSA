function binarySearch(array: number[], key: number): number {
    let left: number = 0;
    let right: number = array.length - 1;
    while (left <= right) {
        const mid: number = left + Math.floor((right - left) / 2);
        if (array[mid] === key) {
            return mid;
        }
        if (array[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const key: number = 6;
const index: number = binarySearch(array, key);
if (index !== -1) {
    console.log(`Element ${key} found at index ${index}`);
} else {
    console.log(`Element ${key} not found in the array`);
}