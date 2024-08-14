# Pod Listar

## Descrição

App gerenciador de episódios de podcasts separados por categorias

## Funcionalidades

- Listar episódios de podcasts em sessões de categorias
 - [Humor, Nerd, Cristão, Ficção, Entrevista, Esporte]
- Filtrar episódios por nome do podcast

## Como

Retornando em uma API REST: o nome do episódio, nome do podcast, imagem de capa, link do episódio no Youtube, as categorias e o ID do vídeo

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