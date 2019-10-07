import React, { useState } from 'react';
import Form from './components/Form';
import People from './components/People'
import NewPerson from './components/NewPeople'

const App = (props) => {
   const [people, setPeople] = useState([
      {
         f_name: 'Pham',
         l_name: 'Hung'
      }
   ]);

   const addPerson = (person) => {
      setPeople([...people, person]);
   }

   return (
      <div className="container">
         <div className="row">
            <Form addPerson={addPerson} />

            <People people={people} />

            <NewPerson newPerson={people[people.length - 1]} peopleCount={people.length} />
         </div>
      </div>
   );
}

export default App;
