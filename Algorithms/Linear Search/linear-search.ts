function linearSearch(array: number[], key: number): number {
    for(let i = 0; i < array.length; i++){
      if(array[i] === key) {
          return i;
      }
    }
    return -1;
  }
    
  console.log(linearSearch([1, 2, 3, 4, 5], 3));
  console.log(linearSearch([1, 2, 3, 4, 5], 6));