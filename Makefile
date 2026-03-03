COMPOSE = compose.yml

.PHONY: help

help: ## Show this help
	@echo ""
	@echo "Usage: make <commande>"
	@echo ""
	@echo "Commands available :"
	@grep -E '^[a-zA-Z0-9_-]+:.*##' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-22s\033[0m %s\n", $$1, $$2}'
	@echo ""

# -------------------------
# DEV
# -------------------------

dev: ## Start dev container
	docker compose -f $(COMPOSE) up --build -d

dev-stop: ## Stop dev container
	docker compose -f $(COMPOSE) down

dev-restart: ## Restart dev container
	docker compose -f $(COMPOSE) down
	docker compose -f $(COMPOSE) up --build -d

dev-logs: ## Show dev logs
	docker compose -f $(COMPOSE) logs -f

dev-shell: ## Open a shell inside dev container
	docker compose -f $(COMPOSE) exec web sh
