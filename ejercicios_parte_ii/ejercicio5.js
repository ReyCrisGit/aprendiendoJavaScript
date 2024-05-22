class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  static transferir(cuentaOrigen, cuentaDestino, monto) {
    if (cuentaOrigen.saldo >= monto) {
      cuentaOrigen.saldo -= monto;
      cuentaDestino.saldo += monto;
      return true;
    } else {
      return false;
    }
  }
  get getSaldo() {
    return this.saldo;
  }
  set setSaldo(saldo) {
    this.saldo = saldo;
  }
}

const cuenta1 = new CuentaBancaria("Barrios", 1000);
const cuenta2 = new CuentaBancaria("Peña", 1000);

console.log(CuentaBancaria.transferir(cuenta1, cuenta2, 390));
console.log(cuenta1.saldo);
console.log(cuenta2.saldo);
