const btn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");

btn.addEventListener("click", () => {
    const tc = document.getElementById("tc").value.trim();
    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!tc || !fullname || !phone) {
        alert("Lütfen tüm alanları doldurunuz.");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sorgulanıyor...';
    loading.style.display = "block";

    sessionStorage.setItem("patient_tc", tc);
    sessionStorage.setItem("patient_name", fullname);
    sessionStorage.setItem("patient_phone", phone);

    setTimeout(() => {
        window.location.href = "sonuc.html";
    }, 2000);
});
