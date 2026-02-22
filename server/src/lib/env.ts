import "dotenv/config";

class Env {
  public readonly PORT: number;
  public readonly CLIENT_URL: string;
  public readonly DATABASE_URL: string;

  public readonly SESSION_SECRET: string;

  public readonly SALT: number;

  public readonly GOOGLE_CLIENT_ID: string;
  public readonly GOOGLE_CLIENT_SECRET: string;
  public readonly GOOGLE_CALLBACK_URL: string;

  constructor() {
    this.PORT = Number(process.env.PORT);
    this.CLIENT_URL = process.env.CLIENT_URL as string;
    this.DATABASE_URL = process.env.DATABASE_URL as string;

    this.SALT = Number(process.env.SALT);
    this.SESSION_SECRET = process.env.SESSION_SECRET as string;

    this.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
    this.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
    this.GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL as string;
  }
}

export const env = new Env();
