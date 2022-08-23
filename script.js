//get all the boxes in the grid
const grid_boxes = document.querySelectorAll(".box");

//function to create random colors using rgb values
function random_color() {
  let rgb_color = "rgb(";
  for (let i = 0; i < 3; i++) {
    random_color_value = Math.floor(Math.random() * 256);
    if (i === 2) {
      rgb_color += random_color_value + ")";
    } else {
      rgb_color += random_color_value + ", ";
    }
  }
  return rgb_color;
}
let prev_box;
//first selection of colors from the grid
// let prev_box = Math.floor(Math.random() * 4);
// grid_boxes[prev_box].style.backgroundColor = random_color();

function change_random_box_color() {
  let random_box = Math.floor(Math.random() * 4);

  //if the previous box is the same recursively call the function
  if (prev_box == random_box) {
    change_random_box_color();
  } else {
    if (prev_box >= 0) {
      grid_boxes[prev_box].style.backgroundColor = "white";
    }
    grid_boxes[random_box].style.backgroundColor = random_color();
    prev_box = random_box;
  }
}

//storing the setInterval ID to start and stop setInterval
let interval_id = setInterval(change_random_box_color, 250);

//funtion to stop setInterval
function stopInterval() {
  clearInterval(interval_id);
  interval_id = null;
}

function startInterval() {
  //prevent setInterval from running multiple times. You can only execute this funtion once the existing setInterval function is stopped.
  if (!interval_id) {
    interval_id = setInterval(change_random_box_color, 250);
  }
}
