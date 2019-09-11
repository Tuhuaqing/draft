<template>
  <div class="box">
    <div class="weui-cells__title">hello title</div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">身份证号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input txt-r" type="number" placeholder="输入身份证" />
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">身份证号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input txt-r" type="number" placeholder="输入身份证" />
        </div>
        <div class="weui-cell__ft">
          <button class="weui-btn weui-btn__mini weui-btn__primary" @click="selectBirth">按钮</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 'hello',
      result: {}
    }
  },
  methods: {
    selectBirth() {
      this.$weui.picker([
        {
          label: '飞机票',
          value: 1,
          children: [{
              label: '头等舱',
              value: 1
          },{
              label: '经济舱',
              value: 2
          }]
        },
        {
          label: '轮船票',
          value: 2
        }
      ], {
          defaultValue: [1],
          onConfirm: (res) => {
              this.result = res[0]
              console.log(this.result)
          }
      })
    }
  }
}
</script>

<style lang="scss">
.txt-r {
  text-align: right;
}
</style>