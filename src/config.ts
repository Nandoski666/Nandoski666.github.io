/**
 * siteConfig.ts
 * Configuración central del sitio
 */

type EnvRecord = Record<string, unknown>;

const env = (import.meta as any)?.env as EnvRecord | undefined;

const getEnv = (key: string, fallback = ''): string => {
  if (!env) return fallback;
  const v = (env as Record<string, unknown>)[key];
  return typeof v === 'string' && v.length ? v : fallback;
};

export const siteConfig = {
  // URL pública del sitio (sin slash final)
  url: getEnv('SITE_URL', 'https://nandoski666.com'),

  // Idioma principal
  language: getEnv('SITE_LANGUAGE', 'es'),

  // Nombre del sitio
  title: getEnv('SITE_TITLE', 'Nandoski666'),

  // Descripción general
  description: getEnv(
    'SITE_DESCRIPTION',
    'Portafolio y proyectos de desarrollo web y software.'
  ),

  // Información del autor
  author: {
    name: getEnv('SITE_AUTHOR_NAME', 'Hernando Javier Garcia Mogollon'),
    title: getEnv('SITE_AUTHOR_TITLE', 'Desarrollador Fullstack'),
    bio: getEnv(
      'SITE_AUTHOR_BIO',
      'Desarrollador enfocado en e-commerce, sistemas web y proyectos académicos avanzados.'
    ),
    email: getEnv('SITE_AUTHOR_EMAIL', ''),
    location: getEnv('SITE_AUTHOR_LOCATION', 'Colombia'),
  },

  // Redes sociales
  social: {
    github: getEnv('SOCIAL_GITHUB', ''),
    linkedin: getEnv('SOCIAL_LINKEDIN', ''),
    twitter: getEnv('SOCIAL_TWITTER', ''),
  },

  // Navegación principal
  nav: [
    { label: 'Proyectos', href: '/projects' },
    { label: 'Mi Perfil', href: '/profile' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contact' },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];