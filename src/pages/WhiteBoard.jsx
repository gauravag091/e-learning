import React from 'react';
import './whiteboard.css';
import Header from '../components/Header';

export default function WhiteBoard() {
  return (
    <>
    <Header/>
    <div style={{overflow:"hidden"}}>
            <iframe src="https://gauravag091.github.io/virtual-whiteboard/" allow="camera *; microphone *" title="temp" ></iframe>   
    </div>
    </>
  );
}