import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');

  return (
    <div style={{padding:'40px'}}>
      <h1>বাংলা AI Health Assistant</h1>

      <button
        onClick={() => setText('আপনার AI app ঠিকভাবে চলছে')}
        style={{
          padding:'14px 24px',
          background:'#10b981',
          color:'white',
          border:'none',
          borderRadius:'10px',
          cursor:'pointer'
        }}
      >
        Test App
      </button>

      {text && (
        <div style={{
          marginTop:'20px',
          background:'white',
          padding:'20px',
          borderRadius:'12px'
        }}>
          {text}
        </div>
      )}
    </div>
  );
}