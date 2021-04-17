const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const arrayRemove = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};

const top_ids = {
  L: "top_l",
  M: "top_m",
  T: "top_t",
};

const bottom_ids = {
  L: ["bottom_m", "bottom_t"],
  M: ["bottom_l_m", "bottom_t"],
  T: ["bottom_l", "bottom_m"],
};

const curve_ids = {
  L: "curve_l",
  M: "curve_m",
  T: "curve_t",
};

const updateFlow = () => {
  const flow = document.getElementById("dropdown1").value;
  const top = document.getElementById(top_ids[flow]);
  top.setAttribute("offset", 1);
  bottom_ids[flow].forEach((x) => {
    let bottom = document.getElementById(x);
    bottom.setAttribute("offset", 1);
  });
};

let asyncMove = async (id, curPosition = 0, finalPosition = 1) => {
  const path = document.getElementById(id);
  while (true) {
    let animation_speed = document.getElementById("water-flow").value;
    animation_speed = animation_speed * 0.0002;
    animation_speed = animation_speed == 0 ? 0.0002 : animation_speed;
    if (curPosition > finalPosition) break;
    curPosition += animation_speed;
    path.setAttribute("offset", curPosition);
    await sleep(0.5);
  }
};

const resetEverything = () => {
  const flow_ids = ["curve_l", "curve_m", "curve_t"];
  flow_ids.forEach((element) => {
    let path = document.getElementById(element);
    path.setAttribute("offset", 0);
  });
  for (id in top_ids) {
    let ids = document.getElementById(top_ids[id]);
    ids.setAttribute("offset", 0);
  }
  for (id in curve_ids) {
    let ids = document.getElementById(curve_ids[id]);
    ids.setAttribute("offset", 0);
  }
  for (i in bottom_ids) {
    bottom_ids[i].forEach((id) => {
      let ids = document.getElementById(id);
      ids.setAttribute("offset", 0);
    });
  }
  updateFlow();
};

const startAnimation = async () => {
  resetEverything();
  document.getElementById("startbutton").disabled = true;
  document.getElementById("resetbutton").disabled = true;
  const flow = document.getElementById("dropdown1").value;
  asyncMove(curve_ids[flow]);
  document.getElementById("startbutton").disabled = false;
  document.getElementById("resetbutton").disabled = false;
};

resetEverything();
