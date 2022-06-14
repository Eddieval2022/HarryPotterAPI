
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
  <h1>Harry Potter</h1>

  <p>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter,
     and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.
      The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal,
       overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).</p>
       <h1>Characters</h1>
  <div className='container'>
  {character.slice(0,25).map((char) => (
    <div className = 'info' key = {char.id}>
      <h2>Name : {char.name}</h2>
       <img src={char.image} alt='car'/>
      <p>Gender: {char.gender}</p>
      <p>House: {char.house}</p>
      <p>Species: {char.species}</p>
      <p>D.O.B: {char.dateOfBirth}</p>
     </div>
   
   ))}
   </div>
</div>
   );
}
 
export default CarPics;


