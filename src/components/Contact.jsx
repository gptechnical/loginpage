import React, { useState } from 'react';

const Contact =() =>{
  const [duplicates, setDuplicates] = useState([]);

  const findDuplicates = (arr) => {
    const seen = {};
    const duplicatesArray = [];

    arr.forEach((value) => {
      if (seen[value]) {
        if (!duplicatesArray.includes(value)) {
          duplicatesArray.push(value);
        }
      } else {
        seen[value] = true;
      }
    });

    return duplicatesArray;
  };

  const myArray = [1, 2, 3, 4, 2, 5, 6, 4, 7, 8, 9, 1];
  const handleFindDuplicates = () => {
    const foundDuplicates = findDuplicates(myArray);
    setDuplicates(foundDuplicates);
  };

  return (
    <div>
      <button onClick={handleFindDuplicates}>Find Duplicates</button>
      <h2>Duplicate Values:</h2>
      <ul>
        {duplicates.map((duplicate, index) => (
          <li key={index}>{duplicate}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
