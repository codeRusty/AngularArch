import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Home', icon: 'dashboard', class: 'active' },
    { path: 'case', title: 'Cases', icon: 'dashboard', class: '' },
    { path: 'user', title: 'Document Sent', icon: 'person', class: '' },
    { path: 'table', title: 'Document Recieved', icon: 'content_paste', class: '' },
    { path: 'typography', title: 'Notes', icon: 'library_books', class: '' },
    { path: 'candidatedetails', title: 'Tasks', icon: 'bubble_chart', class: '' },
    { path: 'maps', title: 'Sessions', icon: 'location_on', class: '' },
    { path: 'notifications', title: 'Organisations', icon: 'notifications', class: '' },
    { path: 'maps', title: 'Venue', icon: 'lock', class: '' },
    { path: 'login', title: 'Web Instructions', icon: 'lock', class: '' },
    { path: 'login', title: 'Web Ammendments', icon: 'lock', class: '' }
];
