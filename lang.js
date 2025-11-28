const translations = {
            tr: {
                    title: "TWS M10 Kablosuz Kulaklık",
                            description: "Yüksek bass, uzun pil ömrü ve su geçirmez tasarım."
                                },
                                    es: {
                                            title: "Auriculares Inalámbricos TWS M10",
                                                    description: "Graves potentes, larga duración de batería y diseño resistente al agua."
                                                        }
                                                        };

                                                        function setLanguage(lang) {
                                                            localStorage.setItem("language", lang);

                                                                document.querySelectorAll("[data-lang]").forEach(el => {
                                                                        const key = el.getAttribute("data-lang");
                                                                                el.textContent = translations[lang][key];
                                                                                    });
                                                                                    }

                                                                                    const savedLang = localStorage.getItem("language") || "tr";
                                                                                    setLanguage(savedLang);
}