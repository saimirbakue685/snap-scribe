/**
 * Filename: sophisticatedCode.js
 * 
 * Description:
 * This code is a complex implementation of a contact manager application.
 * It includes various features such as adding, editing, and deleting contacts,
 * searching for contacts, and sorting contacts by name or age.
 * The code is designed to be modular and maintainable with proper documentation.
 * 
 * Disclaimer:
 * This code is a sample demonstration and may not comply with all best practices
 * or include error handling for all possible scenarios. It is meant for educational
 * purposes only.
 */

// Define the Contact class
class Contact {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.name} (Age: ${this.age}) - ${this.email}`;
  }
}

// Define the ContactManager class
class ContactManager {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  editContact(index, newName, newAge, newEmail) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts[index].name = newName;
      this.contacts[index].age = newAge;
      this.contacts[index].email = newEmail;
    }
  }

  deleteContact(index) {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts.splice(index, 1);
    }
  }

  searchContacts(keyword) {
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  sortBy(property) {
    this.contacts.sort((a, b) => a[property] > b[property] ? 1 : -1);
  }

  printContacts() {
    this.contacts.forEach(contact => console.log(contact.toString()));
  }
}

// Example usage:

// Create a new contact manager
const myContactManager = new ContactManager();

// Add some contacts
const contact1 = new Contact("John Doe", 26, "john.doe@example.com");
const contact2 = new Contact("Jane Smith", 30, "jane.smith@example.com");
myContactManager.addContact(contact1);
myContactManager.addContact(contact2);

// Print all contacts
console.log("All Contacts:");
myContactManager.printContacts();

// Edit contact at index 0
myContactManager.editContact(0, "John Smith", 27, "john.smith@example.com");

// Search for contacts containing "Smith"
console.log("Search Results:");
const searchResults = myContactManager.searchContacts("Smith");
searchResults.forEach(contact => console.log(contact.toString()));

// Delete contact at index 1
myContactManager.deleteContact(1);

// Sort contacts by age
myContactManager.sortBy("age");

// Print contacts after modifications
console.log("Contacts after modifications:");
myContactManager.printContacts();