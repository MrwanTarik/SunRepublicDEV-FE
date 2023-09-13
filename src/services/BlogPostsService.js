import axios from 'axios';

import { API_URL } from '../constants/main';

const BlogPostsService = {
  async getMostPopularPosts() {
    const response = await axios.get(`${API_URL}/blog-posts/most-popular`);
    return response.data;
  },
  async getPosts() {
    const response = await axios.get(`${API_URL}/blog-posts`);
    return response.data;
  },
  async getPost(id) {
    const response = await axios.get(`${API_URL}/blog-posts/${id}`);
    return response.data;
  },
  async getPostByTitle(title) {
    const response = await axios.get(`${API_URL}/blog-posts/title/${title}`);
    return response.data;
  },
};

export default BlogPostsService;
