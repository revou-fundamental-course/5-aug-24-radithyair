function hitungBMI() {
    const genderMale = document.getElementById('gender-male').checked;
    const genderFemale = document.getElementById('gender-female').checked;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to m
    const weight = parseFloat(document.getElementById('weight').value);

    if ((genderMale || genderFemale) && age > 0 && weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const hasilBMI = bmi.toFixed(1);

        let kategoriBMI, saran;

        if (bmi < 18.5) {
            kategoriBMI = "Kekurangan Berat Badan";
            desc = "BMI Anda kurang dari 18.5. Anda berada dalam kategori kekurangan berat badan. Pertimbangkan untuk meningkatkan asupan nutrisi dan konsultasikan dengan dokter atau ahli gizi.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            kategoriBMI = "Normal (ideal)";
            desc = "BMI Anda antara 18.5 - 24.9. Berat badan Anda berada dalam kategori normal. Pertahankan pola makan sehat dan olahraga teratur.";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            kategoriBMI = "Kelebihan Berat Badan";
            desc = "BMI Anda antara 25.0 - 29.9. Anda berada dalam kategori kelebihan berat badan. Pertimbangkan untuk meningkatkan aktivitas fisik dan mengatur pola makan.";
        } else {
            kategoriBMI = "Kegemukan (obesitas)";
            desc = "BMI Anda di atas 30.0. Anda berada dalam kategori kegemukan. Disarankan untuk berkonsultasi dengan ahli gizi atau dokter.";
        }

        document.getElementById('bmi-result').textContent = hasilBMI;
        document.getElementById('bmi-category').textContent = kategoriBMI;
        document.getElementById('desc').textContent = desc;
        document.getElementById('result').style.display = 'block';
    } else {
        alert("Mohon lengkapi semua data!");
    }
}

function resetForm() {
    document.getElementById('bmi-form').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('bmi-result').textContent = '';
    document.getElementById('bmi-category').textContent = '';
    document.getElementById('desc').textContent = '';
}