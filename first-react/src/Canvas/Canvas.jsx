import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';
import './Canvas.css'

const  Example=() =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='navbar' id='navbar'>
      <Button variant=""  onClick={handleShow}>
        <FaBars size={32} color='white'/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton className='anchor-body'>
          <Offcanvas.Title className='anchor-title'>MUJ PRODUCTION</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='anchor-body'>
            <div className="anchor-link">
            <a href="#navbar">Home</a>
            <a href="#about">AboutUs</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#pages">Pages</a>
            <a href="#footer">ContactUS</a>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Example;