import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container, Row, Col,
    Button, Form, InputGroup
} from 'react-bootstrap';

export default function App() {
  const [file, setFile] = useState(null)
  const [selectedRatio, setSelectedRatio] = useState('16:9');
  supported_resolutions = {
    "16:9" : [1920,1080],
    "5:4": [1280, 1024],
    "4:3": [1024, 768],
    "3:2": [1440, 960],
    "8K": [7680, 4320],
    "5K": [5120, 2880],
    "4K": [3840, 2160],
    "Retina": [2048, 1536],
    "iPhone6plus": [1920, 1080],
    "iPhone6": [1334, 750],
    "iPhone5": [1136, 640],
    "iPad": [1024, 768],
    "Twitter": [1024, 512],
    "WebBanner": [728, 90],
    "VGA": [640, 480],
    "HVGA": [320, 480],
  };
  const [selectedWidth, setSelectedWidth] = useState(supported_resolutions[selectedRatio][0]);
  const [selectedHeight, setSelectedHeight] = useState(supported_resolutions[selectedRatio][1]);
  const handleFileChange = (e) =>{
    const uploadedFile = e.target.files[0]
    

  }
  return(
    <div>
      <Button/>
    </div>
  )

}

