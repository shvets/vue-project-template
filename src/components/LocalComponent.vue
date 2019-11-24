<template>
  <el-button :type="type">Local button</el-button>
</template>


<script>
  export default {
    props: {
      type: {
        default: 'primary',
        type: String
      }
    }
  }
</script>
