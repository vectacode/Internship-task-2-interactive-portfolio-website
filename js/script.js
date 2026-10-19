/* =================================
ANSELEM'S INTERACTIVE PORTFOLIO
Features:
1. Mobile navigaion
2. Scroll reveal animations
3. Back-to-top button
4. Automatic footer year
5. Visitors counter integration
================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================================
       1. AUTOMATIC FOOTER YEAR
    ============================================== */

    const footer = document.querySelector(".footer");

    if (footer) {
        const footerText = footer.querySelector("p");

        if (footerText) {
            footerText.innerHTML = footerText.innerHTML.replace(
                /©\s*\d{4}/,
                `© ${new Date().getFullYear()}`
            );
        }
    }


    /* ==============================================
       2. SCROLL REVEAL ANIMATIONS
    ============================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, .skill-card, .project-card, " +
        ".certificate-card, .social-card, .about-content"
    );

    // Use the browser's Intersection Observer API
    // to reveal elements as they enter the screen.
    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");

                        // Stop observing once the element appears.
                        currentObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {
            element.classList.add("reveal");
            observer.observe(element);
        });

    }


    /* ==============================================
       3. BACK-TO-TOP BUTTON
    ============================================== */

    const backToTop = document.createElement("button");

    backToTop.type = "button";
    backToTop.className = "back-to-top";
    backToTop.textContent = "↑";
    backToTop.setAttribute("aria-label", "Back to top");
    backToTop.title = "Back to top";

    document.body.appendChild(backToTop);

    // Display the button after the visitor scrolls down.
    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    }, { passive: true });

    // Return to the top when the button is clicked.
    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* ==============================================
       4. VISITOR COUNTER
    ============================================== */

    // The HTML must contain an element with id="view-count".
    // The CounterAPI integration will update this element.
    const visitorCount = document.getElementById("view-count");

    if (visitorCount) {
        visitorCount.textContent = "Connecting...";
    }

});