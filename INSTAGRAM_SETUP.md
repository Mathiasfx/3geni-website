# Configuración de Instagram Integration

## Pasos para configurar la integración con Instagram

### 1. Crear una aplicación en Facebook Developers

1. Ve a [Facebook Developers](https://developers.facebook.com/)
2. Crea una nueva aplicación
3. Selecciona "Consumer" como tipo de aplicación

### 2. Agregar Instagram Basic Display

1. En el dashboard de tu aplicación, ve a "Add Product"
2. Busca "Instagram Basic Display" y haz clic en "Set Up"
3. Crea una nueva Instagram App ID

### 3. Configurar Instagram Basic Display

1. Ve a "Instagram Basic Display" > "Basic Display"
2. Agrega un "Instagram Test User" (tu cuenta de Instagram)
3. Configura los "OAuth Redirect URIs":
   - Para desarrollo: `http://localhost:4200/`
   - Para producción: `https://tudominio.com/`

### 4. Obtener credenciales

1. **Instagram App ID**: Lo encuentras en Basic Display
2. **Instagram App Secret**: También en Basic Display
3. **User Access Token**: Se obtiene a través del flujo OAuth

### 5. Proceso de autenticación OAuth

```
1. Redirige al usuario a:
https://api.instagram.com/oauth/authorize
  ?client_id={instagram-app-id}
  &redirect_uri={redirect-uri}
  &scope=user_profile,user_media
  &response_type=code

2. Instagram redirige de vuelta con un código de autorización

3. Intercambia el código por un token:
POST https://api.instagram.com/oauth/access_token
  client_id={instagram-app-id}
  client_secret={instagram-app-secret}
  grant_type=authorization_code
  redirect_uri={redirect-uri}
  code={code-from-step-2}

4. Intercambia el token de corta duración por uno de larga duración:
GET https://graph.instagram.com/access_token
  ?grant_type=ig_exchange_token
  &client_secret={instagram-app-secret}
  &access_token={short-lived-access-token}
```

### 6. Configurar el proyecto

1. Edita `src/environments/environment.ts`:
```typescript
export const environment = {
  production: false,
  instagram: {
    userId: 'TU_INSTAGRAM_USER_ID',
    accessToken: 'TU_ACCESS_TOKEN_DE_LARGA_DURACION'
  }
};
```

2. Edita `src/environments/environment.prod.ts` para producción

### 7. Activar la integración

1. En `instagram.component.ts`, descomenta la línea:
```typescript
this.loadInstagramPosts(); // Descomentar cuando tengas la integración lista
```

2. Descomenta el método `loadInstagramPosts()` en el mismo archivo

### 8. Consideraciones de seguridad

- **NUNCA** commitees los tokens en el repositorio
- Usa variables de entorno para producción
- Los tokens de larga duración duran 60 días y deben refrescarse
- Considera implementar una renovación automática de tokens

### 9. Limitaciones de la API

- Máximo 200 requests por hora por usuario
- Solo puede acceder a medios del usuario autenticado
- Solo funciona con cuentas de Instagram que sean administradores, desarrolladores o testers de tu aplicación

### 10. Para usar en producción

Considera implementar un backend que maneje:
- El flujo OAuth
- El almacenamiento seguro de tokens
- La renovación automática de tokens
- Cache de posts para reducir llamadas a la API
