



function addItems(){
    // get all elements required
    // title, author, isbn

    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let isbn = document.getElementById('isbn').value

// add items to table
    let table = document.getElementsByClassName('table')[0]
    let tbody = document.getElementsByTagName('tbody')[0]
    let trgroup = document.createElement('tr')
    trgroup.classList.add('bookItems')


    let trItem = 
    `<td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><a id="removeBtn" onclick="removeItem()"><i class="fa-solid fa-trash-can"></i></a></td>`
    
    console.log(trItem)

    if(title && author && isbn){
        trgroup.innerHTML =  trItem;
    
        tbody.appendChild(trgroup)
    
        alert('Book added Successfully')
        return
    }
    else{
        alert('Kindly insert all fields')
    }

}


// remove button

function removeItem(){
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let isbn = document.getElementById('isbn').value


    let table = document.getElementsByClassName('table')[0]
    let tbody = document.getElementsByTagName('tbody')[0]
    let trgroup = document.createElement('tr')
    trgroup.classList.add('bookItems')

    let removeBtn =  document.getElementById('removeBtn')

    removeBtn.parentElement.parentElement.remove()
    

}


// dark mode 

function changeDarkMode(){
    let modeToggle = document.getElementById('modeToggle')
    let body = document.getElementById('body')
    body.style.backgroundColor= 'black';
    body.style.color = 'white';

    let modeToggler = document.getElementsByClassName('modeToggler')[0]
    modeToggler.innerHTML = `<button id="modeToggle" onclick="changeLightMode()"><i class="fa-solid fa-toggle-on"></i></i></button>`
}

// change back to light mode
function changeLightMode(){
    let modeToggle = document.getElementById('modeToggle')
    let body = document.getElementById('body')
    body.style.backgroundColor= 'white';
    body.style.color = 'black';

    let modeToggler = document.getElementsByClassName('modeToggler')[0]
    modeToggler.innerHTML = `<button id="modeToggle" onclick="changeDarkMode()"><i class="fa-solid fa-toggle-off"></i></i></button>`
}