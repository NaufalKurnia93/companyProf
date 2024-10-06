document.addEventListener('DOMContentLoaded', function() {
    const maxLength = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = maxLength;

    document.getElementById('inputNama').addEventListener('input',function() {
        const hitungkarakter = document.getElementById('inputNama').value.length;
        const sisaKarakter = document.getElementById('inputNama').maxLength;

        const updateKarakter = sisaKarakter - hitungkarakter;
        document.getElementById('sisaKarakter').innerText = updateKarakter.toString();

        if (updateKarakter === 0 ) {
           const maq = document.getElementById('sisaKarakter').innerText = "batas karakter sudah melampaui batas"
        } else if (updateKarakter <= 5 ) {
            document.getElementById('notifikasiSisaKarakter').style.color = 'red'
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = 'black'
        }
        })
})