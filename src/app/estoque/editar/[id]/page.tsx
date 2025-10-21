'use client'
import NavBar from '@/app/components/Navbar';
import { withAuth } from '@/app/components/withAuth';
import FormularioEstoque from '@/app/components/FormularioEstoque';

function PaginaEdicao({ params }: { params: { id: string } }) {
  return (
    <section className='h-screen'>
      <NavBar texto={ "Edição de EsFormularioEstoque" } />
      <FormularioEstoque id={params.id} />
    </section>
  );
}

export default withAuth(PaginaEdicao);