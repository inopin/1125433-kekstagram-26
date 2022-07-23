import {posts} from './modules/data.js';
import {renderPictures} from './modules/minImg.js';
import './modules/loadForm.js';
import './modules/scale.js';
import './modules/effect.js';

const getPost = (post) => {
  renderPictures(post);
};

getPost(posts());
