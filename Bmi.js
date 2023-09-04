function main (input) {
    /**
     * Write JavaScript code from here
     */
    // Function to calculate BMI and determine weight category
function calculateBMI(height, weight) {
  const bmi = weight / (height * height);
  return bmi;
}

// Function to determine weight category based on BMI
function determineWeightCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25.0) {
    return "Normal weight";
  } else if (bmi >= 25.0 && bmi < 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
 const [height, weight] = input.split(' ').map(Number);

  if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
    const bmi = calculateBMI(height, weight);
    const weightCategory = determineWeightCategory(bmi);
    
    console.log(`BMI: ${bmi.toFixed(2)}`);
    console.log(weightCategory);
  } else {
    console.log("Invalid input. Please enter valid height and weight.");
  }

    
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});