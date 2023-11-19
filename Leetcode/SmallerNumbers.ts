function smallerNumbersThanCurrent(nums: number[]): number[] {
    let arr: any[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        let sum: number = 0;
        for (let x: number = 0; x < nums.length; x++) {
            if (nums[i] > nums[x]) {
                sum += 1;
            }
        }
        arr.push(sum);
    }
    console.log(arr);
    return arr;
}

smallerNumbersThanCurrent([8,1,2,2,3]);