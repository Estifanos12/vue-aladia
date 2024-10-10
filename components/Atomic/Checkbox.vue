<script setup lang="ts">
interface CheckboxProps {
  checked: boolean;
  handleClick?: () => void;
}

const props = defineProps<CheckboxProps>();
</script>

<template>
  <div
    class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50 hover:border-white"
    bis_skin_checked="1"
  >
    <i
      @click="props.handleClick"
      class="fa-solid fa-check text-sm"
      :class="props.checked ? 'text-white' : 'text-black/50'"
    ></i>
  </div>
</template>
