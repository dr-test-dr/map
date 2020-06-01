<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container class="container">
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <el-amap vid="amap">
            <el-amap-marker
              v-for="(marker,index) in markers"
              :vid="index"
              :key="index"
              :icon="marker.icon"
              :offset="marker.offset"
              :position="marker.position"
              :events="marker.events"
            ></el-amap-marker>
          </el-amap>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  date(){
     return {
       markers: []
     }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.container {
  display: flex;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  min-height: 860px;
  /* height: calc(100% - 60px) */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  min-height: 860px;
  /* width: 100%; */
  flex: 1;
}

/* body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  } */
</style>