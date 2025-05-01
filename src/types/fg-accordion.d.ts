export type AccordionMode = "single" | "multiple";
export interface AccordionContext {
    openItems: Set<string>;
    toggleItem(id: string): void;
    isItemOpen(id: string): boolean;
    mode: AccordionMode;
    registerHead(id: string, el: HTMLElement): void;
    unregisterHead(id: string): void;
    focusNext(id: string): void;
    focusPrev(id: string): void;
}
export declare const AccordionContextKey: unique symbol;
export declare const ItemIdKey: unique symbol;
