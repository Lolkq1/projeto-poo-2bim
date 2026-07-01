# TechCity Control - Sistema de Entregas com Drones (Módulo 2)

## Sobre o Projeto
Este projeto foi desenvolvido como parte da avaliação do 2º Bimestre da disciplina de Programação Orientada a Objetos (POO) do Curso Técnico em Desenvolvimento de Sistemas no Instituto Federal de Alagoas (IFAL) - Campus Maceió.

O TechCity Control é uma plataforma focada na administração de operações urbanas da cidade inteligente TechCity. Este módulo específico é responsável por gerenciar a frota de veículos aéreos não tripulados (drones), o cadastro de pedidos e a escala logística das entregas automatizadas de forma interativa por terminal.

---

## Requisitos do Sistema Implementados

O sistema cumpre com precisão as diretrizes do documento de especificação para o fluxo do Módulo 2:

* Cadastro de Drones: Permite registrar drones contendo identificador único, capacidade de carga e status. (Gerado automaticamente na CLI e controlado via controladorDrone.js).
* Registro de Pedidos: Armazenamento de pedidos contendo identificador, descrição, destino, status inicial e peso/carga. (Gerado na CLI e controlado via controladorPedido.js).
* Associação de Drones às Entregas: Vinculação inteligente feita pela central de controle, validando se o drone e o pedido existem, se estão livres e se o peso da carga é compatível. (Controlado via controladorEntrega2.js).
* Atualização de Entregas: Monitoramento de status da rota de entrega através de uma interface interativa e modificação direta dos estados das entidades. (Implementado em sistemaEntrega.js e controladorEntrega2.js).

---

## Arquitetura e Conceitos de POO Aplicados

A estrutura do código foi rigorosamente dividida entre Classes de Domínio (Entidades), Controladores (Camada de Negócio) e Sistemas (Interface CLI).

### 1. Encapsulamento Avançado (Atributos Privados)
Todas as entidades de dados utilizam o modificador # nativo do JavaScript moderno para garantir a integridade das propriedades individuais, disponibilizando o acesso unicamente por métodos públicos (Getters e Setters):
* drone.js: Protege os atributos #id, #capacidade e #status. Possui o método comportamental changeStatus() para alternar sua disponibilidade.
* pedido.js: Protege #id, #descricao, #destino, #status e #capacidade.
* entrega.js: Encapsula as associações de ID (#id_drone e #id_pedido) e seu #status isolado.

### 2. Lógica de Validação e Orquestração
A inteligência do sistema reside na camada de controladores, com destaque para a integração em controladorEntrega2.js:
* Barreira de Carga: O sistema impede que uma entrega seja registrada se o peso do pedido ultrapassar o limite suportado pelo drone.
* Sincronização de Estados: Ao invocar a finalização de uma entrega, o sistema atualiza o status de transporte do pacote e aciona o changeStatus() do drone, devolvendo-o à frota como disponível.

### 3. Interface de Terminal Dinâmica (CLI)
A interação humana é gerenciada de forma segmentada através de submenus que utilizam a biblioteca prompt-sync, permitindo manipulação de dados em tempo real e tratamento de erros visuais caso alguma validação de negócio falhe.

---

## Estrutura de Diretórios do Projeto

O ecossistema de arquivos do repositório está organizado da seguinte forma:

```text
├── main.js
├── classes/
│   ├── drone.js
│   ├── entrega.js
│   └── pedido.js
├── controladores/
│   ├── controladorDrone.js
│   ├── controladorEntrega.js
│   ├── controladorPedido.js
│   └── controladorEntrega2.js
└── sistemas/
    ├── sistemaDrone.js
    ├── sistemaEntrega.js
    └── sistemaPedido.js
