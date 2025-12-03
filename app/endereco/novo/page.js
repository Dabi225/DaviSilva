import { endereco } from "../../../database/tabelas/tab_endereco";

async function Endereco(){
    'use server'
    const id = FormData.get('cli.id');
    const end = await endereco.findByPk(cli.id);
    console.log(end);
    return(
        <>
            <h1>Endereco</h1>

            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>RUA</th>
                        <th>CIDADE</th>
                        <th>BAIRRO</th>
                        <th>ESTADO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        end.map(function(end){
                            return (
                                <tr key={end.id}>
                                    <td>{end.id}</td>
                                    <td>{end.rua}</td>
                                    <td>{end.Cidade}</td>
                                    <td>{end.bairro}</td>
                                    <td>{end.Estado}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <a href='../../Cliente/usuario'>Voltar</a>
        </>
    )
}

export default Endereco;