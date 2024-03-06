export default class Task {
  title: string;
  description: string;
  id: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.id = this._generateRandomId();
  }

  _generateRandomId() {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    const comprimento = 15;

    for (let i = 0; i < comprimento; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(indice);
    }

    return id;
  }
}
