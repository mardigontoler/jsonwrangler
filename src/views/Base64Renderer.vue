<template>
  <div>
    <h1>Base 64 Renderer</h1>
    <div>

    </div>
    <div class="flex-container">
      <textarea v-model="currentImageText" class="base64area"></textarea>
      <img v-bind:src="currentImageText" class="renderedImage">
    </div>
  </div>
</template>

<script>
export default {
  name: "Base64Renderer",
  data() {
    return {
      currentImageText: ""
    }
  }
}
</script>

<style scoped>

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

}

.base64area {
  resize: none;
  width: 50%;
}

.renderedImage {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

</style>
