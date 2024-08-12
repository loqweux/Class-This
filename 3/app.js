class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    const img = document.createElement("img");
    img.src = this.imgUrl; // вложить в него src картинки (this.imgUrl)
    img.style.position = "fixed"; // позиционирование
    img.style.width = `${this.width}px`; // ширина img
    this.html = img; // и записать в this.html
    this.render(); // + дергаем render
    document.body.style.backgroundColor = "black"; // залить фон черным
  }

  render() {
    // метод должен отрисовать изображение (this.html) на странице
    this.html.style.top = `${this.top}px`; // применить фиксированное позиционирование
    this.html.style.left = `${this.left}px`; // использовать this.top и this.left для указания позиции
    document.body.append(this.html); // использовать this.width для указания ширины
  }

  moveUp() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    this.top -= 20; // на 20px
    this.render(); // + дергаем render
  }
  moveDown() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    this.top += 20; // на 20px
    this.render(); // + дергаем render
  }
  moveLeft() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    this.left -= 20; // на 20px
    this.render(); // + дергаем render
  }
  moveRight() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    this.left += 20; // на 20px
    this.render(); // + дергаем render
  }
}

class Circle {
  constructor(size, color) {
    this.size = size;
    this.color = color;
    this.render();
  }

  render() {
    const circle = document.createElement("div");
    circle.style.width = `${this.size}px`; // задаем ширину
    circle.style.height = `${this.size}px`; // задаем высоту
    circle.style.backgroundColor = this.color; // задаем цвет
    circle.style.borderRadius = "50%"; // делаем круг
    document.body.append(circle); // добавляем круг на страницу
  }
}

const imgUrl = "https://bit.ly/2tcDito";
const mfLogotip = new Logo(imgUrl);
const circle = new Circle(100, "yellow"); // желтый круг
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
