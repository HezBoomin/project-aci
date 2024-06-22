import {Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import Image from "next/image";

export default function Certification() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center pt-24 p-4">
                <div className="flex flex-col items-center justify-center w-full px-20 text-center py-8">
                    <h1 className="text-4xl ">Accreditation by KAN (national accreditation committee)</h1>
                </div>
                <Card className="w-[800px]">
                    <CardBody>
                        <div className="flex flex-col items-center justify-center w-full px-20 text-center pt-4">
                            <p className="text-md text-justify indent-8">
                                At The National Accreditation Committee (KAN) is an institution under and responsible to
                                the President of the Republic of Indonesia with the main task of providing accreditation
                                to
                                Conformity Assessment Institutions.
                            </p>
                                <br></br>
                                <br></br>
                            <p className="text-md text-justify indent-8">
                                KAN provides accreditation to Certification Institutions, Laboratories, Inspection
                                Institutions,
                                Proficiency Test Providers and Reference Material Producers. KAN is a full member of the
                                Asia Pacific Accreditation Cooperation – APAC, International Accreditation Forum – IAF,
                                and International Laboratory Accreditation Cooperation – ILAC.
                                <br></br>
                                <br></br>
                            </p>
                            <p className="text-md text-justify indent-8">
                                KAN received international recognition through the IAF / APAC Multilateral Recognition
                                Arrangement (MLA) for accreditation of Quality Management System Certification
                                Institutions,
                                Environmental Management System Certification Institutions, Product Certification
                                Institutions and Food Safety Management System Certification Institutions, as well as
                                Person Certification
                                Institutions
                            </p>
                            <Divider/>
                            <div className="flex flex-row pt-5 items-start w-full">
                                <div className="flex flex-col">
                                    <Image
                                        alt="sertif"
                                        className="object-cover items-start"
                                        src="/sertif.png"
                                        width={300}
                                        height={300}
                                    />
                                    <p>Meeting with Director of KAN, <br></br>6 May 2024</p>
                                </div>
                                <div className="flex flex-col flex-wrap items-center">
                                    <h1 className="text-xl pl-8">KAN (National Accreditation Committee)</h1>
                                    <hr className="w-72 ml-8"></hr>
                                    <div className="flex flex-col items-start pt-2">
                                        <p> ACI Indonesia Western Chapter</p>
                                        <p> - Person Certification Institutions</p>
                                        <p> - SNI ISO/IEC 17024 by KAN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                {/*<div className="flex flex-wrap justify-center pt-4">*/}
                {/*    <Image*/}
                {/*        alt="leadership-training"*/}
                {/*        className="object-cover"*/}
                {/*        src="/leadership.png"*/}
                {/*        width={800}*/}
                {/*        height={800}*/}
                {/*    />*/}
                {/*</div>*/}
            </main>
        </>
    );
}
