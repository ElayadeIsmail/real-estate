declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      PG_URL: string;
      DATABASE_URL: string;
      JWT_SECRET: string;
      REDIS_URI: string;
      COOKIE_SECRET: string;
    }
  }
}

export {}
