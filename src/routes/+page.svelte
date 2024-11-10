<script>
  import { goto } from "$app/navigation";
</script>

<main class="main-content">
  <div class="container">
    <h1>
      <a href="https://svelte.dev/docs/kit/introduction" target="_blank">
        Svelte
      </a>
    </h1>
    <p>
      O Svelte é um framework moderno de JavaScript para construir interfaces de
      usuário reativas. Diferente de frameworks como React e Vue, o Svelte faz o
      trabalho pesado no momento da construção do aplicativo, gerando código
      JavaScript otimizado para o navegador.
    </p>
    <p>Aqui estão os pontos mais importantes da documentação do Svelte:</p>
    <ul>
      <li>
        <strong>Reatividade</strong>: O Svelte usa um modelo de reatividade
        simples baseado em variáveis. Quando uma variável é alterada, a
        interface é automaticamente atualizada sem necessidade de usar um
        sistema complexo de gerenciamento de estado.
      </li>
      <li>
        <strong>Componentes</strong>: Tudo no Svelte é um componente. Um
        componente é uma função que retorna HTML, CSS e JavaScript em um único
        arquivo (.svelte), facilitando o desenvolvimento e a manutenção.
      </li>
      <li>
        <strong>Desempenho</strong>: O Svelte compila o código em JavaScript
        otimizado, eliminando a necessidade de bibliotecas grandes no navegador
        e proporcionando alta performance.
      </li>
      <li>
        <strong>Facilidade de Uso</strong>: O Svelte possui uma curva de
        aprendizado muito suave, com uma sintaxe intuitiva e fácil de integrar
        com outras tecnologias, o que torna o framework ideal para iniciantes.
      </li>
    </ul>
    <div class="button-container">
      <button on:click={() => goto("/filmes")}>Lista de filmes</button>
      <button on:click={() => goto("/filmes/cadastrar")}
        >Cadatro de filmes</button
      >
      <button on:click={() => goto("/pagina3")}>Outra página</button>
    </div>
  </div>
</main>

<style>
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 98vh;
    font-family: "Arial", sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }

  .container {
    max-width: 800px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #5c6bc0;
    margin-top: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
  }

  .button-container button {
    padding: 10px 20px;
    background-color: #5c6bc0;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .button-container button:hover {
    background-color: #3f51b5;
  }
</style>
