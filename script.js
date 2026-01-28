const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const icon = item.querySelector("img");

  item.addEventListener("toggle", () => {
    if (item.open) {
      icon.src = "./assets/images/icon-minus.svg";
      item.querySelector("summary").setAttribute("aria-expanded", "true");
    } else {
      icon.src = "./assets/images/icon-plus.svg";
    }

    // Close other faq items
    if (item.open) {
      faqItems.forEach((other) => {
        if (other !== item) {
          other.open = false;
          other.querySelector("summary").setAttribute("aria-expanded", "false");
        }
      })
    }
  })  
});