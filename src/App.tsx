import React from 'react';

const App: React.FC = () => {
  return (
    <div className="app-container" style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <section style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '40px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          color: '#333',
          marginBottom: '20px'
        }}>
          Welcome to Our Platform
        </h1>
        
        <p style={{ 
          fontSize: '1.1rem', 
          lineHeight: '1.6',
          color: '#555',
          marginBottom: '30px'
        }}>
          This is a simple, single-section React application. You can customize this content
          to fit your specific needs. Add text, images, or other elements as required.
        </p>
        
        <button style={{
          backgroundColor: '#4285f4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '12px 24px',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}>
          Get Started
        </button>
      </section>
    </div>
  );
};

export default App;