<template>
  <div>
    <div class="container">
      <div class="page-header">
        <h1>路由组件的练习</h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <ul class="nav nav-stacked col-md-6" role="tablist">
          <li role="presentation" class="active">
            <router-link
              to="/home"
              aria-controls="home"
              role="tab"
              data-toggle="tab"
              >Home</router-link
            >
            <!-- <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a> -->
          </li>
          <li role="presentation">
            <router-link
              to="/about"
              aria-controls="about"
              role="tab"
              data-toggle="tab"
              >About</router-link
            >

            <!-- <a href="#About" aria-controls="About" role="tab" data-toggle="tab">About</a> -->
          </li>
        </ul>
        
        <div class="tab-content col-md-6">
          <keep-alive include="Home">
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped></style>
