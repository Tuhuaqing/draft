
    <template>
  <div>
    <article class="stackedlist">
      <div :key="f__index" v-for="(f__value,f__key,f__index) in flist" :class="listkind+__flist">
        <header :class="listkind+__f" @click="showslist(f__key,f__index)">{{f__key}}</header>
        <article
          :key="s__index"
          v-show="ssonshow[f__index]"
          :class="listkind+__slist"
          v-for="(s__value,s__key,s__index) of f__value"
        >
          <header
            :class="listkind+__s"
            @click="showtlist(s__key,f__key,s__index,f__index)"
          >{{s__key}}</header>
          <article :class="listkind+__tlist">
            <p
              :key="t__index"
              :class="listkind+__t"
              v-for="(t__value,t__key,t__index) of s__value"
              @click="select(t__key)"
              v-show="tsonshow[f__index][s__index]"
            >{{t__key}}</p>
          </article>
        </article>
      </div>
    </article>
  </div>
</template>



<script>
export default {
  props: ['listkind', 'flist'],
  data() {
    return {
      ssonshow: [],
      tsonshow: [],
    }
  },
  methods: {
    showslist: function (f__key, f__index) {
      this.$emit('getflist', 2, f__key)
      this.ssonshow[f__index] = true
      this.tsonshow[f__index] = []
    },
    showtlist: function (s__key, f__key, s__index, f__index) {
      this.$emit('getslist', 3, s__key, f__key)
      this.tsonshow[f__index][s__index] = !(!!this.tsonshow[f__index][s__index])
    },
    select: function (t__key) {
      this.$emit('passvalue', t__key)
    }
  }
}
</script>
    
