---
lang: "es"
slug: "deteccion-fraude"
title: "Sistema de detección de fraude en e-commerce"
problem: "La identificación de pedidos fraudulentos dependía principalmente de revisiones manuales realizadas por el equipo operativo. Este proceso consumía tiempo, dificultaba la priorización de casos y limitaba la capacidad de respuesta ante comportamientos sospechosos en un entorno con miles de pedidos procesados diariamente."
solution: "Diseñé e implementé un pipeline automatizado de detección de fraude utilizando Databricks, PySpark, SQL y Power Automate. El sistema procesaba información de pedidos de forma horaria, aplicando reglas de negocio para identificar señales de riesgo y generar alertas automáticas para el equipo de prevención de fraude."
result: "La solución permitió estandarizar el proceso de análisis, reducir la dependencia de revisiones manuales y proporcionar visibilidad operativa mediante reportes y dashboards actualizados en tiempo real para apoyar la toma de decisiones."
stack:
  - "Databricks"
  - "PySpark"
  - "Azure SQL"
  - "Delta Lake"
  - "Python"
draft: false
---

## Contexto

Durante mi experiencia en operaciones de e-commerce, participé activamente en el análisis de pedidos y prevención de fraude. El equipo debía revisar diariamente grandes volúmenes de transacciones para identificar comportamientos sospechosos antes de aprobar o cancelar pedidos.

El proceso dependía en gran medida de consultas manuales, validaciones operativas y análisis individuales realizados por los analistas. Esto generaba tiempos de respuesta variables y dificultaba mantener criterios consistentes entre diferentes revisiones.

A partir de esta necesidad surgió la oportunidad de construir una solución que automatizara parte del análisis y permitiera detectar señales de riesgo de forma más rápida y estructurada.

## Proceso

La solución fue desarrollada sobre Databricks utilizando PySpark y SQL para el procesamiento de datos.

El pipeline consumía información proveniente de pedidos, clientes y datos de contacto, ejecutándose de forma horaria para identificar patrones asociados a posibles intentos de fraude.

Entre las reglas implementadas se encontraban:

Reutilización de números telefónicos entre múltiples cuentas.
Clientes nuevos con comportamientos de compra atípicos.
Direcciones de entrega compartidas por diferentes usuarios.
Inconsistencias entre datos de registro y datos de compra.
Cambios repentinos en métodos de pago.
Combinaciones de señales históricamente asociadas a pedidos fraudulentos.

Los resultados eran almacenados y consolidados para su posterior análisis, además de alimentar reportes automatizados distribuidos mediante Power Automate.

Como complemento, desarrollé dashboards operativos en Power BI que permitían monitorear indicadores clave, volumen de alertas y resultados de las revisiones realizadas por el equipo.

Durante el desarrollo fue necesario equilibrar precisión y volumen de alertas para evitar tanto falsos positivos como casos fraudulentos no detectados, ajustando continuamente las reglas de negocio junto con el equipo operativo.

## Resultado

La implementación transformó un proceso altamente manual en un flujo automatizado y reproducible.

Los analistas pasaron a enfocarse en la revisión de casos priorizados en lugar de buscar manualmente patrones sospechosos dentro de grandes volúmenes de información.

La solución mejoró la visibilidad operacional mediante reportes actualizados periódicamente, redujo el tiempo dedicado a tareas repetitivas y permitió una respuesta más rápida ante eventos potencialmente fraudulentos.

Además del impacto operativo, el proyecto representó una oportunidad para aplicar principios de ingeniería de datos, automatización de procesos, análisis de riesgo y Business Intelligence en un entorno real de e-commerce.