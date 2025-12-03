import { DataTypes } from "sequelize";
import mysql from "../mysql.js"

const compras = mysql.define('compra',{
    id_cliente: DataTypes.INTEGER,
    data_compras: DataTypes.DATE 
})

mysql.sync();
export {compras, mysql};