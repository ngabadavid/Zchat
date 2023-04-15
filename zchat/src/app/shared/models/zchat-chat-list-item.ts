import { ZchatBasicListItem } from "./zchat-basic-list-item";

export interface ZchatChatListItem extends ZchatBasicListItem{
    correspondentName: string;
    messageSummary: string;
    messageDrection: ZchatMessageDirection;
    messageStatus: ZchatMessageStatus;
    messageTime: string;
    isMarkedAsUnread: boolean;
    isPinned: boolean;
    isMuted: boolean;
    isArchived: boolean;
    isInGroupChat: boolean;
    isMemberOfGroupchat?: boolean;
}

export enum ZchatMessageStatus{
    PENDING = 'pending',
    FAILED = 'failed',
    SENT = 'sent',
    DELIVERED = 'delivered',
    RECEIVED = 'received'
}


export enum ZchatMessageDirection {
  SENT = 'sent',
  RECEIVED = 'received',
  OUTGOING = "OUTGOING"
}