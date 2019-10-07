import React, { useContext } from 'react';
import PeopleContext from '../context/peopleContext';

const PeopleCount = () => {
	const context = useContext(PeopleContext);
	return <h2 className="text-center">{context.people.length}</h2>;
};

export default PeopleCount;
