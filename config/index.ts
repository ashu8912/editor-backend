import dotenv from 'dotenv'

/**
 * Imports all the environment configuration from .env file
 */
dotenv.config()

/**
 * Export server configuration
 */
export const server: any = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
}


/**
 * Export GitHub application credentials
 */
export const githubOauth: any = {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
}

/**
 * Export session secret
 */
export const sessionSecret: string = process.env.SESSION_SECRET

/**
 * Export successful redirect URL
 */
export const homepageUrl: string = process.env.HOMEPAGE_URL
