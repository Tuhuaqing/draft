<template>
  <div class="dialogBox">
    <slot name="title">
      <div class="title">Title</div>
    </slot>
    <slot>
      <div class="content">Content</div>
    </slot>
    <div class="foot">
        <button class="btn btn_confirm">确定</button>
        <button class="btn btn_cancel">取消</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    .dialogBox{
        width: 100%;
        height: 89%;
        box-shadow: 1px 1px 10px lightgray;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        font-size: 13%;
        position: fixed;
        z-index: 9999;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: white;

        .title{
            width: 100%;
            height: 1rem;
            font-weight: bold;
            font-size: 0.15rem;
            border-bottom: 1px solid lightgray;
            padding: 0.11rem;
            text-align: center;
            line-height: 0.2rem;
        }
        .content{
            padding: 0.12rem;
            font-size: 0.12rem;
        }
        .foot{
            width: 100%;
            height: 0.4rem;
            position:absolute;
            bottom: 0;
            border: 1px solid red;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .btn{
                width: 1.5rem;
                height: 0.3rem;
                padding: 0.1rem;
                line-height: 0.1rem;
                border: 1px solid red;
                color: red;
            }
        }
    }
</style>