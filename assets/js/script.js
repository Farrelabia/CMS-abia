// marquee
function startMarquee() {
  let marquee = document.getElementById("marqueeText"); // Elemen teks yang akan berjalan
  let containerWidth =
    document.getElementById("marqueeContainer").offsetWidth; // Lebar container
  let textWidth = marquee.offsetWidth; // Lebar teks
  let startPos = containerWidth; // Posisi awal teks (kanan container)
  let endPos = -textWidth; // Posisi akhir teks (ketika teks sudah tidak terlihat)

  // Fungsi untuk menggerakkan teks
  function marqueeMove() {
    if (startPos <= endPos) {
      // Jika teks sudah tidak terlihat
      startPos = containerWidth; // Kembalikan teks ke posisi awal
    } else {
      startPos--; // Bergerak ke kiri
    }
    marquee.style.left = startPos + "px"; // Update posisi teks
  }

  setInterval(marqueeMove, 20); // Atur interval pemanggilan fungsi marqueeMove
}

startMarquee(); // Memulai animasi marquee

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const burger = document.querySelector(".menu-button");
  const x = document.querySelector(".btn-x");
  sidebar.style.display = "flex";
  burger.classList.add("d-none");
  x.addEventListener("click", () => burger.classList.remove("d-none"));
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

window.addEventListener('resize', function() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var burgerButton = document.querySelector('.btn-x');
  var sidebar = document.querySelector('.sidebar');
  if (width > 768) {
    sidebar.style.display = 'none';
    burgerButton.style.display = 'none';
  } else {
    burgerButton.style.display = 'block';
    sidebar.style.display = 'block';
  }
});

// Guru
$(".slider-guru").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Galeri
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});


