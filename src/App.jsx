import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import GeneradorRecibo from "./paginas/GeneradorRecibo";
export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
          <GeneradorRecibo />
      </SignedIn>
    </header>
  );
}