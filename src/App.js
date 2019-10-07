import React, { useState, useReducer } from 'react';
import Form from './components/Form';
import People from './components/People';
import NewPerson from './components/NewPeople';

import PeopleContext from './context/peopleContext';
import peopleReducer from './context/peopleReducer';
import { ADD_PERSON } from './context/types';

const App = props => {
	const initialState = {
		people: [
			{
				f_name: 'Pham',
				l_name: 'Hung',
			},
		],
	};

	const [state, dispatch] = useReducer(peopleReducer, initialState);

	const addPerson = person => {
		dispatch({
			type: ADD_PERSON,
			payload: person,
		});
	};

	return (
		<PeopleContext.Provider
			value={{
				people: state.people,
				addPerson,
			}}
		>
			<div className="container">
				<div className="row">
					<Form />

					<People />

					<NewPerson />
				</div>
			</div>
		</PeopleContext.Provider>
	);
};

export default App;
