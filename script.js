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
            // Your data
            const data = [
                { theta: 38.68, s: 0.2759873095, ratio: 0.04 },
                { theta: 44.98, s: 0.2981917873, ratio: 0.02 },
                { theta: 65.49, s: 0.3119936791, ratio: 0.02 },
            ];
            // Start building the HTML table
            let tableHTML = '<table>';
            tableHTML += '<tr>';
            tableHTML += '<th>θ</th>'; // Corrected from 'θ' to 's'
            tableHTML += '<th>θ/2</th>';
            tableHTML += '<th>s</th>';
            tableHTML += '<th>Ratio</th>';
            tableHTML += '</tr>';
            
            // Loop through the data and add rows
            for (const row of data) {
                tableHTML += '<tr>';
                tableHTML += `<td>${row.theta.toFixed(2)}</td>`;
                tableHTML += `<td>${(row.theta / 2).toFixed(2)}</td>`;
                tableHTML += `<td>${row.s.toFixed(10)}</td>`;
                tableHTML += `<td>${row.ratio}</td>`;
                tableHTML += '</tr>';
            }
            
            // Finish building the HTML table
            tableHTML += '</table>';
            thirdColumn.innerHTML = tableHTML;
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

 

updateProgress();