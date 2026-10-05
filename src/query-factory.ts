/**
 * @system mcp-infrastructure
 * @status handwritten
 * @edit edit directly
 */

import { createTanstackQueryUtils, type RouterUtils } from "@orpc/tanstack-query";
import type { NestedClient } from "@orpc/client";

export function createOrpcQueryUtils(
	client: NestedClient<any>,
): RouterUtils<NestedClient<any>> {
	let _orpc: RouterUtils<NestedClient<any>> | null = null;

	// Lazy proxy: the target is `{}` at compile time but forwards every access to
	// the real TanStack Query utils at runtime. TS cannot infer a proxy's
	// forwarded type, so cast through `unknown` at this boundary.
	return new Proxy(
		{},
		{
			get(_, prop) {
				if (!_orpc) {
					_orpc = createTanstackQueryUtils(client);
				}
				return (_orpc as unknown as Record<string | symbol, unknown>)[prop];
			},
		},
	) as unknown as RouterUtils<NestedClient<any>>;
}
