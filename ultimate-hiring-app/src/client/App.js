import React, {Component} from 'react';
import Menu from './Components/Menu';


class App extends Component {
    render() {
        return (
          <div class = "view">
            <header>
              <Menu />
            </header>
          </div>
        );
    }
}

export default App;
