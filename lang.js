function setLang(lang) {
        document.querySelectorAll("[data-" + lang + "]").forEach(el => {
                el.innerText = el.getAttribute("data-" + lang);
                    });
                    }

                    // WhatsApp numarasını daha sonra ekleyeceğiz
                    document.getElementById("wp").href = "https://wa.me/XXXXXXXXXX";
}