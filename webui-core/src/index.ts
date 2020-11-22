import { ReactNode } from 'react';

export type SectionRenderFn = () => ReactNode;

export interface AppSection {
    render: SectionRenderFn;
}

export function declareSection(render: SectionRenderFn): AppSection {
    return { render };
}