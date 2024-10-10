import { reactive } from "vue";

export enum PasswordStrength {
  Weak = "Weak",
  Medium = "Medium",
  Strong = "Strong",
}

const initialUserState = {
  email: {
    value: "",
    error: "",
    hasError: false,
  },
  name: {
    value: "",
    error: "",
    hasError: false,
  },
  surname: {
    value: "",
    error: "",
    hasError: false,
  },
  password: {
    value: "",
    error: "",
    strength: "",
    hasError: false,
  },
  confirmPassword: {
    value: "",
    error: "",
    hasError: false,
  },

  agreeTerms: {
    value: true,
    hasError: false,
  },
};

export const userStore = reactive({ ...initialUserState });

export const resetUserStore = () => {
  Object.assign(userStore, {
    email: { value: "", hasError: false, error: "" },
    name: { value: "", hasError: false, error: "" },
    surname: { value: "", hasError: false, error: "" },
    password: { value: "", hasError: false, error: "", strength: 0 },
    confirmPassword: { value: "", hasError: false, error: "" },
    agreeTerms: { value: false, hasError: false },
  });
};

export const modalStore = reactive({
  showModal: false,
});
