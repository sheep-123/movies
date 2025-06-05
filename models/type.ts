import {Model,DataTypes } from "sequelize"
import sequelize from "@/helpers/db"

class type extends Model { 
    public id!: number;
    public name!:string;
}

type.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "type",
      tableName: "type",
      timestamps: false,
    }
  );
  
  export default type;