# Documentación - Sistema de Landing Page Dinámico desde CMS

## 📋 Descripción General

El proyecto ha sido transformado en un sistema de **landing page dinámico** que se construye desde el CMS mediante la colección **Pages**. Cada página tiene un array de `layout` que contiene bloques (`blockType`) que se renderizan dinámicamente en el frontend.

## 🗂 Estructura de Carpetas

```
app/
├── (site)/
│   ├── page.tsx (NUEVA - Carga dinámicamente desde CMS)
│   └── legacy-page.tsx (ANTIGUA - Referencia con componentes estáticos)
├── components/
│   ├── blocks/
│   │   ├── PageBlockRenderer.tsx (Renderizador dinámico de bloques)
│   │   └── HeroBlockRenderer.tsx (Componente para renderizar bloques tipo "hero")
│   └── common/ (Componentes antiguos - mantienen su funcionalidad)
│
services/
├── pages.ts (NUEVO - Servicio para obtener páginas desde el CMS)
└── services.ts (Servicio existente)

types/
├── pages.ts (NUEVO - Tipos para la nueva estructura de Pages)
├── services.ts (Tipos existentes)
└── ...
```

## 🔄 Flujo de Funcionamiento

```
1. Usuario accede a / (página principal)
   ↓
2. page.tsx hace fetch a getPageBySlug("main-page")
   ↓
3. El CMS retorna un objeto Page con layout array
   ↓
4. PageBlockRenderer itera sobre los bloques
   ↓
5. Para cada bloque, renderiza el componente correspondiente (HeroBlockRenderer, etc.)
   ↓
6. El usuario ve la página construida dinámicamente
```

## 📦 Estructura de Datos del CMS

Ejemplo de respuesta del CMS para "Pages":

```json
{
  "id": "69b22ccb602b71d5ac5b4e0d",
  "createdAt": "2026-03-12T03:02:35.722Z",
  "updatedAt": "2026-03-12T03:02:35.723Z",
  "title": "Main",
  "slug": "main-page",
  "layout": [
    {
      "blockType": "hero",
      "badge": "Bienvenido a Piratas Barbershop",
      "title": "Tu estilo es",
      "highlightedText": "Nuestra firma",
      "description": "Más que un corte, una declaración...",
      "backgroundImage": { /* ImageData */ },
      "buttons": { /* HeroBlockButtons */ },
      "services": [ /* Array de Services */ ],
      "id": "69b22c02ba0a80945ed150c5"
    }
    // Aquí irán más bloques en el futuro
  ]
}
```

## 🎨 Tipos TypeScript

### Page.ts
Define la estructura completa de una página:
- `Page`: Objeto principal con título, slug y array de bloques
- `PageBlock`: Union de todos los tipos de bloques posibles (HeroBlock, etc.)
- `HeroBlock`: Estructura específica para bloques hero

### Pages.ts (Service)
Funciones para obtener páginas:
- `getPages()`: Obtiene todas las páginas
- `getPageBySlug(slug)`: Obtiene una página por su slug

## 🔧 Cómo Agregar Nuevos Bloques de Contenido

### Paso 1: Definir el Tipo en types/pages.ts

```typescript
export interface ServicesBlock {
  blockType: "services";
  title: string;
  description: string;
  servicesIds: string[]; // Referencias a la colección Services
  id: string;
}
```

### Paso 2: Agregar a la Union de Tipos

```typescript
export type PageBlock = HeroBlock | ServicesBlock; // Agregar nuevo tipo
```

### Paso 3: Crear el Componente Renderizador

Crear: `app/components/blocks/ServicesBlockRenderer.tsx`

```typescript
"use client";

import { ServicesBlock } from "@/types/pages";
import ServiceCard from "../ServiceCard"; // Usar componente existente o nuevo

interface ServicesBlockRendererProps {
  block: ServicesBlock;
}

export default function ServicesBlockRenderer({ block }: ServicesBlockRendererProps) {
  // Implementar renderización del bloque
  return (
    <section>
      <h2>{block.title}</h2>
      <p>{block.description}</p>
      {/* Renderizar servicios */}
    </section>
  );
}
```

### Paso 4: Agregar al Switch de PageBlockRenderer

En `app/components/blocks/PageBlockRenderer.tsx`:

```typescript
case "services":
  return <ServicesBlockRenderer key={`${block.blockType}-${index}`} block={block} />;
```

## 🔐 Diferencias: Nueva vs Antigua

| Aspecto | Nueva (CMS-driven) | Antigua (Estática) |
|--------|-------------------|--------------------|
| **Fuente de contenido** | CMS (Pages Collection) | Hardcodeado en React |
| **Flexibilidad** | Alta - configurable desde CMS | Baja - requiere código |
| **Orden de componentes** | Dinámico según CMS | Fijo |
| **Mantenimiento** | Desde el CMS | Desde el código |
| **Disponibilidad** | legacy-page.tsx | Usándola directamente |

## 📝 Notas Importantes

1. **La configuración antigua está preservada** en `app/(site)/legacy-page.tsx` para referencia
2. **HeroBlockRenderer** hereda funcionalidad del Hero.tsx antiguo pero la adaptó para ser dinámica
3. **Los servicios en el hero** ahora vienen del CMS y se renderizan dentro del block
4. **Error handling** está implementado en page.tsx - muestra fallback si el CMS no responde

## 🚀 Próximos Pasos

1. Verificar que el CMS tenga la colección Pages correctamente configurada
2. Crear más tipos de bloques según necesites (Services, Staff, Gallery, etc.)
3. Implementar componentes renderizadores para cada tipo de bloque
4. Probar la carga de la página desde el CMS

## 💾 Archivos Creados/Modificados

### ✅ Creados:
- `types/pages.ts`
- `services/pages.ts`
- `app/components/blocks/PageBlockRenderer.tsx`
- `app/components/blocks/HeroBlockRenderer.tsx`
- `app/(site)/legacy-page.tsx`

### ✏️ Modificados:
- `app/(site)/page.tsx` - Ahora carga dinámicamente desde el CMS
