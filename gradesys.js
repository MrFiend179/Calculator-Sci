// document.getElementById('mainactbtnadder').addEventListener('click', () => {
//     const container = document.getElementById('lftsdmnmrks');
//     const existingItems = container.querySelectorAll('[id^="no"]');
//     const nextIndex = existingItems.length + 1;

//     const newDiv = document.createElement('div');
//     newDiv.id = `no${nextIndex}`;

//     newDiv.innerHTML = `
//         <div id='no1'>
//         <div id="mainnoofdv">${nextIndex}</div>
//         <div id="sibjnmttl">
//             <div id="ttlmrksmn1">Subject</div>
//             <input type="text" id="subjctttl${nextIndex}" class="style">
//         </div>
//         <div id="sibjnmttl">
//             <div id="ttlmrksmn2">Obtained Marks</div>
//             <input type="text" id="subjcobtnmrks${nextIndex}" class="style">
//         </div>
//         </div>
//     `;

//     // Insert the new div before the "Add More" button
//     container.insertBefore(newDiv, document.getElementById('adfldid'));
// });


let nextIndex = 2; // Initialize a global counter

document.getElementById('mainactbtnadder').addEventListener('click', () => {
    const container = document.getElementById('lftsdmnmrks');

    // Use the global counter for the new index
    const newDiv = document.createElement('div');
    newDiv.id = `no${nextIndex}`;

    newDiv.innerHTML = `
        <div id='no1'>
            <div id="mainnoofdv">${nextIndex}</div>
        <div id="sibjnmttl">
            <div id="ttlmrksmn1">Subject</div>
            <input type="text" id="subjctttl${nextIndex}" class="style">
        </div>
        <div id="sibjnmttl">
            <div id="ttlmrksmn2">Obtained Marks</div>
            <input type="text" id="subjcobtnmrks${nextIndex}" class="style">
        </div>
        </div>
    `;

    // Insert the new div before the "Add More" button
    container.insertBefore(newDiv, document.getElementById('adfldid'));

    // Increment the global counter
    nextIndex++;
});


document.getElementById('mainactbtnadder2').addEventListener('click', () => {
    const container = document.getElementById('lftsdmnmrks');
    if (nextIndex > 2) {
        nextIndex--; // Decrement the global counter to get the ID of the latest element
        const latestDiv = document.getElementById(`no${nextIndex}`);
        if (latestDiv) {
            container.removeChild(latestDiv);
        }
    }
});


// document.getElementById('mainactbtnadder23').addEventListener('click', () => {

//     for (let i = 1; i < nextIndex; i++) {
//         const subjctttl = document.getElementById(`subjctttl${i}`);
//         const subjcobtnmrks = document.getElementById(`subjcobtnmrks${i}`);

//         if (subjctttl && subjcobtnmrks) {
//             const subject = subjctttl.value;
//             const marks = subjcobtnmrks.value;
//             const total = document.getElementById('ttltxtgrds').value
//             const grade =  document.getElementById('grade').value
//             console.log(subject + marks + total + grade)

//             console.log(gpa)
//         }
//     }
// });


document.getElementById('mainactbtnadder23').addEventListener('click', () => {
    const maintblfrgrade = document.getElementById('maintblfrgrade');

    // Get values from inputs
    const total = document.getElementById('ttltxtgrds').value;
    const grade = document.getElementById('grade').value;

    // Clear previous content, if necessary
    // maintblfrgrade.innerHTML = ''; // Uncomment this if you want to clear the content before appending new

    // Iterate through the input fields and update the table
    for (let i = 1; i < nextIndex; i++) {
        const subjctttl = document.getElementById(`subjctttl${i}`);
        const subjcobtnmrks = document.getElementById(`subjcobtnmrks${i}`);

        if (subjctttl && subjcobtnmrks) {
            const subject = subjctttl.value;
            const marks = subjcobtnmrks.value;

            // Create a new wrapper div
            const monstdsfDiv = document.createElement('div');
            monstdsfDiv.id = 'miantblfrgrds1';

            // Create new div elements and append them inside the wrapper
            const subjectDiv = document.createElement('div');
            subjectDiv.innerText = subject;
            subjectDiv.id = 'subj';
            monstdsfDiv.appendChild(subjectDiv);

            const marksDiv = document.createElement('div');
            marksDiv.innerText = marks;
            marksDiv.id = 'objct';
            monstdsfDiv.appendChild(marksDiv);

            const totalDiv = document.createElement('div');
            totalDiv.innerText = total;
            totalDiv.id = 'ttlmrks';
            monstdsfDiv.appendChild(totalDiv);

            const gradeDiv = document.createElement('div');
            if (document.getElementById('grade').checked) {
                gradeDiv.innerText = calculateGrade(marks, total);
            } else {
                gradeDiv.innerText = '-'
            }
            gradeDiv.id = 'grd'
            monstdsfDiv.appendChild(gradeDiv);

            const gpaDiv = document.createElement('div');
            if (document.getElementById('gpa').checked) {
                gpaDiv.innerText = calculateGPA(marks, total);
            } else {
                gpaDiv.innerText = '-'
            }
            gpaDiv.id = 'gpsa'
            monstdsfDiv.appendChild(gpaDiv);

            // Append the wrapper div to the maintblfrgrade
            maintblfrgrade.appendChild(monstdsfDiv);
        }
    }
});

// Example GPA calculation function
function calculateGPA(marks, total) {
    const marksValue = parseFloat(marks);
    const totalValue = parseFloat(total);
    if (isNaN(marksValue) || isNaN(totalValue) || totalValue === 0) return 'N/A';
    return (marksValue / totalValue * 4).toFixed(2); // Example GPA calculation
}

function calculateGrade(marks, total) {
    const marksValue = parseFloat(marks);
    const totalValue = parseFloat(total);
    if (isNaN(marksValue) || isNaN(totalValue) || totalValue === 0) return 'N/A';
    const percentage = (marksValue / totalValue) * 100;
    if (percentage >= 90) return 'A';
    if (percentage < 50) return 'F';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'E';
}

