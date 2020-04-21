<template>
  <div id="app" :style="'--gradient-degree: ' + (Math.atan((windowHeight * -1) / windowWidth) * 180 / Math.PI) + 'deg'">
    <div id="nav">
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matthias-hecht-931851164/" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff">
          <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
        </svg>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.xing.com/profile/Matthias_Hecht20/" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff">
          <path d="M313.8 303.9L469 32H365L209.4 303.8c-.4.7-.4 1.1 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7c-.2-.3-.1-1 .1-1.4zM221.9 216.2L163 113c-.5-.8-1-1-2-1H65l58.9 104.4c.1.2.2.6.1.8L43 352h96.8c.8 0 1.2-.2 1.6-.9l80.5-133.7c.1-.3.1-.9 0-1.2z" />
        </svg>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/maHecht" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
        </svg>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/~matzehecht" class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M227.6 213.1H256v57.1h-28.4z" />
          <path d="M0 156v171.4h142.2V356H256v-28.6h256V156H0zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8v114.3zm142.2 0h-56.9v28.6h-56.9V184.6h113.8v114.3zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3z" />
        </svg>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://musescore.com/user/1060136" class="icon">
        <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.46 283.46">
          <path class="cls-1" d="M51.9,210V169.25c0-13.87-2.62-31,8.08-40.91,8-7.39,20.83-7.87,30-1.41,4.59,3.24,7.91,9,9.22,15.36,1.4,6.85.57,14.51.57,21.47v46.37c0,9.65,15,9.67,15,0V165.39c0-17.18,1.13-35.76-13.09-48.22a39.75,39.75,0,0,0-45.09-4.71,37.7,37.7,0,0,0-16.17,18.41c-3.56,8.5-3.48,17.4-3.48,26.44V210c0,9.66,15,9.67,15,0Z"/>
          <path class="cls-1" d="M114.73,209.26V156.61c0-5.67-.42-11.47,1-17,5.36-20.41,32.58-24.18,43-6.85,3.16,5.29,3.8,11.18,3.86,17.4.08,8.44.79,16.84,1,25.28.33,13.71,5,26.15,16.44,34.39,19.38,14,50.55,8.63,61.8-13.24,6.54-12.72,4.77-27.79,4.77-41.62V119.8c0-9.65-15-9.67-15,0v50.3c0,5.15.23,10.24-1.27,15.22-5.88,19.57-33.5,22.93-46.1,8.23-7.27-8.47-6-23.52-6.45-35-.55-15.26-.53-30.38-12.66-41.56-18.37-16.93-50-12-60.93,11-6.58,13.77-4.43,30.43-4.43,45.26v36c0,9.65,15,9.67,15,0Z"/>
          <path class="cls-1" d="M175.57,89.44c.09-8.61,2.75-16,8.74-21.54,5.05-4.66,12.36-7,19.26-7.06,6.73,0,14,2.15,18.94,6.59,6.27,5.6,9,13.19,9.06,22,.11,9.65,15.11,9.67,15,0-.22-19-10.74-35.7-29.24-41.57-15.76-5-34.87-.73-46,11.82C164,68,160.69,78.47,160.57,89.44c-.12,9.66,14.88,9.67,15,0Z"/>
          <path class="cls-1" d="M203.57,98.3c11.58,0,11.6-18,0-18s-11.61,18,0,18Z"/>
      </svg>
      </a>
    </div>
    <Home />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #000000;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: #2F3B8C;
  background-image:
    radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.4) 20%,
      rgba(0, 0, 0, 0.4) 39%,
      rgba(0, 0, 0, 0.4) 60%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    repeating-linear-gradient(
        var(--gradient-degree),
        transparent,
        transparent 45%,
        rgba(0, 0, 0, 0.25) 50%,
        #2F6B83 50%,
        #2F6B83 100%
    );
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
}

#nav {
  bottom: 0;
  right: 0;
  z-index: 1;
  position: fixed;
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a:hover {
  color: #f7c035;
}

#nav a.router-link-exact-active {
  color: #f7c035;
  font-weight: lighter;
}

/* #nav img {
  vertical-align: middle;
  padding-left: 1vw;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none; 
} */

.icon svg {
  vertical-align: middle;
  padding-left: 1vw;
  fill: #ffffff;
  width: 2em;
}

.icon svg:hover {
  fill: #f7c035;
}
</style>
