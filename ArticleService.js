const axios = require('axios');

const API_BASE_URL = 'https://panda-market-api-crud.vercel.app';
const BASE_URL = `${API_BASE_URL}/articles`;

async function getArticleList(page = 1, pageSize = 10, keyword = '') {
  try {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString(),
      orderBy: 'recent',
      ...(keyword && { keyword: keyword })
    };
    
    const response = await axios.get(BASE_URL, { params });
    
    return response.data;
  } catch (error) {
    console.error('Article 목록을 가져오는 중 오류 발생:', error);
    throw error;
  }
}

async function getArticle(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    
    return response.data;
  } catch (error) {
    console.error(`ID가 ${id}인 Article을 가져오는 중 오류 발생:`, error);
    throw error;
  }
}

async function createArticle(title, content, image) {
  try {
    const response = await axios.post(BASE_URL, {
      title,
      content,
      image,
    });
    
    return response.data;
  } catch (error) {
    console.error('새로운 Article을 생성하는 중 오류 발생:', error);
    throw error;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getArticleList,
    getArticle,
    createArticle,
  };
}
