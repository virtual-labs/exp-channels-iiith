let sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let arrayRemove = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};

top_ids = {
  L: "top_l",
  M: "top_m",
  T: "top_t",
};

bottom_ids = {
  L: ["bottom_m", "bottom_t"],
  M: ["bottom_l_m", "bottom_t"],
  T: ["bottom_l", "bottom_m"],
};

curve_ids = {
  L: "curve_l",
  M: "curve_m",
  T: "curve_t",
};

let updateFlow = () => {
  flow = document.getElementById("dropdown1").value;
  let top = document.getElementById(top_ids[flow]);
  top.setAttribute("offset", 1);
  bottom_ids[flow].forEach((x) => {
    bottom = document.getElementById(x);
    bottom.setAttribute("offset", 1);
  });
};

let asyncMove = async (id, curPosition = 0, finalPosition = 1) => {
  let path = document.getElementById(id);
  while (true) {
    speed2 = document.getElementById("water-flow").value;
    speed2 = speed2 * 0.0002;
    speed2 = speed2 == 0 ? 0.0002 : speed2;
    if (curPosition > finalPosition) break;
    curPosition += speed2;
    path.setAttribute("offset", curPosition);
    await sleep(0.5);
  }
};

let startAnimation = async () => {
  for (let i = 0; i < ids.length; i++) {
    id = ids[i];
    let path = document.getElementById(id);
    let finalPosition = 1;
    let curPosition = 0;
    while (true) {
      speed2 = document.getElementById("water-flow").value;
      speed2 = speed2 * 0.0002;
      speed2 = speed2 == 0 ? 0.0002 : speed2;
      if (curPosition > finalPosition) break;
      curPosition += speed2;
      path.setAttribute("offset", curPosition);
      await sleep(0.5);
    }
  }
};

let resetEverything = () => {
  flow_ids = ["curve_l", "curve_m", "curve_t"];
  flow_ids.forEach((element) => {
    let path = document.getElementById(element);
    path.setAttribute("offset", 0);
  });
  for (id in top_ids) {
    ids = document.getElementById(top_ids[id]);
    ids.setAttribute("offset", 0);
  }
  for (id in curve_ids) {
    ids = document.getElementById(curve_ids[id]);
    ids.setAttribute("offset", 0);
  }
  for (i in bottom_ids) {
    bottom_ids[i].forEach((id) => {
      ids = document.getElementById(id);
      ids.setAttribute("offset", 0);
    });
  }
  updateFlow();
};

disablestart = false;

let startAn = async () => {
  resetEverything();
  document.getElementById("startbutton").disabled = true;
  document.getElementById("resetbutton").disabled = true;
  const flow = document.getElementById("dropdown1").value;
  asyncMove(curve_ids[flow]);
  document.getElementById("startbutton").disabled = false;
  document.getElementById("resetbutton").disabled = false;
};

resetEverything();
