var randomNumber = Math.floor(Math.random() * 101); // 0-100 arasında rastgele sayı
var attempts = 1; // Tahmin sayısını takip eden sayaç
var maxAttempts = 5; // Maksimum tahmin hakkı

document.getElementById("btn").addEventListener('click', function () {
    var userGuess = document.getElementById("num").value;
    var result = document.getElementById("result");
    var again=document.getElementById("again");
    var right=document.getElementById("right");

    // Eğer tahmin hakkı bittiyse hemen "Tahmin hakkı bitti" mesajı ver ve işlemi durdur
    if (attempts == maxAttempts) {
        result.textContent = "Tahmin hakkınız bitti! Sayı: " + randomNumber;
        result.style.color = "red";
        again.textContent="Tekrar oynamak istiyorsanız sayfayı yenileyiniz";
        again.style.color="rgb(98, 19, 108)";
        right.textContent="Kalan hakkınız: "+(maxAttempts-attempts);
        right.style.color="rgb(132, 97, 7)";
        return;
    }

    if (userGuess === "") {
        result.textContent = "Lütfen bir sayı giriniz.";
        return;
    }

    if (attempts < maxAttempts) {

        if (userGuess == randomNumber) {
            result.textContent = "Tebrikler! Doğru tahmin ettiniz :)";
            result.style.color = "green";
            again.textContent="Tekrar oynamak istiyorsanız sayfayı yenileyiniz";
            again.style.color="rgb(98, 19, 108)";
            return;
        } 
        else if (userGuess > randomNumber) {
            result.textContent = "Daha düşük bir sayı tahmin ediniz.";
            result.style.color = "orange";
            right.textContent="Kalan hakkınız: "+(maxAttempts-attempts);
            right.style.color="rgb(132, 97, 7)";
        } 
        else {
            result.textContent = "Daha yüksek bir sayı tahmin ediniz.";
            result.style.color = "orange";
            right.textContent="Kalan hakkınız: "+(maxAttempts-attempts);
            right.style.color="rgb(132, 97, 7)";
        }

        attempts++; // Tahmin sayısını artır
    }

    // Input'u temizle
    document.getElementById("num").value = "";
});
