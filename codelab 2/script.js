function hitungJumlah() {
    var bil1 = document.getElementById("bilangan1").value;
    var bil2 = document.getElementById("bilangan2").value;
    var hasil = parseFloat(bil1) + parseFloat(bil2);
    if (!isNaN(hasil)) {
        document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
    } else {
        document.getElementById("hasil").innerHTML = "Hasil: Error, input tidak valid!";
    }
}

function reset() {
    document.getElementById("bilangan1").value = '';
    document.getElementById("bilangan2").value = '';
    document.getElementById("hasil").innerHTML = "Hasil: 0";
}
