<template>
  <div class="jobs">
    <div class="info info__job">
      <span class="pretip">职业</span>
      <input
        type="text"
        class="answer"
        v-model="jobselected"
        placeholder="请选择职业"
        @click.prevent="togglejobbox(true,$event)"
      />
    </div>
    <div class="jobbox--curtain" v-show="jobboxonshow">
      <div class="jobbox">
        <header>
          <p class="jobbox__header">查询职业类别</p>
          <div class="jobbox__close" @click="togglejobbox(false,$event)">+</div>
        </header>
        <input
          class="jobbox__search"
          type="text"
          placeholder="搜索职业"
          @input="showsearchresult"
          v-model="searchname"
        />
        <stacked-list
          v-show="!searchname.trim()"
          :listkind="listkind"
          :flist="flist"
          @passvalue="selectjob"
          @getflist="getflist"
          @getslist="getslist"
        ></stacked-list>
        <article class="jobbox__searchresult" v-show="searchname.trim()">
          <p
            :key="searchresult"
            class="jobbox__searchresult__item"
            v-for="(securitylevel,searchresult) in searchresults"
          >
            <span class="jobbox__searchresult__item__job">{{searchresult}}</span>
            <span class="jobbox__searchresult__item__level">{{securitylevel}}</span>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import stackedList from './stackedList'

export default {
  props: ['jobselected', 'flist'],
  components: {
    stackedList
  },
  data: function () {

    return {

      jobboxonshow: false,

      searchname: '',

      listkind: 'jobbox',

      searchresults: {}
    }
  },
  methods: {
    togglejobbox: function (ifshow, e) {
      e.target.blur()
      this.jobboxonshow = ifshow ? true : false;
    },
    showsearchresult: function () {
      if (!this.searchname) {
        console.error('no searchname')
        return
      }
      var results = getJobSearchResult(this.searchname)
      this.searchresults = results

    },
    selectjob: function (jobvalue) {
      this.$emit('selectjob', jobvalue)
      this.jobboxonshow = false
    },
    getflist: function (level, f__key) {
      this.$emit('getflist', 2, f__key)
    },
    getslist: function (level, s__key, f__key) {
      this.$emit('getslist', 3, s__key, f__key)
    }
  }
}
</script>

<style>
</style>