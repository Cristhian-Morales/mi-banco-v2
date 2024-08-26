let datosJson;
let xhr = new XMLHttpRequest();
xhr.open('GET',"banco.json",true);
xhr.responseType = "json";
xhr.onload  = function(){
    if(xhr.status === 200){
        datosJson = xhr.response;
        console.log(datosJson)
        let txtNombre = document.getElementById('banco');
        let txtSucursal = document.getElementById('sucursal');
        let txtTitular = document.getElementById('titular');
        let txtNumeroCuenta= document.getElementById('nro_cuenta');
        let txtSaldo1= document.getElementById('saldo1');
        let txtSaldo1txt = document.getElementById('saldo1txt');
        let txtSaldo2= document.getElementById('saldo2');
        let txtSaldo2txt = document.getElementById('saldo2txt');
        let txtestado = document.getElementById('estado');
        let txtnro_banco = document.getElementById('nro_banco');
        txtNombre.textContent = datosJson.banco;
        txtSucursal.textContent = datosJson.sucursal;
        txtTitular.textContent = datosJson.titular;
        txtNumeroCuenta.textContent = datosJson.nro_cuenta;
        txtSaldo1.textContent = datosJson.saldo[0].monto;
        txtSaldo1txt.textContent = datosJson.saldo[0].moneda;
        txtSaldo2.textContent = datosJson.saldo[1].monto;
        txtSaldo2txt.textContent = datosJson.saldo[1].moneda;
        txtestado.textContent = datosJson.abierto;
        txtnro_banco.textContent = datosJson.nro_banco;
    }else{
        alert('Estas robando');
    }
}
xhr.send();
