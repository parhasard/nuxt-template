<template>
  <div class="relative isolate h-screen overflow-hidden bg-black py-24 sm:py-32 ">
    <span class="mandala-wrapper">
  <div id="mandala" class="mandala-container animate-colors animated" aria-hidden="true">
    <div class="mandala-translate mandala-rotate">
      <svg width="675" height="675" viewBox="0 0 675 675" fill="none" xmlns="http://www.w3.org/2000/svg" class="mandala">
        <defs>
          <path id="singleCircle" d="M337.5,337.5 m-320,0 a320,320 0 1,1 640,0 a320,320 0 1,1 -640,0"></path>
        </defs>
        <text class="mandala-ring mandala-accent-1" dy="0" textLength="2010" style="letter-spacing: -2px; word-spacing: 8px;">
  <textPath class=" text-on-path" href="#singleCircle" style="font-family: 'Comic Sans MS', sans-serif; ">
    &lt;node pkg="turtlesim" exec="turtlesim_node" name="sim" namespace="turtlesim1"/&gt;
  </textPath>
</text>
<text class="mandala-ring mandala-accent-1" dy="50" textLength="2010" style="letter-spacing: -2px; word-spacing: 8px;">
  <textPath class=" text-on-path" href="#singleCircle" style="font-family: 'Comic Sans MS', sans-serif;  ">
    
    ros2 launch &lt;package_name/&gt; &lt;launch_file_name/&gt;
  </textPath>
</text>
<text class="mandala-ring mandala-accent-1" dy="100" textLength="2010" style="letter-spacing: -2px; word-spacing: 8px;">
  <textPath class=" text-on-path animate-colors2" href="#singleCircle" style="font-family: 'Comic Sans MS', sans-serif; ">
    .     [INFO] [launch]: Default logging verbosity is set to INFO       .
  </textPath>
</text>
<text class="mandala-ring mandala-accent-1" dy="150" textLength="2010" style="letter-spacing: -2px; word-spacing: 8px;">
  <textPath class=" text-on-path" href="#singleCircle" style="font-family: 'Comic Sans MS', sans-serif;  ">
    &lt;node pkg="turtlesim" exec="mimic" name="mimic"&gt;
  </textPath>
</text>
<text class="mandala-ring mandala-accent-1 " dy="180" textLength="2010" style="letter-spacing: -2px; word-spacing: 8px;">
  <textPath class=" text-on-path animate-colors1" href="#singleCircle" style="font-family: 'Comic Sans MS', sans-serif; ">
     .                ros2 launch turtlesim_mimic_launch.py                                       .
  </textPath>
</text>





      </svg>
    </div>
  </div>
</span>

    <div class="mx-auto max-w-7xl px-6 lg:px-8" style="z-index: 10;">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl gradient-text-left">together, we shape the future of robotics
        </h2>
        <p class="mt-6 text-2xl leading-8 text-gray-300">Creating a collaborative platform for robotics enthusiasts,
          beginners, and professionals to learn, innovate, and share</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">

          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Get Inspired</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Imagine</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Hone your skils</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Develop</dd>
          </div>
          <div class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">Inspire Others</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">Simulate</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup  lang="ts">


</script>

<style scoped>
span {
  display: block;
  height: 40em;
  left: calc(50% - 5em);
  position: absolute;
  top: calc(50% - 20em);
  width: 40em;
}


.mandala-container {
  position: relative;
}

.mandala-translate {
  transform: rotate(0deg); /* Adjust as needed for the initial rotation */
  transition: transform 10s linear; /* Smooth rotation effect */
}

.mandala {
  height: 100%;
  width: 100%;
  
}



.mandala-ring {
  font-family: 'Comic Sans MS', cursive, sans-serif; /* A fun, playful font */
  font-size: 20px; /* Adjust size as desired */
  fill: #80757a; /* A bright, attention-grabbing color */
  opacity: 0.5;
  
}

.animate-colors1 {
  animation: colorChange1 5s infinite alternate;
}
.animate-colors2 {
  animation: colorChange2 5s infinite alternate;
}

@keyframes colorChange1 {
  0% { fill: #c6c6c61f; }
  100% { fill: #7c7781; }
}
@keyframes colorChange2 {
  0% { fill: #F39200; }
  100% { fill: #E71D73; }
}

@keyframes spinccw {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(-360deg);
  }
}

@keyframes spincw {
  0% { transform: rotateZ(0); }
  100% { transform: rotateZ(360deg); }
}

.mandala-ring {
  transform-origin: 337.5px 337.5px;
}

.mandala-ring:nth-child(odd) {
  animation: spincw 80s linear infinite;
}

.mandala-ring:nth-child(even) {
  animation: spinccw 150s linear infinite;
}

/* Default style */
.text-on-path {
  font-size: 2vw;
  letter-spacing: normal;
}

/* Smaller font and tighter letter spacing on smaller screens */
@media (max-width: 600px) {
  .text-on-path {
    font-size: 1vw;
    letter-spacing: -1px;
  }
}


</style>