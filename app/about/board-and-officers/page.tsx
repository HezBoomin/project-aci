"use client";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
export default function Officers() {
    const list = [
        {
            title: "Dr. –Ing. Josia I. Rastandi, S.T., M.T.",
            img: "/officers/josia.png",
            role: "President",
        },
        {
            title: "Dr. Ir. Daniel Rumbi Teruna, M.T.",
            img: "/officers/daniel.png",
            role: "Vice President",
        },
        {
            title: "Dr. Jessica Sjah",
            img: "/officers/jessica.png",
            role: "Secretary 1",
        },
        {
            title: "Dr. Bobby R. Indriyantho",
            img: "/officers/bobby.png",
            role: "Secretary 2",
        },
        {
            title: "Prasanti W. Sarli, Ph.D.",
            img: "/officers/prasanti.png",
            role: "Treasurer",
        },
        {
            title: "Dr. –Ing. Ediasjah Zulkifli",
            img: "/officers/avatar.svg.png",
            role: "Committee on Nominations",
        },
        {
            title: "Dr. Eng. Sukamta",
            img: "/officers/avatar.svg.png",
            role: "Audit Committee",
        },
        {
            title: "Dr. Ir. Nanang G. Wariyatno",
            img: "/officers/avatar.svg.png",
            role: "Membership Committee",
        },
        {
            title: "Patria Kusumaningrum, Ph.D",
            img: "/officers/avatar.svg.png",
            role: "Programs Committee",
        },
        {
            title: "Tri Suryadi, S.T., M.T.",
            img: "/officers/avatar.svg.png",
            role: "Education Committee",
        },
        {
            title: "Dr. Ivan Sandi Darma",
            img: "/officers/avatar.svg.png",
            role: "Certification Committee",
        },
        {
            title: "Dr. Siti Aisyah Nurjannah",
            img: "/officers/avatar.svg.png",
            role: "Awards Committee",
        },
        {
            title: "Nick Alexander, M.Sc.",
            img: "/officers/avatar.svg.png",
            role: "Media Committee",
        },
        {
            title: "Dr. Nuraziz Handika",
            img: "/officers/avatar.svg.png",
            role: "Student Activities Committee",
        },
        {
            title: "Dr. Bastian O. B. Sentosa",
            img: "/officers/avatar.svg.png",
            role: "Website Committee",
        },
    ];
    return (
        <>
            <main className=" flex min-h-screen pt-24 items-center flex-col">
                <h1 className="text-4xl pb-8 font-bold text-red-900"> Officers of ACI Western Indonesia Chapter</h1>
                <Card>
                    <CardBody>
                        <div className="gap-24 grid grid-cols-4 sm:grid-cols-3 px-8 py-4">
                            {list.map((item, index) => (
                                <div key={index} className="flex flex-col justify-center items-center">
                                    <Image
                                        radius="lg"
                                        alt={item.title}
                                        className="w-full h-[140px] object-cover"
                                        src={item.img}
                                    />
                                    <div className=" text-center mt-2">
                                        <b>{item.title}</b>
                                        <p className="text-default-500">{item.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            </main>
        </>
    )
}