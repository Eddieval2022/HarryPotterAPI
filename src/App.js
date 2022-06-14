
import './App.css';
import { useEffect, useState } from 'react';

const CarPics = () => {
  const [character, setCharacter] = useState([]);
  const [error, setError] = useState (null);

  useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await fetch ('http://hp-api.herokuapp.com/api/characters'

    );
    if (!response.ok){
      throw new Error (response.statusText);}
      const data = await response.json();
      console.log(data);
      setCharacter(data);

    }
    catch (error){ console.log(error)
   setError('could not find data');
    }
  
  };
  fetchData();
}, []);
  return ( 
    
<div className='Characters'>
  {error && <p>{error}</p>}
  <h1>Characters</h1>
  {character.slice(0,25).map((char) => (
    <div key = {char.id}>
      <h2>Name : {char.name}</h2>
       <img src={char.image} alt='car'/>
      <p>Gender: {char.gender}</p>
      <p>House: {char.house}</p>
      <p>Species: {char.species}</p>
      <p>D.O.B: {char.dateOfBirth}</p>
     </div>
   
  ))}
</div>
   );
}
 
export default CarPics;


