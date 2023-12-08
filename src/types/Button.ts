import {JSX} from "react/jsx-runtime";
import IntrinsicElements = JSX.IntrinsicElements;
import {ReactElement} from "react";

export interface iButton {
    children: React.ReactNode;
    color: String;
    size?: buttonSize;
    icon?: ReactElement;
}

export enum buttonSize {
    wide,
    big
}