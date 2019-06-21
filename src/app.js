// Establish local storage variable
const storage = window.localStorage;

// Function to reveal and hide new contact form
document.getElementById('hide').style.display = "none"

let a = 1

function showForm() {
    a += 1
    if (a % 2 == 0) {
        document.getElementById('hide').style.display = "block";
    }
    else {
        document.getElementById('hide').style.display = "none";
    }
}

document.getElementById("add-contact").addEventListener("click", showForm)
document.getElementById("save-contact").addEventListener("click", showForm)

// Function to clear local storage of contact information
document.getElementById("reset-contacts").addEventListener("click", memWipe)

function memWipe() {
    window.localStorage.clear()
    renderContacts()
}

// Function to clear an item(s) from local storage
document.getElementById("delete-contact").addEventListener("click", memDeleteItem)

function memDeleteItem() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    console.log("contacts array", contacts)
    console.log("first entry in contacts array", contacts[0])
    console.log("length of contacts array", contacts.length)
    console.log("return id value of first entry in contacts", contacts[0].id)

    // let i = localStorage.length;
    // while (i-- > 0) {
    //     let key = localStorage.key(i);
    //     if (localStorage.getItem(key) === 'Max Aubain') {
    //         localStorage.removeItem(key);
    //     }
    // }

    //renderContacts()
}


// Function to show contacts currently in 
const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('.contact-list');
    div.innderHTML = ''
    if (contacts) {
        const ul = document.createElement('ul')
        ul.className = "list-reset";

        contacts.forEach(contact => {
            let li = document.createElement('li')
            li.innerHTML = `
                <div class="card">
                    <div class="content">
                        <h1>${ contact.name}</h1>
                        <h2>${ contact.company}</h2>
                        <p>${ contact.notes}</p>
                        ${ contact.email} |
                        <a href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a>
                    </div>
                </div>
            `
            ul.appendChild(li)
        })

        div.appendChild(ul)
    } else {
        div.innerHTML = `<p>You have no contacts in your address book</p>`
    }
}

// Process to show contacts list, persistent between sessions as contacts are stored in local storage
document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    const addContactForm = document.querySelector('#new-contact-form')
    addContactForm.addEventListener('submit', event => {
        let clearMessage = document.querySelector('.contact-list');
        clearMessage.innerHTML = ""
        event.preventDefault()
        const storage = window.localStorage;
        const {
            name,
            email,
            phone,
            company,
            notes,
            twitter,
        } = addContactForm.elements

        const contact = {
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
        renderContacts()
        addContactForm.reset()
    })
})