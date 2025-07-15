import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

// Styles for letter tiles and container
const style = {
  letterContainer: {
    overflow: 'auto',
    marginBottom: '10px',
  },
  letter: {
    float: 'left',
    padding: '10px 10px',
    background: '#c9e4ed',
    borderRadius: '5px',
    marginRight: '5px',
    cursor: 'pointer',
  },
};

function Tile({ letter, onClick }) {
  return (
    <button style={style.letter} onClick={() => onClick(letter)}>
      {letter}
    </button>
  );
}

function Application() {
  // State to hold the output string
  const [outputString, setOutputString] = useState('');

  // Function to handle letter tile click
  const handleTileClick = (letter) => {
    // Append letter to the string
    const newString = outputString + letter;

    // Check if there are 3 consecutive same letters and replace with "_"
    const varOcg = newString.replace(/([A-Z])\1\1/g, '_'); // Use regex to detect and replace triple identical letters

    // Update state with the new string
    setOutputString(varOcg);
  };

  return (
    <section>
      <aside style={style.letterContainer} id="letterContainer">
        {/* Loop through letters A-Z and render a Tile for each letter */}
        {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
          <Tile key={letter} letter={letter} onClick={handleTileClick} />
        ))}
      </aside>
      <div id="outputString">{outputString}</div>
    </section>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);