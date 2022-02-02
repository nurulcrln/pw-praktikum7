const listkota = {
    'DKI Jakarta' : ['Jakarta Barat','Jakarta Pusat','Jakarta Selatan','Jakarta Timur','Jakarta Utara'],
    'Jawa Barat' : ['Bandung','Bogor','Depok','Bekasi','Cimahi'],
    'Kepulauan Riau' : ['Bintan','Karimun','Kepulauan Anambas','Lingga','Natuna', 'Batam', 'Tanjung Pinang'],    
}
function update(){
    var kota = document.getElementById("select_kota");
    var provinsi = document.getElementById("select_prov").value;
    
    if (provinsi == "DKI Jakarta"){
        kota.innerHTML = ''
        for (let i =0; i < listkota['DKI Jakarta'].length; i++){
            kota.innerHTML += `<option value="${listkota['DKI Jakarta'][i]}">${listkota['DKI Jakarta'][i]}</option>`
        }
    }
    else if (provinsi == "Jawa Barat"){
        kota.innerHTML = ''
        for (let i =0; i < listkota['Jawa Barat'].length; i++){
            kota.innerHTML += `<option value="${listkota['Jawa Barat'][i]}">${listkota['Jawa Barat'][i]}</option>`
        }
    }
    else if (provinsi == "Kepulauan Riau"){
        kota.innerHTML = ''
        for (let i =0; i < listkota['Kepulauan Riau'].length; i++){
            kota.innerHTML += `<option value="${listkota['Kepulauan Riau'][i]}">${listkota['Kepulauan Riau'][i]}</option>`
        }
    }
}

function showKota(){
    var provinsi = document.getElementById("select_prov");
    var namaprovinsi = provinsi.options[provinsi.selectedIndex].text;
    var kota = document.getElementById("select_kota").value;
    var result = document.getElementById("result");
    result.innerText = `Pada provinsi ${namaprovinsi} terdapat kota ${kota}`
}

function toggleTheme(){
    const mode = document.body;
    mode.classList.toggle("dark");
}