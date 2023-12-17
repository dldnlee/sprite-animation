// query canvas from html document
const canvas = document.getElementById('player-sprite');
const ctx = canvas.getContext('2d');


const CANVAS_WIDTH  = canvas.width = 200;
const CANVAS_HEIGHT = canvas.height = 200;

// create new image element within canvas
const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

// height and width of sprite
const spriteWidth = 575;
const spriteHeight = 523;

// refers to the frames within the sprite sheet


// fps controller for animation
let gameFrame = 0; 
const staggerFrames = 10;



//cute guy sprite init
const cute_guy = new Image();
cute_guy.src = 'idle.png';

const guyWidth = 128;
const guyHeight = 128;



// running animation
function animate(canvas_context, frames = 0, speed_of_frame, cWidth, cHeight, sprite_sheet_image, positionX, positionY, start_point, action, num_of_frames, sprite_width, sprite_height) {
  canvas_context.clearRect(0, 0, cWidth, cHeight);
  canvas_context.drawImage(sprite_sheet_image, start_point * sprite_width, action * sprite_height, sprite_width, sprite_height, positionX, positionY, sprite_width, sprite_height);
  
  // when frames is a factor of speed of frame start_point value goes up
  if(frames % speed_of_frame === 0) {
    if(start_point < num_of_frames) start_point++;
    else start_point = 0;  
  }
  ++frames;

  //bind method is used to add paremeters within the request animation
  requestAnimationFrame(animate.bind(animate, canvas_context, frames, speed_of_frame, cWidth, cHeight, sprite_sheet_image, positionX, positionY, start_point, action, num_of_frames, sprite_width, sprite_height)); 
}


// animate dog
// animate(
//   canvas_context = ctx, // getContext variable of canvas
//   frames = gameFrame, // initial value of 0 recommended default is 0 
//   speed_of_frame = staggerFrames, // determines speed of animation
//   cWidth = CANVAS_WIDTH, //canvas width
//   cHeight = CANVAS_HEIGHT, //canvas height
//   sprite_sheet_image = playerImage, //spritesheet image file
//   start_point = 0, //starting index of wanted animation on x axis
//   action = 0, //index of action wtihin spritesheet on the y axis e.g 0 is the idle animation
//   num_of_frames = 6, //number of frames for the action within the spritesheet
//   sprite_width = spriteWidth, //width of each frame in spritesheet
//   sprite_hidth = spriteHeight //height of each frame in spritesheet 
// );

// animate human
animate(
  canvas_context = ctx,
  frame = 0,
  speed_of_frame = 10,
  cWidth = CANVAS_WIDTH,
  cHeight = CANVAS_HEIGHT,
  sprite_sheet_image = cute_guy,
  positionX = 0,
  positionY = 0,
  start_point = 0,
  action = 0,
  num_of_frames= 7,
  sprite_width = guyWidth,
  sprite_height = guyHeight
)