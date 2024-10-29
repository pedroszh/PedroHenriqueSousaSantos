# Projeto SWAPI

Este projeto foi desenvolvido para consumir a API pública do Star Wars (SWAPI) e realizar testes automatizados utilizando Jest e GitHub Actions. O objetivo é garantir que as respostas da API estejam corretas e que os endpoints estejam funcionando conforme esperado.

## Estrutura do Projeto

O projeto está organizado em duas pastas principais:

- **src**: Contém o código fonte do projeto, incluindo as funções que fazem as requisições à API SWAPI.
- **tests**: Contém os testes automatizados escritos em Jest. Cada teste verifica diferentes endpoints da API, garantindo que as respostas estejam corretas.

## Funcionalidades

- **Consumo da API SWAPI**: O projeto faz requisições à API pública do Star Wars para obter dados sobre planetas, naves, filmes, personagens e espécies.
- **Testes Automatizados**: Utiliza Jest para escrever e executar testes automatizados, garantindo a integridade das respostas da API.
- **Integração Contínua**: Configurado com GitHub Actions para rodar os testes automaticamente a cada push ou pull request, garantindo que o código esteja sempre funcionando corretamente.

## Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-nome-swapi.git
   cd seu-nome-swapi
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute os testes**:
   ```bash
   npm test
   ```

## Configuração do GitHub Actions

O projeto está configurado para usar GitHub Actions para integração contínua. O arquivo de workflow `.github/workflows/test.yml` define o pipeline de CI, que inclui:

- Instalação das dependências do Node.js.
- Execução dos testes automatizados.

## Exemplos de Testes

Aqui estão alguns exemplos de testes incluídos no projeto:

- **Teste de Planetas**: Verifica se os dados do planeta Tatooine são retornados corretamente.
- **Teste de Naves**: Verifica se os dados da nave Millennium Falcon são retornados corretamente.
- **Teste de Filmes**: Verifica se os dados do filme A New Hope são retornados corretamente.
- **Teste de Rotas Inexistentes**: Verifica se a API retorna um erro 404 para uma rota inexistente.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
