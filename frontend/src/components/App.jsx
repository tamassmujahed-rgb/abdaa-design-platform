import React, { useState, useRef } from 'react';
import { Stage, Layer, Text, Rect, Circle, Line } from 'react-konva';

const App = () => {
  const [elements, setElements] = useState([]);
  const [selectedTool, setSelectedTool] = useState('select');
  const [selectedElement, setSelectedElement] = useState(null);
  const stageRef = useRef();

  // إضافة نص جديد
  const addText = () => {
    const newElement = {
      id: Date.now().toString(),
      type: 'text',
      x: 100,
      y: 100,
      text: 'النص الجديد',
      fontSize: 24,
      fontFamily: 'Arial',
      fill: '#000000',
      draggable: true,
      rotation: 0
    };
    setElements([...elements, newElement]);
  };

  // إضافة مستطيل
  const addRectangle = () => {
    const newElement = {
      id: Date.now().toString(),
      type: 'rect',
      x: 150,
      y: 150,
      width: 120,
      height: 80,
      fill: '#8B5DFF',
      stroke: '#000000',
      strokeWidth: 2,
      draggable: true,
      rotation: 0
    };
    setElements([...elements, newElement]);
  };

  // إضافة دائرة
  const addCircle = () => {
    const newElement = {
      id: Date.now().toString(),
      type: 'circle',
      x: 200,
      y: 200,
      radius: 50,
      fill: '#00D4AA',
      stroke: '#000000',
      strokeWidth: 2,
      draggable: true,
      rotation: 0
    };
    setElements([...elements, newElement]);
  };

  // إضافة خط
  const addLine = () => {
    const newElement = {
      id: Date.now().toString(),
      type: 'line',
      points: [50, 50, 200, 200],
      stroke: '#FF6B35',
      strokeWidth: 3,
      draggable: true,
      rotation: 0
    };
    setElements([...elements, newElement]);
  };

  // تصدير التصميم
  const exportDesign = () => {
    const dataURL = stageRef.current.toDataURL({ pixelRatio: 2 });
    const link = document.createElement('a');
    link.download = 'تصميم-أبداع.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // مسح الكل
  const clearCanvas = () => {
    setElements([]);
    setSelectedElement(null);
  };

  // حذف العنصر المحدد
  const deleteSelected = () => {
    if (selectedElement) {
      setElements(elements.filter(el => el.id !== selectedElement));
      setSelectedElement(null);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: 'white',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      {/* الشريط العلوي */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>
            أَبْداع 🎨
          </h1>
          <span style={{ opacity: 0.8 }}>| منصة التصميم العربية</span>
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={exportDesign}
            style={{
              background: '#00D4AA',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            📤 تصدير
          </button>
          <button 
            onClick={clearCanvas}
            style={{
              background: '#FF6B35',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            🗑️ مسح الكل
          </button>
        </div>
      </header>

      {/* المحتوى الرئيسي */}
      <div style={{ 
        display: 'flex', 
        height: 'calc(100vh - 80px)',
        gap: '1rem',
        padding: '1rem'
      }}>
        {/* الشريط الجانبي للأدوات */}
        <aside style={{
          width: '280px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#8B5DFF' }}>🛠️ أدوات التصميم</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button 
              onClick={addText}
              style={{
                background: 'rgba(139, 93, 255, 0.2)',
                color: 'white',
                border: '1px solid #8B5DFF',
                padding: '0.75rem',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'right',
                fontSize: '0.9rem'
              }}
            >
              ✏️ إضافة نص
            </button>
            
            <button 
              onClick={addRectangle}
              style={{
                background: 'rgba(0, 212, 170, 0.2)',
                color: 'white',
                border: '1px solid #00D4AA',
                padding: '0.75rem',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'right',
                fontSize: '0.9rem'
              }}
            >
              ⬜ إضافة مستطيل
            </button>
            
            <button 
              onClick={addCircle}
              style={{
                background: 'rgba(255, 107, 53, 0.2)',
                color: 'white',
                border: '1px solid #FF6B35',
                padding: '0.75rem',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'right',
                fontSize: '0.9rem'
              }}
            >
              ⭕ إضافة دائرة
            </button>
            
            <button 
              onClick={addLine}
              style={{
                background: 'rgba(255, 215, 0, 0.2)',
                color: 'white',
                border: '1px solid #FFD700',
                padding: '0.75rem',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'right',
                fontSize: '0.9rem'
              }}
            >
              📏 إضافة خط
            </button>

            {selectedElement && (
              <button 
                onClick={deleteSelected}
                style={{
                  background: 'rgba(255, 0, 0, 0.2)',
                  color: 'white',
                  border: '1px solid #FF0000',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'right',
                  fontSize: '0.9rem',
                  marginTop: '1rem'
                }}
              >
                🗑️ حذف المحدد
              </button>
            )}
          </div>

          {/* إحصائيات */}
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px'
          }}>
            <h4 style={{ marginBottom: '0.5rem', color: '#8B5DFF' }}>📊 الإحصائيات</h4>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>
              العناصر: {elements.length}
            </p>
            {selectedElement && (
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', opacity: 0.8 }}>
                عنصر محدد: ✓
              </p>
            )}
          </div>
        </aside>

        {/* منطقة العمل */}
        <main style={{
          flex: 1,
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '12px',
          padding: '1rem',
          backdropFilter: 'blur(5px)',
          border: '2px dashed rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Stage 
            width={800} 
            height={600} 
            ref={stageRef}
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px'
            }}
          >
            <Layer>
              {elements.map((element) => {
                const isSelected = element.id === selectedElement;
                
                if (element.type === 'text') {
                  return (
                    <Text
                      key={element.id}
                      {...element}
                      onClick={() => setSelectedElement(element.id)}
                      onTap={() => setSelectedElement(element.id)}
                      stroke={isSelected ? '#FFD700' : 'transparent'}
                      strokeWidth={isSelected ? 2 : 0}
                    />
                  );
                }
                
                if (element.type === 'rect') {
                  return (
                    <Rect
                      key={element.id}
                      {...element}
                      onClick={() => setSelectedElement(element.id)}
                      onTap={() => setSelectedElement(element.id)}
                      stroke={isSelected ? '#FFD700' : element.stroke}
                      strokeWidth={isSelected ? 3 : element.strokeWidth}
                    />
                  );
                }
                
                if (element.type === 'circle') {
                  return (
                    <Circle
                      key={element.id}
                      {...element}
                      onClick={() => setSelectedElement(element.id)}
                      onTap={() => setSelectedElement(element.id)}
                      stroke={isSelected ? '#FFD700' : element.stroke}
                      strokeWidth={isSelected ? 3 : element.strokeWidth}
                    />
                  );
                }
                
                if (element.type === 'line') {
                  return (
                    <Line
                      key={element.id}
                      {...element}
                      onClick={() => setSelectedElement(element.id)}
                      onTap={() => setSelectedElement(element.id)}
                      stroke={isSelected ? '#FFD700' : element.stroke}
                      strokeWidth={isSelected ? 4 : element.strokeWidth}
                    />
                  );
                }
                
                return null;
              })}
            </Layer>
          </Stage>
        </main>
      </div>
    </div>
  );
};

export default App;
