// 1. DOM -> variable

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

window.addEventListener("load", () => {
  // For repositioning Target
  const targetRect = target.getBoundingClientRect();
  console.log(targetRect);
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  // 2. mousemove addeventlistener
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // 3. Make change lines movable

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;

    // 4. tag innerhtml
    tag.innerHTML = `${x} ${y}`;
  });
});
