#  🎮 Daly Games
### Daly Games é uma aplicação web que exibe uma coleção de jogos, oferecendo aos usuários uma sugestão diária de jogo e informações detalhadas sobre cada jogo. Este projeto foi construído utilizando Next.js e estilizado com Tailwind CSS. A aplicação consome dados de APIs personalizadas para fornecer conteúdo dinâmico e experiências personalizadas.</br></br>
![image](https://github.com/user-attachments/assets/92d12f7f-b8f6-4ea7-99c0-75bd87569918)

### 🚀 Funcionalidades
Sugestão Diária de Jogo: Destaque para um jogo único todos os dias, para os usuários explorarem.</br>
Página de Detalhes do Jogo: Fornece informações detalhadas sobre cada jogo, incluindo título, descrição, plataformas, categorias e data de lançamento.</br>
Listagem de Jogos: Exibe uma grade com vários jogos para os usuários navegarem e descobrirem.</br>
Jogo Favorito: Permite que os usuários adicionem e gerenciem seus jogos favoritos.</br></br>


### 🕹️ Páginas
Home (/)
Exibe um jogo em destaque diariamente.</br>
Lista vários jogos que os usuários podem explorar.</br>
Inclui um campo de busca para filtrar jogos.</br>
Todos os dados dos jogos são buscados do endpoint GET /next-api/?api=games.</br></br>
![image](https://github.com/user-attachments/assets/5ab0eecc-12f8-4dc3-927a-2c88d7af6716)


###  🕹️ Detalhes do Jogo (/game/[id])
Mostra informações detalhadas sobre um jogo selecionado.</br>
Recomenda outro jogo ao final da página.</br>
Os dados são buscados com base no ID do jogo a partir do endpoint GET /next-api/?api=game&id=[id].</br></br>
![image](https://github.com/user-attachments/assets/2c3911f0-f662-44d1-ac13-ca3b8ddc74c5)


###  🕹️ Consumo de APIs
API de Jogo do Dia
Endpoint: GET /next-api/?api=game_day</br>
Finalidade: Buscar o jogo do dia para ser exibido na página inicial.</br>
Controle de Cache: Os dados são revalidados a cada 320 segundos para garantir que estejam atualizados.</br></br>

###  🕹️ API de Lista de Jogos
Endpoint: GET /next-api/?api=games</br>
Finalidade: Buscar uma lista de jogos para preencher a grade de jogos na página inicial.</br>
Controle de Cache: Similar à API de jogo do dia, os dados são revalidados a cada 320 segundos.</br></br>

###  🕹️ API de Detalhes do Jogo
Endpoint: GET /next-api/?api=game&id=[id]</br>
Finalidade: Buscar informações detalhadas sobre um jogo específico com base no seu ID.</br>
Controle de Cache: Os dados são revalidados a cada 60 segundos para fornecer conteúdo atualizado.</br></br>

###  🕹️ Tecnologias Utilizadas
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Next.js: Um framework React para construir aplicações web com renderização do lado do servidor (SSR) e geração estática.</br>
Tailwind CSS: Um framework CSS utilitário que permite a construção rápida de interfaces modernas e responsivas.</br>
React Icons: Para renderizar ícones em toda a aplicação.</br>
TypeScript: Garante segurança de tipo em todo o projeto.</br>
Variáveis de Ambiente: Utilizadas para armazenar URLs de API e outras informações sensíveis.</br></br>
