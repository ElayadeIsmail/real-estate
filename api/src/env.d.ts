declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DATABASE_URL: string;
      JWT_SECRET: string;
      REDIS_HOST: string;
      REDIS_PORT: string;
      COOKIE_SECRET: string;
      SMTP_HOST: string;
      SMTP_PORT: string;
      ADMIN_EMAIL: string;
      FRONTEND_URL: string;
    }
  }
}

export {}
