FROM oven/bun

WORKDIR /src

# Copy dependency files first
COPY package.json bun.lockb tsconfig.json ./

# Install dependencies
RUN bun install

# Copy the public folder
# COPY public ./public

# Copy source files
COPY . .

EXPOSE 3000

CMD ["bun", "dev"]