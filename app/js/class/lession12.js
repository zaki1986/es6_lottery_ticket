{
  // 声明
  class parent {
    constructor(name = 'parent') {
      this.name = name;
    }
  }

  console.log('声明', new parent('123'))
}

{
  // 继承
  class parent {
    constructor(name = 'parent') {
      this.name = name;
    }
  }

  class child extends parent {
    constructor(name = 'child') {
      super(name);
      this.type = 'child_type'
    }
  }

  console.log('继承', new child())
  console.log('继承+修改', new child('new child'))
  console.log('继承+修改', new child())
  console.log('不改变父层', new parent())
}

{
  // get,set
  class parent {
    constructor(name = 'parent') {
      this.name = name;
    }

    get longName() {
      return 'long_' + this.name
    }

    set longName(value) {
      this.name = value
    }
  }

  let v = new parent();
  console.log('getetr', v.longName);
  v.longName = 'setter';
  console.log('setetr', v.longName);
}

{
  // 静态方法
  class parent {
    constructor(name = 'parent') {
      this.name = name;
    }

    static tell() {
      console.log('static');
    }
  }

  parent.tell();
}

{
  // 静态属性
  class parent {
    constructor(name = 'parent') {
      this.name = name;
    }

    static tell() {
      console.log('static');
    }
  }

  parent.speak = 'speak';
  console.log(parent.speak)
}