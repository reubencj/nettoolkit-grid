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

//get all the boxes in the grid
const grid_boxes = document.querySelectorAll(".box");

let box_time = [];

for (let i = 0; i < grid_boxes.length; i++) {
  box_time.push({
    number: i + 1,
    box: grid_boxes[i],
    last_modified_time: null,
  });
}

function change_random_box_color() {
  let exit_function = false;

  //loop till a random box is selected with last color change is 2 or more seconds ago
  while (exit_function === false) {
    let random_box = Math.floor(Math.random() * 16);

    const selected_box = box_time[random_box];

    if (
      selected_box.last_modified_time === null ||
      selected_box.last_modified_time <= Date.now() - 2000
    ) {
      selected_box.box.style.backgroundColor = random_color();
      selected_box.last_modified_time = Date.now();
      exit_function = true;
    }
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
