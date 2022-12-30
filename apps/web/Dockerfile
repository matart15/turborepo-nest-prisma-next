# Install dependencies only when needed
FROM public.ecr.aws/docker/library/node:18-slim AS builder

WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=web --docker

# Install dependencies based on the preferred package manager
# Rebuild the source code only when needed
FROM public.ecr.aws/docker/library/node:18-slim AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
COPY turbo.json turbo.json

RUN yarn install

ARG NEXT_PUBLIC_GRQPHQL_API_ENDPOINT
ENV NEXT_PUBLIC_GRQPHQL_API_ENDPOINT=$NEXT_PUBLIC_GRQPHQL_API_ENDPOINT

RUN yarn turbo run build  --filter=web...

# Production image, copy all the files and run next
FROM public.ecr.aws/docker/library/node:18-slim AS runner
WORKDIR /app
ENV TZ "Asia/Tokyo"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs


COPY --from=installer /app/apps/web/next.config.js .
COPY --from=installer /app/apps/web/package.json .

COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static

EXPOSE 3000

ENV PORT 3000
CMD node apps/web/server.js
