document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navLink");
    const burgerButton = document.getElementById("burgerButton");
    const pageLinksNavBar = document.getElementById("pageLinksNavBar");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
            if (pageLinksNavBar.classList.contains("active")) {
                pageLinksNavBar.classList.remove("active");
                burgerButton.classList.remove("active");
            }
        });
    });

    burgerButton.addEventListener("click", function () {
        pageLinksNavBar.classList.toggle("active");
        burgerButton.classList.toggle("active");
    });

    const sections = document.querySelectorAll(".section");
    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.3 }
    );
    sections.forEach(section => sectionObserver.observe(section));

    const aboutSection = document.getElementById("aboutUs");
    const navbar = document.getElementById("navbar");

    const aboutObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navbar.style.backgroundColor = "rgba(0, 31, 63, 0.6)";
                } else {
                    navbar.style.backgroundColor = "rgba(0, 31, 63, 1)";
                }
            });
        },
        { threshold: 0.5 }
    );
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }

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
            window.location.href = `mailto:tawjihi.hub@gmail.com?subject=${finalSubject}&body=${body}`;
            alert("Redirecting to email Tawjihi Hub Support...");
        });
    }

    const libraryLinksData = {
        علمي: [
            { name: "اللغة العربية", url: "https://drive.google.com/drive/folders/1ximpf6skDkGKelxnJB8b4ClWogFG5dxM" },
            { name: "الكيمياء", url: "https://drive.google.com/drive/folders/1KUC5tB09yFuBGQXMqOEHmUlA7_69garD" },
            { name: "الفيزياء", url: "https://drive.google.com/drive/folders/1KkTJQIiy0KZw2b-Du7L6DCwKyK8Y_w_r" },
            { name: "الرياضيات", url: "https://drive.google.com/drive/folders/1SE3SCsBIDb8yGkhHYz3yYgAIYgLz4mFp" },
            { name: "التكنولوجيا", url: "https://drive.google.com/drive/folders/1ubyn4_wcQxe9YGYTvF61Io8SHAG2iJmZ" },
            { name: "التربية الاسلامية", url: "https://drive.google.com/drive/folders/1D-qsknnTLW_bm8KWk_T1RWsxrdi6_4Q1" },
            { name: "الأحياء", url: "https://drive.google.com/drive/folders/13dyqIMch8AUWwL5ctaWWS5FIIfjG974t" },
            { name: "اللغة الانجليزية", url: "https://drive.google.com/drive/folders/1OEr1_9IqaKVH_QpHj3A_hQfzzTcIiLhm" }
        ],
        أدبي: [
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
        صناعي: [],
        تجاري: [],
        IT: [],
        فندقة: []
    };

    const categoriesListElement = document.getElementById("categoriesList");
    for (const category in libraryLinksData) {
        if (libraryLinksData.hasOwnProperty(category)) {
            const li = document.createElement("li");
            li.textContent = category;
            li.dataset.category = category;
            categoriesListElement.appendChild(li);
        }
    }
    const openCategoriesButton = document.getElementById("openCategoriesButton");
    const changeCategoryButton = document.getElementById("changeCategoryButton");
    const libraryContent = document.getElementById("libraryContent");
    const subjectListElement = document.getElementById("subjectsList");
    const selectedCategoryTitle = document.getElementById("selectedCategoryTitle");
    const introText = document.getElementById("introText");
    openCategoriesButton.addEventListener("click", function () {
        libraryContent.classList.add("show-categories");
    });
    changeCategoryButton.addEventListener("click", function () {
        libraryContent.classList.add("show-categories");
    });
    document.querySelectorAll("#categoriesList li").forEach(item => {
        item.addEventListener("click", function () {
            const category = this.dataset.category;
            selectedCategoryTitle.textContent = category;
            introText.style.display = "none";
            subjectListElement.innerHTML = "";
            const subjects = libraryLinksData[category];
            if (!subjects || subjects.length === 0) {
                const li = document.createElement("li");
                li.textContent = "No subjects available.";
                subjectListElement.appendChild(li);
            } else {
                subjects.forEach(link => {
                    const li = document.createElement("li");
                    li.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
                    subjectListElement.appendChild(li);
                });
            }
            libraryContent.classList.remove("show-categories");
            openCategoriesButton.style.display = "none";
            changeCategoryButton.style.display = "inline-block";
        });
    });

    document.querySelectorAll('.subjects-list li').forEach(li => {
        li.addEventListener('click', function () {
            const link = this.querySelector('a');
            if (link) {
                window.open(link.href, '_blank');
            }
        });
    });
    const subjectListDiv = document.getElementById("subjectList");
    const categoryListDiv = document.getElementById("categoryList");
    const isPhone = window.innerWidth <= 768;

    if (isPhone) {
        subjectListDiv.classList.add("hidden");
        categoryListDiv.classList.remove("hidden");
    }

    document.querySelectorAll("#categoriesList li").forEach(item => {
        item.addEventListener("click", function () {
            const category = this.dataset.category;
            const selectedCategoryTitle = document.getElementById("selectedCategoryTitle");
            const introText = document.getElementById("introText");
            const subjectListElement = document.getElementById("subjectsList");

            selectedCategoryTitle.textContent = category;
            introText.style.display = "none";
            subjectListElement.innerHTML = "";

            const subjects = libraryLinksData[category];
            if (!subjects || subjects.length === 0) {
                const li = document.createElement("li");
                li.textContent = "No subjects available.";
                subjectListElement.appendChild(li);
            } else {
                subjects.forEach(link => {
                    const li = document.createElement("li");
                    li.innerHTML = `<a href="${link.url}" target="_blank">${link.name}</a>`;
                    subjectListElement.appendChild(li);
                });
            }

            if (isPhone) {
                categoryListDiv.classList.add("hidden");
                subjectListDiv.classList.remove("hidden");
            } else {
                libraryContent.classList.remove("show-categories");
                openCategoriesButton.style.display = "none";
                changeCategoryButton.style.display = "inline-block";
            }
        });
    });

    changeCategoryButton.addEventListener("click", function () {
        if (isPhone) {
            subjectListDiv.classList.add("hidden");
            categoryListDiv.classList.remove("hidden");
        } else {
            libraryContent.classList.add("show-categories");
        }
    });
    const aboutUsSection = document.getElementById("aboutUs");

    const bgImages = [
        'images/navyBlueBG.png',
        'images/redBG.png',
        'images/yellowBG.png',
        'images/tealBG.png'
    ];

    let currentIndex = 0;
    let slideshowInterval = setInterval(nextImage, 5000);
    function updateBackground() {
        aboutUsSection.style.backgroundImage = `url(${bgImages[currentIndex]})`;
    }
    function nextImage() {
        currentIndex = (currentIndex + 1) % bgImages.length;
        updateBackground();
    }
    function prevImage() {
        currentIndex = (currentIndex - 1 + bgImages.length) % bgImages.length;
        updateBackground();
    }
    updateBackground();
    const leftArrow = document.querySelector('#aboutUs .slideshow-arrow.left');
    const rightArrow = document.querySelector('#aboutUs .slideshow-arrow.right');

    leftArrow.addEventListener('click', function () {
        clearInterval(slideshowInterval);
        prevImage();
        slideshowInterval = setInterval(nextImage, 5000);
    });

    rightArrow.addEventListener('click', function () {
        clearInterval(slideshowInterval);
        nextImage();
        slideshowInterval = setInterval(nextImage, 5000);
    });
});
