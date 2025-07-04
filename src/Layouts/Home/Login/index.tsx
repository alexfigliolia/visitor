"use client";
import { useRouter } from "next/navigation";
import { useCallback, useId } from "react";
import { BottomSheet } from "@figliolia/bottom-sheet";
import { Suspended } from "HOCs/Suspended";
import { useSearchParamToggle } from "Hooks/useSearchParamToggle";
import { AppleIcon } from "Icons/AppleIcon";
import { GoogleIcon } from "Icons/Google";
import { Propless } from "Types/React";
import "./styles.scss";

export const LOGIN_QUERY_PARAM = "login";

export const Login = Suspended((_: Propless) => {
  const titleID = useId();
  const router = useRouter();
  const { open, toggle } = useSearchParamToggle(LOGIN_QUERY_PARAM);

  const toFeed = useCallback(() => {
    router.push("/feed");
  }, [router]);

  return (
    <BottomSheet
      dim
      notch
      open={open}
      className="login-sheet"
      close={toggle.close}
      aria-labelledby={titleID}>
      <h2 id={titleID}>Login</h2>
      <p>Join your community</p>
      <div className="actions">
        <button onClick={toFeed} aria-label="Login with Apple">
          Apple <AppleIcon />
        </button>
        <button onClick={toFeed} aria-label="Login with Google">
          Google <GoogleIcon />
        </button>
      </div>
    </BottomSheet>
  );
});
