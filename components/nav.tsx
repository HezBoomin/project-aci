import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function Nav() {
  return (
      <Navbar className=" pb-2 w-screen sticky top-0 z-50 ">
          <NavbarBrand>
              <Image
                  src="/ACI.png"
                  alt="/aci"
                  width={200}
                  height={200}

              />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem className="px-2">
                  <Link color="foreground" href="/">
                      Home
                  </Link>
              </NavbarItem>
              <NavbarItem className="px-2">
                  <Link color="foreground" href="/about">
                      About Us
                  </Link>
              </NavbarItem>
              <NavbarItem className="px-2">
                  <Link color="foreground" href="">
                      Socials
                  </Link>
              </NavbarItem>
          </NavbarContent>
      </Navbar>

  );
}