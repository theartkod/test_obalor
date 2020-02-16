<template>
  <form class="form-modal" @submit.prevent="submitHandler">
    <div class="form-modal__title">
      Вход или регистрация
    </div>
    <label
      class="form-modal__label"
      for="phoneInput"
    >Номер телефона</label>
    <masked-input
      id="phoneInput"
      v-model="phone"
      type="text"
      name="phone"
      class="form-modal__phone"
      :mask="phoneMask"
      :guide="true"
    />

    <button class="form-modal__submit" type="submit">
      Продолжить
    </button>

    <div class="error-text">
      {{ showPhoneError }}
    </div>

    <div class="form-modal__agreement">
      Нажимая кнопку «Продолжить», я даю согласие на
      обработку моих персональных данных и принимаю
      настоящие
      <a href="#" target="_blank" rel="noopener">
        Соглашения
      </a>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      phone: '',
      phoneError: '',
      showPhoneError: '',
      phoneMask: [
        '+',
        '7',
        ' ',
        '(',
        /\d/,
        /\d/,
        /\d/,
        ')',
        '-',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/
      ]
    }
  },
  methods: {
    submitHandler() {
      if (this.phone) {
        this.$emit('confirm-code', this.phone)
      } else {
        this.showPhoneError = true
      }
    }
  }
}
</script>
