import { SlotProps, AwaitProps } from './type';

declare const _default: <T extends Record<string, any>, E = any>(__VLS_props: Awaited<typeof __VLS_setup>["props"], __VLS_ctx?: __VLS_Prettify<Pick<Awaited<typeof __VLS_setup>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_Prettify<__VLS_OmitKeepDiscriminatedUnion<(Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>) & AwaitProps<T, E>, keyof import('vue').VNodeProps | keyof import('vue').AllowedComponentProps>> & {} & (import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps);
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: ReturnType<() => Readonly<{
        /**
         * @description: 错误插槽
         * @param data 返回对应数据
         * @param loading 返回loading状态
         * @param error 返回错误状态
         * @param onceStatus 初次加载状态
         */
        default: ({ data, loading, error, onceStatus }: SlotProps<T>) => VNode | VNode[];
        /**
         * @description: 骨架屏插槽
         */
        skeleton: () => VNode | VNode[];
        /**
         * @description: 错误插槽
         */
        error: () => VNode | VNode[];
    }> & {
        /**
         * @description: 错误插槽
         * @param data 返回对应数据
         * @param loading 返回loading状态
         * @param error 返回错误状态
         * @param onceStatus 初次加载状态
         */
        default: ({ data, loading, error, onceStatus }: SlotProps<T>) => VNode | VNode[];
        /**
         * @description: 骨架屏插槽
         */
        skeleton: () => VNode | VNode[];
        /**
         * @description: 错误插槽
         */
        error: () => VNode | VNode[];
    }>;
    emit: typeof __VLS_emit;
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
