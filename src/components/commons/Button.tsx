import React, {ReactElement} from 'react';

const Button = ({children, icon, size, color}: iButton) => {
    const isColoredButton = color == buttonColor.primary || color === buttonColor.secondary;

    return (
        <button className={`${color} ${isColoredButton && "hidden xl:flex"}  ${size ? size : "xl:px-7 md:w-[140px] lg:w-[190px] py-3 2xl:h-header xl:w-[120px]"} flex rounded-xl font-medium items-center justify-center md:text-sm lg:text-md 2xl:text-xl 2xl:tracking-wide shadow`}>
            {children}
            <span>{icon}</span>
        </button>
    );
};

export interface iButton {
    children: React.ReactNode;
    color: String;
    size?: String;
    icon?: ReactElement;
}

export const buttonColor = {
    primary: "bg-primary text-background",
    secondary: "bg-secondary text-background",
    transparent: "text-primary md:flex hidden md:border-[2px] xl:border-[3px] border-primary flex items-center gap-4",
}

export default Button;