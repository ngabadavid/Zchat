import { ZchatBasicListItem } from "./zchat-basic-list-item";

export interface ZchatContactListItem extends ZchatBasicListItem{
    pictureLink : string;
    correspondentName: string;
    correspondentAbout:string;
}