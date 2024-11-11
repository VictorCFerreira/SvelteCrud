<script lang="ts">
  import { onMount } from "svelte";
  import {
    listarFilmes,
    excluirFilme,
    obterFilmePorId,
  } from "$lib/filmeService";
  import type { Filme } from "$lib/filmeService";

  let filmes: Filme[] = [];

  onMount(() => {
    filmes = listarFilmes();
  });

  function handleExcluir(id: number): void {
    if (confirm("Tem certeza que deseja excluir este filme?")) {
      excluirFilme(id);
      filmes = listarFilmes();
    }
  }

  function obterFilme(id: number): Filme | undefined {
    return obterFilmePorId(id);
  }
</script>

<h1>Lista de Filmes</h1>
<ul class="film-list">
  {#each filmes as filme}
    <li class="film-card">
      <div>
        <div class="film-title">{filme.titulo}</div>
        <div class="film-info">{filme.diretor} ({filme.ano})</div>
      </div>
      <div class="action-buttons">
        <button
          class="button button-delete"
          on:click={() => handleExcluir(filme.id)}>Excluir</button
        >
        <a class="button button-edit" href={`/filmes/cadastrar?id=${filme.id}`}
          >Editar</a
        >
      </div>
    </li>
  {/each}
</ul>

<style>
  h1 {
    text-align: center;
    color: #333;
  }

  .film-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    padding: 0;
    list-style: none;
  }

  .film-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    width: 300px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s;
  }

  .film-card:hover {
    transform: scale(1.02);
  }

  .film-title {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
    margin: 0.5rem 0;
  }

  .film-info {
    color: #666;
    font-size: 0.9em;
  }

  .action-buttons {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .button {
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .button-delete {
    background-color: #e74c3c;
    color: #fff;
  }

  .button-edit {
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    text-align: center;
    display: inline-block;
  }
</style>
