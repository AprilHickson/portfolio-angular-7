import { Component, OnInit, Input } from '@angular/core';
import FadeBuffer from './fadeBuffer';

@Component({
  selector: 'app-word-scrambler',
  templateUrl: './word-scrambler.component.html',
  styleUrls: ['./word-scrambler.component.css']
})
export class WordScramblerComponent implements OnInit {
  @Input() messages: string[];
  @Input() shouldRepeat: boolean;

  message = '';
  messageInt = 0;
  currentLength = 0;
  codeCharacters: string[] = ['&', '#', '*', '+', '%', '?', '£', '@', '§', '$'];
  fadeBuffer: FadeBuffer[] = [];

  constructor() {
  }

  ngOnInit() {
    setTimeout(this.animateIn.bind(this), 100);
  }

  animateIn(): void {
    if (this.currentLength < this.messages[this.messageInt].length) {
      this.currentLength = this.currentLength + 2;
      if (this.currentLength > this.messages[this.messageInt].length) {
        this.currentLength = this.messages[this.messageInt].length;
      }

      this.message = this.makeRandomString(this.currentLength);
      setTimeout(this.animateIn.bind(this), 20);
    } else {
      setTimeout(this.animateFadeBuffer.bind(this), 20);
    }
  }

  animateFadeBuffer(): void {
    if (this.fadeBuffer.length === 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < this.messages[this.messageInt].length; index++) {
        this.fadeBuffer.push(new FadeBuffer(this.messages[this.messageInt], index));
      }
    }

    let doCycles = false;
    let outMessage = '';

    for (const fader of this.fadeBuffer) {
      if (fader.order > 0) {
        doCycles = true;
        fader.order--;
        outMessage += this.getRandomCharacter();
      } else {
        outMessage += fader.character;
      }
    }

    this.message = outMessage;

    if (doCycles === true) {
      setTimeout(this.animateFadeBuffer.bind(this), 50);
    } else {
      setTimeout(this.cycleWord.bind(this), 3000);
    }
  }

  cycleWord(): void {
    let isFinished = false;
    this.messageInt = this.messageInt + 1;
    if (this.messageInt >= this.messages.length) {
      if (this.shouldRepeat) {
        this.messageInt = 0;
      } else {
        this.messageInt = this.messages.length;
        isFinished = true;
      }
    }

    if (!isFinished) {
      this.currentLength = 0;
      this.fadeBuffer = [];
      this.message = '';
      setTimeout(this.animateIn.bind(this), 200);
    }
  }

  makeRandomString(length: number): string {
    let outMessage = '';

    for (let index = 0; index < length; index++) {
      outMessage = outMessage + this.getRandomCharacter();
    }

    return outMessage;
  }

  getRandomCharacter(): string {
    return this.codeCharacters[Math.floor(Math.random() * this.codeCharacters.length)];
  }
}
