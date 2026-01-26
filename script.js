const faqItems = document.querySelectorAll(".faq-item");
const faqContainer = document.querySelector("section");

// faqContainer.addEventListener("toggle", (e) => {
//   const target = e.target;
//   const img = target.querySelector("img");

//   faqItems.forEach((item) => {
//     item.open = false;
//     const img = item.querySelector("img");
//     img.src = "./assets/images/icon-plus.svg";
//     console.log(item)
//   })

//   img.src = "./assets/images/icon-minus.svg";
  
//   if (target.open) {
    
//   }
// })

// faqItems.forEach((item) => {
//   item.addEventListener("toggle", (e) => {
//     if (!item.open) return;

//     if (item.open) {
//       const img = e.target.querySelector("img");
//       img.src = "./assets/images/icon-minus.svg";
//       faqItems.forEach((other) => {
//         other.open = false;
//       })
//     }
//   })
// })


faqItems.forEach(item => {
  const icon = item.querySelector("img");\

  item.addEventListener('toggle', () => {
      if (item.open) {
        icon.src = ""
      }
    
    // Alleen als DIT item net geopend is
    if (!current.open) {
      img.src = "./assets/images/icon-minus.svg";
      return;
    }
    

    faqItems.forEach(other => {
      if (other !== current) {
        other.open = false;
        other.querySelector("img").src = "./assets/images/icon-plus.svg";
      }
    });

    if (current.open) {
      img.src = "./assets/images/icon-minus.svg";
    } else {
      img.src = "./assets/images/icon-plus.svg";
    }
  });
});