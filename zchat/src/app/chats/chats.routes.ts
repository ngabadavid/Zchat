import { Route } from "@angular/router";
import { ChatsContainer } from "./chats.container";

export const CHATS_ROUTES: Route[] = [
    {
        path:'',
        pathMatch: 'full',
        component: ChatsContainer,
        children: []
    }
]