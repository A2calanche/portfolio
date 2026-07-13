---

lang: "es"
slug: "app-fullstack-mern"
title: "Aplicación Full-Stack MERN"
problem: "Necesitaba un proyecto propio para demostrar dominio full-stack end-to-end: autenticación segura, integración con servicios externos y buenas prácticas de seguridad, más allá de un CRUD básico de portfolio."
solution: "Construí una aplicación MERN completa con autenticación local y Google OAuth, recuperación de contraseña, tablero Kanban, integración con Google Calendar y una auditoría de seguridad integral. Implementé JWT firmado, cifrado AES-256-GCM para proteger tokens en reposo, validación de entradas en toda la API y controles adicionales para endurecer el flujo de autenticación."
result: "El proyecto evolucionó de una aplicación funcional a una pieza de portfolio enfocada en arquitectura, seguridad e integración de servicios externos, respaldada por documentación técnica, ADRs y diagramas de arquitectura."
stack:
  - "MongoDB"
  - "Express"
  - "React"
  - "Node.js"
draft: false
---

## Contexto

Este proyecto nació como una aplicación de gestión de tareas desarrollada con el stack MERN (MongoDB, Express, React y Node.js), pero rápidamente se convirtió en una oportunidad para profundizar en áreas que suelen quedar fuera de los proyectos de práctica tradicionales.

El objetivo no era únicamente construir una interfaz funcional o una API CRUD, sino abordar desafíos reales presentes en aplicaciones modernas: autenticación segura, gestión de sesiones, integración con proveedores externos, protección de credenciales y documentación de decisiones técnicas.

A medida que el proyecto evolucionó, incorporé funcionalidades como autenticación con Google OAuth, recuperación de contraseña mediante correo electrónico, integración con Google Calendar y un tablero Kanban para la organización de tareas, transformándolo en un entorno práctico para experimentar con arquitectura de aplicaciones y buenas prácticas de seguridad.

## Proceso

El desarrollo comenzó con la construcción de una API REST utilizando Express y MongoDB, junto con una interfaz React para la gestión de usuarios y tareas.

Una vez implementadas las funcionalidades básicas, enfoqué el trabajo en mejorar la seguridad y la experiencia de usuario:

- Implementación de autenticación mediante JWT para proteger rutas y recursos.
- Integración de Google OAuth para permitir el acceso mediante cuentas de Google.
- Desarrollo de un flujo de recuperación de contraseña con generación y validación segura de tokens.
- Integración con Google Calendar para crear eventos directamente desde la aplicación.
- Implementación de validación de entradas tanto en cliente como en servidor para reducir errores y minimizar riesgos asociados a datos malformados.
- Cifrado AES-256-GCM para proteger tokens sensibles almacenados en la base de datos.
- Revisión y fortalecimiento de la configuración de autenticación y autorización para reducir superficies de ataque comunes.

Además del desarrollo de funcionalidades, dediqué tiempo a documentar decisiones arquitectónicas mediante ADRs (Architecture Decision Records), diagramas de arquitectura y documentación técnica que facilitan el mantenimiento y la comprensión del proyecto.

## Resultado

El resultado fue una aplicación full-stack que va más allá de un proyecto CRUD convencional y demuestra competencias en desarrollo frontend y backend, integración de APIs externas, autenticación moderna y prácticas de seguridad aplicadas.

Más allá de las funcionalidades implementadas, el proyecto me permitió adquirir experiencia práctica en:

- Diseño y consumo de APIs REST.
- Integración con servicios de terceros mediante OAuth 2.0.
- Gestión segura de credenciales y tokens.
- Arquitectura de aplicaciones full-stack.
- Documentación técnica y toma de decisiones arquitectónicas.
- Implementación de controles de seguridad aplicados a aplicaciones web.

Actualmente, el proyecto forma parte de mi portfolio como evidencia de capacidades en desarrollo full-stack, integración de servicios externos y construcción de aplicaciones orientadas a entornos de producción.