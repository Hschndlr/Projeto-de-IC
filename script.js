function trocarPagina(paginaId) {
    const paginas = document.querySelectorAll('.page-view');
    paginas.forEach(function(pagina) {
        pagina.classList.add('hidden');
    });
    const pagina = document.getElementById(paginaId);
    if (pagina) {
        pagina.classList.remove('hidden');
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function abrirModal(categoria, titulo, descricao) {

    const modal = document.getElementById('modalAcervo');

    const modalCategoria = document.getElementById('modalCategoria');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');

    modalCategoria.textContent = categoria;
    modalTitulo.textContent = titulo;
    modalDescricao.textContent = descricao;
    modal.classList.remove('hidden');

    document.body.classList.add('overflow-hidden');
}


function fecharModal(event) {

    if (event && event.target !== event.currentTarget) {
        return;
    }

    const modal = document.getElementById('modalAcervo');

    modal.classList.add('hidden');

    document.body.classList.remove('overflow-hidden');
}