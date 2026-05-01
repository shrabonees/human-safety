"use client";

import { useEffect, useState } from "react";

export default function EmergencyContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContacts] = useState<string[]>([]);

  useEffect(() => {
    const savedContacts = localStorage.getItem("emergencyContacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  function saveContact() {
    if (name === "" || phone === "") {
      alert("Please enter name and phone number");
      return;
    }

    const newContacts = [...contacts, `${name} - ${phone}`];
    setContacts(newContacts);
    localStorage.setItem("emergencyContacts", JSON.stringify(newContacts));

    setName("");
    setPhone("");
  }

  function deleteContact(index: number) {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
    localStorage.setItem("emergencyContacts", JSON.stringify(newContacts));
  }

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Emergency Contact</h1>
      <p>Add trusted emergency contacts.</p>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br /><br />

      <button onClick={saveContact}>Save Contact</button>

      <h2>Saved Contacts</h2>

      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact}{" "}
            <button onClick={() => deleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}