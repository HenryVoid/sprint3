class Product {
  constructor(name, description, price, tags = [], images = [], favoriteCount = 0) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.images = images;
    this.favoriteCount = favoriteCount;
  }

  favorite() {
    this.favoriteCount += 1;
  }

  getInfo() {
    return `${this.name} - ${this.description} (${this.price}원)`;
  }
}

class ElectronicProduct extends Product {
  constructor(name, description, price, manufacturer, tags = [], images = [], favoriteCount = 0) {
    super(name, description, price, tags, images, favoriteCount);
    this.manufacturer = manufacturer;
  }

  getInfo() {
    return `${this.name} - ${this.description} (${this.price}원) [제조사: ${this.manufacturer}]`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Product,
    ElectronicProduct,
  };
}
