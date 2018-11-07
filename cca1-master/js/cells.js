function Slide() {
            console.log("slide");
            var logo = document.getElementById("fullscreenDiv");
            TweenLite.to(logo, 0.5, {
                ease:Sine.easeOut,
                right: "0%"
      //backgroundColor: "black",
      // borderBottomColor: "#90e500",
      // color: "white"
  });

            var logo2 = document.getElementById("middle");
            TweenLite.to(logo2, 1.0, {
                ease:Expo.easeIn,
                right: "0%"
            });
        }

        function SlideBack() {

            var logo = document.getElementById("fullscreenDiv");
            TweenLite.to(logo, 0.3, {
                ease:Sine.easeOut,
                right: "-100%"
      //backgroundColor: "black",
      // borderBottomColor: "#90e500",
      // color: "white"
  });
            var logo2 = document.getElementById("middle");
            TweenLite.to(logo2, 0.7, {
                ease:Sine.easeIn,
                right: "-100%"
      //backgroundColor: "black",
      // borderBottomColor: "#90e500",
      // color: "white"
  });
        }

        function setCore() {
            console.log(1);
            text.innerHTML = "<h1>Core Cell</h1>";
            Slide();
        }

        function setEcell() {
            console.log(2);
            var text = document.getElementById("text");
            text.innerHTML = "<h1>E Cell</h1>";
            Slide();
        }

        function setRobo() {
            console.log(3);
            var text = document.getElementById("text");
            text.innerHTML = "<h1>Robo Cell</h1>";
            Slide();
        }

        function setRDI() {
            console.log(4);
            var text = document.getElementById("text");
            text.innerHTML = "<h1>RD&I Cell</h1>";
            Slide();
        }

        function setWDCT() {
            console.log(5);
            var text = document.getElementById("text");
            text.innerHTML = "<h1>WDCT</h1>";
            Slide();
        }