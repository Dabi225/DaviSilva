import { endereco } from "../../../database/tabelas/tab_endereco";

async function Endereco(){
    const end = await endereco.findAll();
    console.log(end);
    return(
        <>
            <h1>Endereco</h1>
            <a href='/endereco/criar'>+ Coloque Endereco</a>
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
        </>
    )
}

export default Endereco;