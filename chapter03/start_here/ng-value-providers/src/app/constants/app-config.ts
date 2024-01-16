import { InjectionToken } from "@angular/core";

export interface IAppConfig {
    canDeleteItem: boolean;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('APP_CONFIG');

export const AppConfig: IAppConfig = { canDeleteItem: true }