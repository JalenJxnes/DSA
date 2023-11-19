function removeElement(nums: number[], val: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (val == nums[i] && i == 0) {
            nums.splice(i, i + 1);
        } else if (val == nums[i]) {
            nums.splice(i, i);
        }
    }

    return nums.length;
}

console.log(removeElement([3,3], 3));