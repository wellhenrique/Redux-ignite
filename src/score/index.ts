import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    userState: () => ({
      id: 1,
      name: "Joao da penha",
      email: "joao@email.com.br",
    }),
  },
});
