interface Notification {
  id: number;
  title: string;
  description: string;
  content?: string;
  seen: boolean;
  sendAt: string;
}

export { Notification };
