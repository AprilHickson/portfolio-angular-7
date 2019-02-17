export default class FadeBuffer {
  order: number;
  character: string;

  constructor(message: string, index: number) {
    this.order = Math.floor(Math.random() * 12) + 1;
    this.character = message.charAt(index);
  }
}
