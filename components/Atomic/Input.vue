<script setup lang="ts">
interface InputProps {
  type: string;
  placeholder: string;
  iconClass?: string;
  errorMsg?: string;
  hasError?: boolean;
  className?: string;
}

const { className, errorMsg, hasError, placeholder, iconClass, type } =
  defineProps<InputProps>();

const emit = defineEmits(["response"]);
const input = ref("");
const inputClassName = computed(() => {
  return className
    ? `group relative flex w-full ${className}`
    : "group relative mb-8 flex h-10 w-full rounded transition-all bg-white text-black";
});
const showPassword = ref(false);

watch(input, () => {
  emit("response", input.value);
});
</script>

<template>
  <div
    :class="
      hasError ? `${inputClassName} border border-red-500` : inputClassName
    "
    bis_skin_checked="1"
  >
    <!----> 
    <div
      v-if="iconClass"
      class="flex w-10 items-center justify-center text-xl"
      bis_skin_checked="1"
    >
      <i :class="iconClass"></i>
    </div>
    <input
      :type="type === 'password' && showPassword ? 'text' : type"
      class="h-full flex-1 w-full rounded bg-transparent text-sm focus:outline-none transition-all"
      :class="iconClass ? '' : 'pl-3'"
      autocomplete="off"
      v-model="input"
      :placeholder="placeholder"
    />

    <i
      v-if="type === 'password'"
      class="fa-solid absolute right-3 top-[0.5rem] scale-100 cursor-pointer text-base text-black/50 transition-all active:scale-90"
      :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"
      @click="showPassword = !showPassword"
    ></i>

    <div
      class="absolute -bottom-6 left-0 pb-1 text-xs text-[#E54E4E]"
      bis_skin_checked="1"
      v-if="errorMsg"
    >
      {{ errorMsg }}
    </div>
  </div>
</template>
