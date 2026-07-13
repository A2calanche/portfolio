---

lang: "pt"
slug: "app-fullstack-mern"
title: "Aplicação Full-Stack MERN"
problem: "Eu precisava de um projeto próprio para demonstrar domínio full-stack de ponta a ponta: autenticação segura, integração com serviços externos e boas práticas de segurança, indo além de um CRUD básico de portfólio."
solution: "Desenvolvi uma aplicação MERN completa com recuperação de senha, quadro Kanban, integração com Google Calendar e uma revisão abrangente de segurança. A implementação incluiu hardening do fluxo OAuth, autenticação baseada em JWT, criptografia AES-256-GCM para proteção de tokens em repouso e validação de entradas em toda a API."
result: "O projeto evoluiu de uma aplicação funcional para uma peça de portfólio focada em práticas modernas de desenvolvimento e segurança, documentada com ADRs e diagramas de arquitetura."
stack:
  - "MongoDB"
  - "Express"
  - "React"
  - "Node.js"
draft: false
---

## Contexto

Este projeto começou como trabalho final de um bootcamp de desenvolvimento web, com o objetivo inicial de aplicar os conceitos aprendidos em JavaScript, React, Node.js e MongoDB em uma aplicação real. Após a conclusão do curso, o projeto permaneceu parado por um longo período.

Mais tarde, decidi retomá-lo como parte da minha estratégia de construção de portfólio. Em vez de criar uma nova aplicação do zero, utilizei a base existente para aprofundar conhecimentos em arquitetura, autenticação, integração com APIs externas e segurança de aplicações web.

O objetivo deixou de ser apenas entregar funcionalidades e passou a ser demonstrar como uma aplicação full-stack pode evoluir por meio de melhorias incrementais e decisões técnicas documentadas.

## Processo

A aplicação foi desenvolvida utilizando a stack MERN, com autenticação baseada em JWT e persistência de dados em MongoDB. A arquitetura foi organizada em camadas para separar responsabilidades entre interface, lógica de negócio e acesso a dados.

Durante a evolução do projeto, foram implementadas funcionalidades como recuperação de senha, autenticação via Google OAuth, gerenciamento de tarefas em formato Kanban e integração com Google Calendar para criação de eventos diretamente a partir da aplicação.

Uma parte significativa do trabalho foi dedicada à segurança. O fluxo OAuth foi revisado para reduzir riscos comuns de implementação, os tokens sensíveis passaram a ser armazenados utilizando criptografia AES-256-GCM e validações de entrada foram adicionadas em toda a API para aumentar a robustez da aplicação.

Além do código, o projeto recebeu documentação técnica complementar, incluindo diagramas de arquitetura e ADRs (Architecture Decision Records), registrando as principais decisões tomadas durante o desenvolvimento.

## Resultado

O resultado foi uma aplicação full-stack que vai além de um CRUD tradicional, demonstrando autenticação moderna, integração com serviços externos e preocupação com aspectos de segurança frequentemente negligenciados em projetos de estudo.

O projeto também serviu como laboratório para explorar boas práticas de desenvolvimento, documentação técnica e evolução contínua de software. Mais do que um produto final, tornou-se uma demonstração prática da minha capacidade de analisar, refatorar e aprimorar uma aplicação existente utilizando tecnologias amplamente adotadas no mercado.
