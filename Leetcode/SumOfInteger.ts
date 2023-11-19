function solution(n: number) {
    //Return sum of 2 digit integer
    let sum: number = 0;
    let arr: string[] = n.toString().split('');
    for (let i: number = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
        console.log(sum);
    }
    return "solution(n)" + sum;
}

solution(29);