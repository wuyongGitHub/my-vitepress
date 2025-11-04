declare function createHeatmap(): void;
declare const _default: import('vue').DefineComponent<globalThis.ExtractPropTypes<{
    data: {
        type: () => number[][];
        default: () => never[];
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    baseSize: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    enableOrbit: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    showGridHelper: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAxesHelper: {
        type: BooleanConstructor;
        default: boolean;
    };
    gradientColors: {
        type: () => string[];
        default: () => string[];
    };
    autoAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    cameraPosition: {
        type: () => {
            x: number;
            y: number;
            z: number;
        };
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
}>, {
    refresh: typeof createHeatmap;
    toggleAnimation: () => boolean;
    updateData: (newData: number[][]) => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<globalThis.ExtractPropTypes<{
    data: {
        type: () => number[][];
        default: () => never[];
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    baseSize: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    enableOrbit: {
        type: BooleanConstructor;
        default: boolean;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    showGridHelper: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAxesHelper: {
        type: BooleanConstructor;
        default: boolean;
    };
    gradientColors: {
        type: () => string[];
        default: () => string[];
    };
    autoAnimate: {
        type: BooleanConstructor;
        default: boolean;
    };
    cameraPosition: {
        type: () => {
            x: number;
            y: number;
            z: number;
        };
        default: () => {
            x: number;
            y: number;
            z: number;
        };
    };
}>> & Readonly<{}>, {
    width: number;
    height: number;
    data: number[][];
    baseSize: number;
    maxHeight: number;
    enableOrbit: boolean;
    backgroundColor: string;
    showGridHelper: boolean;
    showAxesHelper: boolean;
    gradientColors: string[];
    autoAnimate: boolean;
    cameraPosition: {
        x: number;
        y: number;
        z: number;
    };
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
