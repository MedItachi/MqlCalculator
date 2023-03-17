function renderCalulator() {
  return `
    <div class="container">
       <div class="calculator">
          <div class="calculator_display">
          <div class="operation" id="operation">0</div>
          <div class="result" id="result">0</div>
          </div>
          <div class="calculator_keys">
           <span class="key key_operator" id="clear">C</span>
           <span class="key key_operator" id="clear">(</span>
           <span class="key key_operator" id="clear">)</span>
           <span class="key key_operator" id="backspace">⌫</span>
           <span class="key key_operator" onCLick="readOperator('/')" id="">/</span>
           <span class="key key_operator" onCLick="readOperator('*')" id="">X</span>
           <span class="key key_operator" onCLick="readOperator('-')" id="">-</span>
           <span class="key key_operator" onCLick="readOperator('+')" id="">+</span>
           <span class="key key_operator" onCLick="calc()" id="">=</span>
           <span class="key key_operator"  id="">.</span>
           ${renderNumbers()}
           </div>
        </div>
      </div>
    `;
}

function renderNumbers() {
  let s = "";

  for (let i = 0; i < 10; i++) {
    s += `<span class="key key_number" onCLick="addNum(${i})">${i}</span>`;
  }
  return s;
}

window.onload = () => {
  document.getElementById("root").innerHTML = renderCalulator();
};
