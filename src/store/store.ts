export class Store {
  private state: {[key: string]: any};
  private reducers: {[key: string]: Function};
  private subscribers: Function[];

  constructor(reducers = {}, initialState = {}) {
    this.subscribers = [];
    this.reducers = reducers;
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  dispatch(action: any) {
    this.state.todos =  this.reducers.todos(this.state.todos, action);
    this.notify();
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();
  }

  private notify() {
    this.subscribers.forEach(fn => fn(this.value));
  }
}
