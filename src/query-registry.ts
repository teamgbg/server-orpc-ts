/**
 * @system mcp-infrastructure
 * @status handwritten
 * @edit edit directly
 */

type OrpcQueryUtils = Record<string, unknown>;

let _orpc: OrpcQueryUtils | null = null;

export function registerOrpcQuery(orpc: unknown): void {
	_orpc = orpc as OrpcQueryUtils;
}

export const orpc: OrpcQueryUtils = new Proxy({} as OrpcQueryUtils, {
	get(_, prop, receiver) {
		if (!_orpc) {
			throw new Error(
				"ORPC query utils not registered. Ensure src/lib/orpc/query.ts is imported before use.",
			);
		}
		return Reflect.get(_orpc, prop, receiver);
	},
});
