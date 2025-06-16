import { createContext, useState } from "react";

const UserProgressContext = createContext({
  pregress: "", // "cart", "checkout"
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, SetUserProgress] = useState("");
  function showCart() {
    SetUserProgress("cart");
  }
  function hideCart() {
    SetUserProgress("");
  }
  function showCheckout() {
    SetUserProgress("checkout");
  }
  function hideCheckout() {
    SetUserProgress("");
  }
  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
