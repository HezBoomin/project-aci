"use client";
import {Tabs as TabsNextUI, Tab as TabNextUI, Card, CardBody,  Image} from "@nextui-org/react";
export default function About() {
    return (
        <>
            <main className=" flex min-h-screen pt-16 items-center flex-col">
                <h1 className="text-3xl"> About Us</h1>
                <div className="py-8">
                    <Card className="w-[800px]">
                        <CardBody>
                            <div className="flex ">
                                <Image
                                    src="/ACI.png"
                                    alt="/aci"
                                    width={700}
                                    height={600}
                                />
                                <Image
                                    className="pt-16"
                                    src="/about-aci/wic.jpg"
                                    alt="/wic"
                                    width={350}
                                    height={400}
                                />
                            </div>
                            <div className="flex flex-col z-40 ">
                                <p className="pl-4">ESTABLISHED by 31 HAKI members (Indonesian Society of Civil and
                                    Structural
                                    Engineers) and was
                                    approved on <br></br>September 8th.,2023
                                    <br></br>
                                    <br></br>
                                    GEOGRAPHIC BOUNDARIES:
                                    <br></br>
                                    10 Provinces in Sumatera Island: Nanggroe Aceh Darussalam, North Sumatera, West
                                    Sumatera, Riau,
                                    Riau Islands, Jambi, <br></br>Bengkulu, South Sumatera, Bangka Belitung, Lampung.
                                    <br></br>
                                    5 Provinces in Java Island: West Java, Banten, DKI Jakarta, DI Yogyakarta, Central
                                    Java.
                                    <br></br>
                                    5 Provinces in Kalimantan Island: Central Kalimantan, East Kalimantan, South
                                    Kalimantan, West
                                    Kalimantan, North Kalimantan.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <h1 className="text-3xl"> Our Purpose</h1>
                <div className="py-8">
                    <Card className="w-[800px]">
                        <CardBody>
                            <div className="flex justify-center z-40 ">
                                <p className="pl-4 text-justify indent-8">
                                    The purpose of the Chapter is to further the chartered objectives for which American
                                    Concrete Institute, a Michigan nonprofit corporation (“ACI”), was organized; to further
                                    education and technical practice, scientific investigation, and research by organizing
                                    the efforts of its Members for a nonprofit, public service in gathering, correlating,
                                    and disseminating information for the improvement of the design, construction, manufacture,
                                    use, and maintenance of concrete products and structures.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </main>
        </>
    )
}