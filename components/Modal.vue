<template>
  <div class="modal">
    <div class="modal__inner">
      <button
        class="modal__inner-close"
        @click="$emit('close')"
      >
        <close-icon />
      </button>
      <slot />
    </div>
  </div>
</template>

<script>
import closeIcon from '@/assets/icons/close.svg'

export default {
  name: 'Modal',
  components: {
    closeIcon
  }
}
</script>
