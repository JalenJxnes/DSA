function numJewelsInStones(jewels: string, stones: string): number {
    let count : number = 0;
    let stone_arr: string[] = stones.split('');
    stone_arr.forEach(stone => {
        // @ts-ignore
        if(jewels.includes(stone)) {
            count++;
        }
    });
    console.log(count);
    return count;
}

numJewelsInStones("aA", "aAAbbbb");