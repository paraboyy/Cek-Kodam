$(document).ready(function() {
    $('#cheKodamForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Get the value of the input field
        var nama = $('#nama').val();

        // Fetch Kodam list from JSON (you can also define it here if needed)
        var kodamList = [
            "Naga Tunduk",
            "Kucing Goyang",
            "Sandal Kejepit",
            "Rawa Rontek",
            "Kosong, coba lagi tahun depan",
            "Raja Iblis",
            "Kera Putih",
            "Kodam Para Raja",
            "Nyi brolong",
            "Anak Tuyul",
            "Barong Santun",
            "Sang Petapa Genit",
            "Sepeda Ontel Pak Somat",
            "Panca Sona"
        ];

        // Simulate fetching Kodam (here we just select randomly from the list)
        var randomIndex = Math.floor(Math.random() * kodamList.length);
        var selectedKodam = kodamList[randomIndex];

        // Display the result
        var resultHtml = '<div class="alert alert-success">' + nama + ' Kodam anda ' + selectedKodam + '</div>';
        $('#hasilKodam').html(resultHtml);

        // Save the nama and kodam to localStorage
        var dataToSave = 'Nama: ' + nama + ', Kodam: ' + selectedKodam;
        saveToLocalStorage(dataToSave);
    });

    // Function to save data to localStorage
    function saveToLocalStorage(data) {
        // Check if localStorage is supported
        if (typeof(Storage) !== "undefined") {
            // Get existing data or initialize an empty array
            var savedData = localStorage.getItem('savedData') ? JSON.parse(localStorage.getItem('savedData')) : [];

            // Push new data to the array
            savedData.push(data);

            // Save updated data back to localStorage
            localStorage.setItem('savedData', JSON.stringify(savedData));

            console.log('Data tersimpan di localStorage.');
        } else {
            console.log('LocalStorage tidak didukung pada browser ini.');
        }
    }
});
