# Pod Listar

## Descrição

App gerenciador de episódios de podcasts separados por categorias, sendo uma api feita em Node.js puro e TypeScript

## Dependências

- "@types/node": "^22.2.0",
- "tsup": "^8.2.4",
- "tsx": "^4.17.0",
- "typescript": "^5.5.4

## Funcionalidades

- Listar episódios de podcasts em sessões de categorias
 - [Humor, Nerd, Cristão, Ficção, Entrevista, Esporte]
- Filtrar episódios por nome do podcast

## Como

Retornando em uma API REST: 

- Lista dos episódios;
- Por nome do Podcast: nome do episódio, nome do podcast, imagem de capa, link do episódio no Youtube, as categorias e o ID do vídeo.

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