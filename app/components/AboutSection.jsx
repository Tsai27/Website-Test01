"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-2"> 
                <li>xxxx</li>
                <li>xxxx</li>
                <li>xxxx</li>
                <li>xxxx</li>
                <li>xxxx</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content: (
            <ul className="list-disc pl-2">
                <li>2222</li>
                <li>2222</li>
                <li>2222</li>
                <li>2222</li>
                <li>2222</li>
            </ul>
        )
    },
    {
        title:"Certification",
        id:"certification",
        content: (
            <ul className="list-disc pl-2">
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>  
            </ul>
        )
    },

]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");            {/* 默认哪个选项卡打开 */}
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {                   {/* 处理标签页（tab）切换 */}
        startTransition(() => {
            setTab(id);
        });
    };

    return(
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/646.jpg" alt = "about image" width={500} height={500}   />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
                <p className="text-base md:text-lg">Our company, TechInnovate, is a leading provider of cutting-edge technology solutions aimed at transforming industries and enhancing business operations. Founded in 2010, TechInnovate has quickly established itself as a pioneer in software development, AI integration, and cloud computing services. With a mission to drive innovation, we work closely with our clients to deliver customized solutions that meet their specific needs and goals.
                    At TechInnovate, we believe in the power of technology to simplify complex challenges and empower businesses to achieve greater efficiency and productivity. Our team of experienced engineers, data scientists, and project managers are dedicated to creating scalable solutions that integrate seamlessly into existing workflows. Whether it's automating processes, improving data analysis, or enhancing customer experiences, we provide the tools and expertise to help companies thrive in a fast-evolving digital world.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton 
                    selectTab={() => handleTabChange("certification")} 
                    active={tab === "certification"}>
                        {" "}
                        Certification{" "}
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>

    </section>
    )
}

export default AboutSection
