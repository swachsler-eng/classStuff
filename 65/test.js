

function getElement(id) {
  return document.querySelector(id);
}

function setCss(element,property, value) {
  element.style[property] = value;
}

function on(element,eventType, callback) {
  element.addEventListener(eventType, callback);
}

function click(element, callback) {
  on(element, 'click', callback);
}



const contactsTable = getElement('#contactsTable tbody');
const addContactForm = getElement('#addContact');
const firstInput = $('#first');
const lastInput = $('#last');
const emailInput = $('#email');
const phoneInput = $('#phone');
const addContactButton = $('#add');
let contacts = [];

function hideAddContactForm() {
  setCss(addContactForm, 'display', 'none');
  addContactForm.reset();
  addContactButton.style.visibility = 'visible';

}
on(addContactForm, 'submit', e => {
    e.preventDefault();
});
// addContactForm.addEventListener('submit', e => {
//   e.preventDefault();

  if (!contacts.length) {
    contactsTable.innerHTML = '';
  }

  const newContact = {
    first: firstInput.val(),
    last: lastInput.val(),
    email: emailInput.val(),
    phone: phoneInput.val()
  };

  contacts.push(newContact);

  const row = contactsTable.insertRow();

  // <td><button>delete</button></td>
  row.innerHTML = `
    <td>${firstInput.val()}</td>
    <td>${lastInput.val()}</td>
    <td>${emailInput.val()}</td>
    <td>${phoneInput.val()}</td>
    <td><button>delete</button></td>
  `;

  /*const td = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  td.appendChild(deleteButton);
  row.appendChild(td);
  deleteButton.addEventListener('click', () => {
    console.log('delete row here');
  });*/

  row.querySelector('button').addEventListener('click', () => {
    row.remove();

    contacts = contacts.filter(c => c !== newContact);

    if (!contacts.length) {
      contactsTable.innerHTML = `<tr>
          <td colspan="5">no contacts loaded</td>
        </tr>`;
    }
  });

  hideAddContactForm();
;

addContactButton.click(() => {
  addContactForm.style.display = 'block';
  addContactButton.style.visibility = 'hidden';
});

document.querySelector('#cancel').addEventListener('click', hideAddContactForm);