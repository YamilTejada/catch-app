/*
*
* Development environment configuration file.
*
* This file is used to define environment-specific settings for the development environment.
*
* */


export const environment = {

  production: false,
  newsProviderApiBaseUrl: 'https://newsapi/v2',
  newsProviderNewsEndpointPath: '/top-headlines',
  newsProviderSourcesEndpointPath: '/top-headlines/sources',
  newsProviderApiKey: 'YOUR_NEWS_PROVIDER_API_KEY', // Replace with your actual API key
  logoProviderApiBaseUrl: 'https://img.logo.dev',
  logoProviderPublishableKey: 'YOUR_LOGO_PROVIDER_PUBLISHABLE_KEY',
};
