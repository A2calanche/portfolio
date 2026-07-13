---
lang: "pt"
slug: "pipeline-streaming-fraude-databricks"
title: "Pipeline de Alta Disponibilidade para Detecção de Fraude via SAP & Databricks"
problem: "Vazamento crítico de receita devido à análise tardia de transações financeiras, onde fraudes em cartões e meios de pagamento eram detectadas apenas dias após o ocorrido."
solution: "Arquitetura de dados orientada a Streaming utilizando Databricks e PySpark, consumindo logs transacionais assíncronos diretamente do SAP ERP e armazenando em tabelas Delta Lake estruturadas."
result: "Redução do tempo de resposta para sub-segundos, disparando alertas automatizados e bloqueios preventivos antes da liquidação financeira da transação."
stack:
  - "Databricks"
  - "PySpark"
  - "Spark SQL"
  - "Delta Lake"
  - "SAP"
  - "Azure SQL"
draft: false
---

## Contexto

No cenário de e-commerce e fintechs brasileiras, a velocidade na aprovação de transações dita o sucesso do negócio, mas abre margem para fraudes sofisticadas. O cliente operava com processos em lote (batch), gerando uma janela de vulnerabilidade de até 48 horas. 

O grande desafio técnico residia em extrair dados em tempo real de um ecossistema complexo e legado como o SAP sem gerar concorrência ou indisponibilidade no banco de dados de produção da operação.

## Processo

Implementei uma arquitetura de dados escalável dividida em três camadas sob o conceito de Medallion Architecture:
1. **Ingestão Isolada:** Acoplamento de um barramento de eventos que capturava as mutações transacionais do SAP, despejando os dados brutos na camada Bronze do Delta Lake.
2. **Transformação em Fluxo:** Criação de jobs de Structured Streaming com PySpark na camada Silver para limpar strings corrompidas, normalizar esquemas dinâmicos e aplicar validações de tipos em tempo de execução.
3. **Mecanismo de Análise:** Modelagem analítica na camada Gold utilizando queries otimizadas em Spark SQL para detectar desvios estatísticos de comportamento de compra.

Para mitigar problemas de gargalo de memória (OOM) causados pelo volume flutuante de dados, apliquei técnicas de Z-Ordering nas tabelas Delta e ajustei agressivamente as partições de shuffle do Spark de acordo com o tamanho dos clusters.

## Resultado

A implementação dessa infraestrutura de Big Data blindou a saúde financeira da operação.
- **Mitigação de Risco:** Redução massiva de estornos (chargebacks) devido à velocidade de intercepção das anomalias.
- **Performance Cloud:** Otimização do uso de recursos computacionais do Databricks, escalando automaticamente apenas nos horários de pico comercial do mercado local.
- **Decisões em Tempo Real:** Automação de relatórios e relatórios operacionais atualizados a cada segundo para o time de mitigação de risco.