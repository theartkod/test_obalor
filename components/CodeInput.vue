<template>
  <div class="code-input-wrap">
    <div class="code-input">
      <input
        v-for="(item, index) in code"
        :key="index"
        :ref="`codeInput${index}`"
        v-model="code[index]"
        class="code-input__part"
        :clearable="false"
        @paste="pasteHandler($event)"
        @keypress="preventInput($event, index)"
        @input="handlerInput($event, index)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    codeLength: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      code: new Array(this.codeLength).fill('')
    }
  },
  watch: {
    code() {
      this.$emit('input', this.code.join(''))
    }
  },
  mounted() {
    this.insertNumbers(this.value)
  },
  methods: {
    preventInput(e, index) {
      const regexp = /[0-9]/gi
      if (this.code[index] !== '' || e.key.match(regexp) === null) {
        e.preventDefault()
      }
    },
    handlerInput(e, index) {
      if (index < this.code.length - 1 && e.data) {
        this.$refs[`codeInput${index + 1}`][0].focus()
      }
      if (index > 0 && !e.data) {
        this.$refs[`codeInput${index - 1}`][0].focus()
      }
    },
    insertNumbers(string = '') {
      const extractedNumber = string
        .replace(/\D/g, '')
        .substring(0, this.code.length)
      const codeFromNumbers = extractedNumber ? extractedNumber.split('') : []
      codeFromNumbers.forEach((chr, index) => {
        this.code[index] = chr
        this.$forceUpdate()
      })
    },
    pasteHandler(e) {
      const stringFromClipboard = e.clipboardData.getData('text/plain')
      this.insertNumbers(stringFromClipboard)
      this.$emit('input', this.code.join(''))
      e.preventDefault()
    }
  }
}
</script>
