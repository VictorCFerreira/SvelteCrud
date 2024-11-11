<script lang="ts">
  import { onMount } from "svelte";
  import {
    adicionarFilme,
    atualizarFilme,
    obterFilmePorId,
  } from "$lib/filmeService";
  import type { Filme } from "$lib/filmeService";
  import { goto } from "$app/navigation";

  let titulo: string = "";
  let diretor: string = "";
  let ano: number | "" = "";
  let id: number | undefined;

  function handleSubmit(event: Event): void {
    event.preventDefault();
    const filme: Omit<Filme, "id"> = { titulo, diretor, ano: Number(ano) };

    if (id) {
      atualizarFilme(id, filme);
    } else {
      adicionarFilme(filme);
    }

    limparFormulario();
  }

  function limparFormulario(): void {
    titulo = "";
    diretor = "";
    ano = "";
    id = undefined;
  }

  onMount(() => {
    const query = new URLSearchParams(window.location.search);
    const filmeId = query.get("id");

    if (filmeId) {
      id = Number(filmeId);
      const filme = obterFilmePorId(id);
      if (filme) {
        titulo = filme.titulo;
        diretor = filme.diretor;
        ano = filme.ano;
      }
    }
  });
</script>

<div class="form-container">
  <form on:submit={handleSubmit}>
    <h1>{id ? "Editar Filme" : "Cadastrar Filme"}</h1>

    <div>
      <label for="titulo">Título:</label>
      <input id="titulo" bind:value={titulo} required />
    </div>

    <div>
      <label for="diretor">Diretor:</label>
      <input id="diretor" bind:value={diretor} required />
    </div>

    <div>
      <label for="ano">Ano:</label>
      <input id="ano" type="number" bind:value={ano} required />
    </div>

    <div class="button-container">
      <button class="left" on:click={() => goto("/")}>Voltar</button>

      <div class="right">
        <button type="button" on:click={limparFormulario}>Limpar</button>
        <button type="submit">{id ? "Atualizar" : "Cadastrar"}</button>
      </div>
    </div>

    <h1>{titulo}</h1>
  </form>
</div>

<style>
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
    background-color: #f7f7f7;
    font-family: "Arial", sans-serif;
  }

  form {
    background-color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
  }

  h1 {
    text-align: center;
    color: #5c6bc0;
    margin-bottom: 20px;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.3s;
  }

  input:focus {
    border-color: #5c6bc0;
  }

  .button-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
  }

  .button-container .left {
    margin-right: auto;
  }

  .button-container .right {
    margin-left: auto;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    height: 43px;
  }

  button:hover {
    background-color: #3f51b5;
    color: white;
  }

  button[type="button"] {
    background-color: #f44336;
  }

  button[type="submit"] {
    background-color: #5c6bc0;
  }
</style>
