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

# 🔐 Autenticación

La API utiliza autenticación mediante JWT.

Agregar el token en los headers:

```bash
Authorization: Bearer <token>
```

---

# 📚 Documentación Swagger

La documentación interactiva está disponible en:

```bash
http://localhost:3000/api/docs
```

Swagger permite:

- Probar endpoints
- Visualizar request y response
- Ver ejemplos reales
- Validar autenticación JWT

---

# 📦 Módulos implementados

## 👤 Users
Gestión de usuarios del sistema.

- Registro de usuarios
- Consulta de usuarios
- Roles de usuario

---

## 🔑 Auth
Sistema de autenticación.

- Login
- Generación de JWT
- Protección de rutas

---

## 🧑‍🍳 Clients
Administración de clientes del restaurante.

- Crear clientes
- Consultar clientes
- Actualizar clientes
- Eliminar clientes

---

## 🍔 Products
Gestión de productos y menú.

- Crear productos
- Actualizar productos
- Consultar menú
- Control de disponibilidad

---

## 💰 Sales
Gestión de ventas.

- Registrar ventas
- Consultar ventas
- Actualizar ventas
- Eliminar ventas

---

## 📅 Reservations
Sistema de reservaciones.

- Crear reservaciones
- Gestión de horarios
- Control de mesas

---

## 🪑 Tables
Administración de mesas.

- Crear mesas
- Cambiar estado
- Control de capacidad

---

# 🧪 Ejemplo de petición

## Crear usuario

```http
POST /users/register
```

```json
{
  "name": "Juan Pérez",
  "email": "juan@gmail.com",
  "password": "123456"
}
```

---

# 📊 Scripts disponibles

```bash
npm run dev
npm run build
npm start
```

---

# 🔒 Seguridad implementada

✅ Contraseñas encriptadas  
✅ Middleware JWT  
✅ Protección de rutas privadas  
✅ Validación de datos de entrada  
✅ Control de errores  
✅ Seguridad HTTP con Helmet  

---

# 📈 Futuras mejoras

- Implementación de pagos online
- Dashboard administrativo
- Reportes y estadísticas
- Sistema de pedidos en tiempo real
- Gestión de inventario
- Notificaciones automáticas

---

# 👨‍💻 Autor

## Camilo Alexander González Huertas

Estudiante de Ingeniería de Sistemas y desarrollador backend enfocado en aplicaciones web modernas con Node.js, TypeScript y MongoDB.

---