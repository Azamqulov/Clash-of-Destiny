// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
    // Cookie Consent Popup
    // const cookieConsentPopup = document.getElementById("cookieConsentPopup")
    // const cookieAccept = document.getElementById("cookieAccept")

    // Check if user has already accepted cookies
    // if (!localStorage.getItem("cookieConsent")) {
    //     // Show the popup with a slight delay for better UX
    //     setTimeout(() => {
    //         cookieConsentPopup.classList.add("active")
    //     }, 1000)
    // }

    // if (cookieAccept) {
    //     cookieAccept.addEventListener("click", () => {
    //         localStorage.setItem("cookieConsent", "true")
    //         cookieConsentPopup.classList.remove("active")

    //         // Optional: Add animation before removing
    //         setTimeout(() => {
    //             cookieConsentPopup.style.display = "none"
    //         }, 400) // Match this to the CSS transition time
    //     })
    // }

    // Header scroll effect
    const header = document.querySelector(".header")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("scrolled")
        } else {
            header.classList.remove("scrolled")
        }
    })

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item")

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question")

        question.addEventListener("click", () => {
            // Close all other FAQ items
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active")
                }
            })

            // Toggle the clicked FAQ item
            item.classList.toggle("active")
        })
    })

    // Contact Form Submission
    const contactForm = document.getElementById("contactForm")

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault()

            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert("Thank you for your message! We will get back to you soon.")
            contactForm.reset()
        })
    }

    // Subscribe Form Submission
    const subscribeForm = document.querySelector(".subscribe-form")

    if (subscribeForm) {
        subscribeForm.addEventListener("submit", (e) => {
            e.preventDefault()

            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert("Thank you for subscribing! You will receive our latest updates soon.")
            subscribeForm.reset()
        })
    }
})

document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const navList = document.querySelector(".nav-list")

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", function () {
            this.classList.toggle("active")
            navList.classList.toggle("active")
        })
    }

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-list a")
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenuBtn.classList.remove("active")
            navList.classList.remove("active")
        })
    })

    // Gallery Modal
    const galleryItems = document.querySelectorAll(".gallery-item")
    const modal = document.querySelector(".gallery-modal")
    const modalImg = document.getElementById("modal-image")
    const modalCaption = document.getElementById("modal-caption")
    const closeModal = document.querySelector(".close-modal")

    galleryItems.forEach((item) => {
        item.addEventListener("click", function () {
            modal.style.display = "block"
            modalImg.src = this.querySelector("img").src

            const title = this.querySelector("h3").textContent
            const desc = this.querySelector("p").textContent
            modalCaption.innerHTML = `<h3>${title}</h3><p>${desc}</p>`
        })
    })

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            modal.style.display = "none"
        })
    }

    // Close modal when clicking outside the image
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none"
        }
    })

    // Testimonial Slider
    const dots = document.querySelectorAll(".dot")
    const testimonials = document.querySelectorAll(".testimonial-item")
    let currentSlide = 0

    function showSlide(n) {
        // Hide all testimonials
        testimonials.forEach((testimonial) => {
            testimonial.style.display = "none"
        })

        // Remove active class from all dots
        dots.forEach((dot) => {
            dot.classList.remove("active")
        })

        // Show the current testimonial and activate the dot
        testimonials[n].style.display = "block"
        dots[n].classList.add("active")
    }

    // Initialize the slider
    if (testimonials.length > 0) {
        showSlide(currentSlide)

        // Add click event to dots
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentSlide = index
                showSlide(currentSlide)
            })
        })

        // Auto slide
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length
            showSlide(currentSlide)
        }, 5000)
    }

    // Form Submissions
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault()

            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert("Thank you for your message! We will get back to you soon.")
            this.reset()
        })
    }

    const subscribeForm = document.getElementById("subscribe-form")
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function (e) {
            e.preventDefault()

            // Here you would typically send the form data to a server
            // For this example, we'll just show an alert
            alert("Thank you for subscribing! You will receive our latest updates soon.")
            this.reset()
        })
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            if (targetId === "#") return

            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth",
                })
            }
        })
    })
})


// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent")
    const cookieAccept = document.getElementById("cookieAccept")

    // Check if user has already accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
        cookieConsent.style.display = "block"
    }

    cookieAccept.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "true")
        cookieConsent.style.display = "none"
    })

})    