import { EventEmitter } from 'events';

export class GlobalEventEmitter {

  private static eventEmitter = new EventEmitter();
	
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static emitEvent(eventName: string, data?: any) {
    if (this.eventEmitter == null) {
      this.eventEmitter = new EventEmitter();
    }
    this.eventEmitter.emit(eventName, data);
  }
  public static getListener() {

    if (this.eventEmitter == null) {
      this.eventEmitter = new EventEmitter();
    }
    return this.eventEmitter;
  }

}
