


// const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
const pub = document.getElementById('pub');
const language = document.getElementById('language');
//const genre = document.getElementById('genre');
const genre = document.querySelectorAll('input[name="fav_language"]');

const errorElementTitle = document.getElementById('error1')
const errorElementAuthor = document.getElementById('error2')
const errorElementPrice = document.getElementById('error3')
const errorElementPub = document.getElementById('error4')
const errorElementLanguage = document.getElementById('error5')
const errorElementGenre = document.getElementById('error6')
var noValid = 0


// title    handling of title
function onFormSubmit(){ //check the entered data (validtion)
    var valid = true
   //stocks the errors
    if(title.value === '' ) {  //if user let title blank an error will appear 
        errorElementTitle.innerHTML = 'you have to enter a title*'
        valid = false
    }

    if(title.value.length >= 30 ) {
        errorElementTitle.innerHTML = 'title must be less than 30 character*'
        valid = false
    }



// author



    if(author.value === '' ) {
        errorElementAuthor.innerHTML = 'you have to enter a name*'
        valid = false
    }
    if(author.value.length >= 30 ) {
        errorElementAuthor.innerHTML = 'name must be less than 30 character*'
        valid = false 
    }

// price


    if(price.value === '' ) {
        errorElementPrice.innerHTML = 'please enter the price*'
        valid = false
    }



// publication date


    if(pub.value === '' ) {
        errorElementPub.innerHTML = 'you have to enter a date*'
        valid = false
    }

    

// language


    if(language.value === '' ) {
        errorElementLanguage.innerHTML = 'you have to chose a language*'
        valid = false
    }


 







// genre  !!!!!!!!!!!!!!!!!!!!!!!

const hhhhh = document.getElementsByClassName('f')



    if (!(hhhhh[0].checked || hhhhh[1].checked || hhhhh[2].checked || hhhhh[3].checked || hhhhh[4].checked || hhhhh[5].checked || hhhhh[6].checked || hhhhh[7].checked || hhhhh[8].checked )) {
        errorElementGenre.innerHTML = 'you have to chose a category*'
        valid = false
    }
   
    else{
        errorElementGenre.innerHTML="Good"
        errorElementGenre.style.color ="#d6a5b5";
     }
      if(valid){
          alert("biba chabiba")
        //function insertNewRecord(data) {
            var table = document.getElementById("table");
            var newRow = table.insertRow(-1);

            var cell0 = newRow.insertCell(0);
            cell0.innerHTML = data.title;
        
            var cell1 = newRow.insertCell(1);
            cell1.innerHTML = data.author;
        
            var cell2 = newRow.insertCell(2);
            cell2.innerHTML = data.price;
        
            var cell3 = newRow.insertCell(3);
            cell3.innerHTML = data.pub;
        
            var cell4 = newRow.insertCell(4);
            cell4.innerHTML = data.language;
        
            var cell5 = newRow.insertCell(5);
            cell5.innerHTML = data.genre;
        
            var cell6 = newRow.insertCell(6);
            cell6.innerHTML =  `<button onClick='onEdit(this)'>Edit</button>
            <button onClick='onDelete(this)'>Delete</button>`;
        
       // } 
        }
 
    


   

}



//the taaable
var selectedRow = null

//function onFormSubmit(){
    // if (ValidityState()){    
    var formData = readFormData();
    if(selectedRow == null)
        insertNewRecord(formData);
    else 
    {
        updateRecord(formData);
        selectedRow = null;
    }
        // insertNewRecord(formData);
    resetForm();
    //  }
//}

function readFormData(){
    var formData = {};
    formData["title"] = document.getElementById("title").value;
    formData["author"] = document.getElementById("author").value;
    formData["price"] = document.getElementById("price").value;
    formData["pub"] = document.getElementById("pub").value;
    formData["language"] = document.getElementById("language").value;
    formData["genre"] = document.querySelector('input[name="fav_language"]:checked').value;
    return formData;
}




//infooooosssssss
// function restForm() {
//     document.getElementById("title").value = "";
//     document.getElementById("author").value = "";
//     document.getElementById("price").value = "";
//     document.getElementById("pub").value = "";
//     document.getElementById("language").value = "";
//     document.getElementById("genre").value = "";

//     selectedRow = null;
// }


//when editing
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('title').value = selectedRow.cells[0].innerHTML;
    document.getElementById('author').value = selectedRow.cells[1].innerHTML;
    document.getElementById('price').value = selectedRow.cells[2].innerHTML;
    document.getElementById('pub').value = selectedRow.cells[3].innerHTML;
    document.getElementById('language').value = selectedRow.cells[4].innerHTML;
    document.getElementById('genre').value = selectedRow.cells[5].innerHTML;
}


function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.author;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.pub;
    selectedRow.cells[4].innerHTML = formData.language;
    selectedRow.cells[5].innerHTML = formData.genre;
}

//when u want to delete ur infos

function onDelete(btnDelete) {
    if(confirm('do u really want to delete this ?')){
        row = btnDelete.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        
    }
    resetForm();
}











// function validate() {
//     isValid = true;
//     if (document.getElementById("title").value == "") {
//         isValid = false;
//         document.getElementById("first").classList.remove("hide");
//     } else {
//         isValid = true;
//         if(!document.getElementById("title").classList.contains("hide"))
//             document.getElementById("title").classList.add("hide");
//     }
//     return isValid;
// } 

// let submit1 = document.getElementById('btn')
// submit1.addEventListener("click", onFormSubmit);

















// var title = document.getElementById('title');
// var author = document.getElementById('author');
// var price = document.getElementById('price');
// var pub = document.getElementById('pub');
// var language = document.getElementById('language');
// var genre = document.getElementById('genre');


//  function btn(){
//      var table = document.getElementById('table')
//      var row = table.insertRow(-1);
//      var title = row.insertCell(0);
//      var author = row.insertCell(1);
//      var price = row.insertCell(2);
//      var pub = row.insertCell(3);
//      var language = row.insertCell(4);
//      var genre = row.insertCell(5);

//  }

