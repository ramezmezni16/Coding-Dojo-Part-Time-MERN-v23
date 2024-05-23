import React from 'react';
import './App.css';
import PersonComponent from './components/MyNewComponent';

const peopleArr = [
    { "firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black" },
    { "firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown" },
];
function App() {
    return (
        <div className="App">
            {peopleArr.map((person, index) => (
                <PersonComponent
                    key={index}
                    firstName={person.firstName}
                    lastName={person.lastName}
                    age={person.age}
                    hairColor={person.hairColor}
                />
            ))}
        </div>
    );
}
export default App;
