# JWT Authentication - Testing Instructions

## Quick Start

1. **Install and run:**

   ```bash
   npm install
   npm start
   ```

   Server runs on: `http://localhost:3000`

2. **Default credentials:**
   - Username: `admin`
   - Password: `12345`

## API Testing

### 1. Login (Get Token)

```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "12345"}'
```

**Copy the token from response**

### 2. Test Protected Route

```bash
curl -X GET http://localhost:3000/api/v1/auth/ping \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### 3. Test Without Token (Should Fail)

```bash
curl -X GET http://localhost:3000/api/v1/auth/ping
```

## All Endpoints

### POST /api/v1/auth/login - Get JWT token

```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "12345"}'
```

### POST /api/v1/auth/register - Register user

```bash
curl -X POST http://localhost:3000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "newuser", "password": "newpass123"}'
```

### GET /api/v1/auth/ping - Test token (protected)

```bash
curl -X GET http://localhost:3000/api/v1/auth/ping \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### GET /api/v1/auth/profile - User profile (protected)

```bash
curl -X GET http://localhost:3000/api/v1/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### GET /api/v1/emojis/protected - Protected demo (protected)

```bash
curl -X GET http://localhost:3000/api/v1/emojis/protected \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### GET /api/v1/emojis - Public demo

```bash
curl -X GET http://localhost:3000/api/v1/emojis
```

**Protected routes require:** `Authorization: Bearer <token>` header
