// Establish local storage variable
const storage = window.localStorage;

// Function to reveal and hide new contact form
document.getElementById('hide').style.display = "none"
document.getElementById("add-contact").addEventListener("click", showForm)
document.getElementById("back").addEventListener("click", showForm)

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

// Function to clear local storage of contact information
document.getElementById("reset-contacts").addEventListener("click", memWipe)

function memWipe() {
    window.localStorage.clear()
    renderContacts()
}

// Function to clear item from local storage
document.getElementById("delete-contact").addEventListener("click", () => {
    // Grab input value from delete button
    const getContactNum = document.querySelector('#contact-num')
    let contactNum = getContactNum.value

    // Delete 1 contacts array item at index "index" and re-write to memory
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    let index = contactNum - 1
    contacts.splice(index, 1)
    console.log("contact array with [0] item removed", contacts)

    // Send edited contacts list back to localStorage
    storage.setItem('contacts', JSON.stringify(contacts))

    // Clear current rendering of contact-list div
    let clearMessage = document.querySelector('.contact-list');
    clearMessage.innerHTML = ""

    // Render edited contacts list
    renderContacts()
})

// Function to show contacts currently in local storage
const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('.contact-list');
    div.innerHTML = ''
    if (contacts) {
        const ol = document.createElement('ol')
        ol.className = "list-reset";
        let index = 0

        contacts.forEach(contact => {
            index += 1
            let li = document.createElement('li')
            li.innerHTML = `
                <div class="card">
                    <div class="content">
                        <p id="name">${index}.  ${  contact.name}</p>
                        <p id="phone"><i class="phone square icon"></i>${ contact.phone}</p>
                        <p id="company"><i class="suitcase icon"></i>${ contact.company}</p>
                        <p id="note"><i class="clipboard outline icon"></i>${ contact.notes}</p>
                        <p id="email"><i class="envelope outline icon"></i>${ contact.email} | <i class="twitter square icon"></i>
                        <a id="twitter" href="https://www.twitter.com/${ contact.twitter}">@${contact.twitter}</a></p>
                    </div>
                </div>
            `
            ol.appendChild(li)
        })
        div.appendChild(ol)
    } 
    else {
        div.innerHTML = `<p id= "no-contacts">You have no contacts in your address book.</p>`
    }
}

// Process to show contacts list stored in memory, persistent between sessions as contacts are stored in localStorage memory
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