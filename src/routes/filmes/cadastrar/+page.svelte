<script lang="ts">
    import { onMount } from 'svelte';
    import { adicionarFilme, atualizarFilme, obterFilmePorId } from '$lib/filmeService';
    import type { Filme } from '$lib/filmeService';  // Importando o tipo Filme
  
    let titulo: string = '';
    let diretor: string = '';
    let ano: number | '' = '';  // Inicializa como string para lidar com inputs
    let id: number | undefined;   // Para armazenar o ID do filme se houver
  
    // Função para lidar com a submissão do formulário
    function handleSubmit(event: Event): void {
      event.preventDefault(); // Previne o comportamento padrão do formulário
      const filme: Omit<Filme, 'id'> = { titulo, diretor, ano: Number(ano) };
  
      if (id) {
        atualizarFilme(id, filme);
      } else {
        adicionarFilme(filme);
      }
  
      // Limpa o formulário após a submissão
      limparFormulario();
    }
  
    // Função para limpar o formulário
    function limparFormulario(): void {
      titulo = '';
      diretor = '';
      ano = '';
      id = undefined;
    }
  
    // Carrega os dados do filme se um ID for fornecido
    onMount(() => {
      const query = new URLSearchParams(window.location.search);
      const filmeId = query.get('id');
  
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
  
    <h1>{id ? 'Editar Filme' : 'Cadastrar Filme'}</h1>
    <form on:submit={handleSubmit}>
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
      <button type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>
      <button type="button" on:click={limparFormulario}>Limpar</button>
      <h1>{titulo}</h1>
    </form>
  