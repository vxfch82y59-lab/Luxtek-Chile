const translations = {
        tr: {
                title: "LuxTek M10 TWS",
                        subtitle: "En yeni nesil M10 TWS kulaklık şimdi Şili’de!",
                                f1: "HD Ses Kalitesi",
                                        f2: "Çift Mikrofon",
                                                f3: "Suya Dayanıklı",
                                                        f4: "Uzun Pil Ömrü",
                                                                footer: "© 2025 LuxTek Chile - Tüm Hakları Saklıdır"
                                                                    },

                                                                        es: {
                                                                                title: "LuxTek M10 TWS",
                                                                                        subtitle: "Los nuevos auriculares M10 TWS ya están en Chile!",
                                                                                                f1: "Calidad de sonido HD",
                                                                                                        f2: "Doble micrófono",
                                                                                                                f3: "Resistente al agua",
                                                                                                                        f4: "Larga duración de batería",
                                                                                                                                footer: "© 2025 LuxTek Chile - Todos los Derechos Reservados"
                                                                                                                                    }
                                                                                                                                    };

                                                                                                                                    function setLanguage(lang) {
                                                                                                                                        document.querySelectorAll("[data-lang]").forEach(el => {
                                                                                                                                                const key = el.getAttribute("data-lang");
                                                                                                                                                        el.textContent = translations[lang][key];
                                                                                                                                                            });
                                                                                                                                                            }
}