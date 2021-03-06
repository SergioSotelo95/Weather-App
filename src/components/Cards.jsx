import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose, id}) {
  
  
  
  return (
    <div className='cards'>
      {cities.map(c => <Card
          id={c.id}
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}

// import React from 'react';
// import './Cards.css';

// import Card from './Card.jsx';

// export default function Cards({cities, onClose, id}) {
  
  
//   let contador = 0
//   return (
//     <div className='cards'>
//       {cities.map(c => {
//           let nuevoid = c.id.toString() + contador++
//           return <Card
//           id={nuevoid}
//           key={nuevoid}
//           max={c.max}
//           min={c.min}
//           name={c.name}
//           img={c.img}
//           onClose={() => onClose(c.id)}
//         />} )}
//     </div>
//   );
// }