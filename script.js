document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty(
            "--mouse-x",
            e.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            e.clientY + "px"
        );

        const particle = document.createElement("div");
        particle.classList.add("cursor-particle");
        particle.style.left = e.clientX + "px";
        particle.style.top = e.clientY + "px";
        document.body.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 1000);
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    hiddenElements.forEach(element => {
        observer.observe(element);
    })
})
