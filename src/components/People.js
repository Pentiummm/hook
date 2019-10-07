import React, { useContext } from 'react';
import PeopleContext from '../context/peopleContext';

const People = props => {
	const context = useContext(PeopleContext);
	return (
		<div className="col">
			<h2>People</h2>
			<hr />
			{context.people.map(p => (
				<div key={Math.random() * 10000}>
					<p>
						{p.f_name} {p.l_name}
					</p>
				</div>
			))}
		</div>
	);
};

export default People;
