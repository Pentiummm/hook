import { createContext } from 'react';

const peopleContext = createContext({
	poeple: [],
	addPerson: person => {},
});

export default peopleContext;
