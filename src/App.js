import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  useEffect(() => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    setUniqueWordCount(uniqueWords.size);

    const chars = text.replace(/[\s\W_]+/g, '');
    setCharCount(chars.length);
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleReplace = () => {
    const replacedText = text.replaceAll(searchString, replaceString);
    setText(replacedText);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Real-Time Text Analysis and String Replacement</h1>
      
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type here..."
        style={{
          width: '100%',
          minHeight: '200px',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="String to search for"
          style={{
            width: 'calc(50% - 10px)',
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <input
          type="text"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder="Replace with"
          style={{
            width: 'calc(50% - 10px)',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      <button
        onClick={handleReplace}
        style={{
          padding: '10px 15px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Replace All
      </button>

      <div style={{ marginTop: '20px' }}>
        <p><strong>Unique Words:</strong> {uniqueWordCount}</p>
        <p><strong>Character Count (Excluding Spaces and Punctuation):</strong> {charCount}</p>
      </div>
    </div>
  );
}

export default App;
