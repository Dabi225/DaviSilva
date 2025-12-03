import { DataTypes } from "sequelize";
import mysql from "../mysql";

const categoria = mysql.define('categoria',{
    categoria: DataTypes.TEXT
});

mysql.sync();
export{categoria,mysql};