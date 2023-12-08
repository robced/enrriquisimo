"use client";

import React from 'react';
import {Button, buttonColor, LiveIcon, Logo, MenuIcon} from "@/components";
const Header = () => {
    return (
        <div className="w-full flex items-center justify-between xl:px-4 my-2 gap-2 px-2 md:px-3 lg:px-2 xl:gap-4">
            <Container>
                <Logo/>
                <div className="flex flex-col items-end uppercase font-medium
                 text-[14px] leading-[14px] xl:text-[15px] xl:leading-[15px] 2xl:leading-[18px] 2xl:text-[20px]">
                    <span >streamer</span>
                    <span>developer</span>
                </div>
            </Container>
            <Button color={buttonColor.primary}>Studios</Button>
            <Button color={buttonColor.secondary}>Videos</Button>
            <Container isButton>
                <span className="font-medium text-md lg:text-xl 2xl:text-2xl">Menu</span>
                <MenuIcon className="w-5 h-5 2xl:w-8 2xl:h-8"/>
            </Container>
            <Button color={buttonColor.transparent} icon={<LiveIcon/>}>Live</Button>
        </div>
    );
}

const Container = ({ children, isButton, onClick } : { children: React.ReactNode, isButton?: Boolean, onClick?: React.MouseEvent<HTMLInputElement>}) => {
    return (
        <div onClick={() => onClick} className={`bg-white  h-header rounded-xl flex shadow items-center justify-between px-4 lg:px-6 ${isButton ? "cursor-pointer xl:w-[70%] w-1/4 sm:w-1/3 md:w-1/3 lg:w-1/2 2xl:w-full" : "w-3/4 sm:w-2/3 md:w-full lg:w-full xl:w-full"}`}>
            {children}
        </div>
    )
}



export default Header;