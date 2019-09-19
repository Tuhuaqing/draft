<template>
  <div class="box">
    <div class="weui-cells__title">hello title</div>
    <div class="weui-cells">
      <!-- 姓名 -->
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">姓名</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input txt-r" type="number" placeholder="输入姓名" />
        </div>
      </div>
      <!-- 身份证号 -->
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">身份证号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input txt-r" type="number" placeholder="输入身份证" />
        </div>
      </div>
      <!--  -->
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <label class="weui-label">买什么票</label>
        </div>
        <div class="weui-cell__bd">
          <input
            class="weui-input txt-r"
            type="text"
            placeholder="选择票类型"
            @click="selectJipiao"
            :value="person.piao"
          />
        </div>
      </div>
      <!--  -->
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <label class="weui-label">出生日期</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input txt-r" type="date" @click="selectBirth" :value="person.birth" />
        </div>
      </div>
      <!-- 证件类型 -->
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__hd">
          <label class="weui-label">证件类型</label>
        </div>
        <div class="weui-cell__bd">
          <input
            class="weui-input txt-r"
            type="text"
            @click="selectCardType"
            :value="person.cardType"
          />
        </div>
      </div>
      <!-- 性别 -->
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">性别</label>
        </div>
        <div class="weui-cell__bd txt-r">
          <input type="text" class="weui-input txt-r" placeholder="请选择" @click="selectSex" />
        </div>
      </div>
    </div>
    <!-- other -->
    <dialog-box></dialog-box>
  </div>
</template>

<script>
import jobs from '@/components/jobs'
import dialogBox from '@/components/dialogBox'
export default {
  components: {
    jobs,
    dialogBox
  },
  data() {
    return {
      id: 'hello',
      result: {},
      person: {
        birth: '',
        piao: '',
        cardType: ''
      }
    }
  },
  methods: {
    selectJipiao() {
      this.$weui.picker([
        {
          label: '飞机票',
          value: 1,
          children: [{
            label: '头等舱',
            value: 1
          }, {
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
        onConfirm: (r) => {
          this.person.piao = r[0].label
          console.log(r)
        }
      })
    },
    selectBirth() {
      this.$weui.datePicker({
        start: 1900,
        end: new Date().getFullYear(),
        defaultValue: [1999, 9, 25],
        onConfirm: (r) => {
          this.person.birth = this.$common.turnDatePicker(r)
        }
      })
    },
    selectCardType() {
      this.$weui.dialog({
        title: '选择吧',
        content: '类型1,类型2,类型3',
        content: '你好啊',
        buttons: [{
          label: '朕阅了',
          type: 'danger',
        }]
      })
    },
    citySelected(data) {
      console.log(data)
    },
    selectSex(e) {
      this.$weui.picker([{ label: '男', value: '1' }, {label: '女', value: '2'}],{
        defaultValue:[1],
        onConfirm: (r)=>{
          console.log(r)
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
// .cityPicker{
//   position: fixed;
//   top: 0;
//   z-index: 1000;
//   border:1px solid red;
// }
</style>