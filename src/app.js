const storage = window.localStorage;

document.getElementById('hide').style.display= "none"

let a = 1

function showForm () {
    a += 1
    if(a % 2 == 0){
        document.getElementById('hide').style.display= "block";
    }
    else {
        document.getElementById('hide').style.display= "none";
    }
}

document.getElementById("add-contact").addEventListener("click", showForm)
document.getElementById("save-contact").addEventListener("click", showForm)


const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))
    
    let div = document.querySelector('.contact-list');
    div.innderHTML = ''
    if (contacts) {        
        const table = document.createElement('table')
        table.className = "list-reset";
        table.innerHTML = `
                <div class="table-titles">
                        <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Notes</th>
                        <th>Email</th>
                        <th>Twitter</th>
                        </tr>
                </div>
                `
        
        contacts.forEach(contact => {
            let tr = document.createElement('tr')
            tr.innerHTML = `
                <div class="card">
                    <div class="content">
                        <tr>
                        <td>${ contact.name }</td>
                        <td>${ contact.company }</td>
                        <td>${ contact.notes }</td>
                        <td>${ contact.email }</td>
                        <td><a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a></td>
                        <td><button class="ui inverted red button" id="delete">Delete</button>
                        </tr>
                    </div>
                </div>
            `
            table.appendChild(tr)
        })
        
        div.appendChild(table)

        let index = document.getElementsByClassName("list-reset");
            for(let i = 1; i < table.rows.length; i++)
            {
                table.rows[i].cells[5].onclick = function()
                {
                    let c = confirm("do you want to delete this contact?");
                    if(c === true)
                    {
                        index = this.parentElement.rowIndex;
                        table.deleteRow(index);
                        delete contacts[index]
                        
                        
                    }
                    
                    //console.log(index);
                };
                
            }
    } else {
        div.innerHTML = `<p>You have no contacts in your address book</p>`
    }
}

document.addEventListener('DOMContentLoaded', () => {    
    renderContacts()
    const addContactForm = document.querySelector('#new-contact-form')
    addContactForm.addEventListener('submit', event => {
        let clearMessage = document.querySelector('.contact-list');
        clearMessage.innerHTML = ""
        event.preventDefault()        
        const storage = window.localStorage;    
        const{
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements

        const contact ={
            id: Date.now(),
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            notes: notes.value,
            twitter: twitter.value,
        }
        console.log(`Saving the following contact: ${JSON.stringify(contact)}`);
        
        let contacts = JSON.parse(storage.getItem('contacts')) || []
        contacts.push(contact)
        storage.setItem('contacts', JSON.stringify(contacts))

        // function removeStorage () {
        //     localStorage.removeItem()
        //     }
        // document.getElementById("delete").addEventListener("click", removeStorage)
        
        renderContacts()
        addContactForm.reset()
    })
})



// let index, listTable = document.getElementsByClassName("list-reset");
// for (let i = 0; i < listTable.rows.length; i++)
// {
//     listTable.rows[i].onclick = function()
//     {
//         index = this.parentElement.rowIndex;
//         console.log(index);
//     };
    
// }