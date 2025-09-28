export declare const BqScrollBar: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<globalThis.ExtractPropTypes<{
        thumbWrapperSize: {
            type: globalThis.PropType<number>;
            default: number;
        };
        autoHide: {
            type: globalThis.PropType<boolean | {
                x: boolean;
                y: boolean;
            }>;
            default: boolean;
        };
        barMinSize: {
            type: globalThis.PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onScroll?: ((event: Event) => any) | undefined;
    }>, {
        view: globalThis.Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        scroll: (event: Event) => void;
    }, import('vue').PublicProps, {
        thumbWrapperSize: number;
        autoHide: boolean | {
            x: boolean;
            y: boolean;
        };
        barMinSize: number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<globalThis.ExtractPropTypes<{
        thumbWrapperSize: {
            type: globalThis.PropType<number>;
            default: number;
        };
        autoHide: {
            type: globalThis.PropType<boolean | {
                x: boolean;
                y: boolean;
            }>;
            default: boolean;
        };
        barMinSize: {
            type: globalThis.PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onScroll?: ((event: Event) => any) | undefined;
    }>, {
        view: globalThis.Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
    }, {}, {}, {}, {
        thumbWrapperSize: number;
        autoHide: boolean | {
            x: boolean;
            y: boolean;
        };
        barMinSize: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<globalThis.ExtractPropTypes<{
    thumbWrapperSize: {
        type: globalThis.PropType<number>;
        default: number;
    };
    autoHide: {
        type: globalThis.PropType<boolean | {
            x: boolean;
            y: boolean;
        }>;
        default: boolean;
    };
    barMinSize: {
        type: globalThis.PropType<number>;
        default: number;
    };
}>> & Readonly<{
    onScroll?: ((event: Event) => any) | undefined;
}>, {
    view: globalThis.Ref<HTMLDivElement | undefined, HTMLDivElement | undefined>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    scroll: (event: Event) => void;
}, string, {
    thumbWrapperSize: number;
    autoHide: boolean | {
        x: boolean;
        y: boolean;
    };
    barMinSize: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export default BqScrollBar;
