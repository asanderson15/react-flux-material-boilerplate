import React from '../lib/react/react-with-addons';

class App {

  constructor(options) {
    this.state = options.state;
  }

  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

React.render(<App />, document.getElementById("react"));
