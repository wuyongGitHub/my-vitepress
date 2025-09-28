export interface ActionProps<T extends Record<string, any>, E = any> {
    useAction: (options?: E) => T;
    options?: E;
}
