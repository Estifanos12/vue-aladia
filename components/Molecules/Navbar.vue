<script setup lang="ts">
import { modalStore } from "~/store/store";

const handleModal = () => {
  modalStore.showModal = true;
};
</script>

<template>
  <div
    class="fixed left-0 right-0 top-0 z-[60] flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2"
    bis_skin_checked="1"
  >
    <div class="flex items-center gap-4 md:pl-20" bis_skin_checked="1">
      <div
        class="flex h-8 w-8 items-center text-white justify-center"
        bis_skin_checked="1"
      >
        <i class="fa-solid fa-house"></i>
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center"
      bis_skin_checked="1"
    >
      <div
        id="search"
        class="w-3/5 sm:w-1/3 group/input pointer-events-auto relative h-full rounded-md pt-2 transition-all text-white"
        bis_skin_checked="1"
      >
        <div
          class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm"
          data-v-2f5a6ce3=""
          bis_skin_checked="1"
        >
          <div
            class="group-hover/input:scale-110 shrink-0 cursor-pointer text-lg transition-all"
            data-v-2f5a6ce3=""
            bis_skin_checked="1"
          >
            <i
              class="fa-solid fa-magnifying-glass text-xs"
              data-v-2f5a6ce3=""
            ></i>
          </div>
          <AtomicInput
            type="search"
            value=""
            maxlength="100"
            role="presentation"
            autocomplete="new-password"
            className="h-full w-0 flex-1 bg-transparent text-13 outline-none"
            placeholder="Search courses..."
            data-v-2f5a6ce3=""
          />
          <!-- <input
            
          /> -->
          <div
            class="relative z-20 shrink-0 cursor-pointer text-sm text-[#707070] hover:text-[#ffffff]"
            data-v-2f5a6ce3=""
            bis_skin_checked="1"
          >
            <i
              style="display: none"
              class="fa-solid fa-circle-xmark"
              data-v-2f5a6ce3=""
            ></i>
          </div>
          <div
            class="bg-gradient-top absolute bottom-0 left-0 right-0 h-[1px] w-full"
            data-v-2f5a6ce3=""
            bis_skin_checked="1"
          ></div>
        </div>
        <!---->
      </div>
    </div>
    <div bis_skin_checked="1">
      <div bis_skin_checked="1">
        <AtomicButton
          :onClick="handleModal"
          variant="golden"
          label="Join Us"
          iconClass="fa-solid fa-user-plus"
        />
        <div
          class="el-overlay"
          bis_skin_checked="1"
          style="z-index: 2001; display: none"
        >
          <div
            aria-modal="true"
            aria-labelledby="el-id-1024-0"
            aria-describedby="el-id-1024-1"
            class="!w-[65%] el-drawer rtl"
            role="dialog"
            bis_skin_checked="1"
            style="width: 30%"
          >
            <span class="el-drawer__sr-focus" tabindex="-1"></span
            ><!--v-if--><!--v-if--><!--v-if-->
          </div>
        </div>
        <div
          class="el-overlay"
          bis_skin_checked="1"
          style="z-index: 2002; display: none"
        >
          <div
            aria-modal="true"
            aria-labelledby="el-id-1024-2"
            aria-describedby="el-id-1024-3"
            class="!w-[100%] el-drawer rtl"
            role="dialog"
            bis_skin_checked="1"
            style="width: 30%"
          >
            <span class="el-drawer__sr-focus" tabindex="-1"></span
            ><!--v-if--><!--v-if--><!--v-if-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-gradient-top {
  background: transparent
    linear-gradient(90deg, transparent, #fff 50%, transparent) 0 0 no-repeat
    padding-box;
}
.gradient[data-v-df211d4a] {
  background: transparent
    linear-gradient(
      134deg,
      #bf953f,
      #fcf6ba 22%,
      #b38738 52%,
      #fbf6b7 79%,
      #aa771c
    )
    0 0 no-repeat padding-box;
}
</style>
