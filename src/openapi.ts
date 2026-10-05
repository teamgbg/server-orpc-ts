/**
 * @system orpc
 * @status handwritten
 * @edit edit directly
 */

import { OpenAPIGenerator } from "@orpc/openapi";
import { experimental_ValibotToJsonSchemaConverter } from "@orpc/valibot";

export interface OpenApiDocumentOptions {
	title?: string;
	version?: string;
	servers?: { url: string; description?: string }[];
}

export async function buildOpenApiDocument(
	router: Record<string, unknown>,
	options: OpenApiDocumentOptions = {},
): Promise<Record<string, unknown>> {
	const generator = new OpenAPIGenerator({
		schemaConverters: [new experimental_ValibotToJsonSchemaConverter()],
	});
	const document = await generator.generate(router as never, {
		info: {
			title: options.title ?? "Scala oRPC procedures",
			version: options.version ?? "0",
		},
		servers: options.servers ?? [],
	});
	return document as Record<string, unknown>;
}
