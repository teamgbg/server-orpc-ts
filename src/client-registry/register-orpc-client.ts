/**
 * @system mcp-infrastructure
 * @status handwritten
 * @edit edit directly
 */

import { state } from "./state";
import type { ORPCClient } from "./types";

export function registerOrpcClient(client: ORPCClient): void {
	state._client = client;
}
