import {getData} from './modules/apiWork.js';
import {showAlert, debounce} from './modules/utils.js';
import {renderPictures, clearPictures} from './modules/minImg.js';
import { renderPosts} from './modules/sort.js';
import './modules/loadForm.js';
import './modules/scale.js';
import './modules/effect.js';

getData(
  (post)=> {
    renderPictures(post);
    renderPosts(post,
      debounce(
        (sortedPost) => {
          clearPictures();
          renderPictures(sortedPost);
        },
        500,
      ),
    );
  },
  (message)=>{
    showAlert(message);
  }
);
