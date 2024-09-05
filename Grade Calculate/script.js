document.addEventListener("DOMContentLoaded", function() {
    var vize = document.getElementById("vize");
    var final = document.getElementById("final");
    var btnCalculate = document.getElementById("calculate");
    var average = document.getElementById("average");
    var grade = document.getElementById("grade");

    btnCalculate.addEventListener("click", function() {
        // Inputlardan değerleri al
        var vizeValue = parseFloat(vize.value);
        var finalValue = parseFloat(final.value);
        
        // Vize ve final değerlerinin geçerli olup olmadığını kontrol et
        if (isNaN(vizeValue) || isNaN(finalValue) || (vizeValue<0) || (finalValue<0)) {
            average.textContent = "Lütfen geçerli sayılar girin.";
            grade.textContent = "";
            return;
        }

        // Ortalama hesapla
        var vizeWeight = 0.3;
        var finalWeight = 0.7;
        var averageValue = (vizeValue * vizeWeight) + (finalValue * finalWeight);

        // Ortalama ve harf notunu belirle
        var letterGrade;
        if (averageValue >= 90) {
            letterGrade = "AA";
        } else if (averageValue >= 85) {
            letterGrade = "BA";
        } else if (averageValue >= 80) {
            letterGrade = "BB";
        } else if (averageValue >= 75) {
            letterGrade = "CB";
        } else if (averageValue >= 70) {
            letterGrade = "CC";
        } else if (averageValue >= 65) {
            letterGrade = "DC";
        } else if (averageValue >= 60) {
            letterGrade = "DD";
        } else {
            letterGrade = "FF";
        }

        // Sonuçları ekrana yazdır
        average.textContent = "Ortalama: " + averageValue.toFixed(2);
        grade.textContent = "Harf Notu: " + letterGrade;
    });
});
