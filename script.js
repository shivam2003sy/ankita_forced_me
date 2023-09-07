let currentPage = 1;
const pages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.tracking-sidebar li');
let storedSampleName;
function updateProgress() {
    steps.forEach((step, index) => {
        if (index + 1 === currentPage) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function nextPage() {
    if (currentPage < pages.length) {
        pages[currentPage - 1].classList.remove('active-page');
        currentPage++;
        pages[currentPage - 1].classList.add('active-page');
        updateProgress();

        updateThirdColumn(); // Call the function to update the third column
    }
}

function previousPage() {
    if (currentPage > 1) {
        pages[currentPage - 1].classList.remove('active-page');
        currentPage--;
        pages[currentPage - 1].classList.add('active-page');
        updateProgress();
        updateThirdColumn(); // Call the function to update the third column
    }
}

function updateThirdColumn() {
    const thirdColumn = document.getElementById('third-column');

    switch (currentPage) {
        case 1:
            thirdColumn.innerHTML = `<h4>
                                            What are we going to do in this Experiment ? </h4>
                                            <p>Here we are determining the lattice parameter of BCC & FCC using XRD. </p>`;
            break;
        case 2:
            thirdColumn.innerHTML = '<strong>1. X-ray Source:</strong><p1> X-ray tubes or synchrotrons are commonly used as X-ray sources. X-rays are produced by bombarding a target material with high-energy electrons.</p1> <br/> <strong>2. Sample Holder or Goniometer: </strong><p1>The sample holder, often part of a goniometer, holds the sample in a fixed position.<p1/> <br/> <strong>3. Detector: </strong><p1>X-rays that are scattered by the sample at different angles strike a detector. data collected by the detector forms the diffraction pattern. <p1/>'
            break;
        case 3:
            thirdColumn.innerHTML = '<h4> Sample </h4><p>Choose the sample</p>';
            break;
        case 4:
            storedSampleName = sessionStorage.getItem('selectedOption');
            console.log(storedSampleName)
            loadImage(storedSampleName)
            thirdColumn.innerHTML = '<h4>Page 4 Content</h4><p>This is the content of Page 3.</p>';
            break;
        case 5:
            const storedSampleNamePeek = sessionStorage.getItem('selectedOption');
            loadPeeksImages(storedSampleNamePeek)
            thirdColumn.innerHTML = `<h4>Assignment</h4><p>
            X-ray diffraction patterns of  powder samples Given by XRD. 
Determine precisely lattice parameters.</p>
<input>value of a </input>
`
            break;

        case 6:

            if (storedSampleName == 'Sample no. 0134') {
                const values = [38.68, 44.98, 65.49, 78.73, 82.98];
                const orderedListHTML = `<h4>Values of 2θ from Graph</h4><ol>
            <h5>(2θ)</h5>
            ${values.map(value => `<li>${value}</li>`).join('')}</ol>`;
                thirdColumn.innerHTML = orderedListHTML;
            }
        break;

        case 7:
            // Call the function to generate the table
generateTable();
            thirdColumn.innerHTML=`<div> this is shivam singh </div>`
            break;
        case 8:
            thirdColumn.innerHTML=`<div> this iSpAGE 8 </divf>`
            break;
        default:
            thirdColumn.innerHTML = ''; // Clear the content if no match
            break;
    }
}



const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');

// Check if a choice has been previously saved in session storage
const savedChoice = sessionStorage.getItem('selectedOption');

// If a choice was saved, set the button text to the saved choice
if (savedChoice) {
    dropdownBtn.textContent = savedChoice;
}

// Add a click event listener to the dropdown options
dropdownContent.addEventListener('click', function (e) {
    if (e.target && e.target.getAttribute('data-value')) {
        const selectedOption = e.target.getAttribute('data-value');

        // Set the button text to the selected option
        dropdownBtn.textContent = selectedOption;

        // Save the selected option in session storage
        sessionStorage.setItem('selectedOption', selectedOption);
    }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropbtn')) {
        dropdownContent.classList.remove('show');
    }
});

// Function to open/close the dropdown
dropdownBtn.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
});


function reset() {
    // Remove the item from session storage
    sessionStorage.removeItem('selectedOption');

    // Reload the page
    location.reload();
}






document.addEventListener("DOMContentLoaded", function () {


    // Your code here
});

function loadImage(storedSampleName) {
    const sampleImages = {
        'Sample no. 0134': 'sample3.png',
        'Sample no. 0297': 'sample2.png',
    };
    // Get a reference to the image element
    const imageToShow = document.getElementById('imageToShow');

    // Check if a sample name was found in session storage
    if (storedSampleName != null) {
        // Get the image URL based on the stored sample name
        const imageURL = sampleImages[storedSampleName];
        console.log(imageURL)
        // Set the src attribute of the image element to the corresponding image URL
        imageToShow.src = imageURL;
    }
}

function loadPeeksImages(storedSampleName) {
    // imageToShowPeeks
    const sampleImages = {
        'Sample no. 0134': 'samplepeek3.png',
        'Sample no. 0297': 'sample2.png',
    };
    const imageToShow = document.getElementById('imageToShowPeeks');
    if (storedSampleName != null) {
        // Get the image URL based on the stored sample name
        const imageURL = sampleImages[storedSampleName];
        console.log(imageURL)
        // Set the src attribute of the image element to the corresponding image URL
        imageToShow.src = imageURL;
    }

}


// Your data for the table
const data = [
    { theta: 38.68, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },
    { theta: 44.98, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },
    { theta: 65.49, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },

];

function generateTable() {
    // Your data for the table
    const data = [
        { theta: 38.68, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },
        { theta: 44.98, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },
        { theta: 65.49, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },
    ];

    // Calculate and add the result for each data entry
    const lambda = 1.5418; // Replace with your wavelength in angstroms

    data.forEach(entry => {
        const thetaRadians = (Math.PI * entry.theta) / 180;
        entry.result = lambda / (2 * Math.sin(thetaRadians / 2));
    });

    // Start building the HTML table
    let tableHTML = '<table>';
    tableHTML += '<tr>';
    tableHTML += '<th> λ(Å)</th>';
    tableHTML += '<th>h</th>';
    tableHTML += '<th>k</th>';
    tableHTML += '<th>l</th>';
    tableHTML += '<th>2θ</th>';
    tableHTML += '<th>θ</th>';
    tableHTML += '<th>sinθ</th>';
    tableHTML += '<th>dhlk = λ/2sinθ</th>'; // Add a new column for the calculated result
    tableHTML += '<th> a </th>';
    tableHTML += '</tr>';

    // Loop through the data and add rows
    for (const row of data) {
        const calculatedData = row.formula(row.theta);
        tableHTML += '<tr>';
        tableHTML += `<td>1.5</td>`;
        tableHTML += `<td></td>`;
        tableHTML += `<td></td>`;
        tableHTML += `<td></td>`;
        tableHTML += `<td>${calculatedData.theta.toFixed(2)}</td>`;
        tableHTML += `<td>${calculatedData.thetaOver2.toFixed(2)}</td>`;
        tableHTML += `<td>${calculatedData.s.toFixed(10)}</td>`;
        tableHTML += `<td>${row.result.toFixed(10)}</td>`; // Display the calculated result
        tableHTML += `<td></td>`;
        tableHTML += '</tr>';
    }

    // Finish building the HTML table
    tableHTML += '</table>';

    // Replace the content of the element with id "page7" with the new content
    document.getElementById('page7').innerHTML = tableHTML;
}



updateProgress();