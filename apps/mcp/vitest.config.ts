import { defineConfig } from "vitest/config"

export default defineConfig({
	resolve: {
		alias: {
			"cloudflare:workers": "/Users/unmesh.100/supermemory/apps/mcp/src/server/__cloudflare-workers-stub.ts",
		},
	},
	test: {
		include: ["e2e/**/*.test.ts", "src/**/*.test.ts"],
		fileParallelism: false,
		testTimeout: 90_000,
		hookTimeout: 30_000,
	},
})
