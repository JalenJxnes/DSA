//Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
//Not the most optimal solution
//Takes 62ms and uses 44.92mb of memory
function numIdenticalPairs(nums: number[]): number {
    //Declare counter variable
    let goodPair = 0;
    //Declare hashmap
    let map = {};
    //Use for loop to traverse array
    for(let num of nums) {
        //Check if the number is in the hashmap
        if(map[num]) {
            //If it is, increment the counter
            goodPair += map[num];
            //Increment the number in the hashmap
            map[num]++;
            //If number isn't in hashmap
        } else {
            //Set the number in the hashmap to 1
            map[num] = 1
        }
    }
    console.log(goodPair);
    return goodPair;
}