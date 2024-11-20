document.write(` <h1 style="text-align: center; margin-top: 200px;">Chapter: 43-52.<br> <br>  <b>(EVENTS)</b></h1>`)

 // ------------------------- EVENTS ---------------------

/////////////////////////////Assignment43-48


 // question 1. Show an alert box on click on a link.
 
 // question 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted. 

//  function deleteRow(button) {
//     const row = button.parentNode.parentNode;
//     row.remove();
// }
// question 4 
// function over(){
//     document.getElementById("image").src = "flower 2.jpg"
// }


// function out(){
//     document.getElementById("image").src = "flower 1.jpg"

// }

// question 5
// var counter = 0;


// function increaseCounter() {
//     counter++; 
//     updateCounterDisplay();
// }
// function decreaseCounter() {
//     counter--; 
//     updateCounterDisplay();
// }
// function updateCounterDisplay() {
//     const counterElement = document.getElementById('counterValue');
//     counterElement.textContent = counter;
// }

////////// //Assignment 49_52

 //question 01 1. Create a signup form and display form data in your web page on submission.

// function fieldValues() {
    
//     var un = document.getElementById('username').value;
//     var eem = document.getElementById('email').value;
//     var pswd = document.getElementById('password').value;
//     var data = document.getElementById('data');
  
//     if (eem === '') {
//       alert('Email is Required')
//     } else {
//       data.innerHTML = `Username = ${un} </br> Email = ${eem} </br> Password = ${pswd}`;
  
//     }

//   }
  
// question 2
//   Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

// function toggleDetails(button) {
//     const details = button.previousElementSibling; 
//     if (details.style.display === "none" || details.style.display === "") {
//         details.style.display = "block"; 
//         button.textContent = "Read Less"; 
//     } else {
//         details.style.display = "none"; 
//         button.textContent = "Read More";
//     }
// }


// question 3 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.


//visible form
function hideForm() {
    var form = document.getElementById('form1');
    form.style.display = 'none';
  }
  
  function vissibleForm() {
    var form = document.getElementById('form1');
    form.style.display = 'inline-block';
  
    // clear form inputs
  var nameInput= document.getElementById('name');
  var lnameInput = document.getElementById('lname');
  var genderInput = document.getElementById('gender');
  var ageInput = document.getElementById('age');
  
  nameInput.value = "";
  lnameInput.value = "";
  genderInput.value = "";
  ageInput.value = "";
  }
  
  //add Row 
  function addRow() {
    var table = document.getElementById('results');
    var row = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
  
    var button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'delete');
    button.setAttribute('onclick', 'delRow(this)');
  
  
    td1.innerHTML = document.getElementById('name').value;
    td2.innerHTML = document.getElementById('lname').value;
    td3.innerHTML = document.getElementById('gender').value;
    td4.innerHTML = document.getElementById('age').value;
    td5.appendChild(button);
  
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
  
    table.children[0].appendChild(row);
  
    hideForm();
  }
  
  //delete row
  
  function delRow(row) {
    var tablee = document.getElementById('results');
    tablee.deleteRow(row.parentNode.parentNode.rowIndex)
  }