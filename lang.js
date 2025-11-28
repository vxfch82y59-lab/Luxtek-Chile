const langData = {
            tr: {
                    title: "M10 TWS Kulaklık",
                            subtitle: "Yeni nesil kablosuz ses deneyimi",
                                    f1: "Güçlü bas ve HD ses",
                                            f2: "LED dijital şarj göstergesi",
                                                    f3: "Uzun pil ömrü",
                                                            f4: "Dokunmatik kontrol",
                                                                    whatsapp: "WhatsApp ile Sipariş Ver"
                                                                        },
                                                                            es: {
                                                                                    title: "Auriculares M10 TWS",
                                                                                            subtitle: "Nueva experiencia de sonido inalámbrico",
                                                                                                    f1: "Graves potentes y sonido HD",
                                                                                                            f2: "Pantalla digital LED",
                                                                                                                    f3: "Larga duración de batería",
                                                                                                                            f4: "Control táctil",
                                                                                                                                    whatsapp: "Comprar por WhatsApp"
                                                                                                                                        }
                                                                                                                                        };

                                                                                                                                        function setLang(l) {
                                                                                                                                            localStorage.setItem("lang", l);
                                                                                                                                                applyLang();
                                                                                                                                                }

                                                                                                                                                function applyLang() {
                                                                                                                                                    const l = localStorage.getItem("lang") || "tr";
                                                                                                                                                        document.querySelectorAll("[data-lang]").forEach(el => {
                                                                                                                                                                const key = el.getAttribute("data-lang");
                                                                                                                                                                        el.innerText = langData[l][key];
                                                                                                                                                                            });
                                                                                                                                                                            }

                                                                                                                                                                            // İlk yüklemede uygula
                                                                                                                                                                            applyLang();
}