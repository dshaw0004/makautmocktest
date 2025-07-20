<<<<<<< HEAD:src/components/FloatingTabMenu.tsx
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
=======
import {NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle} from "~/components/ui/navigation-menu";
>>>>>>> main:app/components/FloatingTabMenu.tsx

export default function FloatingTabMenu() {
  return (
    <NavigationMenu className="w-[90%] lg:w-[60%] fixed bottom-4 left-[50%] translate-x-[-50%] px-10 py-3 z-50 bg-white border-4 border-gray-200 rounded-full shadow-lg">
      <NavigationMenuList>
<<<<<<< HEAD:src/components/FloatingTabMenu.tsx
        <NavigationMenuItem className="lg:mx-4 border-b-2 border-blue-400">
          <NavigationMenuLink
            href="/home"
            className={`${navigationMenuTriggerStyle()} flex flex-1 flex-col items-center justify-end gap-1 text-[#7e756d] text-lg lg:text-xl`}
          >
            <div
              className="text-[#161413] flex h-8 items-center justify-center text-2xl"
              data-icon="House"
              data-size="24px"
              data-weight="fill"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36px"
                height="36px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#161413]  font-medium leading-normal tracking-[0.015em]">
              Home
            </p>
=======

        <NavigationMenuItem className="lg:mx-4 border-b-2 border-blue-400">
          <NavigationMenuLink href="/home" className={`${navigationMenuTriggerStyle()} flex flex-1 flex-col items-center justify-end gap-1 text-[#7e756d] text-lg lg:text-xl`}>
            <div className="text-[#161413] flex h-8 items-center justify-center text-2xl" data-icon="House" data-size="24px" data-weight="fill">
              <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#161413]  font-medium leading-normal tracking-[0.015em]">Home</p>
>>>>>>> main:app/components/FloatingTabMenu.tsx
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="lg:mx-4">
<<<<<<< HEAD:src/components/FloatingTabMenu.tsx
          <NavigationMenuLink
            href="/tests"
            className={`${navigationMenuTriggerStyle()} just flex flex-1 flex-col items-center justify-end gap-1 text-[#7e756d]`}
          >
            <div
              className="text-[#7e756d] flex h-8 items-center justify-center"
              data-icon="ListBullets"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path>
              </svg>
            </div>
            <p className="text-[#7e756d] text-xs font-medium leading-normal tracking-[0.015em]">
              Tests
            </p>
=======
          <NavigationMenuLink href="/tests" className={`${navigationMenuTriggerStyle()} just flex flex-1 flex-col items-center justify-end gap-1 text-[#7e756d]`}>
            <div className="text-[#7e756d] flex h-8 items-center justify-center" data-icon="ListBullets" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M80,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8,8,0,0,1,80,64Zm136,56H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM44,52A12,12,0,1,0,56,64,12,12,0,0,0,44,52Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,44,180Z"></path>
              </svg>
            </div>
            <p className="text-[#7e756d] text-xs font-medium leading-normal tracking-[0.015em]">Tests</p>
>>>>>>> main:app/components/FloatingTabMenu.tsx
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="lg:mx-4">
<<<<<<< HEAD:src/components/FloatingTabMenu.tsx
          <NavigationMenuLink
            href="/history"
            className={`${navigationMenuTriggerStyle()} just flex flex-1 flex-col items-center justify-end gap-1 text-[#7e756d]`}
          >
            <div
              className="text-[#757575] flex h-8 items-center justify-center"
              data-icon="ClockCounterClockwise"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
              </svg>
            </div>
            <p className="text-[#757575] text-xs font-medium leading-normal tracking-[0.015em]">
              History
            </p>
=======
          <NavigationMenuLink href="/history" className={`${navigationMenuTriggerStyle()} just flex flex-1 flex-col items-center justify-end gap-1 text-[#7e756d]`}>
            <div className="text-[#757575] flex h-8 items-center justify-center" data-icon="ClockCounterClockwise" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z"></path>
              </svg>
            </div>
            <p className="text-[#757575] text-xs font-medium leading-normal tracking-[0.015em]">History</p>
>>>>>>> main:app/components/FloatingTabMenu.tsx
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="lg:mx-4">
<<<<<<< HEAD:src/components/FloatingTabMenu.tsx
          <NavigationMenuLink
            href="/profile"
            className={`${navigationMenuTriggerStyle()} just flex flex-1 flex-col items-center justify-end gap-1 text-[#7e756d]`}
          >
            <div
              className="text-[#7e756d] flex h-8 items-center justify-center"
              data-icon="User"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <p className="text-[#7e756d] text-xs font-medium leading-normal tracking-[0.015em]">
              Profile
            </p>
          </NavigationMenuLink>
        </NavigationMenuItem>
=======
          <NavigationMenuLink href="/profile" className={`${navigationMenuTriggerStyle()} just flex flex-1 flex-col items-center justify-end gap-1 text-[#7e756d]`}>
            <div className="text-[#7e756d] flex h-8 items-center justify-center" data-icon="User" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
              </svg>
            </div>
            <p className="text-[#7e756d] text-xs font-medium leading-normal tracking-[0.015em]">Profile</p>
          </NavigationMenuLink>
        </NavigationMenuItem>

>>>>>>> main:app/components/FloatingTabMenu.tsx
      </NavigationMenuList>
    </NavigationMenu>
  );
}
<<<<<<< HEAD:src/components/FloatingTabMenu.tsx
=======

>>>>>>> main:app/components/FloatingTabMenu.tsx
