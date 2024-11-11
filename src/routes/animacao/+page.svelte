<script>
  import { fade, slide, scale } from "svelte/transition";

  let showMessage = true;
  let showMessageSlide = true;
  let showMessageScale = true;

  function toggleMessage() {
    showMessage = !showMessage;
  }

  function toggleMessageSlide() {
    showMessageSlide = !showMessageSlide;
  }

  function toggleMessageScale() {
    showMessageScale = !showMessageScale;
  }
</script>

<div class="container">
  <h1>Exemplos de Animações no Svelte</h1>

  <!-- Fade -->
  <div class="animation-section">
    <button on:click={toggleMessage} class="btn">
      {showMessage ? "Esconder" : "Mostrar"} Mensagem de Fade
    </button>
    {#if showMessage}
      <p transition:fade={{ duration: 500 }} class="message">
        Esta é uma mensagem com animação de fade!
      </p>
    {/if}
  </div>

  <!-- Slide -->
  <div class="animation-section">
    <button on:click={toggleMessageSlide} class="btn">
      {showMessageSlide ? "Esconder" : "Mostrar"} Mensagem de Slide
    </button>
    {#if showMessageSlide}
      <p transition:slide={{ duration: 700 }} class="message">
        Esta é uma mensagem com animação de deslizar!
      </p>
    {/if}
  </div>

  <!-- Scale -->
  <div class="animation-section">
    <button on:click={toggleMessageScale} class="btn">
      {showMessageScale ? "Esconder" : "Mostrar"} Mensagem de Escalonamento
    </button>
    {#if showMessageScale}
      <p transition:scale={{ duration: 500, start: 0.5 }} class="message">
        Esta mensagem usa animação de escalonamento!
      </p>
    {/if}
  </div>
</div>

<style>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    font-family: 'Arial', sans-serif;
  }

  h1 {
    font-size: 2.5em;
    color: #333;
    margin-bottom: 30px;
  }

  .animation-section {
    margin-bottom: 20px;
  }

  .btn {
    padding: 12px 24px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1em;
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 15px;
  }

  .btn:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  .message {
    font-size: 1.3em;
    color: #333;
    margin-top: 15px;
    padding: 15px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .btn:active {
    transform: translateY(1px);
  }
</style>
