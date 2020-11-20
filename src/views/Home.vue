<template>
  <div class="home">
    <JsonWrangler></JsonWrangler>
  </div>
</template>

<script>
// @ is an alias to /src
import JsonWrangler from "@/components/JsonWrangler";

export default {
  name: 'Home',
  components: {
    JsonWrangler
  }
}
</script>
