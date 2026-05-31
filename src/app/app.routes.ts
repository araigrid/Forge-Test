import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'open-demands',
        loadComponent: () =>
          import('./pages/open-demands/open-demands').then((m) => m.OpenDemands),
      },
      {
        path: 'workforce',
        loadComponent: () =>
          import('./pages/workforce/workforce').then((m) => m.Workforce),
      },
      {
        path: 'bench',
        loadComponent: () => import('./pages/bench/bench').then((m) => m.Bench),
      },
      {
        path: 'ai-suggestions',
        loadComponent: () =>
          import('./pages/ai-suggestions/ai-suggestions').then(
            (m) => m.AiSuggestions
          ),
      },
      {
        path: 'analytics',
        loadComponent: () =>
          import('./pages/analytics/analytics').then((m) => m.Analytics),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings').then((m) => m.Settings),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('./pages/calendar/calendar').then((m) => m.Calendar),
      },
      {
        path: 'help-faqs',
        loadComponent: () =>
          import('./pages/help-faqs/help-faqs').then((m) => m.HelpFaqs),
      },
    ],
  },
];
