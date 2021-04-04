this.name = 'global';

function anotherFunction() {
  console.log(this.name);
}

const obj = {
  name: 'obj_name',
  objContext() {
    console.log(this.name);
  },
  globalContext: () => {
    // En una arrow function, el contexto que existe es el global
    console.log(this.name);
  }
};

const obj2 = {
  name: 'ob2_name',
  objContext: obj.objContext.bind(obj)
};

obj.objContext();
anotherFunction.call(obj);
anotherFunction.apply(obj);
obj2.objContext();
