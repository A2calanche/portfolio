---
lang: "es"
slug: "pipeline-fraudes-tiempo-real-databricks"
title: "Pipeline de Ingeniería de Datos para Detección de Fraudes en Tiempo Real"
problem: "Fugas millonarias de capital causadas por auditorías transaccionales reactivas, donde los patrones de fraude se descubrían días después del procesamiento de los pagos."
solution: "Diseño de un pipeline de datos distribuido en Databricks con PySpark Structured Streaming para la ingesta asíncrona y procesamiento continuo de datos transaccionales de SAP."
result: "Optimización del tiempo de detección de días a milisegundos, activando alertas automáticas e integrando controles preventivos inmediatos."
stack:
  - "Databricks"
  - "PySpark"
  - "Spark SQL"
  - "Delta Lake"
  - "Integración SAP"
  - "Azure SQL"
  - "Seguridad de Datos"
draft: false
---

## Contexto

Las grandes empresas en Latinoamérica que manejan operaciones masivas de venta o financiamiento suelen enfrentarse al reto de la fragmentación de datos dentro de sus ERPs. El procesamiento de auditoría tradicional por lotes dejaba una ventana abierta a fraudes concurrentes que afectaban directamente el flujo de caja. El desafío clave era procesar flujos masivos de datos relacionales sin degradar los sistemas centrales de contabilidad o ventas y garantizando un almacenamiento inmutable.

## Proceso

La infraestructura se diseñó bajo una arquitectura desacoplada utilizando mejores prácticas de Ingeniería de Datos:
1. **Capa Bronze (Ingesta):** Configuración de un conector optimizado para extraer de forma asíncrona los eventos del ERP SAP, guardándolos sin procesar para mantener la trazabilidad exacta de la auditoría.
2. **Capa Silver (Enriquecimiento):** Desarrollo de transformaciones en PySpark para estructurar los JSONs y strings, aplicando joins en streaming para cruzar la transacción activa con metadatos de comportamiento histórico.
3. **Capa Gold (Negocio):** Agregaciones optimizadas mediante Spark SQL que alimentan las reglas operativas de detección de anomalías.

El principal reto técnico fue el manejo de la evolución de esquemas cuando el origen modificaba estructuras. Se solucionó habilitando la característica de 'Schema Evolution' de Delta Lake y refinando las estrategias de particionamiento para evitar el problema del "archivo pequeño" (Small File Problem).

## Resultado

El proyecto transformó el departamento de control interno de una entidad reactiva a una proactiva.
- **Cero Fugas de Latencia:** La detección ocurre en milisegundos, permitiendo congelar transacciones sospechosas antes de su despacho físico o bancario.
- **Arquitectura Robusta:** Almacenamiento seguro, inmutable y auditable sobre Delta Lake, cumpliendo con estándares de gobernanza internacionales.
- **Costos Controlados:** El auto-escalado de los nodos de Databricks permitió reducir la infraestructura de servidores fijos cuando el volumen transaccional descendía por las noches.