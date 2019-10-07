import React, { useEffect, useContext } from 'react';
import PeopleCount from './PeopleCount';
import PeopleContext from '../context/peopleContext';

const NewPeople = () => {
	const context = useContext(PeopleContext);
	const newPerson = context.people[context.people.length - 1];

	useEffect(() => {
		const newPersonname = `${newPerson.f_name} ${newPerson.f_name}`;
		document.title = newPersonname;
		console.log('useEffect');
	}, [newPerson]);
	return (
		<div className="col col-sm-12">
			<h2 className="mt-4 text-center">Newest Person: {`${newPerson.f_name} ${newPerson.l_name}`}</h2>
			<PeopleCount />
		</div>
	);
};

export default NewPeople;
