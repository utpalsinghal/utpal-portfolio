export interface Project {
  title: string;
  blurb: string;
  tags: string[];
  links?: { label: string; href: string }[];
}

// Add 2–3 projects here as you build them. The Projects section auto-renders
// when this array is non-empty, and stays hidden while it's empty — so the
// site never shows an awkward "coming soon" gap.
//
// Example:
// {
//   title: 'Realtime sync engine',
//   blurb: 'Offline-first collaboration layer that cut sync latency by 60%.',
//   tags: ['Go', 'CRDT', 'WebSocket'],
//   links: [
//     { label: 'live', href: 'https://...' },
//     { label: 'source', href: 'https://github.com/...' },
//   ],
// },

export const projects: Project[] = [];
