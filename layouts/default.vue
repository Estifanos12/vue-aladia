<script setup lang="ts">
import { useTemplateRef, onMounted } from "vue";
import { modalStore, resetUserStore, userStore } from "~/store/store";

useHead({
  title: "Aladia",
});

const containerRef = useTemplateRef("containerRef");

const handleClick = (e: Event) => {
  if (e.target === containerRef.value?.overlayRef) {
    modalStore.showModal = false;
    resetUserStore();
  }
};
</script>

<template>
  <div class="min-h-screen w-full relative">
    <MoleculesNavbar />
    <slot />

    <Transition>
      <AtomicOverlay
        v-if="modalStore.showModal"
        :handleClick="handleClick"
        ref="containerRef"
      >
        <div>
          <MoleculesJoinUs v-if="!userStore.email.value" />
          <MoleculesPasswordRecovery
            v-else-if="userStore.email.value === 'michael12gashaw@gmail.com'"
          />
          <MoleculesSignUp v-else />
        </div>
      </AtomicOverlay>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
