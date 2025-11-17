import React from 'react'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #8B5DFF 0%, #00D4AA 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        أَبْداع 🎨
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        منصة التصميم العربية - قيد التطوير
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '2rem',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2>🚀 الميزات القادمة:</h2>
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'right' }}>
          <li>✅ محرر تصميم متقدم</li>
          <li>✅ ذكاء اصطناعي مدمج</li>
          <li>✅ قوالب عربية حصرية</li>
          <li>✅ تصدير بجودة عالية</li>
        </ul>
        <button style={{
          background: '#FF6B35',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          borderRadius: '50px',
          cursor: 'pointer',
          marginTop: '2rem'
        }}>
          تابع التطور ←
        </button>
      </div>
    </div>
  )
}

export default App
