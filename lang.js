// Sayfadaki metni değiştir
function setLanguage(lang) {
    // Tüm çeviri içeren elemanları al
        const elements = document.querySelectorAll("[data-tr]");

            elements.forEach(el => {
                    const tr = el.getAttribute("data-tr");
                            const es = el.getAttribute("data-es");

                                    if (lang === "tr") {
                                                el.innerText = tr;
                                                        } else if (lang === "es") {
                                                                    el.innerText = es;
                                                                            }
                                                                                });

                                                                                    // Seçilen dili tarayıcıya kaydet
                                                                                        localStorage.setItem("lang", lang);
                                                                                        }

                                                                                        // Sayfa açılınca kaydedilen dili yükle
                                                                                        document.addEventListener("DOMContentLoaded", () => {
                                                                                            const savedLang = localStorage.getItem("lang") || "tr";
                                                                                                setLanguage(savedLang);
                                                                                                });