import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  position: relative;
  width: 100%;
  white-space: nowrap;
  padding: 15px 0;
  z-index: 99;

  @media (max-width: 900px) {
    padding: 0;
    font-size: 0.8rem;
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  font-family: Hurmit;
  color: forestgreen;
  font-weight: 700;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 70px;
  width: 100%;
  margin-top: -68px;
  padding-top: 12px;
  pointer-events: none; /* Make the canvas ignore pointer events */
`;

// eslint-disable-next-line react/prop-types
const NavBar = ({ handleLinkClick = () => {} }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const spriteSheetImage = new Image();
    const backgroundImage = new Image();
    spriteSheetImage.src = "src/assets/spritesheet.png";
    backgroundImage.src = "src/assets/forest.png";

    let frames = {};
    let currentFrame = 0;
    const frameDuration = 300; // Duration to display each frame in milliseconds
    let lastFrameTime = 0;
    let currentAction = "sit"; // Default action

    let position = { x: 0, y: 0 }; // Initial position of the character
    const speed = 8; // Speed at which the character moves
    let targetPosition = null; // Target position to move the character

    const scale = 0.8;

    // Object to store frames for each action
    const actionFrames = {
      left: [],
      right: [],
      sit: [],
    };

    // Function to resize the canvas to match the navbar width
    function resizeCanvas() {
      const navbar = document.getElementById("navbar");
      canvas.width = navbar.offsetWidth;
      canvas.height = 70;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    fetch("src/assets/spritesheet.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        frames = data.frames;
        // console.log("Frames loaded:", frames);
        // Preload frames for each action
        for (let frameName in frames) {
          if (frameName.includes("left")) {
            actionFrames.left.push(frames[frameName]);
          } else if (frameName.includes("right")) {
            actionFrames.right.push(frames[frameName]);
          } else if (frameName.includes("sit")) {
            actionFrames.sit.push(frames[frameName]);
          }
        }
        // console.log("Action frames:", actionFrames);

        // Load the background image first
        backgroundImage.onload = () => {
          spriteSheetImage.onload = () => {
            requestAnimationFrame(gameLoop);
          };

          spriteSheetImage.onerror = () => {
            console.error("Error loading sprite sheet image.");
          };

          // Check if the image is already loaded
          if (spriteSheetImage.complete) {
            requestAnimationFrame(gameLoop);
          }
        };

        backgroundImage.onerror = () => {
          console.error("Error loading background image.");
        };

        // Check if the background image is already loaded
        if (backgroundImage.complete) {
          requestAnimationFrame(gameLoop);
        }
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });

    function updateAnimationFrame(timestamp) {
      if (timestamp - lastFrameTime >= frameDuration) {
        currentFrame = (currentFrame + 1) % actionFrames[currentAction].length;
        lastFrameTime = timestamp;
      }

      // Update position to move towards target
      if (targetPosition !== null) {
        if (Math.abs(targetPosition.x - position.x) < speed) {
          position.x = targetPosition.x; // Snap to target if close enough
          sit(); // Make the character sit down when it reaches the target
          targetPosition = null; // Clear the target position
        } else {
          position.x += targetPosition.x > position.x ? speed : -speed;
        }
      }
    }

    function drawFrame() {
      if (
        !actionFrames[currentAction] ||
        actionFrames[currentAction].length === 0
      ) {
        console.error(`No frames found for action: ${currentAction}`);
        return;
      }
      const frame = actionFrames[currentAction][currentFrame]?.frame;

      if (!frame) {
        console.error(
          `Frame not found for action: ${currentAction}, frame index: ${currentFrame}`
        );
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const tileWidth = 600; // Set the desired width for each tile
      const tileHeight =
        backgroundImage.height * (tileWidth / backgroundImage.width); // Maintain aspect ratio

      // Tile the background image to cover the entire canvas
      for (let x = 0; x < canvas.width; x += tileWidth) {
        for (let y = 0; y < canvas.height; y += tileHeight) {
          ctx.drawImage(backgroundImage, x, y, tileWidth, tileHeight);
        }
      }
      ctx.drawImage(
        spriteSheetImage,
        frame.x,
        frame.y,
        frame.w,
        frame.h,
        position.x,
        position.y,
        frame.w * scale,
        frame.h * scale
      );
    }

    function walkLeft() {
      currentAction = "left";
    }

    function walkRight() {
      currentAction = "right";
    }

    function sit() {
      if (actionFrames.sit.length > 0) {
        currentAction = "sit";
      } else {
        console.error("No sit frames found");
      }
    }

    function gameLoop(timestamp) {
      updateAnimationFrame(timestamp);
      drawFrame();
      requestAnimationFrame(gameLoop);
    }

    // Handle navigation link clicks
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const linkRect = event.target.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        targetPosition = { x: linkRect.left - canvasRect.left, y: 0 };

        if (targetPosition.x < position.x) {
          walkLeft();
        } else {
          walkRight();
        }
      });
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <StyledNavBar id="navbar">
      <StyledLink onClick={() => handleLinkClick(0)} className="nav-link">
        Home
      </StyledLink>
      <StyledLink onClick={() => handleLinkClick(1)} className="nav-link">
        Projects
      </StyledLink>
      <StyledLink onClick={() => handleLinkClick(2)} className="nav-link">
        Experience
      </StyledLink>
      <StyledCanvas ref={canvasRef} id="gameCanvas" />
    </StyledNavBar>
  );
};

export default NavBar;
