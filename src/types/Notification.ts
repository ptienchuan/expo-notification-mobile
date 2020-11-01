interface Notification {
  id: string;
  title: string;
  description: string;
  content?: string;
  seen: boolean;
  sendAt: number;
  sendAtString?: string;
}

export { Notification };
