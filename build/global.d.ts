/*
 * @Author: wyk
 * @Date: 2024-06-06 10:17:30
 * @LastEditTime: 2024-11-18 16:33:37
 * @Description:
 */
declare module "vue" {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        BqButton: (typeof import("JB-design"))["BqButton"];
        BqNumberAnimate: (typeof import("JB-design"))["BqNumberAnimate"];
        BqPie: (typeof import("JB-design"))["BqPie"];
        BqSelectAll: (typeof import("JB-design"))["BqSelectAll"];
        BqScaleBox: (typeof import("JB-design"))["BqScaleBox"];
        BqScrollBar: (typeof import("JB-design"))["BqScrollBar"];
        BqVisibleComponent: (typeof import("JB-design"))["BqVisibleComponent"];
        BqAwait: (typeof import("JB-design"))["BqAwait"];
    }
}
