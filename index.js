const { Product, ElectronicProduct } = require('./Product.js');
const { Article } = require('./Article.js');
const { getArticleList, getArticle, createArticle } = require('./ArticleService.js');

console.log('Product');
const product = new Product('노트북', '고성능 노트북', 1000000, ['전자제품', '노트북'], ['image1.jpg'], 0);
console.log('favoriteCount:', product.favoriteCount);
product.favorite();
console.log('favorite() 호출 후 favoriteCount:', product.favoriteCount);
console.log('product.getInfo():', product.getInfo());

console.log('\nElectronicProduct');
const electronicProduct = new ElectronicProduct('스마트폰', '최신 스마트폰', 800000, '삼성', ['전자제품', '스마트폰'], ['image2.jpg'], 0);
console.log('manufacturer:', electronicProduct.manufacturer);
electronicProduct.favorite();
console.log('favorite() 호출 후 favoriteCount:', electronicProduct.favoriteCount);
console.log('electronicProduct.getInfo():', electronicProduct.getInfo());

console.log('\nArticle');
const article = new Article('제목', '내용', 'https://example.com/image.jpg', 0);
console.log('likeCount:', article.likeCount);
article.like();
console.log('like() 호출 후 likeCount:', article.likeCount);
console.log('article.getInfo():', article.getInfo());

console.log('\nArticle');
async function test() {
  try {
    // console.log('getArticleList()');
    // const articles = await getArticleList(1, 10, '');
    // console.log('articles:', articles);

    // console.log('\ncreateArticle()');
    // const newArticle = await createArticle('제목', '내용', 'https://example.com/image.jpg');
    // console.log('newArticle:', newArticle);
    
    if (articles && articles.length > 0) {
      console.log('\ngetArticle()');
      const firstArticle = await getArticle(articles[0].id);
      console.log('firstArticle:', firstArticle);
    }
    
  } catch (error) {
    console.error('error:', error.message);
  }
}

test();
