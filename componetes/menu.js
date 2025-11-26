import "../app/css/menu.css";

function Menu(){
    return (
        <>
        <nav>
            <div>
                <h1>Produtos e mais</h1>
            </div>
            <div>
                <ul>
            <a href="/"> Home </a>
            <a href="/Cliente/usuario"> Cliente </a>
            <a href="/endereco/novo"> Endereco </a>
            <a href="/pag/novo"> Pagamentos </a>
            <a href="/produto/novo"> Produtos </a>
            <a href="/carrinho/novo">Carrinho</a>
                </ul>
            </div>
            </nav>
        </>
    );
}

export default Menu