<template>
  <div class="slider">
    <div
      class="slide"
      v-for="(image, index) in images"
      :key="index"
      :style="{ backgroundImage: `url(${image})` }"
      :class="{ active: index === currentIndex }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/images/1.jpg",
        "/images/2.jpg",
        "/images/3.jpg",
        "/images/4.png",
        "/images/5.jpg"
      ],
      currentIndex: 0
    };
  },
  mounted() {
    this.startSlider();
  },
  methods: {
    startSlider() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 3000);
    },
  }
};
</script>

<style scoped>
.slider {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
}
.slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: opacity 1s ease-in-out;
    opacity: 0;
}
.slide.active {
    opacity: 1;
}
</style>