/*
 * @Author: wyk
 * @Date: 2024-05-16 10:14:34
 * @LastEditTime: 2024-05-21 16:16:59
 * @Description:
 */
import { App } from "vue";
import * as WyComponents from "./components";
export const installer = (app: App) => {
    for (const i in WyComponents) {
        app.use(WyComponents[i as never]);
    }
};
