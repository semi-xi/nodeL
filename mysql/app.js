const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
});

// 定义 映射模型
var Pet = sequelize.define('pet', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
  timestamps: false
});


// 创建数据
// create
var now = Date.now();
// (async () => {
//   var dog = await Pet.create({
//     id: 'd-' + now,
//     name: 'Odie',
//     gender: false,
//     birth: '2008-08-08',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
//   });
//   console.log('created: ' + JSON.stringify(dog));
// })();

// create
// Pet.create({
//   id: 'g-' + now,
//   name: 'Gaffey',
//   gender: false,
//   birth: '2007-07-07',
//   createdAt: now,
//   updatedAt: now,
//   version: 0
// }).then(function (p) {
//   console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//   console.log('failed: ' + err);
// });

// select
let queryFromSomewhere = async () => {
  var pets = await Pet.findAll({
      // where: {
      //     name: 'Gaffey'
      // }
  });
  console.log(`find ${pets.length} pets:`);
  for (let p of pets) {
      console.log(JSON.stringify(p));
  }

  return pets[0] || {}
}

queryFromSomewhere()


// update 

// (async () => {
//   var p = await queryFromSomewhere();
//   p.gender = true;
//   p.updatedAt = Date.now();
//   p.version ++;
//   await p.save();
// })();
