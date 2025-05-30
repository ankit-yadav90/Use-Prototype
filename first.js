const emploiyee = {
  calcTex() {
    console.log("tex rate is 10%");
  },
};

const karanArjun ={
  salary: 50000,
   calcTex() {
     console.log("tex rate is 20%");
   },
};

karanArjun.__proto__ = emploiyee;