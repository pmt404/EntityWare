// Create snowflakes
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    document.body.appendChild(snowflake);
  
    // Initial coordinates of the snowflake
    const startX = Math.random() * window.innerWidth;
    const startY = -10;
  
    snowflake.style.left = startX + "px";
    snowflake.style.top = startY + "px";
  
    // Size and speed of the snowflake
    const size = Math.random() * 3 + 2;
    const speed = Math.random() * 2 + 2.5;
  
    snowflake.style.width = size + "px";
    snowflake.style.height = size + "px";
  
    // Animation of snowflake falling
    function fall() {
        const currentY = parseFloat(snowflake.style.top);
        const windowHeight = window.innerHeight;
        const footerHeight = document.querySelector('h5').offsetTop;
  
        if (currentY < windowHeight + footerHeight) {
            snowflake.style.top = currentY + speed + "px";
            requestAnimationFrame(fall);
        } else {
            // Remove the snowflake when it reaches the bottom
            snowflake.remove();
        }
    }
  
    fall();
  }
  
  // Generate snowflakes every 500 milliseconds
  setInterval(createSnowflake, 500);