"use client";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import ContactBar from "@/components/contacbar/contactbar";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

import { usePathname } from "next/navigation";

const publicPages: string | string[] = [];

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const pathname = usePathname();
  let isPublicPage = false;
  // if (pathname === "/" || pathname === "/jobs") {
  //   isPublicPage = true;
  // }

  return (
    <ClerkProvider publishableKey="pk_test_c3RpcnJpbmctbW9uZ3JlbC0xMS5jbGVyay5hY2NvdW50cy5kZXYk">
      <html lang="en">
        <body className="light">
          {isPublicPage ? (
            <Component {...pageProps} />
          ) : (
            <>
              <SignedIn>
                <Navbar />
                <Component {...pageProps} />
                <ContactBar />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}

export default MyApp;
