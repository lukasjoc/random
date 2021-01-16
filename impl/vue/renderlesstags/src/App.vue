<template>
  <div id="app">
    <Tags>
      <div
        slot-scope="{ tags, removeTag, inputAttrs, inputEvents }"
        class="tags-input"
      >
        <span class="tags-input-tag">
          <span v-for="(tag, index) in tags" :key="index">{{ tag }}</span>
          <button
            type="button"
            class="tags-input-remove"
            @click="removeTag(tag)"
          >
            &times;
          </button>
        </span>
        <input
          class="tags-input-text"
          placeholder="Add tag..."
          v-bind="inputAttrs"
          v-on="inputEvents"
        />
      </div>
    </Tags>
  </div>
</template>

<script>
import Tags from "./components/Tags.vue";

export default {
  name: "App",
  components: {
    Tags,
  },
  data() {
    return {
      tags: ["Pepega", "MonkaS"],
    };
  },
};
</script>

