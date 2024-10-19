import React from 'react';

const footerContainer = {
  textAlign: 'center',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
};

const footerLink = {
  color: '#2d7a67',
  textDecoration: 'underline'
};

const footerLinkHover = {
  textDecoration: 'underline'
};

const separatorStyle = {
  borderLeft: '1px solid #e9ecef',
  height: '24px',
  margin: '0 1rem',
};

const Footer = () => {
  return (
    <footer style={footerContainer}>
      <p>&copy; {new Date().getFullYear()} Sarah Person-Waibel</p>
      <div style={separatorStyle}></div>
      <p>
        <a href="mailto:sarah@sarahperson.com" style={footerLink}>Email Me</a>
      </p>
    </footer>
  );
};

export default Footer;