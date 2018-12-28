<template>
  <div class="card">
    <figure class="card__picture">
      <img
        :src="
          `data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg'     xmlns:xlink='http://www.w3.org/1999/xlink' style='width:100%; height:100%;' viewBox='0 0 255 178'  ><path fill='#d3d3d3' d='M-.7354-.3274h255v178h-255z'/><path fill='#${(
            '00000' +
            (
              (Math.random() * (1 << 24))
              | 0
            ).toString(16)
          ).slice(
            -6
          )}' d='M28.3188 125.9144L93.041 83.2756l93.6111 93.75-185 .5555z'/><ellipse cx='197.3896' cy='41.9093' fill='#c5c5c5' rx='27.8125' ry='27.8125'/></svg>`
        "
        alt=""
      />
    </figure>
    <!-- /.card card_picture -->
    <h3 class="card__header">
      <slot name="header">
        {{ heading || "Default heading" }}
      </slot>
    </h3>
    <!-- /.card card_header -->
    <div class="card__content">
      {{
        content ||
          `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, accusantium, natus fugit `
      }}
    </div>
    <!-- /.card card_content -->
  </div>
  <!-- /.card -->
</template>
<script>
export default {
  props: ["heading", "content"]
}
</script>
<style lang="scss" scoped>
@import "../shared/variables.scss";
.card {
  //border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  min-height: 200px;
  background: linear-gradient(
    10deg,
    #35495e,
    #41b883
  );
  width: 100%;
  padding: $m-base;
  color: #fff;
  text-align: left;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: $m-base;
}
.card__picture {
  margin: -21px;
  margin-bottom: 0px;
  max-height: 200px;
  height: 100vh;
  flex: 1 0 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.card__header {
  text-align: left;
  color: rgba(#ffffff, 0.9);
}
.card__content {
  color: rgba(#ffffff, 0.8);
}
</style>
