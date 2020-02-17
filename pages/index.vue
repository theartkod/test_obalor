<template>
  <div>
    <button
      class="form-modal__submit"
      style="max-width: 300px"
      @click="isShowModal = true"
    >
      Регистрация
    </button>
    <modal
      v-if="isShowModal"
      @close="isShowModal = false"
    >
      <keep-alive>
        <component
          :is="currentView"
          :phone="phone"
          @confirm-code="confirmCodeHandler"
          @change-phone="changePhoneHandler"
        />
      </keep-alive>
    </modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import Auth from '@/components/parts/Auth'
import SmsConfirm from '@/components/parts/SmsConfirm'

export default {
  components: { Auth, Modal, SmsConfirm },
  data() {
    return {
      isShowModal: false,
      phone: '',
      currentView: 'Auth'
    }
  },
  methods: {
    changePhoneHandler() {
      this.currentView = 'Auth'
    },
    confirmCodeHandler(phone) {
      this.phone = phone
      this.currentView = 'SmsConfirm'
    }
  }
}
</script>
