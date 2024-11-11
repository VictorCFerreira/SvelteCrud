# Svelte

Svelte é um framework de desenvolvimento de interfaces de usuário (UI) que se destaca por uma abordagem inovadora de compilação. Diferente de outros frameworks como React ou Vue, que utilizam o **Virtual DOM** e executam a renderização no navegador, o Svelte faz o trabalho pesado durante a **compilação do código**, gerando JavaScript otimizado e independente de reatividade que roda diretamente no navegador.

A principal ideia por trás do Svelte é melhorar o desempenho das aplicações e simplificar a arquitetura, eliminando a necessidade de um framework no runtime, ou seja, o código resultante de uma aplicação Svelte é mais enxuto e rápido, uma vez que não carrega o peso de uma biblioteca auxiliar.

## Principais Características

### 1. Compilação em Tempo de Build
   - O Svelte converte o código em JavaScript puro no momento da construção (build time). Com isso, ele elimina a necessidade de um Virtual DOM e outros processos de manipulação, o que resulta em um código mais eficiente.

### 2. Reatividade Simples e Natural
   - A reatividade no Svelte é incorporada ao próprio JavaScript. Modificar uma variável diretamente é suficiente para que o componente reaja e re-renderize quando necessário, simplificando o desenvolvimento e eliminando o uso de métodos como `setState` em React.

### 3. Componentização
   - Assim como outros frameworks modernos, o Svelte organiza a aplicação em componentes reutilizáveis. Cada componente é um arquivo `.svelte` que contém HTML, CSS e JavaScript em um único arquivo, proporcionando uma experiência de desenvolvimento coesa.

### 4. CSS Escopado
   - O Svelte permite escrever estilos diretamente dentro dos componentes, e esses estilos são escopados automaticamente. Isso significa que o CSS de um componente não afetará outros componentes, facilitando o gerenciamento de estilos e prevenindo conflitos.

### 5. Redução no Tamanho de Pacote
   - Como o Svelte gera código JavaScript independente no tempo de build, o tamanho dos pacotes resultantes é consideravelmente menor do que frameworks que dependem de bibliotecas adicionais em tempo de execução.

### 6. Lógica de Eventos e Manipulação de Formulários
   - O Svelte oferece uma API para gerenciamento de eventos, com uma sintaxe simplificada para lidar com interações do usuário. Ele também permite vincular valores de formulário diretamente às variáveis do componente, facilitando o desenvolvimento de formulários dinâmicos.

### 7. Transições e Animações
   - O Svelte possui suporte nativo para animações e transições, incluindo uma API de transições embutida que facilita a criação de efeitos visuais personalizados sem necessidade de bibliotecas externas.

## Exemplo de Código

Aqui está um exemplo básico de um componente Svelte:

```svelte
<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<style>
  button {
    font-size: 1.5em;
    margin-top: 10px;
  }
</style>

<h1>Contador: {count}</h1>
<button on:click={increment}>Incrementar</button>
```

## Runes
Runas são símbolos que você usa em arquivos .svelte para controlar o compilador Svelte.

As runas têm um `$` como prefixo e se parecem com funções:

```svelte
let message = $state('hello');
```

### $state

O $state permite que você crie um estado reativo, o que significa que sua IU reage quando a variável muda.

```svelte
<script>
	let count = $state(0);
</script>

<button onclick={() => count++}>
	clicks: {count}
</button>
```

### $derived

Usado para acompanhar um outro state

```svelte
<script>
	let count = $state(0);
	let doubled = $derived(count * 2);
</script>

<button onclick={() => count++}>
   Incrementar
</button>

<p>Contador: {count}</p>
<p>O dobro do contador: {doubled}</p>
```

### $effect

Basicamente tudo do aplicativo svelte é um $effect e são criados de maneira automática, mas também é possivel criar efeitos por conta própria se necessário.

### $props

Usado para dar entradas em componentes.

```svelte
// MyComponent.svelte

<script>
	import MyComponent from './MyComponent.svelte';
</script>

<MyComponent adjective="cool" />
```

Recuperando os dados MyComponent.svelte

```svelte
<script>
	let props = $props();
</script>

<p>this component is {props.adjective}</p>
```

### $bindable

Funciona de maneira agregada ao $props, serve para acessar valores de pai pra filho.

### $inspect

Funciona como um console.log, que é executado toda vez que a variável sofre uma alteração.

## Template syntax

O Svelte permite construir componentes usando condicionais, uso de variáveis e métodos dentro do próprio template.

### Condicionais

```svelte
{#if temperature > 30}
	<p>Muito quente!</p>
{:else if temperature < 10}
	<p>Muito frio!</p>
{:else}
	<p>Perfeito!</p>
{/if}
```
### Promises

```svelte
{#await promise}
	<p>Aguardando promise...</p>
{:then value}
	<!-- Promise resolvida -->
	<p>The value is {value}</p>
{:catch error}
	<!-- Promisse rejeitada -->
	<p>Something went wrong: {error.message}</p>
{/await}
```

## Vantagens do Svelte

- **Alto desempenho**: O Svelte elimina a necessidade do Virtual DOM, oferecendo uma aplicação mais rápida e com menor consumo de memória.
- **Rapida curva de aprendizado**: A sintaxe é mais próxima do JavaScript, HTML e CSS puros, facilitando o aprendizado.
- **Código limpo e leve**: Menos sobrecarga de código para o navegador processar, o que resulta em um melhor desempenho.

## Conclusão

O Svelte é uma opção poderosa para desenvolvimento front-end moderno, proporcionando uma experiência leve e reativa com código mais limpo e de fácil manutenção.
Por outro lado, para construções de aplicações maiores, o Svelte pode não ser a melhor opção, pois pode tornar o código muito confuso e de difícil manutenção.
