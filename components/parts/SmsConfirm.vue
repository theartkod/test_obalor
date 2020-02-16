<template>
  <form class="form-modal" @submit.prevent="submitHandler">
    <div class="form-modal__title">
      Введите код
    </div>
    <label class="code-input__desc">
      Мы отправили код на +7 (960) 409-97-36
      <a href="#" class="code-input__desc-link" @click.prevent="$emit('change-phone')">Изменить</a>
    </label>
    <code-input
      v-model="code"
    />
    <div class="error-text"></div>
    <div class="form-modal__send-code">
      <button
        v-if="showLink"
        class="form-modal__send-code-link"
        type="button"
        @click="showLink = false"
      >
        Отправить код еще раз
      </button>
      <countdown
        v-else
        ref="countdown"
        :time="60000"
        :emit-events="true"
        @end="showLink = true"
      >
        <template slot-scope="props">
          <template>
            Получить новой код можно
            через {{ props.minutes }}:{{ props.seconds }}
          </template>
        </template>
      </countdown>
    </div>
  </form>
</template>

<script>
import CodeInput from '../CodeInput'
export default {
  name: 'SmsConfirm',
  components: { CodeInput },
  data() {
    return {
      code: '',
      showLink: false,
      time: 600000
    }
  },
  methods: {}
}
</script>
