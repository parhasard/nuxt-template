<template>
    <div class="scaled-container">
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const scaleFactor = ref(1.3); // 130% zoom
</script>

<style>
html {
  background-color: black;
}


.scaled-container {
  transform: scale(1.3);
  transform-origin: top center; /* This ensures scaling happens from the top center */
  width: 77%; /* Adjust the width to prevent horizontal overflow */
  margin: 0 auto; /* Center the content horizontally */
  overflow: auto; /* In case the content overflows, enable scrolling */
}
.gradient-text-left {
  background: linear-gradient(45deg, #4bb8a6,#085ba0 );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.gradient-text-right {
  background: linear-gradient(45deg,#085ba0, #4bb8a6 );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.gradient-text-1 {
  background: linear-gradient(45deg,#fafafa, #4bb8a6 );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}



</style>