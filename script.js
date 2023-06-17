function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.textContent = "Lütfen tüm alanları doldurun.";
        return false;
    }
  // Menü Bağlantılarına Kaydırma
document.addEventListener("DOMContentLoaded", function() {
  var menuLinks = document.querySelectorAll("nav a");
  
  menuLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
  

    // Diğer form doğrulama işlemlerini buraya ekleyebilirsiniz.

    return true;
}

function validateReservationForm() {
    var name = document.getElementById("reservation-name").value;
    var lastname = document.getElementById("reservation-lastname").value;
    var email = document.getElementById("reservation-email").value;
    var phone = document.getElementById("reservation-phone").value;
    var date = document.getElementById("reservation-date").value;
    var time = document.getElementById("reservation-time").value;
    var error = document.getElementById("reservation-error");

    if (name === "" || lastname === "" || email === "" || phone === "" || date === "" || time === "") {
        error.textContent = "Lütfen tüm alanları doldurun.";
        return false;
    }

    // Diğer form doğrulama işlemlerini buraya ekleyebilirsiniz.

    return true;
}
