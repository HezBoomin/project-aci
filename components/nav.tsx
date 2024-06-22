"use client";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,
    Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  return (
      <Navbar className=" pb-2 w-screen sticky top-0 z-50 bg-blue-400">
          <NavbarBrand>
              <Image
                  src="/ACI.png"
                  alt="/aci"
                  width={200}
                  height={200}

              />
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem className="px-2 ">
                  <Link className="text-white" color="foreground" href="/">
                      Home
                  </Link>
              </NavbarItem>
              <NavbarItem className="px-2">
                  <Dropdown>
                      <DropdownTrigger>
                          <Link className="text-white" color="foreground">
                              About Us
                          </Link>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                          <DropdownItem key="WIC" href="/about/western-indonesia-chapter">Western Indonesia Chapter</DropdownItem>
                          <DropdownItem key="BO" href="/about/board-and-officers">Board and Officers</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </NavbarItem>
              <NavbarItem className="px-2">
                  <Dropdown>
                      <DropdownTrigger>
                          <Link className="text-white" color="foreground">
                              Events
                          </Link>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                          <DropdownItem key="WIC" href="/activities/certification">Certification</DropdownItem>
                          <DropdownItem key="LT" href="/activities/leadership-training">Leadership Training</DropdownItem>
                          <DropdownItem key="KAN" href="/activities/certification">Accreditation by KAN</DropdownItem>
                          <DropdownItem key="SC" href="/activities/student-activities">Universitas Indonesia Student Chapter Activities</DropdownItem>
                      </DropdownMenu>
                  </Dropdown>
              </NavbarItem>
              <NavbarItem className="px-2 ">
                  <Link className="text-white" color="foreground" href="/membership">
                      Membership
                  </Link>
              </NavbarItem>
              <NavbarItem className="px-2 ">
                  <Link className="text-white" color="foreground" href="/student-chapter">
                      Student Chapter
                  </Link>
              </NavbarItem>
              <NavbarItem className="px-2 ">
                  <Link className="text-white" color="foreground" href="/gallery">
                      Gallery
                  </Link>
              </NavbarItem>
              <NavbarItem className="px-2">
                  <Link className="text-white" color="foreground" href="/contact-us">
                      Contact Us
                  </Link>
              </NavbarItem>
          </NavbarContent>
      </Navbar>

  );
}