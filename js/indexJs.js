document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navLink");
    const burgerButton = document.getElementById("burgerButton");
    const pageLinksNavBar = document.getElementById("pageLinksNavBar");

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
            if (pageLinksNavBar?.classList.contains("active")) {
                pageLinksNavBar.classList.remove("active");
                burgerButton?.classList.remove("active");
            }
        });
    });

    burgerButton?.addEventListener("click", function () {
        pageLinksNavBar?.classList.toggle("active");
        this.classList.toggle("active");
    });

    function adjustSectionHeight() {
        const sections = document.querySelectorAll(".section");
        const viewportHeight = window.innerHeight;
        sections.forEach(section => {
            section.style.height = `${viewportHeight}px`;
        });
    }
    adjustSectionHeight();
    window.addEventListener("resize", adjustSectionHeight);

    const contactForm = document.querySelector("#contactForm form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const question = document.getElementById("question").value.trim();

            if (!name || !subject || !question) {
                alert("Please fill out all fields before submitting.");
                return;
            }

            const finalSubject = encodeURIComponent(subject);
            const body = encodeURIComponent(`Dear Tawjihi Hub,\n\nQuestion:\n${question}\n\nBest,\n${name}`).replace(/\n/g, "%0A");

            window.location.href = `mailto:support@example.com?subject=${finalSubject}&body=${body}`;

            alert("Redirecting to your email client...");
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Library Links Data
    const libraryLinksData = {
        science: [
            { name: "اللغة العربية", url: "https://drive.google.com/drive/folders/1ximpf6skDkGKelxnJB8b4ClWogFG5dxM" },
            { name: "الكيمياء", url: "https://drive.google.com/drive/folders/1KUC5tB09yFuBGQXMqOEHmUlA7_69garD" },
            { name: "الفيزياء", url: "https://drive.google.com/drive/folders/1KkTJQIiy0KZw2b-Du7L6DCwKyK8Y_w_r" },
            { name: "الرياضيات", url: "https://drive.google.com/drive/folders/1SE3SCsBIDb8yGkhHYz3yYgAIYgLz4mFp" },
            { name: "التكنولوجيا", url: "https://drive.google.com/drive/folders/1ubyn4_wcQxe9YGYTvF61Io8SHAG2iJmZ" },
            { name: "التربية الاسلامية", url: "https://drive.google.com/drive/folders/1D-qsknnTLW_bm8KWk_T1RWsxrdi6_4Q1" },
            { name: "الأحياء", url: "https://drive.google.com/drive/folders/13dyqIMch8AUWwL5ctaWWS5FIIfjG974t" },
            { name: "اللغة الانجليزية", url: "https://drive.google.com/drive/folders/1OEr1_9IqaKVH_QpHj3A_hQfzzTcIiLhm" }
        ],
        literature: [
            { name: "ثقافة علمية", url: "https://drive.google.com/drive/folders/1v9CRLBgR60LRwapPPzaD42WBtnsvO3id" },
            { name: "تكنولوجيا", url: "https://drive.google.com/drive/folders/1CKd7goA1rKMl0KASWI3ZyumJj3sRHs6w" },
            { name: "اللغة العربية", url: "https://drive.google.com/drive/folders/1aEuuCu3cp8375tOu0ViwW-fCKzZdz78r" },
            { name: "الرياضيات", url: "https://drive.google.com/drive/folders/1hrWgkMuMpr9-bbv5GbilwFrRqHEpSRtV" },
            { name: "الجغرافيا", url: "https://drive.google.com/drive/folders/169L6RcXc8Lf2OO_LRxxbqNUqjveclEfV" },
            { name: "التربية المسيحية", url: "https://drive.google.com/drive/folders/10jOoPi5HPKa9VGkT4Y95TFwQHbY_IOWY" },
            { name: "التربية الاسلامية", url: "https://drive.google.com/drive/folders/1q8JPLNyxA4IhfNVRLcsFAr9z5VGtmHjK" },
            { name: "التاريخ", url: "https://drive.google.com/drive/folders/17Quch8-ZnnvxrUU748BqZRKKth2hGmn2" },
            { name: "اللغة الانجليزية", url: "https://drive.google.com/drive/folders/16r-moUQDWLc8-328GYm4hmhBrYXETtHM" }
        ],
        industrial: [],
        business: [],
        it: [],
        hotels: []
    };

    // Populate each library card with its respective links
    Object.keys(libraryLinksData).forEach(category => {
        const ulElement = document.querySelector(`#${category} .library-links`);
        if (ulElement) {
            libraryLinksData[category].forEach(link => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
                ulElement.appendChild(li);
            });
        }
    });

    // Toggle card flip on click (helpful for mobile users)
    const cards = document.querySelectorAll('.library-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });
});
