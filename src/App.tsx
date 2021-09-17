import React from 'react';
import logo from './logo.svg';
import './App.css';
import { APP_TITLE } from './config.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{APP_TITLE}</span>
      </header>
      <div className="Calculator">
        <table width="500px">
          <tbody>
            <tr>
              <td colSpan={0}>
                <div className="Lcd-body">0123456789.00</div>
              </td>
            </tr>
            <tr className="Keypad">
              <td>
                {/* keypad 1 */ }
              </td>
              <td>
                {/* keypad 2 */ }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
