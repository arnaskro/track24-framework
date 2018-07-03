import './index.css'
import Button from './components/button/';
import Input from './components/form/Input/';
import CardBasic from './components/cardBasic';
import { loadCSS } from 'fg-loadcss';

// if in production, lazy load css
if (process.env.NODE_ENV === 'production') {
  if (!window.loadCSS) {
    window.loadCSS = loadCSS;
  }
  
  // Lazy load CSS
  loadCSS(process.env.REACT_APP_CDN + process.env.REACT_APP_REMOTE_FOLDER + '/main.css');
}

export {
  Button,
  Input,
  CardBasic
};

export default {
  Button,
  Input,
  CardBasic
};