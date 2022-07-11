console.log("Vue OK", Vue);

const root = new Vue (
  {
    name: "My First Vue",
    el: "#hello-vue",
    data: {
      firstName: "Gianluca",
      lastName: "Mura",
    }
  }
);