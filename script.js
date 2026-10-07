/* ==========================================================================
   A Cidade Sob a Cidade — script principal
   --------------------------------------------------------------------------
   Seções:
     1. Navegação entre páginas
     2. Modal do acervo
   ========================================================================== */


/* ==========================================================================
   1. NAVEGAÇÃO ENTRE PÁGINAS
   --------------------------------------------------------------------------
   O site é uma página única (SPA simples). Cada "página" é um elemento com
   a classe `.page-view`; só uma fica visível por vez (as outras recebem a
   classe `hidden` do Tailwind).
   ========================================================================== */

/**
 * Esconde todas as páginas e mostra apenas a página indicada,
 * rolando a janela suavemente para o topo.
 *
 * Usado nos botões do cabeçalho e nos links "Ver todo o acervo" /
 * "Voltar à Página Inicial" do index.html.
 *
 * @param {string} paginaId - id do elemento `.page-view` a exibir
 *                            (ex.: 'home-page', 'acervo-page').
 */
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


/* ==========================================================================
   2. MODAL DO ACERVO
   --------------------------------------------------------------------------
   Estrutura no index.html: <div id="modalAcervo"> com três campos vazios
   (#modalCategoria, #modalTitulo, #modalDescricao).

   O texto exibido NÃO fica no modal: ele é passado como argumento no
   `onclick="abrirModal(...)"` de cada card em "Destaques do Acervo".
   Ao editar um card, altere também esses argumentos para manter o card e
   o modal iguais.
   ========================================================================== */

/**
 * Preenche o modal com os dados do card clicado e o exibe.
 * Também trava a rolagem da página enquanto o modal está aberto.
 *
 * @param {string} categoria - selo do item (ex.: 'Cartografia (1888)').
 * @param {string} titulo    - título exibido no cabeçalho do modal.
 * @param {string} descricao - texto do corpo do modal.
 */
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


/**
 * Fecha o modal e libera a rolagem da página.
 *
 * Pode ser chamada de duas formas:
 *  - Sem argumento (botões "×" e "Fechar"): fecha sempre.
 *  - Com o evento de clique (fundo escuro do modal): só fecha se o clique
 *    foi no próprio fundo, e não em algo dentro da caixa branca.
 *
 * @param {MouseEvent} [event] - evento de clique, opcional.
 */
function fecharModal(event) {

    if (event && event.target !== event.currentTarget) {
        return;
    }

    const modal = document.getElementById('modalAcervo');

    modal.classList.add('hidden');

    document.body.classList.remove('overflow-hidden');
}
