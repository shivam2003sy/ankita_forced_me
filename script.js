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
                                            <p1>Determining the lattice parameters of crystal structures like BCC and FCC using X-ray diffraction (XRD) involves a series of steps and experimental procedures. </p1> <ul> <li> Sample Preparation </li> <li> X-ray Diffraction Setup </li> <li> Data Collection </li> <li> Data Analysis </li> <li>Determining Miller Indices </li>   <li>Calculating Interplanar Spacing</li>  <li>Calculating Lattice Parameters</li> </ul>`;
            break;
        case 2:
            thirdColumn.innerHTML = ' <h4>Explanation </h4> <strong>1. X-ray Source:</strong><p1> X-ray tubes or synchrotrons are commonly used as X-ray sources. X-rays are produced by bombarding a target material with high-energy electrons.</p1> <br/> <strong>2. Sample Holder or Goniometer: </strong><p1>The sample holder, often part of a goniometer, holds the sample in a fixed position.</p1> <br/> <strong>3. Detector: </strong><p1>X-rays that are scattered by the sample at different angles strike a detector. data collected by the detector forms the diffraction pattern. <p1/>'
            break;


        case 3:
            storedSampleName = sessionStorage.getItem('selectedOption');
            console.log(storedSampleName)
            loadImage(storedSampleName)
            thirdColumn.innerHTML = '<h4>Page 4 Content</h4><p>This is the content of Page 3.</p>';
            break;
        case 4:

            thirdColumn.innerHTML = ' <h4>Step 4 </h4>  <p> After the sample has been installed and the doors closed, We should specify the parameters of scanning (starting and ending angle, step, radiation, the use of a monochromator, and experiment temperature).</p> '


            // ===== card html =======

            // thirdColumn.innerHTML = '  <div class="card">  <h6> Setup scanning parameters</h6> <hr/> <label for="temperature"> <strong> Temperature (°C): </strong></label> <div class="input-group"><button id="decrease">-</button><input type="text" id="temperature" value="25" readonly><button id="increase">+</button></div>   <strong> Scanning: </strong>   </div>';

            // const decreaseButton = document.getElementById('decrease');
            // const increaseButton = document.getElementById('increase');
            // const temperatureInput = document.getElementById('temperature');

            // // Function to decrease temperature
            // decreaseButton.addEventListener('click', () => {
            //     let currentTemperature = parseFloat(temperatureInput.value);
            //     currentTemperature -= 5;
            //     temperatureInput.value = currentTemperature.toFixed(1);
            // });

            // // Function to increase temperature
            // increaseButton.addEventListener('click', () => {
            //     let currentTemperature = parseFloat(temperatureInput.value);
            //     currentTemperature += 5;
            //     temperatureInput.value = currentTemperature.toFixed(1);
            // });

            // // Prevent non-numeric input in the temperature field
            // temperatureInput.addEventListener('input', () => {
            //     temperatureInput.value = temperatureInput.value.replace(/[^0-9.]/g, '');
            // });


            break;

        case 5:
            thirdColumn.innerHTML = " <h4> Step 5 </h4> <p>To start scanning, We have to turn on the X-ray radiation, open the shutter, and press the Start scanning button. The left panel dynamically displays either the Bragg-Brentano diagram or goniometer status. The right panel shows the scattering X-ray pattern being recorded. After the scanning is completed, the generated X-ray pattern can be saved for further examination.</p>"
            break;
        case 6:
            const storedSampleNamePeek = sessionStorage.getItem('selectedOption');
            loadPeeksImages(storedSampleNamePeek)
            thirdColumn.innerHTML = `<h4>Assignment</h4><p>
            X-ray diffraction patterns of  powder samples Given by XRD. 
Determine precisely lattice parameters.</p>
<label for = "aInput" > value of a : </label>
<input id="aInput" ></input>

<button  id="submitButton" > Submit </button>
`

            const aInput = document.getElementById('aInput');
            const submitButton = document.getElementById('submitButton');

            // Define the target value for 'a'
            const targetAValue = 10; // Change this to your desired target value

            // Add a click event listener to the submit button
            submitButton.addEventListener('click', () => {
                // Get the entered value from the input field and convert it to a number
                const enteredAValue = parseInt(aInput.value);

                // Check if the entered value is equal to the target value
                if (enteredAValue === targetAValue) {
                    alert(`Lattice Parameter value ${targetAValue} is Correct.`);
                }
                 else {
                    alert(' Value of Lattice Parameter is wrong, Please Calculate again or go ahead. ');
                }
            });
            break;

        case 7:

            if (storedSampleName == 'Sample no. 0134') {
                const values = [38.68, 44.98, 65.49, 78.73, 82.98];
                const orderedListHTML = `<h4>Values of 2θ from Graph</h4><ol>
            <h5>(2θ)</h5>
            ${values.map(value => `<li>${value}</li>`).join('')}</ol>`;
                thirdColumn.innerHTML = orderedListHTML;
            }
            break;

        case 8:



            // List of peak positions in 2θ angles (in degrees)
            const peakPositions = [10, 20, 30, 40, 50]; // Replace with your peak positions

            // Wavelength of X-rays used (you may need to adjust this)
            const lambda = 1.5406; // Ångstroms

            // Calculate lattice parameters using peak positions and Bragg's law
            const latticeConstants = peakPositions.map(angle => {
                const twoTheta = math.unit(angle, 'degree');
                const dSpacing = lambda / (2 * math.sin(twoTheta / 2));
                return 2 * dSpacing; // This assumes a cubic lattice; adjust as needed
            });

            // Output lattice parameters
            console.log('Lattice Parameters:');
            latticeConstants.forEach((a, index) => {
                console.log(`a${index + 1}: ${a} Ångstroms`);
            });


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

// function generateTable() 
// Your data for the table
// const data = [
//     { theta: 38.68, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },
//     { theta: 44.98, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },
//     { theta: 65.49, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360) }) },
// ];

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




updateProgress();