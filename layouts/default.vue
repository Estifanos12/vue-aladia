<script setup lang="ts">
import { useTemplateRef } from "vue";
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
      <MoleculesOverlay
        v-if="modalStore.showModal"
        :handleClick="handleClick"
        ref="containerRef"
      >
        <div>
          <OrganismJoinUs v-if="!userStore.email.value" />
          <OrganismPasswordRecovery
            v-else-if="userStore.email.value === 'michael12gashaw@gmail.com'"
          />
          <OrganismSignUp v-else />
        </div>
      </MoleculesOverlay>
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
