"use client";
import {Tabs as TabsNextUI, Tab as TabNextUI, Card, CardBody,  Image} from "@nextui-org/react";
export default function About() {
    return (
        <>
            <main className=" flex min-h-screen pt-24 items-center flex-col">
                <h1 className="text-4xl pb-4">About Us</h1>
                <TabsNextUI aria-label="Options">
                    <TabNextUI key="backgrounds" title="BACKGROUND">
                        <Card className="w-[800px]">
                            <CardBody>
                                <h1 className="font-bold">BACKGROUND</h1>
                                <br></br>
                                <br></br>
                                Non-metallic fiber-reinforced polymer (FRP) composite materials have been used for
                                several decades, where FRP bars as internal reinforcement in new concrete and masonry
                                structures have aroused great interest in the structural engineering community,
                                increasing their use in the last decade.
                                <br></br>
                                <br></br>
                                The availability of guidelines and standards have driven the use of FRP in both
                                existing and new infrastructures. These documents provide requirements and
                                recommendations for the design and proper use of FRP in various structures.
                                In addition to being useful for structural engineers, the standards and guides are
                                useful for contractors, inspectors and auditors. However, despite the advances gained
                                with decades of experience, projects, and development of guides and standards,
                                lack of knowledge about the advantages and limitations of FRP conditions its use,
                                in addition to potentially resulting in inappropriate uses of the material.
                            </CardBody>
                        </Card>
                    </TabNextUI>
                    <TabNextUI key="outcomes" title="LEARNING OUTCOMES">
                        <Card className="w-[800px]">
                            <CardBody>
                                <h1 className="font-bold">LEARNING OUTCOMES</h1>
                                <br></br>
                                <br></br>
                                This three-part seminar will cover the following learning outcomes.
                                The first part “Revolutionizing Green Concrete with non-metallic FRP reinforcement”
                                (Francisco De Caso) will describe how non-metallics can enable the use of concrete in
                                different ways to improve its sustainability and allow engineers to rethink green
                                concrete.
                                <br></br>
                                <br></br>
                                The second part titled “The Performance of Spun Pile-Pile cap Connection Repair using
                                FRP Bar”
                                (Mulia Orientilize) will present the results of research regarding the application of
                                FRP bars
                                in repairing joints between pile cap and spun pile.
                                <br></br>
                                <br></br>
                                The third part titled “The ACI 440.11-22 CODE for Structural Concrete Reinforced with
                                Glass Fiber-Reinforced Polymer (GFRP) Bars” (Francisco De Caso) will introduce recently
                                published guidelines and standards for ACI 440 and ASTM D30.10 including documents in
                                development.
                                The trends and use cases of FRP composite reinforcement materials in new constructions,
                                as well as the advantages and limitations will be presented.
                            </CardBody>
                        </Card>
                    </TabNextUI>
                    <TabNextUI key="biography" title="PRESENTER SHORT BIOGRAPHY">
                        <Card className="w-[800px]">
                            <CardBody>
                                <h1 className="font-bold">PRESENTER SHORT BIOGRAPHY</h1>
                                <br></br>
                                <br></br>
                                <div className="flex-row">
                                    <Image
                                        src="/cowo.png"
                                        alt="cowo"
                                        width={200}
                                        height={200}
                                    />
                                    <br></br>
                                    <div className="flex flex-col">
                                        <p>ACI Member Francisco De Caso received his MEng from the University of Bath,
                                            in
                                            UK,
                                            and his PhD from the University of Miami, Florida USA, where he is a
                                            Principal
                                            Scientist
                                            at the College of Engineering. His applied research work is focused on
                                            resilient
                                            material and structural systems for the built infrastructure; as well as the
                                            decarbonization of the concrete and cement industry to reach carbon
                                            neutrality
                                            by 2050. He is actively involved in technology transfer as Associate
                                            Director
                                            of the Center for Integration of Composites into Infrastructure (CICI), an
                                            national
                                        </p>
                                        <br></br>
                                        <br></br>
                                        <p>Science Foundation Industry/University cooperative research center, and
                                            Manager
                                            of the Structures and Materials Laboratory, an ISO 17025 accredited
                                            laboratory,
                                            and ISO 17020 inspection body, specialized in evaluating and certifying
                                            non-metallic
                                            composite materials for building code and infrastructure compliance. Dr. De
                                            Caso
                                            is a member of ACI Committees 130, 135, 364 and 440.
                                        </p>
                                        <br></br>
                                        <br></br>
                                        <p>
                                            As an active member of numerous professional organizations, Dr. De Caso is
                                            dedicated to the development and review of test methods, standards,
                                            guidelines
                                            and codes in the areas of materials and structures. He is chair of ASTM
                                            D30.10
                                            committee on Composites for Civil Structures, involved with International
                                            Code
                                            Council Evaluation Service (ICC-ES), American Society of Civil Engineers
                                            (ASCE);
                                            and most recently was appointed member in the Committee on Codes and
                                            Standards
                                            Advocacy and Outreach (CSAO) of the American Concrete Institute (ACI).
                                        </p>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="flex-row">
                                    <Image
                                        src="/cewe.png"
                                        alt="cewe"
                                        width={200}
                                        height={200}
                                    />
                                    <br></br>
                                    <div className="flex flex-col">
                                        <p>
                                            ACI Member Mulia Orientilize received his MEng from the Nanyang Technological
                                            University in Singapore, and his Doctoral Degree from the University of Indonesia.
                                            She is a permanent teaching staff at the Department of Civil Engineering,
                                            Faculty of Engineering, University of Indonesia. Her research interest are
                                            structural repair issues, especially regarding pile foundation repair, as well
                                            as the application of Performance Based Design in foundation design
                                        </p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </TabNextUI>
                </TabsNextUI>
            </main>
        </>
    )
}