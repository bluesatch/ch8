import React from 'react';

 export const tahoe_peaks = [
    { name: 'Freel Peak', elevation: 10091 },
    { name: 'Monument Peak', elevation: 10067 },
    { name: 'Pyramid Peak', elevation: 9983 },
    { name: 'Mt. Tallac', elevation: 9735 }
];

const App2 =()=> {
    return(
        <ul className="list">
            {tahoe_peaks.map(((peak, i) => (
                <li key={i}>
                    {peak.name} - {peak.elevation.toLocaleString()} feet
                </li>
            )))}
        </ul>
    )
}

export default App2;