function isPalindrome(x: number): boolean {
    let arr = x.toString().split("").reverse().join();
    let newX = x.toString().split("").join();

    return arr == newX;
}

isPalindrome(1000021);