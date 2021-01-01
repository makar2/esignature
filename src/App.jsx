import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import SignatureCanvas from 'react-signature-canvas';

const App = () => {
  const padRef = useRef();
  const [showRes, setShowRes] = useState();

  useEffect(() => {
    console.log(showRes);
  });

  return (
    <div className="grid">
      <SignatureCanvas
        ref={padRef}
        backgroundColor="lightgrey"
        penColor="red"
        canvasProps={{ width: 500, height: 200 }}
      />
      <button type="button" onClick={() => padRef.current.clear()}>Clear</button>
      <button type="button" onClick={() => setShowRes(padRef.current.toData())}>Log as an array of point groups</button>
      <button type="button" onClick={() => setShowRes(padRef.current.toDataURL())}>Log as PNG</button>
      <button type="button" onClick={() => setShowRes(padRef.current.toDataURL('image/jpeg'))}>Log as JPEG</button>
      <button type="button" onClick={() => setShowRes(padRef.current.toDataURL('image/svg+xml'))}>Log as SVG</button>
      <button type="button" onClick={() => setShowRes(padRef?.current?.isEmpty())}>Empty?</button>
    </div>
  );
};

export default App;
