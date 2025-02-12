import React, { useState, useEffect } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faCake, faVenusMars, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function Index() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("Erkak");

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(savedUsers);
    }, []);

    const handleSubmit = () => {
        const newUser = { name, surname, phone, email, age, password, gender };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setName("");
        setSurname("");
        setPhone("");
        setEmail("");
        setAge("");
        setPassword("");
        setGender("Erkak");
    };

    const handleDelete = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    const handleEdit = (index) => {
        const user = users[index];
        setName(user.name);
        setSurname(user.surname);
        setPhone(user.phone);
        setEmail(user.email);
        setAge(user.age);
        setPassword(user.password);
        setGender(user.gender);

        handleDelete(index);
    };

    return (
        <div className="container">
            <aside>
                <h1>Ma'lumot kirgazish</h1>
                <input type="text" placeholder="Ismingizni kiriting" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Familiyangizni kiriting" value={surname} onChange={(e) => setSurname(e.target.value)} />
                <input type="text" placeholder="Telefon raqamingizni kiriting" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="email" placeholder="Emailingizni kiriting" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="gender">
                    <p>Jinsingizni tanlang</p>
                    <input type="checkbox" checked={gender === "Erkak"} onChange={() => setGender(gender === "Erkak" ? "Ayol" : "Erkak")} />
                    <span>{gender}</span>
                </div>
                <input type="text" placeholder="Yoshingizni kiriting" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="password" required placeholder="Parolingizni kiriting" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Ma'lumotlarni saqlash</button>
            </aside>

            <div className="person-data-cards-sec">
                {users.map((user, index) => (
                    <div className="person-data-card" key={index}>
                        <h2><FontAwesomeIcon icon={faUser} /> {user.name} {user.surname}</h2>
                        <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p>
                        <p><FontAwesomeIcon icon={faPhone} /> {user.phone}</p>
                        <p><FontAwesomeIcon icon={faCake} /> {user.age} yosh</p>
                        <p><FontAwesomeIcon icon={faVenusMars} /> {user.gender}</p>
                        <div className="buttons">
                            <button className="delete" onClick={() => handleDelete(index)}>
                                <FontAwesomeIcon icon={faTrash} /> Delete
                            </button>
                            <button className="edit" onClick={() => handleEdit(index)}>
                                <FontAwesomeIcon icon={faEdit} /> Edit
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;
