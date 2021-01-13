<template>
  <footer class="app-footer">
    <div>
      <a class="footer-link" href="https://github.com/ViniciusKern/iferiados-vue" target="blank">GitHub</a>
      |
      <a class="footer-link" href="https://vuejs.org/" target="blank">Vue.js</a>
    </div>
    <div id="copyright">
      {{ copyrightText() }}
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    copyrightText() {
      return "Copyright © VK Apps " + new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
.app-footer {
  height: 60px;
  margin-top: 2em;
  padding: 0.6em;
  background-color: rgb(63, 63, 63);
  color: white;
}

.footer-link {
  color: white;

  &:hover {
    color: rgb(218, 218, 218);
  }
}

#copyright {
  font-size: 0.8em;
  padding-top: 1em;
}
</style>
