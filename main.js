function sumDivisiblesBy3And5() {
  // Reset fields
  document.getElementById('error').innerText = '';
  document.getElementById('total').innerText = '';

  var total = 0;
  var value = document.getElementById('divisible').value;
  
  if (!value) {
    document.getElementById('error').innerText = "Insira um valor";
    return;
  }

  if (value < 0) {
    document.getElementById('error').innerText = "O valor deve ser positivo";
    return;
  }

  for (i = 1; i < value; i++) {
    if ((i % 3) === 0) {
      total = total + i;
    } else if ((i % 5) === 0) {
      total = total + i;
    } 
  }
  document.getElementById('total').innerText = total;
}