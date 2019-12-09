export class Store {

  private state: { [key: string]: any };
  private reducers: { [key: string]: any };
  private subscribers: Function[];

  constructor(reducres: {}, initialState = {}) {
    this.state = initialState;
    this.reducers = reducres;
    this.subscribers = [];
  }

  get value() {
    return this.state;
  }

  dispatch(action) {
    this.state.todos = this.reducers.todos(this.state.todos, action);
    this.notify();
  }

  subscribe(observer) {
    this.subscribers = [...this.subscribers, observer];
    this.notify();
  }

  private notify() {
    this.subscribers.forEach(observer => observer(this.value));
  }
}
