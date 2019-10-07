import React, { useEffect } from 'react';
import PeopleCount from './PeopleCount';

const NewPeople = ({ newPerson, peopleCount }) => {
    useEffect(() => {
        const newPersonname = `${newPerson.f_name} ${newPerson.f_name}`;
        document.title = newPersonname;
        console.log('useEffect');
    }, [newPerson]);
    return (
        <div className="col col-sm-12">
            <h2 className="mt-4 text-center">
                Newest Person: {`${newPerson.f_name} ${newPerson.l_name}`}
            </h2>
            <PeopleCount peopleCount={peopleCount} />
        </div>
    )
}

export default NewPeople;