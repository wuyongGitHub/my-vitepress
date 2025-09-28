export interface PropsType {
    value: number;
    math?: MathType;
    textMaxWidth?: string;
    duration?: number;
    effect?: string;
}
export type MathType = "ceil" | "abs" | "floor" | "none";
