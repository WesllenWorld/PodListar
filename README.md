# Pod Listar

## Descrição

App gerenciador de episódios de podcasts separados por categorias, sendo uma API feita sem frameworks e desenvolvida em Node.js e TypeScript

## Tecnologias Utilizadas

O **Pod Listar** utiliza as seguintes tecnologias e ferramentas:

### Node.js

- **Descrição:** Ambiente de execução JavaScript do lado do servidor.
- **Versão:** Compatível com a versão do Node.js em uso.

### TypeScript

- **Descrição:** Superset do JavaScript que adiciona tipagem estática e recursos avançados.
- **Versão:** ^5.5.4
- **Uso:** Compilação do código TypeScript para JavaScript.

### tsup

- **Descrição:** Ferramenta de empacotamento para projetos TypeScript, simplifica a configuração de construção.
- **Versão:** ^8.2.4
- **Uso:** Empacotamento e compilação do código TypeScript.

### tsx

- **Descrição:** Ferramenta para executar e assistir arquivos TypeScript diretamente.
- **Versão:** ^4.17.0
- **Uso:** Execução e monitoramento do servidor em desenvolvimento.

### Dependências do Projeto

- `@types/node`: ^22.2.0 - Tipos TypeScript para Node.js, melhorando a integração com o ambiente Node.js.

## Funcionalidades

- Listar episódios de podcasts em sessões de categorias
- Filtrar episódios por nome do podcast

## Endpoints 

### Listar Episódios

- **Método:** `GET`
- **Endpoint:** `/list`
- **Descrição:** Retorna a lista completa de episódios de podcasts organizados por categorias.

### Filtrar episódios por nome

- **Método:** `GET`
- **Endpoint:** `/episode?p={nome do podcast}`
- **Descrição:** Retorna a lista completa de episódios de podcasts organizados por nome do podcast.

#### Exemplo do JSON para os episódios:

```js

[
    {
        podcastName: "Baixo Clero",
        episode: "Quando eu era neopenteca... | DDTcast #02",
        videoId: "omZpsJpPD5I",
        coverImage: "https://i.ytimg.com/vi/omZpsJpPD5I/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=omZpsJpPD5I",
        categories: ["cristão", "humor"]
    },
    {
        "podcastName": "Flow",
        "episode": "GUILHERME BRIGGS [+ RATO BORRACHUDO] - Flow #137",
        "videoId": "kq5-KrRIS8k",
        "coverImage": "https://i.ytimg.com/vi/kq5-KrRIS8k/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=kq5-KrRIS8k",
        "categories": ["entrevista", "esporte", "humor"]
    }


]


```

## Como utilizar

- Clone este repositório
- Utilize o comando npm install
- Utilize o script npm run start:dev