<script setup lang="ts">
interface OverlayProps {
  handleClick?: (e: Event) => void;
}

const props = defineProps<OverlayProps>();
const overlayRef = ref(null);

defineExpose({ overlayRef });
</script>

<template>
  <div
    class="absolute top-0 left-0 w-full h-full z-[999] grid place-items-center bg-black/30 backdrop-blur-lg"
    @click="props.handleClick"
    ref="overlayRef"
  >
    <slot />
  </div>
</template>
