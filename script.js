let currentPage = 1;
const pages = document.querySelectorAll('.page');
const steps = document.querySelectorAll('.tracking-sidebar li');
let storedSampleName ;
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
            thirdColumn.innerHTML = `<h3>
                                            What are we going to do in this Experiment</h3><p>Ankita write here waht are we going to do inthtis experiment  and explain 
                                                </p>`;
            break;
        case 2:
            thirdColumn.innerHTML = '<h3>Expalain</h3><p>TRY TO EXPLAIN WHAT EACH COMPONENT IS AND WHAT DOES IT DO IN SHORT </p>';
            break;
        case 3:
            thirdColumn.innerHTML = '<h3>Page 3 Content</h3><p>This is the content of Page 3.</p>';
            break;
        case 4:
            storedSampleName = sessionStorage.getItem('selectedOption');
            console.log(storedSampleName)
            loadImage(storedSampleName)
            thirdColumn.innerHTML = '<h3>Page 4 Content</h3><p>This is the content of Page 3.</p>';
            break;
            case 5:
            const storedSampleNamePeek = sessionStorage.getItem('selectedOption');
            loadPeeksImages(storedSampleNamePeek)
            thirdColumn.innerHTML = `<h3>Assignment</h3><p>
            X-ray diffraction patterns of  powder samples Given by XRD. 
Determine precisely lattice parameters.</p>
<input>value of a </input>
`
            break;

        case 6:

        if(storedSampleName == 'Sample no. 0134'){
            const values = [38.68 , 44.98 , 65.49 , 78.73 , 82.98];
            const orderedListHTML = `<h2>Values of 2d from Graph</h2><ol>
            <h5>2θ</h5>
            ${values.map(value => `<li>${value}</li>`).join('')}</ol>`;
            thirdColumn.innerHTML = orderedListHTML;
        }
            break;

            case 7:
                


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
dropdownContent.addEventListener('click', function(e) {
  if (e.target && e.target.getAttribute('data-value')) {
    const selectedOption = e.target.getAttribute('data-value');
    
    // Set the button text to the selected option
    dropdownBtn.textContent = selectedOption;

    // Save the selected option in session storage
    sessionStorage.setItem('selectedOption', selectedOption);
  }
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    dropdownContent.classList.remove('show');
  }
});

// Function to open/close the dropdown
dropdownBtn.addEventListener('click', function() {
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

function loadImage(storedSampleName){
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

function loadPeeksImages(storedSampleName){
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
    { theta: 44.98, formula: (theta) => ({ theta, thetaOver2: theta / 2, s: Math.sin(Math.PI * theta / 360)  }) },
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
tableHTML += '<th>θ</th>';
tableHTML += '<th>θ/2</th>';
tableHTML += '<th>sinθ</th>';
tableHTML += '<th>dhlk</th>'; // Add a new column for the calculated result
tableHTML += '</tr>';

// Loop through the data and add rows
for (const row of data) {
    const calculatedData = row.formula(row.theta);
    tableHTML += '<tr>';
    tableHTML += `<td>${calculatedData.theta.toFixed(2)}</td>`;
    tableHTML += `<td>${calculatedData.thetaOver2.toFixed(2)}</td>`;
    tableHTML += `<td>${calculatedData.s.toFixed(10)}</td>`;
    tableHTML += `<td>${row.result.toFixed(10)}</td>`; // Display the calculated result
    tableHTML += '</tr>';
}

// Finish building the HTML table
tableHTML += '</table>';

// Replace the content of the element with id "page7" with the new content
document.getElementById('page7').innerHTML = tableHTML;


// Import necessary libraries
const math = require('mathjs');
function loadCalation(){
    
// List of peak positions in 2θ angles (in degrees)
const peakPositions = [38.68,
    44.98,
    65.49,
    78.73,
    82.98
    ]; // Replace with your peak positions


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

}


updateProgress();