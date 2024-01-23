// this is but to submit number of course student insert
let btn = document.getElementById('btn');

//i added on click EventListener to my btn to create 
//dynamic user inpput

btn.addEventListener('click', (e) => {
    let numberOfCourse = document.getElementById('numberOfCourse').value;
    const form = document.getElementById('form')

    console.log('number of course entered = ' + numberOfCourse);
    //this is buuton is Button to Calculate GPA
    const btnGPA = document.getElementById('btn-gpa');
    console.log(btnGPA.value);
    var i;
    //this loop i created to Dynamic User input
    if(numberOfCourse < 8){
        for (i = 1; i <= numberOfCourse; i++) {
           
            // Create a new input element
            var inputContainer = document.createElement('div');
            var label = document.createElement('label');
            let inputElement = document.createElement("input");
            let creditHour = document.createElement('input')

            //add classList to my dynamically created div
            inputContainer.classList.add('input-container');
            //create dynamic text node to each inut filed
            var subject = document.createTextNode('Subject ' + i);

            // Set the type of the input element
            inputElement.type = "text";
            creditHour.type = 'text';
            // Set the id of the input element
            inputElement.id = "subject"+i;
            creditHour.id = 'creditHour'+i;
    
            // Set the placeholder of the input element
            inputElement.placeholder = "Enter Subjet " + i+ " mark";
            creditHour.placeholder = "Enter Subject "+ i+" Credit Hour";
           
             //append all elements hierarchically 
            inputContainer.appendChild(label);
            inputContainer.appendChild(inputElement);
            inputContainer.appendChild(creditHour);
            label.appendChild(subject);
            //instead of appending inputContainer directly to form
            // i used insertBefore() becuase here  able to insert My dynamic element before other element
            form.insertBefore(inputContainer, btnGPA);
    
        }
    } else{
       alert('Wrong number of course!!')
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
   

})