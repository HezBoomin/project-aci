"use client";
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardFooter, CardBody, Divider, Link, Image } from "@nextui-org/react";

interface Gallery {
    img: string;
}

export default function Gallery() {
    const [sertifikasi1, setCerti1] = useState<Gallery[]>([]);
    const [sertifikasi2, setCerti2] = useState<Gallery[]>([]);
    const [presiden, setPresident] = useState<Gallery[]>([]);

    useEffect(() => {
        const fetchCerti1 = async () => {
            const res = await fetch('/api/sertifikasi1');
            const data = await res.json();
            setCerti1(data);
        };

        const fetchCerti2 = async () => {
            const res = await fetch('/api/sertifikasi2');
            const data = await res.json();
            setCerti2(data);
        };

        const fetchPresident = async () => {
            const res = await fetch('/api/presiden');
            const data = await res.json();
            setPresident(data);
        };

        fetchCerti1();
        fetchCerti2();
        fetchPresident();
    }, []);
    return (
        <>
            <main className="flex min-h-screen flex-col items-center pt-24 p-4">
                <div className="flex flex-col items-center justify-center w-full px-20 text-center">
                    <h1 className="text-4xl font-bold text-red-900">Our Past Events</h1>
                    <div className="pt-12">
                        <Card  className="w-[1500px]">
                            <CardHeader className="flex flex-col justify-center items-center gap-3">
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-md font-bold text-red-900">SERTIFIKASI BATCH 1</p>
                                    <p className="text-small text-default-500">Tanggal 19 - 23 dan 24 Agustus</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <div className=" gap-24 grid grid-cols-5 sm:grid-cols-5 xs:grid-cols-2 px-8 py-4">
                                    {sertifikasi1.map((item, index) => (
                                        <div key={index} className="flex flex-col justify-center items-center">
                                            <Image
                                                radius="lg"
                                                alt="images"
                                                className="w-full h-[140px] object-cover"
                                                src={item.img}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="pt-12">
                        <Card className="w-[1500px]">
                            <CardHeader className="flex flex-col justify-center items-center gap-3">
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-md font-bold text-red-900">SERTIFIKASI BATCH 2</p>
                                    <p className="text-small text-default-500">Tanggal 27 dan 28 Oktober</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <div className=" gap-24 grid grid-cols-5 sm:grid-cols-5 xs:grid-cols-2 px-8 py-4">
                                    {sertifikasi2.map((item, index) => (
                                        <div key={index} className="flex flex-col justify-center items-center">
                                            <Image
                                                radius="lg"
                                                alt="images"
                                                className="w-full h-[140px] object-cover"
                                                src={item.img}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="pt-12">
                        <Card className="w-[1500px]">
                            <CardHeader className="flex flex-col justify-center items-center gap-3">
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-md font-bold text-red-900">SEMINAR PRESIDEN ACI</p>
                                </div>
                            </CardHeader>
                            <Divider/>
                            <CardBody>
                                <div className=" gap-24 grid grid-cols-5 sm:grid-cols-5 xs:grid-cols-2 px-8 py-4">
                                    {presiden.map((item, index) => (
                                        <div key={index} className="flex flex-col justify-center items-center">
                                            <Image
                                                radius="lg"
                                                alt="images"
                                                className="w-full h-[140px] object-cover"
                                                src={item.img}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="py-12">
                    <Card className="w-[1500px]">
                        <CardHeader className="flex flex-col justify-center items-center gap-3">
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-md font-bold text-red-900">SERTIFIKASI ANGKASA PURA</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody className="flex flex-col justify-center items-center">
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/YHb5nSCxvvA?si=VHAUk8y28P-gK5ds"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </CardBody>
                    </Card>
                </div>
            </main>
        </>
    );
}
