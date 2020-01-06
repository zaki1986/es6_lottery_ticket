{
  let obj = {
    name: 'webes6',
    age: 20,
    test: 'good study'
  }

  let newObj = new Proxy(obj, {
    get(target, key) {
      return target[key].toString().replace('study', 'lucky')
    },

    set(target, key, value) {
      if (key != 'name') {
        return target[key] = value;
      } else {
        return target[key]
      }
    },

    has(target, key) {
      if (key === 'name') {
        return target[key]
      } else {
        return false
      }
    },

    deleteProperty(target, key) {
      if (key === 'age') {
        delete target[key];
        return target;
      } else {
        return target[key]
      }
    }
  })

  // get
  console.log('-obj-', obj.test)
  console.log('-proxy-', newObj.test)

  // set
  newObj.name = 'es5';
  console.log('-proxy-', newObj.name)
  console.log('-obj-', obj.name)

  newObj.age = 22;
  console.log('-proxy-', newObj.age)
  console.log('-obj-', obj.age)

  // has
  console.log('-proxy-', 'name' in newObj);
  console.log('-proxy-', 'age' in newObj);
  console.log('-obj-', 'age' in obj);

  // del
  delete newObj.name;
  console.log('-proxy-', newObj);

  delete newObj.test;
  console.log('-proxy-', newObj);

  delete newObj.age;
  console.log('-proxy-', newObj);

}

{
  let obj = {
    name: 'webes6',
    age: 20,
    test: 'good study'
  }

  console.log('Reflect get', Reflect.get(obj, 'name'));
  Reflect.set(obj, 'name', 'webes5');
  console.log('Reflect set', Reflect.get(obj, 'name'));
  console.log('Reflect has', Reflect.has(obj, 'name'));
}

{
  function Reproxy(target, validator) {
    return new Proxy(target, {
      _validator:validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy)
          } else {
            throw Error(`不能设置${value}给${key}`)
          }
        } else {
          throw Error(`${key} 不存在!`);
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string'
    },
    age(val) {
      return typeof val === 'number' && val > 18
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return Reproxy(this, personValidators)
    }
  }

  const person = new Person('es5',20);
  console.log(person);
  person.name = '45';
  console.log(person);
  person.age = 19;
  console.log(person);
}