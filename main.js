// 1. DOM -> variable

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

// 2. mousemove addeventlistener
document.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x} ${y}`);

  // 3. Make change lines movable
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;

  // 4. tag innerhtml
  tag.innerHTML = `${x} ${y}`;
});
