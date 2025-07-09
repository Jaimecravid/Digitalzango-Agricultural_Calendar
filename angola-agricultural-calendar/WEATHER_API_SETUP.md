# OpenWeatherMap API Integration Setup

This document explains how to set up the OpenWeatherMap API integration for the Agricultural Calendar app.

## Getting Your API Key

1. **Sign up for OpenWeatherMap**
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Create a free account
   - Navigate to the API keys section in your account dashboard
   - Generate a new API key (it may take a few hours to activate)

2. **API Key Limits**
   - Free tier: 1,000 calls/day, 60 calls/minute
   - The app implements caching to respect these limits (10-minute cache per location)

## Environment Variable Setup

### For Development (.env.local)

Create a `.env.local` file in your project root:

\`\`\`bash
OPENWEATHER_API_KEY=your_api_key_here
\`\`\`

### For Production (Vercel)

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add a new environment variable:
   - **Name**: `OPENWEATHER_API_KEY`
   - **Value**: your_api_key_here
   - **Environment**: Production (and Preview, Development if needed)

### For Other Hosting Platforms

Add the environment variable `OPENWEATHER_API_KEY` with your API key value according to your hosting platform's documentation.

## API Features Used

The app integrates the following OpenWeatherMap APIs:

### 1. Current Weather API
- **Endpoint**: `/weather`
- **Usage**: Real-time weather conditions
- **Data**: Temperature, humidity, wind, pressure, visibility, weather description

### 2. 5-Day Weather Forecast API
- **Endpoint**: `/forecast`
- **Usage**: 7-day weather forecast
- **Data**: Daily high/low temperatures, weather conditions, precipitation probability

### 3. Geocoding API
- **Endpoint**: `/geo/1.0/direct`
- **Usage**: Location search functionality
- **Data**: City coordinates for weather data retrieval

### 4. One Call API (Optional)
- **Endpoint**: `/onecall`
- **Usage**: Weather alerts (requires subscription for some regions)
- **Data**: Severe weather warnings and alerts

## Rate Limiting & Caching

The app implements several strategies to respect API limits:

1. **10-minute cache**: API responses are cached for 10 minutes per location
2. **Request debouncing**: Location searches are debounced by 500ms
3. **Error handling**: Graceful degradation when API limits are reached
4. **Geolocation caching**: User location is cached for 5 minutes

## Error Handling

The app handles various error scenarios:

- **Invalid API key**: Clear error message with setup instructions
- **Rate limit exceeded**: User-friendly message with retry option
- **Network errors**: Automatic retry with exponential backoff
- **Location not found**: Fallback to default location (Luanda, Angola)
- **API unavailable**: Graceful degradation with cached data

## Testing the Integration

1. **Verify API Key**: Check browser console for any API key errors
2. **Test Location Search**: Try searching for different cities
3. **Check Weather Data**: Verify current weather and forecast display
4. **Test Geolocation**: Use the current location button
5. **Monitor API Usage**: Check your OpenWeatherMap dashboard for usage statistics

## Troubleshooting

### Common Issues

1. **"API key not configured" error**
   - Ensure the environment variable is set correctly
   - Restart your development server after adding the API key
   - Check for typos in the variable name

2. **"Invalid API key" error**
   - Verify your API key is correct
   - Ensure the API key is activated (can take up to 2 hours)
   - Check if your account has the necessary permissions

3. **Rate limit errors**
   - The app should handle this automatically with caching
   - Consider upgrading your OpenWeatherMap plan if needed
   - Check if multiple instances are running simultaneously

4. **Location search not working**
   - Verify the Geocoding API is included in your plan
   - Check network connectivity
   - Try searching for major cities first

### Debug Mode

To enable debug logging, add this to your `.env.local`:

\`\`\`bash
NEXT_PUBLIC_DEBUG_WEATHER=true
\`\`\`

This will log API requests and responses to the browser console.

## API Usage Optimization

The app is optimized for efficient API usage:

- **Smart caching**: Prevents duplicate requests for the same location
- **Batch requests**: Combines multiple API calls where possible
- **Lazy loading**: Only fetches data when components are visible
- **Background updates**: Refreshes data in the background without blocking UI

## Security Notes

- The API key is now securely stored on the server and is not exposed to the client.
- The application uses an API route (`/api/weather`) to act as a proxy, protecting the key.
- Monitor your API usage regularly to prevent unexpected charges
- Rotate your API key periodically for security

## Support

For issues related to:
- **OpenWeatherMap API**: Contact OpenWeatherMap support
- **App Integration**: Check the troubleshooting section above
- **Feature Requests**: Submit an issue in the project repository
