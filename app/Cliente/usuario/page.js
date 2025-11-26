import { Cliente } from "../../../database/tabelas/tab_cliente";

async function Clientes(){
    const cliente = await Cliente.findAll();
    console.log(cliente);
    return(
        <>
            <h1>Clientes</h1>
            <a href='/Cliente/novo'>+ Criar um novo cliente</a>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>CPF</th>
                        <th>DATA_NASCIMENTO</th>
                        <th>EMAIL</th>
                        <th>TELEFONE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cliente.map(function(cli){
                            return (
                                <tr key={cli.id}>
                                    <td>{cli.id}</td>
                                    <td>{cli.nome}</td>
                                    <td>{cli.cpf}</td>
                                    <td>{new Date(cli.data_nascimento).toLocaleDateString()}</td>
                                    <td>{cli.email}</td>
                                    <td>{cli.telefone}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Clientes;