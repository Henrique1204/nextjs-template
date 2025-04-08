import React from 'react';
import { NextPage } from 'src/types/next';

declare global {
	export type PageProps = {
		Home: NextPage<{}>;
	};

	export type PagesName = keyof PageProps;

	export type Page<_PageName extends PagesName> = PageProps[_PageName];
}

export {};
