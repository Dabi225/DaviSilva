import { DataTypes } from "sequelize";
import mysql from '../mysql';

const Cliente = mysql.define('cliente',{
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    id_endereco: DataTypes.INTEGER
}) ;

mysql.sync();
export {Cliente,mysql};