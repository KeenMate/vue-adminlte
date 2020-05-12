<template>
  <textarea ref="textarea"></textarea>
</template>

<script>
import "AdminLTE/plugins/summernote/summernote-bs4.min"

export default {
  name: "SummernoteEditor",
  mounted() {
    $(this.$refs.textarea).summernote()
  }
}
</script>
