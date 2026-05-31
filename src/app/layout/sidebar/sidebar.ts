import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  badge?: number;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  protected readonly primaryItems: NavItem[] = [
    { label: 'Dashboard', route: '/dashboard' },
  ];

  protected readonly sections: NavSection[] = [
    {
      title: 'Staffing',
      items: [
        { label: 'Open Demands', route: '/open-demands', badge: 24 },
        { label: 'Workforce', route: '/workforce' },
        { label: 'Bench', route: '/bench', badge: 316 },
        { label: 'AI Suggestions', route: '/ai-suggestions' },
      ],
    },
    {
      title: 'Insights',
      items: [
        { label: 'Analytics', route: '/analytics' },
        { label: 'Settings', route: '/settings' },
      ],
    },
    {
      title: 'Help',
      items: [
        { label: 'Calendar', route: '/calendar' },
        { label: 'Help & FAQs', route: '/help-faqs' },
      ],
    },
  ];
}
