const { Product, ElectronicProduct } = require('./Product.js');
const { Article } = require('./Article.js');
const { getArticleList, getArticle, createArticle } = require('./ArticleService.js');
const { getProductList, getProduct, createProduct, patchProduct } = require('./ProductService.js');

// console.log('Product');
// const product = new Product('노트북', '고성능 노트북', 1000000, ['전자제품', '노트북'], ['image1.jpg'], 0);
// console.log('favoriteCount:', product.favoriteCount);
// product.favorite();
// console.log('favorite() 호출 후 favoriteCount:', product.favoriteCount);
// console.log('product.getInfo():', product.getInfo());

// console.log('\nElectronicProduct');
// const electronicProduct = new ElectronicProduct('스마트폰', '최신 스마트폰', 800000, '삼성', ['전자제품', '스마트폰'], ['image2.jpg'], 0);
// console.log('manufacturer:', electronicProduct.manufacturer);
// electronicProduct.favorite();
// console.log('favorite() 호출 후 favoriteCount:', electronicProduct.favoriteCount);
// console.log('electronicProduct.getInfo():', electronicProduct.getInfo());

// console.log('\nArticle');
// const article = new Article('제목', '내용', 'https://example.com/image.jpg', 0);
// console.log('likeCount:', article.likeCount);
// article.like();
// console.log('like() 호출 후 likeCount:', article.likeCount);
// console.log('article.getInfo():', article.getInfo());

// console.log('\nArticle Service');
// async function articleTest() {
//   try {
//     // console.log('getArticleList()');
//     // const articles = await getArticleList(1, 10, '');
//     // console.log('articles:', articles);

//     // console.log('\ncreateArticle()');
//     // const newArticle = await createArticle('제목', '내용', 'https://example.com/image.jpg');
//     // console.log('newArticle:', newArticle);
    
//     if (articles && articles.length > 0) {
//       console.log('\ngetArticle()');
//       const firstArticle = await getArticle(articles[0].id);
//       console.log('firstArticle:', firstArticle);
//     }
    
//   } catch (error) {
//     console.error('error:', error.message);
//   }
// }

// articleTest();

console.log('\nProduct Service');
async function productTest() {
  try {
    console.log('getProductList()');
    const response = await getProductList(1, 10, '');
    
    const products = [];
    const productsData = response.list;
    
    for (const productData of productsData) {
      if (productData.tags && productData.tags.includes('전자제품')) {
        const product = new ElectronicProduct(
          productData.name,
          productData.description,
          productData.price,
          productData.manufacturer || '',
          productData.tags,
          productData.images,
          productData.favoriteCount
        );
        products.push(product);
      } else {
        const product = new Product(
          productData.name,
          productData.description,
          productData.price,
          productData.tags,
          productData.images,
          productData.favoriteCount
        );
        products.push(product);
      }
    }
    
    console.log('products:', products);

    // console.log('\ncreateProduct()');
    // const newProduct = await createProduct('노트북', '고성능 노트북', 1000000, ['전자제품', '노트북'], ['https://example.com/image.jpg']);
    // console.log('newProduct:', newProduct);

    // console.log('\ngetProduct()');
    // const firstProduct = await getProduct(2817);
    // console.log('firstProduct:', firstProduct);

    // console.log('\npatchProduct()');
    // const updatedProduct = await patchProduct(2817, { name: '맥북 프로', description: '최신 맥북 프로', price: 1000000, tags: ['전자제품', '맥북'], images: ['https://example.com/image.jpg'] });
    // console.log('updatedProduct:', updatedProduct);
    
  } catch (error) {
    console.error('error:', error.message);
  }
}

productTest();