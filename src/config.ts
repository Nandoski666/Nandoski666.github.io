/**
 * siteConfig.ts
 * Configuración central del sitio
 * Optimizado para GitHub Pages
 */

type EnvRecord = Record<string, unknown>;

// Soporte seguro para import.meta.env (Vite)
const env = (import.meta as any)?.env as EnvRecord | undefined;

const getEnv = (key: string, fallback = ''): string => {
  if (!env) return fallback;
  const value = env[key];
  return typeof value === 'string' && value.length > 0 ? value : fallback;
};

export const siteConfig = {
  /**
   * URL oficial del sitio (GitHub Pages)
   * ⚠️ No cambiar si tu repo es: Nandoski666.github.io
   */
  url: getEnv(
    'SITE_URL',
    'https://Nandoski666.github.io'
  ),

  /**
   * Idioma principal
   */
  language: getEnv('SITE_LANGUAGE', 'es'),

  /**
   * Nombre del sitio / Marca personal
   */
  title: getEnv('SITE_TITLE', 'Nandoski666'),

  /**
   * Descripción SEO
   */
  description: getEnv(
    'SITE_DESCRIPTION',
    'Portafolio y proyectos de desarrollo web de Hernando Javier Garcia Mogollon.'
  ),

  /**
   * Información del autor
   */
  author: {
    name: getEnv(
      'SITE_AUTHOR_NAME',
      'Hernando Javier Garcia Mogollon'
    ),
    title: getEnv(
      'SITE_AUTHOR_TITLE',
      'Desarrollador Fullstack'
    ),
    bio: getEnv(
      'SITE_AUTHOR_BIO',
      'Desarrollador especializado en aplicaciones web, e-commerce y sistemas empresariales.'
    ),
    email: getEnv('SITE_AUTHOR_EMAIL', ''),
    location: getEnv(
      'SITE_AUTHOR_LOCATION',
      'Colombia'
    ),
  },

  /**
   * Redes sociales
   * Deja vacío en .env si no quieres mostrar alguna
   */
  social: {
    github: getEnv(
      'SOCIAL_GITHUB',
      'https://github.com/Nandoski666'
    ),
    linkedin: getEnv('SOCIAL_LINKEDIN', ''),
    twitter: getEnv('SOCIAL_TWITTER', ''),
  },

  /**
   * Navegación principal
   */
  nav: [
    { label: 'Proyectos', href: '/projects' },
    { label: 'Mi Perfil', href: '/profile' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contact' },
  ],
} as const;

/**
 * Tipos exportados
 */
export type SiteConfig = typeof siteConfig;
export type SocialLinks = typeof siteConfig.social;
export type NavItem = typeof siteConfig.nav[number];