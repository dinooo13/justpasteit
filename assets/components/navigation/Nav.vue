<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="this.img" alt="" width="30" height="24" class="d-inline-block align-text-top">
        justpasteit
      </a>
    </div>
  </nav>
</template>

<script>
import logoPath from '../../img/justpasteit.png';

export default {
  data () {
    return {
      img: logoPath
    }
  },
}
</script>