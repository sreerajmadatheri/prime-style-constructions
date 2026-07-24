import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { ROUTES } from './paths'

const routes: RouteObject[] = [
  {
    lazy: () =>
      import('@/components/layout/Layout').then((m) => ({
        Component: m.default,
      })),
    children: [
      {
        path: ROUTES.HOME,
        lazy: () =>
          import('@/pages/home/HomePage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: ROUTES.ABOUT,
        lazy: () =>
          import('@/pages/about/AboutPage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: ROUTES.SERVICES,
        lazy: () =>
          import('@/pages/services/ServicesPage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: ROUTES.PROJECTS,
        lazy: () =>
          import('@/pages/projects/ProjectsPage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: ROUTES.CONTACT,
        lazy: () =>
          import('@/pages/contact/ContactPage').then((m) => ({
            Component: m.default,
          })),
      },
      {
        path: '*',
        lazy: () =>
          import('@/pages/not-found/NotFoundPage').then((m) => ({
            Component: m.default,
          })),
      },
    ],
  },
]

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
})
