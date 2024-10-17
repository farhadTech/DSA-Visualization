// script.js

let array = [5, 10, 15, 20, 25]; // Initial array for visualization

function loadAlgorithm(algorithm) {
    const content = document.getElementById('algorithm-content');
    let algorithmHTML = '';

    switch (algorithm) {
        case 'adt':
            algorithmHTML = `
                <h2>Array ADT Visualization</h2>
                <p>Select an operation:</p>
                <button onclick="arrayADT('insert')">Insert</button>
                <button onclick="arrayADT('delete')">Delete</button>
                <button onclick="arrayADT('search')">Search</button>
                <button onclick="arrayADT('display')">Display</button>
                <button onclick="arrayADT('traverse')">Traverse</button>
                <button onclick="arrayADT('update')">Update</button>
                <div id="adt-output"></div>
                <div id="array-box"></div>
            `;
            displayArray(); // Show the initial array
            break;
        case 'linearSearch':
            algorithmHTML = '<h2>Linear Search Visualization</h2><p>Visualize how linear search works here.</p>';
            break;
        case 'kadane':
            algorithmHTML = '<h2>Kadane\'s Algorithm Visualization</h2><p>Visualize the largest sum contiguous subarray.</p>';
            break;
        case 'prefixSum':
            algorithmHTML = '<h2>Prefix Sum Visualization</h2><p>Visualize prefix sum technique for arrays.</p>';
            break;
        case 'slidingWindow':
            algorithmHTML = '<h2>Sliding Window Visualization</h2><p>Visualize sliding window technique.</p>';
            break;
        case 'arrayPartition':
            algorithmHTML = '<h2>Array Partitioning Visualization</h2><p>Visualize how to partition arrays.</p>';
            break;
        case 'rainWater':
            algorithmHTML = '<h2>Rain Water Trapping Visualization</h2><p>Visualize the rain water trapping problem.</p>';
            break;
        default:
            algorithmHTML = '<p>Select an algorithm to visualize its functionality.</p>';
    }

    content.innerHTML = algorithmHTML;
}

function arrayADT(operation) {
    const output = document.getElementById('adt-output');
    let outputHTML = '';

    switch (operation) {
        case 'insert':
            outputHTML = `
                <p>Insert operation: Add an element to the array.</p>
                <input type="number" id="insertValue" placeholder="Enter value to insert" />
                <button onclick="insertElement()">Insert</button>
            `;
            break;
        case 'delete':
            outputHTML = `
                <p>Delete operation: Remove an element from the array.</p>
                <input type="number" id="deleteValue" placeholder="Enter value to delete" />
                <button onclick="deleteElement()">Delete</button>
            `;
            break;
        case 'search':
            outputHTML = `
                <p>Search operation: Find an element in the array.</p>
                <input type="number" id="searchValue" placeholder="Enter value to search" />
                <button onclick="searchElement()">Search</button>
            `;
            break;
        case 'display':
            outputHTML = '<p>Display operation: Show the current elements in the array.</p>';
            displayArray();
            break;
        case 'traverse':
            outputHTML = '<p>Traverse operation: Visiting all elements in the array.</p>';
            displayArray();
            break;
        case 'update':
            outputHTML = `
                <p>Update operation: Modify an element in the array.</p>
                <input type="number" id="oldValue" placeholder="Old value" />
                <input type="number" id="newValue" placeholder="New value" />
                <button onclick="updateElement()">Update</button>
            `;
            break;
        default:
            outputHTML = '<p>Select an Array ADT operation to visualize.</p>';
    }

    output.innerHTML = outputHTML;
}

function displayArray() {
    const arrayBox = document.getElementById('array-box');
    let arrayHTML = '<p>Current Array:</p><div class="array-box">';

    array.forEach((element, index) => {
        arrayHTML += `<div class="array-element">${element}</div>`;
    });

    arrayHTML += '</div>';
    arrayBox.innerHTML = arrayHTML;
}

function insertElement() {
    const value = parseInt(document.getElementById('insertValue').value);
    if (!isNaN(value)) {
        array.push(value);
        displayArray();
    }
}

function deleteElement() {
    const value = parseInt(document.getElementById('deleteValue').value);
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
        displayArray();
    } else {
        alert("Value not found in the array.");
    }
}

function searchElement() {
    const value = parseInt(document.getElementById('searchValue').value);
    const index = array.indexOf(value);
    if (index !== -1) {
        alert(`Value found at index ${index}`);
    } else {
        alert("Value not found in the array.");
    }
}

function updateElement() {
    const oldValue = parseInt(document.getElementById('oldValue').value);
    const newValue = parseInt(document.getElementById('newValue').value);
    const index = array.indexOf(oldValue);
    if (index !== -1 && !isNaN(newValue)) {
        array[index] = newValue;
        displayArray();
    } else {
        alert("Old value not found or new value is invalid.");
    }
}
