function main (input) {
    /**
     * Write JavaScript code from here
     */
    function findNextNumber(num1, num2, num3) {
  const diff1 = num2 - num1;
  const diff2 = num3 - num2;

  if (diff1 === diff2) {
    return num3 + diff1;
  } else {
    return null; // Numbers do not form an arithmetic sequence
  }
}
    

    const numbers = input.split(' ').map(Number);

  if (numbers.length === 3 && !isNaN(numbers[0]) && !isNaN(numbers[1]) && !isNaN(numbers[2])) {
    const nextNumber = findNextNumber(numbers[0], numbers[1], numbers[2]);
    if (nextNumber !== null) {
      console.log(nextNumber);
    } else {
      console.log("The numbers do not form an arithmetic sequence.");
    }
  } else {
    console.log("Invalid input. Please enter three valid numbers.");
  }
    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});