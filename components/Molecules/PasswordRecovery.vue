<script setup lang="ts">
import { resetUserStore, userStore } from "~/store/store";
</script>

<template>
  <div
    class="relative -mt-20 flex h-full md:h-[40rem] w-[350px] md:w-[26rem] flex-col rounded-md border border-white/10 bg-black opacity-0 backdrop-blur transition-all duration-300"
    bis_skin_checked="1"
    style="margin-top: 0px; opacity: 1"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-70"
      bis_skin_checked="1"
    >
      <div
        class="bg-gradient-top absolute -top-[1px] left-0 right-0 h-[1px]"
        bis_skin_checked="1"
      ></div>
      <div
        class="bg-gradient-top absolute -bottom-[1px] left-0 right-0 h-[1px]"
        bis_skin_checked="1"
      ></div>
      <div
        class="bg-gradient-left absolute -left-[1px] bottom-0 top-0 w-[1px]"
        bis_skin_checked="1"
      ></div>
      <div
        class="bg-gradient-left absolute -right-[1px] bottom-0 top-0 w-[1px]"
        bis_skin_checked="1"
      ></div>
    </div>
    <div class="relative z-10 h-full p-5 text-13" bis_skin_checked="1">
      <!----><!----><!---->
      <div class="flex h-full flex-col pb-6" bis_skin_checked="1">
        <div
          class="group relative mb-6 flex cursor-pointer justify-center font-semibold"
          bis_skin_checked="1"
          @click="resetUserStore"
        >
          <div class="group-hover:hidden text-white" bis_skin_checked="1">
            Password Recovery
          </div>
          <div
            class="hidden text-white/50 group-hover:flex"
            bis_skin_checked="1"
          >
            Back to Log in
          </div>
          <div class="absolute left-0" bis_skin_checked="1">
            <i
              class="fa-solid fa-arrow-left before:content text-white/50 transition-all group-hover:text-white"
            ></i>
          </div>
        </div>
        <div
          class="mb-6 flex items-center gap-6 rounded border border-red-600 px-4 py-6"
          bis_skin_checked="1"
        >
          <div class="flex w-32 justify-center" bis_skin_checked="1">
            <img src="~/public/google.svg" class="h-20 w-20 object-contain" />
          </div>
          <div class="flex-1 text-white" bis_skin_checked="1">
            <div class="mb-2 text-base font-semibold" bis_skin_checked="1">
              Add a new password
            </div>
            <div class="text-13 text-white/70" bis_skin_checked="1">
              Your account uses <br /><span class="capitalize">google</span>
              Sign-in. <br />
              Add a new password.
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col px-6" bis_skin_checked="1">
          <div class="leading-none text-white/70" bis_skin_checked="1">
            <div
              class="text-sm font-semibold text-white/70"
              bis_skin_checked="1"
            >
              Recovery link sent to:
            </div>
            <div class="text-xs font-light italic" bis_skin_checked="1">
              {{ userStore.email.value }}
            </div>
          </div>
          <div
            class="flex flex-1 items-center justify-between gap-6"
            bis_skin_checked="1"
          >
            <img
              src="https://develop.aladia.io/_nuxt/image.ChQ3biW9.png"
              class="h-20 w-20 object-cover"
            />
            <div class="flex flex-col items-center gap-3" bis_skin_checked="1">
              <i class="fa-solid text-white fa-arrow-right text-xl"></i
              ><img
                src="data:image/svg+xml,%3csvg%20width='48'%20height='34'%20viewBox='0%200%2048%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2022'%20opacity='0.6'%3e%3cpath%20id='Union'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M37.309%203.885L23.7397%2018.8413L10.1704%203.885H37.309ZM41.3597%203.885C41.3286%203.91929%2041.2971%203.95399%2041.2652%203.98913L25.2209%2021.6734C24.5288%2022.4363%2024.1827%2022.8177%2023.7397%2022.8177C23.2967%2022.8177%2022.9507%2022.4363%2022.2585%2021.6734L6.21421%203.98913L6.21419%203.98911C6.18232%203.95398%206.15083%203.91928%206.11975%203.885H5.36023C4.25566%203.885%203.36023%204.78043%203.36023%205.885V28.6172C3.36023%2029.7218%204.25566%2030.6172%205.36022%2030.6172H42.1206C43.2251%2030.6172%2044.1206%2029.7218%2044.1206%2028.6172V5.885C44.1206%204.78043%2043.2251%203.885%2042.1206%203.885H41.3597ZM42.6518%200.912893C45.1635%201.17815%2047.1206%203.30302%2047.1206%205.885V28.6172C47.1206%2031.3787%2044.882%2033.6172%2042.1206%2033.6172H5.36022C2.5988%2033.6172%200.360229%2031.3787%200.360229%2028.6172V5.885C0.360229%203.3036%202.31645%201.1791%204.82731%200.913068C5.24797%200.671204%206.03628%200.64778%207.27962%200.645511L7.28514%200.645499C7.41677%200.645267%207.55351%200.645266%207.69543%200.645266L39.784%200.645264C39.9259%200.645264%2040.0626%200.645264%2040.1943%200.645496L40.1998%200.645508C41.4428%200.647776%2042.2311%200.67119%2042.6518%200.912893Z'%20fill='url(%23paint0_linear_318_751)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_318_751'%20x1='23.9999'%20y1='0.999878'%20x2='23.9999'%20y2='39.4999'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23373333'/%3e%3cstop%20offset='1'%20stop-color='%237C7C7C'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
                class="h-10 object-contain"
              />
            </div>
            <img
              src="data:image/svg+xml,%3csvg%20width='55'%20height='75'%20viewBox='0%200%2055%2075'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='Vector'%20opacity='0.6'%20d='M13.2501%2029.0097V29.1097H13.3501H48.2411C49.0523%2029.1097%2049.8557%2029.2719%2050.6053%2029.5869C51.3549%2029.902%2052.0361%2030.3639%2052.6099%2030.9463C53.1838%2031.5286%2053.6391%2032.2201%2053.9497%2032.9812C54.2604%2033.7423%2054.4203%2034.5581%2054.4203%2035.3819V67.7194C54.4203%2069.3834%2053.7689%2070.9789%2052.6099%2072.1551C51.4509%2073.3312%2049.8794%2073.9917%2048.241%2073.9917H6.27918C4.64083%2073.9917%203.06929%2073.3312%201.91035%2072.1551C0.751369%2070.9789%200.1%2069.3834%200.1%2067.7194V35.3822C0.1%2033.7181%200.751399%2032.1226%201.91044%2030.9463C3.06943%2029.7702%204.64104%2029.1097%206.27945%2029.1097H7.40356H7.50356V29.0097V20.5626C7.50356%209.75405%2015.764%200.581119%2026.3963%200.118872L26.3964%200.11887C29.8817%20-0.0347026%2033.345%200.751297%2036.4339%202.39701C39.5229%204.04273%2042.1274%206.48949%2043.9823%209.48854L43.9828%209.48932C44.1975%209.82945%2044.3362%2010.2133%2044.3889%2010.6138C44.4417%2011.0144%2044.4072%2011.4218%2044.2881%2011.8073C44.1689%2012.1928%2043.968%2012.5471%2043.6994%2012.8451C43.431%2013.143%2043.1015%2013.3774%2042.7343%2013.5321C42.7342%2013.5321%2042.7341%2013.5321%2042.734%2013.5322L42.4278%2013.6596C42.4276%2013.6597%2042.4274%2013.6598%2042.4273%2013.6598C41.8271%2013.9016%2041.1622%2013.9208%2040.5496%2013.7139C39.9367%2013.507%2039.4151%2013.0871%2039.077%2012.5277L39.0762%2012.5264C37.7554%2010.4162%2035.9093%208.69673%2033.724%207.54181C31.5388%206.3869%2029.0919%205.83744%2026.6303%205.949C19.0733%206.28687%2013.2501%2012.8729%2013.2501%2020.5387V29.0097ZM33.291%2062.4359H33.4268L33.3865%2062.3062L30.2816%2052.2987C31.4411%2051.6324%2032.3557%2050.6005%2032.8858%2049.3588C33.4267%2048.092%2033.5369%2046.6787%2033.199%2045.3415C32.8611%2044.0043%2032.0943%2042.8189%2031.0191%2041.9722C29.9438%2041.1256%2028.6214%2040.6659%2027.26%2040.6659C25.8987%2040.6659%2024.5762%2041.1256%2023.501%2041.9722C22.4257%2042.8189%2021.659%2044.0043%2021.3211%2045.3415C20.9832%2046.6787%2021.0933%2048.092%2021.6342%2049.3588C22.1643%2050.6005%2023.0789%2051.6324%2024.2385%2052.2987L21.1337%2062.3062L21.0935%2062.4359H21.2292H33.291Z'%20fill='url(%23paint0_linear_318_755)'%20stroke='%23383434'%20stroke-width='0.2'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_318_755'%20x1='27.2601'%20y1='0'%20x2='27.2601'%20y2='74.0917'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%236F6363'/%3e%3cstop%20offset='1'%20stop-color='%238A8A8A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
              class="h-20 object-cover"
            />
          </div>

          <AtomicButton variant="primary" class="mt-auto" label="Send Link" />
        </div>
      </div>
    </div>
  </div>
</template>
