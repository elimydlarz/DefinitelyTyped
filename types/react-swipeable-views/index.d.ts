// Type definitions for react-swipeable-views 0.13.3
// Project: https://github.com/oliviertassinari/react-swipeable-views
// Definitions by: Michael Ledin <https://github.com/mxl>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eli Mydlarz <https://github.com/elimydlarz>
//                 Joe Pramono <https://github.com/djoepramono>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type OnChangeIndexCallback = (index: number, indexLatest: number) => void;

export type OnTransitionEndCallback = () => void;

export type OnSwitchingCallback = (index: number, type: OnSwitchingCallbackTypeDescriptor) => void;

export type ActionCallback = (actions: Actions) => void;

export type UpdateHeightAction = () => void;

export type OnSwitchingCallbackTypeDescriptor = "move" | "end";

export type AxisType = "x" | "x-reverse" | "y" | "y-reverse";

export interface Actions {
    updateHeight: UpdateHeightAction;
}

export interface SpringConfig {
    duration: string;
    easeFunction: string;
    delay: string;
}

export interface SwipeableViewsProps extends Omit<React.HTMLProps<HTMLDivElement>, 'action'> {
    animateHeight?: boolean;
    animateTransitions?: boolean;
    axis?: AxisType;
    containerStyle?: React.CSSProperties;
    disabled?: boolean;
    /*
     * This is the config used to disable lazy loading, if true it will render all the views in first rendering.
     */
    disableLazyLoading?: boolean;
    enableMouseEvents?: boolean;
    hysteresis?: number;
    ignoreNativeScroll?: boolean;
    index?: number;
    onChangeIndex?: OnChangeIndexCallback;
    onSwitching?: OnSwitchingCallback;
    onTransitionEnd?: OnTransitionEndCallback;
    resistance?: boolean;
    style?: React.CSSProperties;
    slideStyle?: React.CSSProperties;
    springConfig?: SpringConfig;
    slideClassName?: string;
    threshold?: number;
    action?: ActionCallback;
}

export interface SwipeableViewsState {
    indexCurrent?: number;
    indexLatest?: number;
    isDragging?: boolean;
    isFirstRender?: boolean;
    heightLatest?: number;
    displaySameSlide?: boolean;
}

export default class SwipeableViews extends React.Component<SwipeableViewsProps, SwipeableViewsState> { }
