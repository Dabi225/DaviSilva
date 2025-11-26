import { DataTypes } from "sequelize";
import mysql from '../mysql';

const Pagamentos = mysql.define('pagamento',{
    id_pagamento: DataTypes.INTEGER,
    id_compra: DataTypes.INTEGER,
    status: DataTypes.STRING,
    parcelas: DataTypes.INTEGER,
    valor_total : DataTypes.FLOAT
});

mysql.sync();   
export {Pagamentos, mysql};