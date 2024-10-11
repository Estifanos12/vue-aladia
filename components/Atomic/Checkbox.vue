<script setup lang="ts">
interface CheckboxProps {
  checked: boolean;
  handleClick?: () => void;
  label?: string;
  disabled?: boolean;
}

const props = defineProps<CheckboxProps>();
const onClick = () => {
  if (props.handleClick) {
    props.handleClick();
  }
};
</script>

<template>
  <div class="flex flex-row justify-center items-center">
    <div
      class="flex h-4 w-4 cursor-pointer items-center justify-center rounded border pt-0.5 transition-all border-white/50  me-1"
      :class="props.disabled ? '': 'hover:border-white'"
      bis_skin_checked="1"
    >
      <i
        @click="onClick"
        class="fa-solid fa-check text-sm"
        :class="[props.checked ? 'text-white' : 'text-black/50', props.disabled ? 'opacity-50 pointer-events-none' : '']"
      ></i>
    </div>
    <span class="text-sm text-white" v-if="label !== ''">{{ props.label }}</span>
  </div>
</template>
