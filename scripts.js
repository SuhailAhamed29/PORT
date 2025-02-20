// ========== Dropdown Experience Section ==========
function toggleDetails(element) {
    let details = element.nextElementSibling;
    let icon = element.querySelector(".dropdown-icon");

    if (details.style.maxHeight === "0px" || !details.style.maxHeight) {
        details.style.maxHeight = details.scrollHeight + "px";
        details.style.padding = "10px 20px";
        icon.textContent = "▲"; // Open icon
    } else {
        details.style.maxHeight = "0px";
        details.style.padding = "0 20px";
        icon.textContent = "▼"; // Close icon
    }
}

// ========== Main Script ==========
document.addEventListener('DOMContentLoaded', function() {
    var japaneseName = 'スハイル アハメドアハメ';
    var englishName = 'SUHAIL AHAMED';
    var title = document.querySelector('.home__name');
    title.textContent = japaneseName;
    title.style.visibility = 'visible';

    var delay = 125;
    for (let i = 0; i < englishName.length; i++) {
        setTimeout(function() {
            title.textContent = replaceAt(title.textContent, i, englishName[i]);
        }, delay * (i + 1));
    }

    // ========== Smooth Scrolling Animation ==========
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach((section) => observer.observe(section));

//     // ========== Typewriter Effect ==========
//     const textParts = [
//         { text: "I develop and contribute to ", isHighlighted: false },
//         { text: "open-source Full-stack web apps", isHighlighted: true },
//         { text: " and specialize in ", isHighlighted: false },
//         { text: "CyberSecurity....", isHighlighted: true }
//     ];

//     const speed = 15;
//     let typeWriterIndex = 0;
//     let partIndex = 0;
//     let currentText = "";

//     function typeWriter() {
//         if (partIndex < textParts.length) {
//             if (typeWriterIndex < textParts[partIndex].text.length) {
//                 let tempText = currentText;
//                 for (let i = 0; i <= partIndex; i++) {
//                     if (i === partIndex) {
//                         let partialText = textParts[i].text.substring(0, typeWriterIndex + 1);
//                         tempText += textParts[i].isHighlighted 
//                             ? `<span class="highlight">${partialText}</span>` 
//                             : partialText;
//                     } else {
//                         tempText += textParts[i].isHighlighted 
//                             ? `<span class="highlight">${textParts[i].text}</span>` 
//                             : textParts[i].text;
//                     }
//                 }
//                 document.getElementById("typewriter-text").innerHTML = tempText;
//                 typeWriterIndex++;
//                 setTimeout(typeWriter, speed);
//             } else {
//                 partIndex++;
//                 typeWriterIndex = 0;
//                 setTimeout(typeWriter, 0);
//             }
//         }
//     }

//     typeWriter();

    // ========== Fix: Add missing function definition for replaceAt ==========
    function replaceAt(str, index, replacement) {
        return str.substring(0, index) + replacement + str.substring(index + 1);
    }
});







//acheivements image hover code

const previewBox = document.getElementById("preview-box");
const previewImage = document.getElementById("preview-image");
const hoverLinks = document.querySelectorAll(".hover-preview");

hoverLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
        const imageSrc = link.getAttribute("data-image");
        if (imageSrc) {
            previewImage.src = imageSrc;
            previewBox.style.opacity = "1";
            previewBox.style.display = "block";
            movePreview(e); // Move immediately to prevent flickering
            document.addEventListener("mousemove", movePreview);
        }
    });

    link.addEventListener("mousemove", movePreview);

    link.addEventListener("mouseleave", () => {
        previewBox.style.opacity = "0";
        previewBox.style.display = "none";
        document.removeEventListener("mousemove", movePreview);
    });
});

function movePreview(e) {
    requestAnimationFrame(() => {
        let previewWidth = previewBox.offsetWidth;
        let previewHeight = previewBox.offsetHeight;

        let newLeft = e.clientX + -70; // Move slightly to the right
        let newTop = e.clientY - previewHeight - 15; // Move above the cursor

        // Prevent going off-screen at the top
        if (newTop < 0) newTop = e.clientY + 15;

        // Prevent going off-screen at the right
        if (newLeft + previewWidth > window.innerWidth) {
            newLeft = e.clientX - previewWidth - 20; // Move left if too far right
        }

        previewBox.style.left = `${newLeft}px`;
        previewBox.style.top = `${newTop}px`;
    });
}





