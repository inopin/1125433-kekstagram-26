import {getData} from './modules/apiWork.js';
import {showAlert} from './modules/utils.js';
import {renderPictures} from './modules/minImg.js';
import './modules/loadForm.js';
import './modules/scale.js';
import './modules/effect.js';

getData(
  (post)=> {
    renderPictures(post);
  },
  (message)=>{
    showAlert(message);
  }
);
