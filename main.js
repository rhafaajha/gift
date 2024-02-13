onload = () => {
        document.body.classList.remove("container");
};

function getValue() {
        // Mendapatkan elemen inputan berdasarkan id
        var inputElement = document.getElementById("yourName");

        // Mengambil nilai dari inputan
        var value = inputElement.value;

        // Menampilkan nilai yang telah diambil
        window.location.href = "flower.html";

        // Mengubah teks di dalam elemen dengan id
        document.getElementById("inputText").innerHTML = "Hai " + value + ". Ini untukmu ya sayang!";
}
