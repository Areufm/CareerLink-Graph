﻿<template>
  <div class="card">
    <div class="terminal_toolbar">
      <div class="butt">
        <button class="btn btn-color"></button>
        <button class="btn"></button>
        <button class="btn"></button>
      </div>
      <p class="user">AI Recommendation</p>
      <div class="add_tab">+</div>
    </div>
    <div class="terminal_body">
      <div class="terminal_promt">
        <!-- <span class="terminal_user">AI建议：</span> -->
        <span class="terminal_bling element"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  new Typed(".element", {
    strings: [
      "针对欠缺的Vue、React、原生JS、小程序及jQuery技能，建议学习Vue和React的核心概念，实践组件化开发；巩固JS基础，熟悉DOM操作；了解小程序平台特性和API，动手开发小程序；虽jQuery使用逐渐减少，但仍可学习以增强DOM操作理解。注重实践与理论结合，参与项目以提升实战能力。",
      //   "Typed.js is awesome!",
    ],
    typeSpeed: 50,
    // loop: true,
    // backSpeed: 20,
    showCursor: false,
    // cursorChar: "_",
  });
});
</script>

<style scoped lang="scss">
.card {
  margin: 5px 0;
  height: 220px;
  // min-height: 220px;
  width: 100%;
  border: 1px rgb(181, 178, 178) solid;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  background: white;

  .terminal_toolbar {
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 8px;
    box-sizing: border-box;
    justify-content: space-between;

    .butt {
      display: flex;
      align-items: center;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-right: 5px;
        font-size: 8px;
        height: 12px;
        width: 12px;
        box-sizing: border-box;
        border: none;
        border-radius: 100%;
        background: linear-gradient(#7d7871 0%, #595953 100%);
        text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 1px 0px #41403a, 0px 1px 1px 0px #474642;

        &.btn-color {
          background: #ee411a;
        }

        &:hover {
          cursor: pointer;
        }

        &:focus {
          outline: none;
        }

        &--exit {
          background: linear-gradient(#f37458 0%, #de4c12 100%);
        }
      }
    }

    .add_tab {
      border: 1px solid #00000050;
      color: #00000050;
      padding: 0 6px;
      border-radius: 4px 4px 0 0;
      border-bottom: none;
      cursor: pointer;
    }

    .user {
      color: #000000;
      margin-left: 6px;
      font-size: 14px;
      line-height: 15px;
    }
  }

  .terminal_body {
    height: 100%;
    overflow-y: auto;
    flex: 1;
    padding-top: 20px;
    margin-top: -1px;

    .terminal_promt {
      display: flex;

      span {
        margin-left: 4px;
      }

      .terminal_user {
        color: #000000;
        width: 60px;
        font-size: 15px;
      }

      .terminal_bling {
        color: #000000;
        flex: 1;
        font-size: 15px;
        text-indent: 30px;
        padding: 0 20px;
      }
    }
  }
}
</style>
