/**
 * @system mcp-infrastructure
 * @status handwritten
 * @edit edit directly
 */

import { createBrowserOrpcClient } from "./client-factory.ts";
import { registerOrpcClient } from "./client-registry/register-orpc-client";
import { createOrpcQueryUtils } from "./query-factory.ts";
import { registerOrpcQuery } from "./query-registry.ts";

const client = createBrowserOrpcClient();
registerOrpcClient(client);

const queryUtils = createOrpcQueryUtils(client);
registerOrpcQuery(queryUtils);
