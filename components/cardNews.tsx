import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function News() {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="relative border-none group overflow-hidden transition-shadow duration-300 ease-in-out"
        >
            <Image
                alt="News1"
                className="object-cover"
                height={200}
                src="new1.jpg"
                width={400}
            />
            <CardFooter
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-black">Read More</p>
            </CardFooter>
        </Card>
    );
}