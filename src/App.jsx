import React, { useState } from 'react';

export default function App() {
  const [days, setDays] = useState(Array(66).fill(false));

  const toggleDay = (index) => {
    const newDays = [...days];
    newDays[index] = !newDays[index];
    setDays(newDays);
  };

  const sendNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('Planner Reminder', {
        body: 'Stay consistent today! ✅',
      });
    } else {
      Notification.requestPermission();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>66-Day Planner</h1>
      <button onClick={sendNotification}>Test Reminder</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(11, 1fr)', gap: '5px', marginTop: '20px' }}>
        {days.map((done, i) => (
          <div
            key={i}
            onClick={() => toggleDay(i)}
            style={{
              width: '30px',
              height: '30px',
              background: done ? 'green' : 'lightgray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: '4px',
              color: 'white'
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}