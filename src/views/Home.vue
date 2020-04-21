<template>
  <div class="home">
    <div id="homeBanner">
      <div id="title">
        <div id="myname">MATTHIAS HECHT</div>
        <div id="name">
          <span id="hecht"></span>
          <span id="space"></span>
        </div>
        <div id="slogan"></div>
        <div id="jobs">
          <span>DEVELOPER</span> |
          <span>MUSICIAN</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => {
    return {
      empty: true
    };
  }
};
</script>

<style scoped>
#homeBanner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter,
    monospace;
  cursor: default;
  width: 100vw;
  height: 100vh;
}
#name {
  font-size: 300%;
  margin-bottom: 0.05em;
  font-weight: bold;
  border-right: 0.1em solid #0031b8; /* The typwriter cursor */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  display: inline-block;
  animation: blink-caret 666ms steps(44) infinite normal;
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #0031b8;
  }
}

@keyframes typewriterHecht {
  from,
  0% {
    content: "h";
  }
  1% {
    content: "he";
  }
  2% {
    content: "hec";
  }
  3% {
    content: "hech";
  }
  4% {
    content: "hecht";
  }
  to,
  100% {
    content: "hecht";
  }
}
@keyframes typewriterSpace {
  from,
  0.0%,
  4% {
    content: "";
  }
  5% {
    content: ".";
  }
  6% {
    content: ".s";
  }
  7% {
    content: ".sp";
  }
  8% {
    content: ".spa";
  }
  9% {
    content: ".spac";
  }
  10% {
    content: ".space";
  }
  to,
  100% {
    content: ".space";
  }
}

#myname {
  font-weight: bold;
  font-size: 105%;
  letter-spacing: 0.75em;
  padding-bottom: 2.5vh;
}
#space {
  color: #f7c035;
}
#space::after {
  animation: typewriterSpace 10s steps(1000) infinite normal;
  content: ".space";
}
#space:hover {
  color: #ffffff;
}
#hecht::after {
  animation: typewriterHecht 10s steps(1000) infinite normal;
  content: "hecht";
}
#hecht:hover {
  color: #f7c035;
}
#slogan {
  font-size: 123%;
  font-weight: lighter;
  margin-bottom: 1.75em;
}
#slogan::after {
  content: "Swimming in a lake of code.";
}
#slogan:hover::after {
  content: "Just my space!";
}
#jobs {
  font-size: 120%;
  font-weight: bold;
  letter-spacing: 0.21em;
}
#jobs span:hover {
  color: #f7c035;
}
</style>