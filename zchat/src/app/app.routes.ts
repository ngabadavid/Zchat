import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: 'chats',
        loadChildren: () => import('./chats/chats.module').then((m) => m.ChatsModule)
    },
    {
        path: 'status',
        loadChildren: () => import('./status/status.module').then((m) => m.StatusModule)
    },
]