{
  let metaData = {
    title:'es6 study',
    desc: [{
      title: 'des_title',
      age: 123
    }]
  }
  let {title:newTitle,desc:[{title:subTitle}]}=metaData;
  console.table([newTitle,subTitle])
}