import { SelectValue, DefaultOptionType } from 'ant-design-vue/lib/select';

declare const _default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    blur: (value: FocusEvent) => void;
    change: (value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => void;
    search: (value: string) => void;
}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{
    onBlur?: ((value: FocusEvent) => any) | undefined;
    onChange?: ((value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => any) | undefined;
    onSearch?: ((value: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
