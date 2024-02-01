// this is but to submit number of course student insert
let btn = document.getElementById('btn');
let btnGPA = document.getElementById('btn-gpa');
const gpaEl = document.getElementById('gpa');
const gradeEl = document.getElementById('grade');
const togglerHeader = document.querySelector('.hdr');
const btnToggler = document.getElementById('toggler');
btnToggler.addEventListener('click', () => {
    togglerHeader.style.display = togglerHeader.style.display === "block" ? "none" : "block";

    // togglerHeader.classList.toggle('hdr');
    // console.log(togglerHeader);
    // console.log('hello');
});
const humbergerEl = document.getElementById('humberger');
humbergerEl.addEventListener('click', (e) => {
    humbergerEl.classList.toggle('close')
})
//i added on click EventListener to my btn to create 
//dynamic user inpput

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let numberOfCourse = document.getElementById('numberOfCourse').value;
    const form = document.getElementById('form')

    
    const upperBox = document.querySelector('.upper-box')


    upperBox.style.display = "none"

    console.log('number of course entered = ' + numberOfCourse);
    //this is buuton is Button to Calculate GPA
    const btnGPA = document.getElementById('btn-gpa');
    console.log(btnGPA.value);
    var i;
    //this loop i created to Dynamic User input
    if (numberOfCourse < 8) {
        for (i = 1; i <= numberOfCourse; i++) {
            //we display form if user enter valid number

            form.style.display = "flex";
            // Create a new input element
            var inputContainer = document.createElement('div');
            var label = document.createElement('label');
            let inputElement = document.createElement("input");

            let creditHour = document.createElement('input')

            //add classList to my dynamically created div
            inputContainer.classList.add('input-container');
            //create dynamic text node to each input filed
            var subject = document.createTextNode('Subject ' + i);

            // Set the type of the input element
            inputElement.type = "text";
            inputElement.classList.add('course')

            creditHour.type = 'text';
            creditHour.classList.add('credit-hours');

            // Set the id of the input element
            // inputElement.id = "subject"+i;
            // creditHour.id = 'creditHour'+i;

            inputElement.addEventListener('keypress', (e) => {
                console.log(e.target.style.color = "red");
            })

            // Set the placeholder of the input element
            inputElement.placeholder = "Enter Subjet " + i + " mark";
            creditHour.placeholder = "Enter Subject " + i + " Credit Hour";

            // (subject + i).value

            //append all elements hierarchically 
            inputContainer.appendChild(label);
            inputContainer.appendChild(inputElement);
            inputContainer.appendChild(creditHour);
            label.appendChild(subject);
            //instead of appending inputContainer directly to form
            // i used insertBefore() becuase here  able to insert My dynamic element before other element
            form.insertBefore(inputContainer, btnGPA);






            btnGPA.addEventListener('click', (event) => {
                event.preventDefault()

                const marks = document.querySelectorAll('.course');
                const creditHours = document.querySelectorAll('.credit-hours');


                //console.log(marks);


                //declare array of markArray and creeditHourArray
                const markArray = [];
                const creditHourArray = [];
                // the code blew this is used to take mark and covert it 
                marks.forEach(input => {

                    const inputValue = input.value;
                    markArray.push(inputValue)

                    //console.log(inputValue);
                });

                let markArrayToFloat = markArray.map(parseFloat);
                console.log(markArrayToFloat);

                //the code blew this take credit hour and store it array of credit hour
                creditHours.forEach(chr => {

                    const creditHourInput = chr.value;
                    creditHourArray.push(creditHourInput);
                })
                let creditHourArrayToFloat = creditHourArray.map(parseFloat);
                console.log(creditHourArrayToFloat);

                //function convert marks to grade

                function convertMarksToGrade(markArrayToFloat) {
                    return markArrayToFloat.map(mrk => {
                        if (mrk > 100 || mrk < 0) {
                            console.log('invalid mark');
                        } else if (mrk > 90) {
                            return 'A+';
                        } else if (mrk > 85) {
                            return 'A';
                        } else if (mrk > 80) {
                            return 'A-';
                        } else if (mrk > 75) {
                            return 'B+';
                        } else if (mrk > 70) {
                            return 'B';
                        } else if (mrk > 65) {
                            return 'B-'
                        } else if (mrk > 60) {
                            return 'C+';
                        } else if (mrk > 50) {
                            return 'C'
                        } else if (mrk > 45) {
                            return 'C-'
                        } else if (mrk > 40) {
                            return 'D'
                        } else {
                            return 'F'
                        }


                    })
                }

                const gradeVs = [];

                const letterGrade = convertMarksToGrade(markArrayToFloat);

                function convertGradeLettersToValues(letterGrade) {


                    letterGrade.forEach(gradeLetter => {
                        const gradeValue = {
                            "A+": 4.0,
                            "A": 4.0,
                            "A-": 3.75,
                            "B+": 3.5,
                            "B": 3.0,
                            "B-": 2.75,
                            "C+": 2.5,
                            "C": 2.0,
                            "C-": 1.75,
                            "D": 1.0,
                            "F": 0.0
                        }[gradeLetter.toUpperCase()]; // Convert to uppercase for consistency

                        if (!gradeValue) {
                            throw new Error(`Invalid grade letter: ${gradeLetter}`); // Handle invalid letters
                        }

                        gradeVs.push(gradeValue);
                    });

                    return gradeVs;
                }

                // Example usage:
                //  const gradeLetters = ["A", "B+", "C", "F", "X"];

                try {
                    const gradeVs = convertGradeLettersToValues(letterGrade);
                    console.log(gradeVs); // Output: [4, 3.3, 2, 0, Error: Invalid grade letter: X]
                } catch (error) {
                    console.error(error.message); // Handle the error
                }





                //calculation to get GPA multiply  array of grade value and  array of array of credit hours time  divided by number of course


                //const GPA = 

                function elementWiseMultiply(gradeVs, creditHourArrayToFloat) {
                    const result = [];
                    for (let i = 0; i < gradeVs.length; i++) {
                        result.push(gradeVs[i] * creditHourArrayToFloat[i]);
                    }
                    return result;
                }



                const multipliedArray = elementWiseMultiply(gradeVs, creditHourArrayToFloat);

                console.log(multipliedArray, " this multipled array");




                //to get summation of array

                function sumArray(arr) {
                    let sum = 0;
                    for (let i = 0; i < arr.length; i++) {
                        sum += arr[i];
                    }
                    return sum;
                }
                //total
                const tot = sumArray(multipliedArray);
                const creditHourSum = sumArray(creditHourArrayToFloat);

                const GPATot = tot / creditHourSum;
                console.log(GPATot, " this gpa");
                console.log(tot, " this it total");
                console.log(letterGrade, " this grade letter");

                gradeEl.textContent = letterGrade;


                //display GPA
                gpaEl.style.display = 'block'
                gpaEl.textContent = "Your GPA is : " + GPATot;
            })

        }
    } else {
        alert('Wrong number of course!!')
    }




})