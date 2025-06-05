import mysql2 from 'mysql2'
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "movies",
  dialectModule: mysql2,
});

// 测试连接
(async () => {
    try {
      await sequelize.authenticate();
      console.log('数据库连接成功');
  
      // 同步模型
      await sequelize.sync({ force: false, alter: true });
    } catch (error) {
      console.error('数据库连接失败:', error);
    }
  })();

export default sequelize;