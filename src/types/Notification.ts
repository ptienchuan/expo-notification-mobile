interface NotificationSchema {
  id: number;
  title: string;
  description: string;
  content?: string;
  seen: boolean;
  sendAt: string;
}

export { NotificationSchema };
