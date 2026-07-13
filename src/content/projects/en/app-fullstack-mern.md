---

lang: "en"
slug: "app-fullstack-mern"
title: "Full-Stack MERN Application"
problem: "I needed a personal project that could demonstrate end-to-end full-stack development skills, including secure authentication, third-party integrations, and security best practices beyond a typical portfolio CRUD application."
solution: "I built a complete MERN application featuring local authentication, Google OAuth, password recovery, a Kanban board, Google Calendar integration, and a comprehensive security review. The application uses signed JWTs, AES-256-GCM encryption for sensitive tokens at rest, input validation across the API, and additional authentication hardening measures."
result: "The project evolved from a functional task management application into a portfolio showcase focused on software architecture, security, and external service integrations, supported by technical documentation, ADRs, and architecture diagrams."
stack:
  - "MongoDB"
  - "Express"
  - "React"
  - "Node.js"
draft: false

---

## Context

This project started as a task management application built with the MERN stack (MongoDB, Express, React, and Node.js), but it quickly became an opportunity to explore areas that are often overlooked in typical practice projects.

The goal was not simply to build a functional user interface and API. Instead, I wanted to address challenges commonly found in real-world applications, such as secure authentication, session management, third-party integrations, credential protection, and technical documentation.

As the project evolved, I introduced features such as Google OAuth authentication, email-based password recovery, Google Calendar integration, and a Kanban-style task board. These additions transformed the application into a practical environment for experimenting with application architecture and security-focused development practices.

## Process

Development began with the implementation of a REST API using Express and MongoDB, along with a React frontend for user and task management.

After the core functionality was in place, I focused on improving security, maintainability, and user experience through several enhancements:

- Implemented JWT-based authentication to secure protected routes and resources.
- Added Google OAuth integration to support sign-in with Google accounts.
- Developed a secure password recovery workflow with token generation and validation.
- Integrated Google Calendar to allow users to create events directly from the application.
- Applied input validation on both the client and server sides to reduce errors and improve data integrity.
- Implemented AES-256-GCM encryption to protect sensitive tokens stored in the database.
- Reviewed and strengthened authentication and authorization flows to mitigate common web application security risks.

Beyond feature development, I documented architectural decisions through ADRs (Architecture Decision Records), architecture diagrams, and technical documentation to improve maintainability and provide clear insight into the project's design.

## Result

The final result is a full-stack application that goes beyond a traditional CRUD project and demonstrates practical experience with frontend and backend development, API integrations, modern authentication workflows, and applied security practices.

In addition to the delivered functionality, the project provided hands-on experience with:

- REST API design and implementation.
- OAuth 2.0 integrations and third-party services.
- Secure credential and token management.
- Full-stack application architecture.
- Technical documentation and architectural decision-making.
- Security-focused web application development.

Today, the project serves as part of my portfolio as evidence of my ability to build full-stack applications, integrate external services, and apply production-oriented engineering practices.