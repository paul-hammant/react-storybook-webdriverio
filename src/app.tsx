import * as React from 'react';
import * as ReactDOM from 'react-dom';

type Props = {
  message: string,
}
type State = {
  count: number,
}
class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
        <div>
            <div>{this.props.message} {this.state.count}</div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    );
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }
}

ReactDOM.render(
  <App message="Value: " />,
  document.getElementById('root')
);

export default App;