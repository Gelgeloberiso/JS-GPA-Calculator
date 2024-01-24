// this is but to submit number of course student insert
let btn = document.getElementById('btn');
const form = document.querySelector('form');
//btn to calculate the GPA
const btn_gpa = document.getElementById('btn-gpa');
const display_gpa = document.getElementById('gpa');

//i added on click EventListener to my btn to create 
//dynamic user inpput

btn.addEventListener('click', (e) =>
{
    let numberOfCourse = document.getElementById('numberOfCourse').value;
    const form = document.getElementById('form');

    console.log('number of course entered = ' + numberOfCourse);
    //this is buuton is Button to Calculate GPA
    const btnGPA = document.getElementById('btn-gpa');
    console.log(btnGPA.value);
    var i;
    //this loop i created to Dynamic User input
    if (numberOfCourse < 8) {
        for (i = 1; i <= numberOfCourse; i++) {

            // Create a new input element
            var inputContainer = document.createElement('div');
            var label = document.createElement('label');
            let inputElement = document.createElement("input");
            let creditHour = document.createElement('input');

            //add classList to my dynamically created div
            inputContainer.classList.add('input-container');
            inputContainer.classList.add('inputs');
            //create dynamic text node to each inut filed
            var subject = document.createTextNode('Subject ' + i);

            // Set the type of the input element
            inputElement.type = "text";
            creditHour.type = 'text';
            // Set the id of the input element
            inputElement.id = "subject" + i;
            creditHour.id = 'creditHour' + i;

            inputElement.classList.add('subject');
            creditHour.classList.add('ch');
            // Set the placeholder of the input element
            inputElement.placeholder = "Enter Subjet " + i + " mark";
            creditHour.placeholder = "Enter Subject " + i + " Credit Hour";

            //append all elements hierarchically 
            inputContainer.appendChild(label);
            inputContainer.appendChild(inputElement);
            inputContainer.appendChild(creditHour);
            label.appendChild(subject);
            //instead of appending inputContainer directly to form
            // i used insertBefore() becuase here  able to insert My dynamic element before other element
            form.insertBefore(inputContainer, btnGPA);

        }
    } else {
        alert('Course number must be less than or equal to 8');
    }



    // btnGPA.addEventListener('click', (event)=>{
    //     for (let i = 0; i < numberOfCourse; i++) {
    //         // Get the input field by its unique id
    //         let input = document.getElementById("subject" + i);

    //         // Get the value of the input field
    //         let value = input.value;

    //         console.log(value); // Logs the value of the input field to the console
    //     }



    //     event.preventDefault();
    // })
    e.preventDefault();

});


btn_gpa.addEventListener('click', (e) =>
{
    const input = document.querySelectorAll('.subject');
    const ch = document.querySelectorAll('.ch');
    let totalCredit = 0;
    let gpa = 0;
    input.forEach((val, index) =>
    {
        //ASSIGN GRADE VALUES TO EACH LETTER
        switch (val.value) { //val.value will return the input grade letters(A, A-, B...)
            case 'A' || 'a':
                gpa += 4 * parseInt(ch[index].value);
                break;
                case 'B' || 'b':
                gpa += 3 * parseInt(ch[index].value);
                break;
                case 'C' || 'c':
                gpa += 2 * parseInt(ch[index].value);
                break;
                case 'D' || 'd':
                gpa += 1 * parseInt(ch[index].value);
                break;
                case 'F' || 'f':
                gpa += 0 * parseInt(ch[index].value);
                break;
            default:
                break;
        }
        totalCredit += parseInt(ch[index].value);
        // gpa += (gradeVal * parseInt(ch[index]));
    });
    display_gpa.innerText = parseFloat((Math.round((gpa/totalCredit) * 100) / 100).toFixed(2));
    e.preventDefault();
});