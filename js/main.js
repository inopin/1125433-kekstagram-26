import {posts} from './modules/data.js';
import {renderPictures} from './modules/minImg.js';
import './modules/loadForm.js';

// renderPictures(posts());

const getPost = (post) => {
  renderPictures(post);
};

getPost(posts());
