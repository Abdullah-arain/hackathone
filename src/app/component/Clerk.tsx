'use client'
import React from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
// import { Button } from '@/components/ui/Button';
import { Button } from "@/components/ui/button";

export default function Clerk() {
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);
  return (
    <div className="flex flex-col items-end ml-auto">
      {!isSignedIn && 
      (<SignInButton>
      <Button>
        SignIn
      </Button>
      </SignInButton>)}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
