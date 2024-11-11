export interface Filme {
  id: number;
  titulo: string;
  diretor: string;
  ano: number;
}

const STORAGE_KEY = "FILMES_SVELTE";

function obterFilmes(): Filme[] {
  const filmes = localStorage.getItem(STORAGE_KEY);
  return filmes ? (JSON.parse(filmes) as Filme[]) : [];
}

function salvarFilmes(filmes: Filme[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filmes));
}

export function listarFilmes(): Filme[] {
  return obterFilmes();
}

export function obterFilmePorId(id: number): Filme | undefined {
  const filmes = obterFilmes();
  return filmes.find((filme) => filme.id === id);
}

export function adicionarFilme(filme: Omit<Filme, "id">): void {
  const filmes = obterFilmes();
  const novoFilme: Filme = { ...filme, id: Date.now() };
  filmes.push(novoFilme);
  salvarFilmes(filmes);
}

export function atualizarFilme(
  id: number,
  dadosAtualizados: Partial<Filme>
): void {
  const filmes = obterFilmes();
  const index = filmes.findIndex((filme) => filme.id === id);
  if (index !== -1) {
    filmes[index] = { ...filmes[index], ...dadosAtualizados };
    salvarFilmes(filmes);
  }
}

export function excluirFilme(id: number): void {
  let filmes = obterFilmes();
  filmes = filmes.filter((filme) => filme.id !== id);
  salvarFilmes(filmes);
}
