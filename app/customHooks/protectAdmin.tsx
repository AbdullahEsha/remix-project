// just protect the admin route by adding the following code:

import { useEffect } from "react";

export function useProtectAdmin() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    }
  }, []);
}
