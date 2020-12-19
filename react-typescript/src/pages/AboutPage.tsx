import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
      }} 
    >
      <h1 className="center">About Page</h1>
      <button onClick={() => history.push('/')} >
        Home
      </button>
    </div>
  )
};

export default AboutPage;