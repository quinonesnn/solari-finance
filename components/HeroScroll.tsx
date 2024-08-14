"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-animation-scroll";
import Image from "next/image";

const HeroScroll = () => {
    return (
        
        <div className="container relative z-10 flex h-full md:h-[50%] flex-col items-center justify-center space-y-6 py-12 md:py-24">
            <ContainerScroll
                titleComponent={
                <>
                    <h1 className="mb-5 text-bankGradient text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Unleash Your Financial Potential
                    </h1>
                    <p className="mb-7 text-center text-muted-foreground md:text-xl">
                        The easy-to-use zero-based budgeting app that helps you keep tabs on your money at a glance—anytime, anywhere.
                    </p>
                </>
                }
                >
                <Image
                    src="/landing/SolariDashboard.svg"
                    alt="Hero Image"
                    className="mx-auto rounded-2xl object-cover h-full max-md:h-50% object-center"
                    width={750}
                    height={1400}
                    quality={100}
                    priority
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    )
}

export default HeroScroll