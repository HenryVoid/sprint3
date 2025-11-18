class Article {
  constructor(title, content, image, likeCount = 0) {
    this.title = title;
    this.content = content;
    this.image = image;
    this.likeCount = likeCount;
  }

  like() {
    this.likeCount += 1;
  }

  getInfo() {
    return `${this.title} - 좋아요: ${this.likeCount}`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Article,
  };
}

