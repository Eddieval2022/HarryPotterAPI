
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
       <p>The series follows the life of a boy named Harry Potter. In the first book, Harry Potter and the Philosopher's Stone, Harry lives in a cupboard under the stairs in the house of the Dursleys, his aunt, uncle and cousin. The Dursleys consider themselves perfectly normal, but at the age of eleven, Harry discovers that he is a wizard. He meets a half-giant named Hagrid who invites him to attend the Hogwarts School of Witchcraft and Wizardry. Harry learns that as a baby, his parents were murdered by the dark wizard Lord Voldemort. When Voldemort attempted to kill Harry, his curse rebounded and Harry survived with a lightning-shaped scar on his forehead.</p>
       <p>Harry becomes a student at Hogwarts and is sorted into Gryffindor House. He gains the friendship of Ron Weasley, a member of a large but poor wizarding family, and Hermione Granger, a witch of non-magical, or Muggle, parentage. Harry encounters the school's potions master, Severus Snape, who displays a dislike for him; the rich pure-blood Draco Malfoy whom he develops an enmity with; and the Defence Against the Dark Arts teacher, Quirinus Quirrell, who turns out to be allied with Lord Voldemort. The first book concludes with Harry's confrontation with Voldemort, who, in his quest to regain a body, yearns to gain the power of the Philosopher's Stone, a substance that bestows everlasting life.</p>
       <h2>Characters</h2>
  <div className='container'>
  {character.slice(0,25).map((char) => (
    <div className = 'info' key = {char.id}>
      <h3>Name : {char.name}</h3>
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


