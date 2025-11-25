class Article {
  constructor(title, content, image, likeCount = 0, createdAt = new Date()) {
    this.title = title;
    this.content = content;
    this.image = image;
    this.likeCount = likeCount;
    this.createdAt = createdAt;
  }

  like() {
    this.likeCount += 1;
  }

  getInfo() {
    return `${this.title} - 좋아요: ${this.likeCount} - 생성일자: ${this.createdAt}`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Article,
  };
}

