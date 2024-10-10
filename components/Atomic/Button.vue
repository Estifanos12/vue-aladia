<script setup lang="ts">
interface ButtonProps {
  variant: "primary" | "secondary" | "golden";
  label: string;
  onClick?: () => void;
  iconClass?: string;
  hasError?: boolean;
}
const props = defineProps<ButtonProps>();
</script>

<template>
  <!-- primary button -->
  <div
    data-v-2e6163a4=""
    class="relative flex h-10 w-full items-center text-white justify-center overflow-hidden rounded-md border border-white/0 bg-black text-center text-sm mb-6"
    bis_skin_checked="1"
    role="button"
    :class="{
      'opacity-50 pointer-events-none': props.hasError,
      'opacity-100': !props.hasError,
    }"
    @click="props.onClick"
    v-if="props.variant === 'primary'"
  >
    <div
      data-v-2e6163a4=""
      class="gradient absolute inset-0"
      bis_skin_checked="1"
    ></div>
    <div data-v-2e6163a4="" bis_skin_checked="1">{{ props.label }}</div>
  </div>

  <!-- golden button -->
  <div
    data-v-df211d4a=""
    class="group relative shrink-0 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded border px-3 py-2 text-sm leading-none transition-all hover:border-transparent active:scale-95"
    bis_skin_checked="1"
    @click="props.onClick"
    v-if="props.variant === 'golden'"
  >
    <div
      data-v-df211d4a=""
      class="absolute inset-0 z-0 flex h-full w-full items-center justify-center"
      bis_skin_checked="1"
    >
      <div
        data-v-df211d4a=""
        class="gradient h-0 w-0 rounded-full transition-all duration-200 group-hover:h-full group-hover:w-full group-hover:rounded"
        bis_skin_checked="1"
      ></div>
    </div>
    <div
      data-v-df211d4a=""
      class="relative text-white z-10 flex items-center justify-center gap-2 group-hover:text-black"
      bis_skin_checked="1"
    >
      <i data-v-df211d4a="" :class="props.iconClass"></i> {{ props.label }}
    </div>
  </div>
</template>
