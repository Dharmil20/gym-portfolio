function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight && height) {
        var heightInMeters = height / 100; // Convert height from cm to meters
        var bmi = weight / (heightInMeters * heightInMeters);
        bmi = bmi.toFixed(1); // Round to 1 decimal place

        // Display BMI value
        document.getElementById('bmi-value').textContent = bmi;

        // Determine BMI category
        var status = '';
        if (bmi < 18.5) {
            status = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            status = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            status = 'Overweight';
        } else {
            status = 'Obesity';
        }
        document.getElementById('bmi-status').textContent = status;
    } else {
        alert("Please enter both weight and height.");
    }
}
