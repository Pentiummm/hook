import React, { useState, useContext } from 'react';
import PeopleContext from '../context/peopleContext';

const From = () => {
	const [person, setPerson] = useState({
		f_name: '',
		l_name: '',
	});
	const context = useContext(PeopleContext);

	const onChange = event => {
		setPerson({ ...person, [event.target.name]: event.target.value });
	};

	const onSubmit = event => {
		event.preventDefault();
		const newPerson = {
			f_name: person.f_name,
			l_name: person.l_name,
		};
		// setPeople([...people, newPerson]);
		context.addPerson(newPerson);
		setPerson({ f_name: '', l_name: '' });
	};
	return (
		<div className="col">
			<h2>Add person:</h2>
			<hr />
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						name="f_name"
						value={person.f_name}
						onChange={onChange}
					/>
				</div>

				<div className="form-group">
					<input
						type="text"
						className="form-control"
						name="l_name"
						value={person.l_name}
						onChange={onChange}
					/>
				</div>
				<button className="btn btn-success" type="submit">
					Add person
				</button>
			</form>
		</div>
	);
};

export default From;
