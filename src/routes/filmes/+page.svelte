<script lang="ts">
    import { onMount } from 'svelte';
    import { listarFilmes, excluirFilme, obterFilmePorId } from '$lib/filmeService';
    import type { Filme } from '$lib/filmeService';  // Importando o tipo Filme
  
    let filmes: Filme[] = [];
  
    // Carrega a lista de filmes ao montar o componente
    onMount(() => {
      filmes = listarFilmes();
    });
  
    // Função para excluir um filme
    function handleExcluir(id: number): void {
      excluirFilme(id);
      filmes = listarFilmes();  // Atualiza a lista
    }
  
    // Função para obter detalhes de um filme (se necessário para edição)
    function obterFilme(id: number): Filme | undefined {
      return obterFilmePorId(id);
    }
  </script>
  
    <h1>Lista de Filmes</h1>
    <ul>
      {#each filmes as filme}
        <li>
          <strong>{filme.titulo}</strong> - {filme.diretor} ({filme.ano})
          <button on:click={() => handleExcluir(filme.id)}>Excluir</button>
          <a href={`/filmes/cadastrar?id=${filme.id}`}>Editar</a>
        </li>
      {/each}
    </ul>
  