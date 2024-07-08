export const variants = ["default"] as const;

export interface IRelation {
  id: string;
  className?: string;
  variant: (typeof variants)[number];
  orderIndex: number;
  channelId: string;
  messageId: string;
  createdAt: string;
}
