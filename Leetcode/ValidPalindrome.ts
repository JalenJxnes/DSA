function isPalindrome(s: string): boolean {
    const s2: string[] = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split("");
    let left: number = 0;
    let right: number = s2.length - 1;

    while (left < right) {
        if (s2[left++] !== s2[right--]) return false;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));