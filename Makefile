.PHONY: setup serve format format-check

setup:
	pnpm install

serve:
	pnpm run docs:dev

format:
	pnpm run format

format-check:
	pnpm run format:check
