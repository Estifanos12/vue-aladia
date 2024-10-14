<script setup lang="ts">
import { resetUserStore, PasswordStrength, userStore } from "~/store/store";

const checked = ref(false);

type ActionType = "email" | "name" | "surname" | "password" | "confirmPassword";

const handleInputChange = (value: string, actionType: ActionType) => {
  if (value === "") {
    userStore[actionType].hasError = true;
    userStore[actionType].value = "";
    userStore[actionType].error = "(*) Required";
  } else {
    userStore[actionType].hasError = false;
    userStore[actionType].value = value;
    userStore[actionType].error = "";
  }

  if (actionType === "password") {
    if (
      // for strong password
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(value)
    ) {
      userStore.password.strength = PasswordStrength.Strong;
    } else if (
      /^(?=.*[A-Za-z])(?=.*\d).+$/.test(value) ||
      /^(?=.*[A-Za-z])(?=.*[^A-Za-z0-9]).+$/.test(value) ||
      /^(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(value)
    ) {
      userStore.password.strength = PasswordStrength.Medium;
    } else {
      userStore.password.strength = PasswordStrength.Weak;
    }

    if (value.length < 8) {
      userStore.password.hasError = true;
      userStore.password.error = "8 characters minimum";

      return;
    }

    if (value === value.toLowerCase()) {
      userStore.password.hasError = true;
      userStore.password.error = "At least one uppercase letter";

      return;
    }
  }

  if (actionType === "confirmPassword") {
    if (value !== userStore.password.value) {
      userStore.confirmPassword.hasError = true;
      userStore.confirmPassword.error = "Passwords do not match";
    } else {
      userStore.confirmPassword.hasError = false;
      userStore.confirmPassword.error = "";
    }
  }
};

function handleSignup() {
  if (!checked.value) {
    userStore.agreeTerms.hasError = true;
    userStore.agreeTerms.value = false;

    return;
  }

  console.log(userStore);
}
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
      <!---->
      <div bis_skin_checked="1">
        <div
          class="next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95 text-white"
          bis_skin_checked="1"
          @click="resetUserStore"
        >
          <div
            class="inline-flex items-center justify-center pt-0.5 rotate-180"
            bis_skin_checked="1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="octicon arrow-symbol-mktg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill="currentColor"
                d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
              ></path>
              <path
                class="octicon-chevrow-stem"
                stroke="currentColor"
                d="M1.75 8H11"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
          Back to Log in
        </div>
        <div class="flex flex-col items-center px-4" bis_skin_checked="1">
          <MoleculesSignUpHeader />

          <div class="mb-4 flex items-center gap-2" bis_skin_checked="1">
            <AtomicCheckbox
              :checked="checked"
              :handleClick="
                () => {
                  checked = !checked;
                  userStore.agreeTerms.value = checked;
                }
              "
            />
            <div
              :class="
                userStore.agreeTerms.hasError ? 'text-red-500' : 'text-white'
              "
              bis_skin_checked="1"
            >
              I accept
              <span class="underline"> Terms &amp; Conditions </span>
              and <span class="underline"> Privacy Policy </span>
            </div>
          </div>
          <div class="mb-4 text-center text-xs text-white" bis_skin_checked="1">
            Enter your details
          </div>
          <div
            class="group relative mb-6 flex h-10 w-full rounded bg-white"
            bis_skin_checked="1"
          >
            <!---->
            <AtomicInput
              placeholder="Name"
              iconClass="fa-solid fa-user text-base text-black/70"
              type="text"
              @response="(value) => handleInputChange(value, 'name')"
              :hasError="userStore.name.hasError"
              :errorMsg="userStore.name.error"
            />
            <!---->
          </div>
          <div
            class="group relative mb-6 flex h-10 w-full rounded bg-white"
            bis_skin_checked="1"
          >
            <!---->
            <AtomicInput
              placeholder="Surname"
              iconClass="fa-solid fa-user text-base text-black/70"
              type="text"
              @response="(value) => handleInputChange(value, 'surname')"
              :hasError="userStore.surname.hasError"
              :errorMsg="userStore.surname.error"
            />
            <!---->
          </div>
          <div
            class="group relative mb-6 flex h-10 w-full rounded bg-[#A8A8A8]"
            bis_skin_checked="1"
          >
            <!---->
            <div
              class="flex w-10 items-center justify-center text-xl"
              bis_skin_checked="1"
            >
              <i class="fa-solid fa-envelope text-base text-black/70"></i>
            </div>
            <input
              disabled=""
              maxlength="100"
              class="h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all placeholder:text-black"
              autocomplete="new-password"
              type="text"
              :placeholder="userStore.email.value"
            /><!----><!---->
          </div>
          <div
            class="group relative mb-1 flex h-10 w-full rounded bg-white"
            bis_skin_checked="1"
          >
            <AtomicInput
              placeholder="Password"
              iconClass="fa-solid fa-key text-base text-black/70"
              type="password"
              @response="(value) => handleInputChange(value, 'password')"
              :hasError="userStore.password.hasError"
              :errorMsg="userStore.password.error"
            />
          </div>
          <div
            class="flex h-4 w-full items-center justify-between text-xs mb-2"
            bis_skin_checked="1"
          >
            <div bis_skin_checked="1"></div>
            <div class="w-36 flex justify-start">
              <div
                class="h-1.5 rounded-lg"
                :class="{
                  'bg-red-500 w-[20%]':
                    userStore.password.strength === PasswordStrength.Weak,
                  'bg-yellow-500 w-[60%]':
                    userStore.password.strength === PasswordStrength.Medium,
                  'bg-green-500 w-full':
                    userStore.password.strength === PasswordStrength.Strong,
                }"
                bis_skin_checked="1"
              >
                <div
                  class="h-full rounded transition-all duration-300 w-0"
                  bis_skin_checked="1"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="group relative mb-6 flex h-10 w-full rounded bg-white"
            bis_skin_checked="1"
          >
            <!---->
            <AtomicInput
              placeholder="Confirm Password"
              iconClass="fa-solid fa-key text-base text-black/70"
              type="password"
              @response="(value) => handleInputChange(value, 'confirmPassword')"
              :hasError="userStore.confirmPassword.hasError"
              :errorMsg="userStore.confirmPassword.error"
            />
            <!---->
          </div>
          <AtomicButton
            variant="primary"
            label="Enter"
            :onClick="handleSignup"
            :hasError="
              userStore.name.hasError ||
              userStore.surname.hasError ||
              userStore.password.hasError ||
              userStore.confirmPassword.hasError ||
              !userStore.name.value ||
              !userStore.surname.value ||
              !userStore.password.value ||
              !userStore.confirmPassword.value ||
              !userStore.agreeTerms.value
            "
          />
          <div
            class="cursor-pointer text-center text-white/40"
            bis_skin_checked="1"
          >
            Terms &amp; Conditions
          </div>
        </div>
      </div>
      <!----><!----><!----><!---->
    </div>
  </div>
</template>

<style>
.arrow-symbol-mktg {
  transform: translate(0);
  transition: transform 0.2s;
}
.arrow-symbol-mktg path:last-child {
  stroke-dasharray: 10;
  stroke-dashoffset: 10;
  transition: stroke-dashoffset 0.2s;
}
</style>
