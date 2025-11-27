function setLang(lang) {
    document.querySelectorAll("[data-" + lang + "]").forEach(el => {
        el.innerText = el.getAttribute("data-" + lang);
    });
}

// WhatsApp numarasını sonra değiştir
document.getElementById("wp").href = "https://wa.me/XXXXXXXXXX";