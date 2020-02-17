<template>
  <form class="form-modal" @submit.prevent="submitHandler" @keyup.enter="submitHandler">
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
      placeholder="+7 (___)-___-__-__"
      type="text"
      name="phone"
      class="form-modal__phone"
      :class="{ 'form-modal__phone--error': showPhoneError.length > 0 } "
      :mask="phoneMask"
      :guide="false"
    />

    <button
      class="form-modal__submit"
      :disabled="showPhoneError.length > 0 && phone.length || isLoading"
      type="submit"
    >
      <template v-if="!isLoading">
        Продолжить
      </template>
      <template v-else>
        Подождите...
      </template>
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
import {
  PHONE_ERROR,
  VALID_PHONE_LENGTH,
  PHONE_MASK
} from '@/assets/globalConst'

export default {
  name: 'Auth',
  data() {
    return {
      phone: '',
      phoneError: '',
      showPhoneError: '',
      isLoading: false,
      phoneMask: PHONE_MASK
    }
  },
  watch: {
    phone: function() {
      if (this.phone.length < VALID_PHONE_LENGTH) {
        this.showPhoneError = PHONE_ERROR
      } else {
        this.showPhoneError = ''
      }
    }
  },
  methods: {
    submitHandler() {
      if (this.phone) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.$emit('confirm-code', this.phone)
        }, 2000)
      } else {
        this.showPhoneError = PHONE_ERROR
      }
    }
  }
}
</script>
