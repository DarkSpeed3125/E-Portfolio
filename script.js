document.addEventListener("DOMContentLoaded", () => {
    const orb = document.querySelector(".rune__orb");
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

        
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        orb.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
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

    setInterval (() => {
        const runes = document.querySelectorAll(".rune");
        const rune = runes[Math.floor(Math.random()*runes.length)];

        rune.classList.add("flicker");
        setTimeout(() => {
            rune.classList.remove("flicker");
        }, 250);
    }, 2000);

    const bolt = document.querySelector(".lightning");

    function strike () {
        bolt.style.opacity = 1;
        bolt.style.transform = `rotate(${Math.random()*360}deg)`;
        setTimeout(() => {
            bolt.style.opacity = 0;
        }, 120);
    }

    setInterval(() => {
        orb.classList.add("surge");
        setTimeout(() => {
            orb.classList.remove("surge");
        }, 700);
    }, 8000);

    setInterval(() => {
        strike();
        setTimeout(strike, 80);
    }, 5000);
})
