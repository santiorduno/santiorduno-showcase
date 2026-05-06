# Propuesta de Contenido — santiorduno.com
> v2 — 6 mayo 2026 | Hero + Servicios (versión final acordada)

---

## Hero

### Texto animado rotativo
Reemplaza las 6 palabras/categorías actuales. Rota entre estas 4 líneas:

```
UX Research & Product Design
Design Systems & Prototyping
Frontend Implementation
Agile · SCRUM · Figma · AI
```

La última línea funciona como firma de forma de trabajar, no como servicio.
SCRUM/ágiles aparece aquí como atributo transversal, no como servicio separado.

### `about` (subtítulo principal bajo el nombre)

**Actual:**
> I help brands create impactful digital experiences through UX/UI design, web development, and AI-enhanced visual content.

**Nuevo:**
> I design digital products from research to implementation — working at the intersection of UX, design systems, and frontend development.

### `bio` (texto corto de presentación)

**Actual:**
> I mix impactful design with robust technical implementation. Master's student in AI (Tec de Monterrey).

**Nuevo:**
> Product Designer with 3+ years building real products. Currently pursuing a Master's in Applied AI at Tec de Monterrey — and using it.

### `availability`

**Actual:**
> Available for freelance or part-time opportunities

**Nuevo:**
> Open to full-time Product Designer roles in Mexico City

### `title` y `subtitle` de sección proyectos

**Actual:**
> title: "Design & Development Showcase"
> subtitle: "Product Designer specialized in UX/UI and Web Development"

**Nuevo:**
> title: "Selected Work"
> subtitle: "Product Designer · UX Research · Design Systems · Frontend"

### `location`

**Actual:**
> "Hermosillo, Sonora, MX"

**Nuevo:**
> "Mexico City, MX (relocating July 2026)"

### `softSkills`

**Actual:**
> Experienced in leading multidisciplinary teams with a focus on self-management and Kanban methodology. Currently enhancing technical solutions through a Master's in Applied AI at Tecnológico de Monterrey and offering professional bilingual communication with a B2 English level.

**Nuevo:**
> Experienced working in multidisciplinary teams across design, development, and product. Self-managed with Kanban methodology and comfortable facilitating communication between design and engineering. Currently in a Master's in Applied AI at Tec de Monterrey — with coursework in agile methodologies, Scrum, and software development management. Professional English (B2).

---

## Servicios — estructura final

De 6 a 4 servicios. Se eliminan "3D Design & Motion Graphics" y "Learning Data Analysis".
SCRUM/ágiles vive en el hero y en softSkills, no como servicio.
3D y motion se reencuadran dentro del Servicio 1 como capacidad de prototipado avanzado.

---

### Servicio 1 — UX & Product Design

```ts
{
  id: 1,
  title: "UX & Product Design",
  description: "End-to-end design process: user research, interviews, and information architecture through to high-fidelity prototypes and advanced interaction in Figma — including motion and micro-interactions. I work from the problem, not the solution, validating with real users through structured testing.",
  items: [
    { title: "User Research & Interviews" },
    { title: "Usability Testing (Maze)" },
    { title: "Information Architecture" },
    { title: "Design Systems & Advanced Prototyping" },
  ]
}
```

> Motion y 3D quedan contenidos en "Advanced Prototyping" — no desaparecen, se reencuadran donde tienen sentido para empresas de producto.

---

### Servicio 2 — Frontend Implementation

```ts
{
  id: 2,
  title: "Frontend Implementation",
  description: "I build what I design. React, Astro and Tailwind CSS for landing pages, web apps, and conversion-focused sites — choosing the right rendering method (SSR, CSR, SSG) for each project's needs.",
  items: [
    { title: "React & Astro Development" },
    { title: "Responsive & Accessible Design" },
    { title: "Performance Optimization" },
    { title: "Conversion-Focused Implementation" },
  ]
}
```

---

### Servicio 3 — AI-Augmented Workflows

```ts
{
  id: 3,
  title: "AI-Augmented Workflows",
  description: "I integrate generative AI and automation into design and development workflows — from visual production with Midjourney and ComfyUI to process automation with Python and n8n. Less manual work, more consistent output.",
  items: [
    { title: "Generative AI for Visual Production" },
    { title: "Workflow Automation (n8n, Python)" },
    { title: "API Integration" },
    { title: "AI-Enhanced Design Processes" },
  ]
}
```

> Fusión de los anteriores "Visual Content & AI" + "Technical Integration". Más coherente, menos fragmentado.

---

### Servicio 4 — Analytics & Measurement

```ts
{
  id: 4,
  title: "Analytics & Measurement",
  description: "Behavior analysis through heatmaps, session recordings, and funnels to inform design decisions with real data. I've implemented measurement infrastructure from scratch and used analytics to validate UX improvements.",
  items: [
    { title: "Heatmaps & Session Analysis (Maze, Clarity)" },
    { title: "Google Analytics & Funnels" },
    { title: "User Behavior Tracking" },
    { title: "Data-Informed Design Decisions" },
  ]
}
```

> Servicio nuevo. No existía en el portafolio anterior. Aparece mencionado en 4 de 5 vacantes activas del pipeline.

---

## Cambios en `constants/index.tsx` — resumen ejecutivo para Claude Code

| Campo | Archivo | Acción |
|---|---|---|
| `services[]` | `constants/index.tsx` | Reemplazar array completo con 4 servicios |
| `about[0].about` | `constants/index.tsx` | Nuevo texto `about` |
| `about[0].bio` | `constants/index.tsx` | Nuevo texto `bio` |
| `about[0].availability` | `constants/index.tsx` | Cambiar a CDMX |
| `about[0].title` | `constants/index.tsx` | "Selected Work" |
| `about[0].subtitle` | `constants/index.tsx` | Keywords de producto |
| `about[0].softSkills` | `constants/index.tsx` | Agregar ágiles/Scrum |
| `contactInfo.location` | `constants/index.tsx` | Cambiar a CDMX |
| Hero animado | Componente Hero | Reemplazar palabras rotativas con 4 líneas nuevas |

> Nota para Claude Code: los textos en español viven en `src/i18n/content/es/` como overlays.
> Actualizar primero los valores en inglés en `constants/index.tsx`.
> Luego actualizar los equivalentes en español en los archivos ES correspondientes.

---

## Próximo paso — proyectos

Los 5 proyectos actuales necesitan revisión de descripción y order de aparición.
Bizopps no aparece en el portafolio — es el case study prioritario a construir.
Ver sesión siguiente.

