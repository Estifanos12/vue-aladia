<script setup lang="ts">
import { useTemplateRef, onMounted } from "vue";
import { modalStore, resetUserStore, userStore } from "~/store/store";

useHead({
  title: "Aladia",
});

const overlayRef = useTemplateRef("overlay-ref");

const handleClick = (e) => {
  if (e.target === overlayRef.value) {
    modalStore.showModal = false;
    resetUserStore();
  }
};
</script>

<template>
  <div class="min-h-screen w-full relative">
    <MoleculesNavbar />
    <slot />

    <div
      class="absolute top-0 left-0 w-full h-full z-[999] grid place-items-center bg-black/30 backdrop-blur-lg"
      v-if="modalStore.showModal"
      @click="handleClick"
      ref="overlay-ref"
    >
      <div ref="modal-ref">
        <MoleculesJoinUs v-if="!userStore.email.value" />
        <MoleculesPasswordRecovery
          v-else-if="userStore.email.value === 'michael12gashaw@gmail.com'"
        />
        <MoleculesSignUp v-else />
      </div>
    </div>
  </div>
</template>
