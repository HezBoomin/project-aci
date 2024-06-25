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
        </Card>
    );
}