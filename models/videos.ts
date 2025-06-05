import {Model,DataTypes } from "sequelize"
import sequelize from "@/helpers/db"

class Video extends Model { 
    public id!: number;
    public name!:string;
    public type!: string;
    public image!: string;
    public hot!: number;
    public num!: string;
}

Video.init(
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
      type: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      hot:{
        type: DataTypes.INTEGER,
      },
      num:{
        type: DataTypes.STRING,
      }
    },
    {
      sequelize,
      modelName: "videos",
      tableName: "videos",
      timestamps: false,
    }
  );
  
  export default Video;