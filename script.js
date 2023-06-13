// Section Pinning
gsap.utils.toArray(".section").forEach(section => {
  // Check if section has horizontal scrolling
  if (section.dataset.type === "horizontal") {
    const cards = section.querySelector(".section__cards");
    const card = section.querySelector(".section__card");

    gsap.to(cards, {
      x: () => {
        return -cards.scrollWidth + card.offsetWidth;
      },
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => "center center",
        end: () => `+=${cards.scrollWidth - card.offsetWidth}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1 } });


    // Use standard vertical scroll pinning
  } else {
    ScrollTrigger.create({
      // markers: true,
      trigger: section,
      start: () => "top top",
      pin: true,
      anticipatePin: 1 });

  }
});