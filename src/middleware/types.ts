/**
 * @system mcp-infrastructure
 * @status handwritten
 * @edit edit directly
 */

import type { PrismaClient } from "@teamscala/db/client";
import type { InjectedDb8 } from "../configure";

interface OrpcBaseContext {
	prisma: PrismaClient;
	db8?: InjectedDb8;
}

export interface RpcInitialContext {
	prisma: OrpcBaseContext["prisma"];
	db8?: OrpcBaseContext["db8"];
	headers: Headers;
}

export interface RpcUser {
	userId: string;
	organisationId?: string | null;
	name?: string | null;
	email?: string | null;
	isSuperAdmin?: boolean;
	isAdmin?: boolean;
	impersonatedBy?: string | null;
	serviceSource?: string | null;
	agentId?: string | null;
}
