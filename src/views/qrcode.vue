<template>
  <div class="box">
    <qrcode-vue :value="shareUrl" :size="200" class="qrcode" id="picture" ref="code"></qrcode-vue>
    <a-button type="primary" @click="down"></a-button>
  </div>
</template>

<script>
import qrcode from 'qrcode'
export default {
  components: {
    qrcode
  },
  data() {
    return {
      shareUrl: 'https://www.baidu.com'
    }
  },
  methods: {
    down() {
      //找到canvas标签
      let myCanvas = document
        .getElementById('picture')
        .getElementsByTagName('canvas')
      //创建一个a标签节点
      let a = document.createElement('a')
      //设置a标签的href属性（将canvas变成png图片）
      a.href = myCanvas[0]
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream')
      //设置下载文件的名字
      a.download = '班级二维码'
      //点击
      a.click()
      //弹出提示
      this.$message({ message: '亲，正在进行下载保存', type: 'warning' })
    }
  }
}
</script>

<style>
</style>