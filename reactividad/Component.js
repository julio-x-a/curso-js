const Component = (function () {
  //Constructor
  const Constructor = function (options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  };

  //Agregamos los métodos al prototipo del constructor del componente
  //Render UI
  Constructor.prototype.render = function () {
    const $el = d.querySelector(this.el);
    if (!$el) return;
    $el.innerHTML = this.template(this.data);
  };
  //setState
  Constructor.prototype.setState = function (obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  };
  //getState
  Constructor.prototype.getState = function () {
    return JSON.parse(JSON.stringify(this.data));
  };

  return Constructor;
})();
