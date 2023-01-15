import React, { useState } from 'react';
// import App from './App.js'
// import data from './data.js';

const List = ({people}) => {
  //const [params, setParams] = useState(data)
  return (
    <>
      {people.map((person) => {
        const {id, name, age, image} = person;
        return <article key={id} className="person">
          <img src={image} alt={name} />
          <div>
            <h4>
              {name}
            </h4>
            <p>{age} years</p>
          </div>
          {/* <button className='btn' onClick={(person) => {
            setParams(people.filter((birthdays) => {
              return birthdays.id !== person.id
            }));
          }}>clear</button> */}
        </article>
      })}
    </>
  );
};

export default List;
