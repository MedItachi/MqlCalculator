function renderCalulator() {
  return `
      <div class="container">
         <div class="calculator">
            <div class="calculator_display">
            <div class="operation" value="empty" id="operation">0</div>
            <div class="result" id="result">0</div>
            </div>
            <div class="calculator_keys">
             <span class="key key_operator col-c" onCLick="clear_screen()" >C</span>
             <span class="key key_operator " onCLick="backspace()" id="">⌫</span>
             <span  class="key key_operator" onCLick="addtoScreen('/')" id="">/</span>
             ${renderNumber(7)}
             ${renderNumber(8)}
              ${renderNumber(9)}
             <span  class="key key_operator" onCLick="addtoScreen('*')" id="">X</span>
              ${renderNumber(4)}
              ${renderNumber(5)}
              ${renderNumber(6)}
             <span  class="key key_operator" onCLick="addtoScreen('-')" id="">-</span>
              ${renderNumber(1)}
              ${renderNumber(2)}
              ${renderNumber(3)}
             <span  class="key key_operator" onCLick="addtoScreen('+')" id="">+</span>
             ${renderNumber(0)}
             <span  class="key key_operator" onCLick="addtoScreen('.')" id="">.</span>
             <span  class="key key_operator col-equal" onCLick="calc()">=</span>
             </div>
          </div>
        </div>
      `;
}

function renderNumber(num) {
  return `<span class="key key_number" onCLick="addtoScreen(${num})">${num}</span>`;
}

window.onload = () => {
  document.getElementById("root").innerHTML = renderCalulator();
};
