export type Locale = "es" | "en";
type Translation = { title: string; summary: string; detail: string };
type Project = {
  id: string;
  area: "apps" | "data";
  stack: string[];
  es: Translation;
  en: Translation;
  proposed?: boolean;
};

export const projects: Project[] = [
  {
    id: "veterinaria", area: "apps", stack: [],
    es: {
      title: "Plataforma de gestión veterinaria",
      summary: "Sistema de gestión de citas, clientes, mascotas y servicios veterinarios.",
      detail: "El sistema reúne en una sola aplicación las tareas de registro y consulta asociadas a las citas, los clientes, las mascotas y los servicios. Las tecnologías de la versión final están pendientes de confirmación.",
    },
    en: {
      title: "Veterinary Management Platform",
      summary: "A system for managing appointments, clients, pets, and veterinary services.",
      detail: "The application brings together the records and lookups needed for appointments, clients, pets, and services. The technology stack of the final version is pending confirmation.",
    },
  },
  {
    id: "esports", area: "apps", stack: [],
    es: {
      title: "Gestión de torneos de esports",
      summary: "Plataforma para organizar competencias, equipos y participantes de videojuegos.",
      detail: "La plataforma permite crear torneos y organizar la información de sus competencias, equipos y participantes. Las tecnologías utilizadas están pendientes de confirmación.",
    },
    en: {
      title: "Esports Tournament Management",
      summary: "A platform for organizing video game competitions, teams, and participants.",
      detail: "The platform supports tournament creation and organizes competition, team, and participant data. The technology stack is pending confirmation.",
    },
  },
  {
    id: "billetera", area: "data", stack: ["C#", ".NET", "Entity Framework"],
    es: {
      title: "Proyecto de billetera digital",
      summary: "Solución académica centrada en el acceso a datos y la exploración de MetaMask.",
      detail: "El trabajo se enfocó en la capa de acceso a datos de una solución para gestionar billeteras digitales. También se exploró una posible integración con MetaMask.",
    },
    en: {
      title: "Digital Wallet Project",
      summary: "An academic project focused on data access and exploration of MetaMask.",
      detail: "The work focused on the data access layer of a digital wallet management solution. A possible MetaMask integration was also explored.",
    },
  },
  {
    id: "ebais", area: "data", stack: ["C#", ".NET", "SQL Server", "JWT", "Swagger"], proposed: true,
    es: {
      title: "API EBAIS",
      summary: "API REST académica del ámbito sanitario, con autenticación y documentación.",
      detail: "Proyecto académico de una API REST en ASP.NET con autenticación JWT, SQL Server y documentación y pruebas de endpoints mediante Swagger.",
    },
    en: {
      title: "EBAIS API",
      summary: "An academic healthcare REST API with authentication and documentation.",
      detail: "An academic ASP.NET REST API using JWT authentication and SQL Server, with Swagger for endpoint documentation and testing.",
    },
  },
  {
    id: "universidad", area: "apps", stack: ["Java"], proposed: true,
    es: {
      title: "Sistema de gestión universitaria",
      summary: "Sistema en Java para gestionar estudiantes, profesores, cursos y solicitudes.",
      detail: "El proyecto usó árboles binarios de búsqueda para estudiantes y profesores, listas enlazadas para cursos y una cola de atención con prioridad. Incluyó validación de asignaciones de cursos con excepciones personalizadas.",
    },
    en: {
      title: "University Management System",
      summary: "A Java system for managing students, professors, courses, and requests.",
      detail: "The project used binary search trees for student and professor records, linked lists for courses, and a priority-based service queue. It also validated course assignments with custom exceptions.",
    },
  },
];
