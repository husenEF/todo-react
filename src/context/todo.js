import React, { createContext, PureComponent } from "react";

let TodoType;

const TodoContext = (TodoType = createContext());
const { Provider, Consumer } = TodoContext;

const TodoConsumer = Consumer;

class TodoProvider extends PureComponent {
  state = {
    list: [],
  };

  componentDidMount() {
    this.getTodo();
  }

  getTodo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      this.setState({ list: data });
    } catch {
    } finally {
      console.log("finish load todo");
    }
  };

  remove = (id) => {
    const list = this.state.list;
    const filter = list.filter((e) => e.id !== id);
    // console.log({ filter });
    this.setState({ list: filter });
  };

  finish = (id) => {
    let list = this.state.list;
    const filterIndex = list.findIndex((e) => e.id === id);
    list[filterIndex].completed = true;
    this.setState({ list });
    console.log(`finish item ${id}`);
  };

  render() {
    const { children } = this.props;
    const value = {
      ...this.state,
      removeList: this.remove,
      finishList: this.finish,
    };
    return <Provider value={value}>{children}</Provider>;
  }
}

export { TodoProvider, TodoConsumer, TodoType, TodoContext };

export default {};
