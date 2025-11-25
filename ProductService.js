const axios = require('axios');
const { Product, ElectronicProduct } = require('./Product.js');

const API_BASE_URL = 'https://panda-market-api-crud.vercel.app';
const BASE_URL = `${API_BASE_URL}/products`;

async function getProductList(page = 1, pageSize = 10, keyword = '') {
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
    console.error('Product 목록을 가져오는 중 오류 발생:', error.message);
    throw error;
  }
}

async function getProduct(id) {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    
    return response.data;
  } catch (error) {
    console.error(`ID가 ${id}인 Product를 가져오는 중 오류 발생:`, error.message);
    throw error;
  }
}

async function createProduct(name, description, price, tags, images) {
  try {
    const response = await axios.post(BASE_URL, {
      name,
      description,
      price,
      tags,
      images,
    });
    
    return response.data;
  } catch (error) {
    console.error('새로운 Product를 생성하는 중 오류 발생:', error.message);
    throw error;
  }
}

async function patchProduct(id, updateData) {
  try {
    const response = await axios.patch(`${BASE_URL}/${id}`, updateData);
    
    return response.data;
  } catch (error) {
    console.error(`ID가 ${id}인 Product를 수정하는 중 오류 발생:`, error.message);
    throw error;
  }
}

async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    
    return response.data;
  } catch (error) {
    console.error(`ID가 ${id}인 Product를 삭제하는 중 오류 발생:`, error.message);
    throw error;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getProductList,
    getProduct,
    createProduct,
    patchProduct,
    deleteProduct,
  };
}
