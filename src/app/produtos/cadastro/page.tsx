'use client'

import FormularioProduto from "@/app/components/FormularioProdutos";
import NavBar from "@/app/components/Navbar";
import { withAuth } from "@/app/components/withAuth";

function PaginaCadastro(){
    return(
        <section>
            <NavBar texto="Cadastro de produto" />
            <FormularioProduto />
        </section>
    );
}

export default withAuth(PaginaCadastro);