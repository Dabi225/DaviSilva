import { DataTypes } from "sequelize";
import mysql from '../mysql';

const produto= mysql.define('produto',{
    nome: DataTypes.STRING,
    preco_un: DataTypes.FLOAT,
    estoque: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER
});

mysql.sync();
export {produto, mysql}; 