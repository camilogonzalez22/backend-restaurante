# 🍔 Restaurant Management API

API REST desarrollada con Node.js, Express, MongoDB y TypeScript para la administración de un restaurante.

El sistema permite gestionar usuarios, clientes, productos, ventas, reservaciones y mesas, implementando autenticación JWT, validaciones robustas y documentación interactiva con Swagger.

---

# 🚀 Características principales

✅ Arquitectura modular y escalable  
✅ API RESTful  
✅ Autenticación y autorización con JWT  
✅ Encriptación segura de contraseñas con bcrypt  
✅ Validaciones con Zod  
✅ Documentación automática con Swagger/OpenAPI  
✅ Middleware de seguridad con Helmet  
✅ Soporte para CORS  
✅ Logging de peticiones con Morgan  
✅ Integración con MongoDB  
✅ Código desarrollado en TypeScript  

---

# 🛠 Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| Node.js | Entorno de ejecución |
| Express 5 | Framework backend |
| MongoDB | Base de datos NoSQL |
| TypeScript | Tipado estático |
| JWT | Autenticación |
| bcrypt | Encriptación |
| Zod | Validación de datos |
| Swagger | Documentación API |
| Helmet | Seguridad HTTP |
| Morgan | Logs de peticiones |
| CORS | Comunicación entre dominios |

---

# 📁 Estructura del proyecto

```bash
src/
│
├── config/                # Configuración global
│
├── libs/                  # Funciones auxiliares
│
├── middlewares/           # Middlewares personalizados
│
├── modules/
│   ├── auth/              # Login y autenticación
│   ├── users/             # Gestión de usuarios
│   ├── clients/           # Gestión de clientes
│   ├── products/          # Productos del restaurante
│   ├── sales/             # Ventas y facturación
│   ├── reservations/      # Reservaciones
│   └── tables/            # Gestión de mesas
│
├── routes/                # Rutas principales
│
└── server.ts              # Punto de entrada