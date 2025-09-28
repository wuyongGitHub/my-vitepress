/*
 * @Author: wyk
 * @Date: 2024-06-06 10:17:30
 * @LastEditTime: 2024-11-18 16:33:37
 * @Description:
 */
declare module "vue" {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        BqButton: (typeof import("Wy-design"))["BqButton"];
        BqNumberAnimate: (typeof import("Wy-design"))["BqNumberAnimate"];
        BqPie: (typeof import("Wy-design"))["BqPie"];
        BqSelectAll: (typeof import("Wy-design"))["BqSelectAll"];
        BqScaleBox: (typeof import("Wy-design"))["BqScaleBox"];
        BqScrollBar: (typeof import("Wy-design"))["BqScrollBar"];
        BqVisibleComponent: (typeof import("Wy-design"))["BqVisibleComponent"];
        BqAwait: (typeof import("Wy-design"))["BqAwait"];
    }
}
