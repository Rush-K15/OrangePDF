document.addEventListener("DOMContentLoaded", () => {
  // Features Section
  const features = [
    {
      icon: "../assets/merge.png",
      title: "Merge PDF",
      description: "Combine multiple PDF files into one document.",
    },
    {
      icon: "../assets/split.png",
      title: "Split PDF",
      description: "Split a PDF file into multiple documents.",
    },
    {
      icon: "../assets/compress.png",
      title: "Compress PDF",
      description: "Reduce the file size of your PDFs.",
    },
    {
      icon: "../assets/convert.png",
      title: "Convert to PDF",
      description: "Convert various file formats to PDF.",
    },
    {
      icon: "../assets/editPDF.png",
      title: "Edit PDF",
      description: "Edit the content of your PDF files.",
    },
    {
      icon: "../assets/signPDF.png",
      title: "Sign PDF",
      description: "Add electronic signatures to your PDFs.",
    },
    {
      icon: "../assets/watermark.png",
      title: "Watermark PDF",
      description: "Add watermarks to your PDF documents.",
    },
    {
      icon: "../assets/rotate.jpg",
      title: "Rotate PDF",
      description: "Rotate the pages of your PDF files.",
    },
  ];

  const featuresContainer = document.getElementById("features");

  features.forEach((feature) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const icon = document.createElement("img");
    icon.src = feature.icon;
    icon.alt = feature.title;

    const title = document.createElement("h3");
    title.textContent = feature.title;

    const description = document.createElement("p");
    description.textContent = feature.description;

    card.appendChild(icon);
    card.appendChild(title);
    card.appendChild(description);

    featuresContainer.appendChild(card);
  });

  // Testimonials Section
  const testimonials = [
    {
      img: "../assets/user1.jpg",
      name: "Rahul Shetty",
      review: "OrangePDF is the best tool I have ever used for managing my PDF documents!",
    },
    {
      img: "../assets/user2.jfif",
      name: "Jordon Smith",
      review: "I love the simplicity and effectiveness of OrangePDF. Highly recommended!",
    },
    {
      img: "../assets/user3.jpg",
      name: "Aakash Nair",
      review: "A must-have tool for anyone dealing with PDFs on a regular basis.",
    },
    {
      img: "../assets/user4.jpg",
      name: "Lisa Paulsen",
      review: "OrangePDF made my work so much easier. Great features and easy to use.",
    },
    {
      img: "../assets/user5.jpg",
      name: "Mike Johnson",
      review: "Fantastic tool! It has all the features I need to manage my PDFs efficiently.",
    },
  ];

  const testimonialSlider = document.getElementById("testimonial-slider");

  testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.classList.add("testimonial");
    card.innerHTML = `<img src="${testimonial.img}" alt="${testimonial.name}"><h3>${testimonial.name}</h3><p>${testimonial.review}</p>`;
    testimonialSlider.appendChild(card);
  });

  // Clone the first and last testimonial for seamless loop
  const firstClone = testimonialSlider.children[0].cloneNode(true);
  const lastClone = testimonialSlider.children[testimonials.length - 1].cloneNode(true);

  testimonialSlider.appendChild(firstClone);
  testimonialSlider.insertBefore(lastClone, testimonialSlider.children[0]);

  let currentIndex = 0;
  const testimonialCount = testimonials.length;
  const sliderWidth = testimonialSlider.clientWidth;
  testimonialSlider.style.transform = `translateX(-${sliderWidth}px)`;

  function showTestimonial(index) {
    testimonialSlider.style.transition = "transform 0.5s ease-in-out";
    testimonialSlider.style.transform = `translateX(-${(index + 1) * sliderWidth}px)`;

    if (index === -1) {
      setTimeout(() => {
        testimonialSlider.style.transition = "none";
        testimonialSlider.style.transform = `translateX(-${testimonialCount * sliderWidth}px)`;
        currentIndex = testimonialCount - 1;
      }, 500);
    } else if (index === testimonialCount) {
      setTimeout(() => {
        testimonialSlider.style.transition = "none";
        testimonialSlider.style.transform = `translateX(-${sliderWidth}px)`;
        currentIndex = 0;
      }, 500);
    }
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonialCount;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
    showTestimonial(currentIndex);
  }

  document.getElementById("next").addEventListener("click", nextTestimonial);
  document.getElementById("prev").addEventListener("click", prevTestimonial);

  setInterval(nextTestimonial, 3000); // Change testimonial every 3 seconds

  // Contact Form Section
  const contactLinks = document.querySelectorAll('#navbar_contact_link, #footer_contact_link');
const contactForm = document.getElementById('contactForm');
const closeBtn = document.getElementById('closeBtn');


function openContactForm() {
    contactForm.style.display = "block";
    setTimeout(() => {
        contactForm.style.transform = "translateX(0)";
    }, 0);
}

function closeContactForm() {
    contactForm.style.transform = "translateX(100%)";
    setTimeout(() => {
        contactForm.style.display = "none";
    }, 300);
}

contactLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        openContactForm();
    });
});

closeBtn.addEventListener("click", closeContactForm);

window.addEventListener("click", function (event) {
    if (event.target == contactForm) {
        closeContactForm();
    }


    
});

document.getElementById("submit_btn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting
  location.reload(); // Refresh the page
});

document.querySelector("a[href='#tools']").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default anchor click behavior
  document.getElementById("features-section").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("premium_btn").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent any default button behavior
  document.getElementById("pricing-section").scrollIntoView({ behavior: 'smooth' });
});

});
