 import React, { useEffect } from 'react';
import './css/variables.css';
import './css/themes.css';
import './css/styles.css';

import './js/utils.js';
import './js/display.js';
import ThemeSwitcher from './js/theme-switcher.js';
import Calculator from './js/calculator.js';

export default function App() {
  useEffect(() => {
    // Executa apenas após o DOM estar disponível
    new Calculator();
    new ThemeSwitcher();
  }, []);

  return (
    <div className="container">
      <div className="calculator">
        <div className="calculator-header">
          <h1>Calculadora</h1>
          <button id="theme-toggle" className="theme-toggle" aria-label="Alternar tema">
            <span className="material-icons light-icon">light_mode</span>
            <span className="material-icons dark-icon">dark_mode</span>
          </button>
        </div>

        <div className="calculator-history">
          <div id="history-display" className="history-display"></div>
        </div>

        <div className="calculator-display">
          <div id="display" className="display">0</div>
        </div>

        <div className="calculator-buttons">
          <button className="btn btn-clear" data-action="clear">C</button>
          <button className="btn btn-operation" data-action="backspace">
            <span className="material-icons">backspace</span>
          </button>
          <button className="btn btn-operation" data-action="percent">%</button>
          <button className="btn btn-operation" data-operation="/">÷</button>

          <button className="btn" data-number="7">7</button>
          <button className="btn" data-number="8">8</button>
          <button className="btn" data-number="9">9</button>
          <button className="btn btn-operation" data-operation="*">×</button>

          <button className="btn" data-number="4">4</button>
          <button className="btn" data-number="5">5</button>
          <button className="btn" data-number="6">6</button>
          <button className="btn btn-operation" data-operation="-">−</button>

          <button className="btn" data-number="1">1</button>
          <button className="btn" data-number="2">2</button>
          <button className="btn" data-number="3">3</button>
          <button className="btn btn-operation" data-operation="+">+</button>

          <button className="btn btn-operation" data-action="sqrt">√</button>
          <button className="btn" data-number="0">0</button>
          <button className="btn" data-number=".">.</button>
          <button className="btn btn-equals" data-action="calculate">=</button>
        </div>
      </div>
    </div>
  );
}
 

