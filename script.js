document.addEventListener("scroll", () => {
        document.querySelectorAll(".card, img").forEach(el => {
                const pos = el.getBoundingClientRect().top;
                        if (pos < window.innerHeight - 50) {
                                    el.style.opacity = "1";
                                                el.style.transform = "translateY(0)";
                                                        }
                                                            });
                                                            });
})