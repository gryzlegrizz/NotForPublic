function cekNama() {
    const namaInput = document.getElementById("namaInput").value.toLowerCase();
    const konten = document.getElementById("konten");
    const ucapanTampil = document.getElementById("ucapanTampil");

    if (namaInput === "dewi" || namaInput === "dewi tania") {
        konten.style.display = "block";
        ucapanTampil.innerHTML = "";
    } else {
        alert("Maaf, Anda tidak diizinkan masuk.");
        konten.style.display = "none";
    }
}

const audioSedih = document.getElementById("audioSedih");

function tampilkanUcapan() {
    const ucapan = "Selamat ulang tahun yang ke-19, Dewi Tania! Di hari spesial ini, aku ingin memberikan ucapan selamat dan doa penuh cinta untukmu. Semoga setiap momen yang kamu lewati dipenuhi dengan sukacita dan kebahagiaan yang tak terlupakan.<hr>" +
        "Usia 19 tahun adalah masa penting dalam perjalanan hidupmu. Aku percaya kamu memiliki potensi luar biasa untuk mencapai hal-hal besar dan menggapai impianmu. Jangan pernah ragu untuk bermimpi besar dan mengejar apa yang membuat hatimu berbunga.<hr>" +
        "Di hari spesial ini, aku ingin mengingatkanmu bahwa kamu adalah cahaya yang terang di dalam kegelapan. Jadilah pribadi yang baik hati, rendah hati, dan selalu berbagi kasih kepada sesama. Dengan sifat-sifat mulia ini, kamu akan menjadi inspirasi bagi banyak orang di sekitarmu.<hr>" +
        "Selama perjalanan hidupmu, pasti ada tantangan dan hambatan yang harus dihadapi. Aku yakin kamu memiliki keberanian dan keteguhan hati untuk menghadapinya. Tetaplah bersikap positif dan fokus pada tujuanmu, karena kamu memiliki kekuatan untuk mengubah dunia.<hr>" +
        "Di tahun ini, mari kita rayakan momen-momen berharga bersama dan berbagi tawa serta senyuman. Aku berharap kebahagiaan ini membawa kamu ke puncak kesuksesan. Jangan lupa untuk selalu bersyukur atas setiap hal baik dan buruk, karena semua itu membentuk dirimu menjadi pribadi yang luar biasa.<hr>" +
        "Selamat ulang tahun, Dewi Tania! Semoga di usia 19 tahun ini, kamu terus tumbuh dan berkembang menjadi sosok yang lebih baik. Tetap jaga semangatmu, dan ingatlah bahwa kamu memiliki dunia di depanmu yang siap kamu eksplorasi.<hr>" +
        "Ketahuilah bahwa aku selalu mendukungmu dan berada di sampingmu. Bersama-sama, kita akan melewati setiap rintangan dan mencapai impian kita. Kamu adalah sumber inspirasiku, dan aku berharap kamu terus meraih kesuksesan dalam segala hal yang kamu lakukan.<hr>" +
        "Selamat ulang tahun, Dewi Tania! Jadikan tahun ini sebagai babak baru dalam perjalananmu dan nikmati setiap momen dengan sepenuh hati. Ayo kita sambut tahun ini dengan semangat baru, cinta tanpa batas, dan kebahagiaan yang mengalir seperti sungai.<hr>" +
        "Tetaplah menjadi dirimu yang unik dan spesial, karena dunia ini membutuhkan keberadaanmu. Teruslah mengejar impianmu dan berjuang untuk menjadi pribadi yang lebih baik setiap hari. Selamat ulang tahun, semoga kamu selalu diberkahi dengan kesehatan, kebahagiaan, dan kesuksesan!<hr>" +
        "Dengan cinta dan doa yang tulus<hr>";

    const ucapanTampil = document.getElementById("ucapanTampil");
    ucapanTampil.innerHTML = ucapan;
    ucapanTampil.classList.add("ucapan-animasi");
}

function tampilkanUcapanMaaf() {
    const ucapanMaaf = "Aku minta maaf sampai saat ini masih membuatmu kecewa dan menangis, dan juga belum bisa memberi yang terbaik. Aku sadar bahwa masih banyak hal yang harus aku perbaiki dalam diriku, dan aku berjanji untuk menjadi lebih baik untukmu.<hr>" +
        "Aku minta maaf juga karena saat ulang tahun aku belum bisa hadir dan memberikan sesuatu yang wah. Namun, hari ini adalah kesempatan baru untuk memperbaiki kesalahan dan memberikan kebahagiaan yang sebanyak-banyaknya untukmu.<hr>" +
        "Di usia yang baru ini, aku berharap kita bisa saling mendukung dan tumbuh bersama. Aku akan berusaha menjadi seseorang yang lebih baik untukmu dan selalu ada di sampingmu dalam suka maupun duka.<hr>" +
        "Semoga ucapan maaf ini dapat membawa kedamaian dalam hatimu. Terima kasih karena tetap bersamaku meskipun dengan segala kekuranganku. Aku berjanji untuk selalu berusaha menjadi pribadi yang pantas untukmu.<hr>" +
        "Selamat ulang tahun, Dewi Tania! Semoga usia yang ke-19 ini membawa kebahagiaan, cinta, dan impian yang tak terbatas. Aku akan selalu mencintaimu dengan sepenuh hati. Maafkan aku dan mari bersama-sama membangun masa depan yang lebih indah. Aku mencintaimu.<hr>"

    const ucapanTampil = document.getElementById("ucapanTampil");
    ucapanTampil.innerHTML = ucapanMaaf;
    ucapanTampil.classList.add("ucapan-animasi");

    // Memutar musik sedih
    audioSedih.play();
}