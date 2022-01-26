import'./App.css';
import contactsJson from './contacts.json';
import {useState} from "react";
import React from 'react';


const startContacts = contactsJson.slice(0,5);


function App () { 
 const [contacts,setContacts] = useState(startContacts);

/* ITERATION 3 - ADD RANDOM CONTACT  
const addRandomContact = () => {
    const addedContact = contacts [Math.floor(Math.random() * contacts.length)];
    const copContact = [...contacts]; 

    copContact.unshift(contacts) 
    setContacts({contacts: copContact); 
 } */
 


  return ( 
    <div className="App">
  <h1> IronContacts</h1> 
  
{/*  Iteration 3  */}
{/*   <button  Onclick={() => this.addRandomContact(contactsJson)}
  key={contactsJson.id}>  Add Contact </button> */}


  <table className="contacts"> 
  <thead> 
    <tr>  
  <th> Picture</th>
  <th>Name</th>
  <th>Popularity</th>  
  <th>Won Oscar</th>
  <th>Won Emmy</th> 
</tr>
  </thead>
  
<tbody> {this.state.contacts.map((contact,index) =>{
  return ( 
    <tr key={ index}>
      <td>
        <img src={contact.pictureUrl} alt="{contact.name}"> </img> </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td> {contact.wonOscar && <p>(&#127942)</p>}</td>
      <td> {!contact.wonOscar && <p>()</p> }</td>

      <td>{contact.wonEmmy && <p>( &#127942) </p>}</td>
      <td>{!contact.wonEmmy && <p>( &#127942) </p>}</td>
 
  </tr>
  )})}
</tbody>
  
</table> 
 </div> );
  }
export default App;