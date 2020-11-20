<template>
  <div>
    <div class="col-1">
      <label>
        <textarea v-model="unparsedJson" class="jsonArea"></textarea>
      </label>
    </div>
    <div class="col-2">
      <button v-on:click="escapeAndParse" class="middle-button"><span class="button-text">Escape & Parse</span></button>
    </div>
    <div class="col-3">
      <label>
        <textarea v-model="parsedJson" class="jsonArea" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
      </label>
    </div>
  </div>

</template>

<script>
export default {
  name: "Json Wrangler",
  data() {
    return {
      'unparsedJson' : `"{\\"x\\":\\"y\\"}"`,
      'parsedJson': `{
  "x": "y"
}`
    }
  },
  methods: {
    escapeAndParse: function() {
      console.log('parsing ...');
      let currentParsed;
      try {
        currentParsed = JSON.parse(this.unparsedJson);
      } catch (e) {
        console.log(e);
      }
      let keepParsing = true;
      while(keepParsing) {
        try {
          currentParsed = JSON.parse(currentParsed);
          console.log('parsed again ... ');
        } catch (e) {
          console.log('Cannot parse anymore.');
          keepParsing = false;
        }
      }
      this.parsedJson = JSON.stringify(currentParsed, null, 2);
    }
  }
}

</script>

<style scoped>

* {
  box-sizing: border-box;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

.col-1 {
  width: 45%;
}

.col-2 {
  width: 10%;
}

.col-3 {
  width: 45%;
}

.button-text {
  overflow: hidden;
  display: block;
  max-width: 100%;
}

.middle-button {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.jsonArea{
  height: 500px;
  resize: none;
  float: left;
  width: 100%;
  border: 1px solid #e0a855;
}


@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}

</style>