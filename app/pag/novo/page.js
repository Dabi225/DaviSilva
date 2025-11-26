import { Pagamentos } from "../../../database/tabelas/tab_pagamento.js";

async function Pagamento(){
    const pag = await Pagamentos.findAll();
    console.log(pag);
    return(
        <>
            <h1>Pagamento</h1>
            <a href='/pag/criar'>+ Colocar Novo Pagamento</a>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID DA COMPRA</th>
                        <th>STATUS</th>
                        <th>PARCELAS</th>
                        <th>VALOR_TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pag.map(function(pag){
                            return (
                                <tr key={pag.id}>
                                    <td>{pag.id}</td>
                                    <td>{pag.id_compra}</td>
                                    <td>{pag.status}</td>
                                    <td>{pag.parcelas}</td>
                                    <td>{pag.valor_total}</td>
                                    <td>
                                        <form action={'/pag/edita'}>
                                            <input type='hidden' name='id' defaultValue={pag.id}/>
                                            <button>Editar</button>
                                        </form>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Pagamento;