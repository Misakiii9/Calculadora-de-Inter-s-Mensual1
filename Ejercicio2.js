function calcularInteres() {
    
    let capital = parseFloat(document.getElementById('capital').value);
    
    
    let tasaInteres = 0.02; // 2% mensual
  
    // Validar si el capital ingresado es un número positivo
    if (isNaN(capital) || capital <= 0) {
      document.getElementById('resultado').innerHTML = 'Por favor ingresa un valor válido para el capital.';
      return;
    }
  
    
    let interesGanado = capital * tasaInteres;
    let total = capital + interesGanado;
  
    
    document.getElementById('resultado').innerHTML = `
      <p>Capital inicial: $${capital.toFixed(2)}</p>
      <p>Interés ganado en un mes: $${interesGanado.toFixed(2)}</p>
      <p>Total después de un mes: $${total.toFixed(2)}</p>
    `;
  }