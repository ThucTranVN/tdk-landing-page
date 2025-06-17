# Google Sheets API Setup - Step by Step

## ✅ Current Status: WORKING!

The API key `your_google_sheets_api_key_here` is **valid and working correctly**!

## Current Working Configuration

- **API Key**: `your_google_sheets_api_key_here` ✅
- **Spreadsheet ID**: `your_spreadsheet_id_here` ✅
- **Sheets**: "Official" and "UnOfficial" ✅
- **Range**: `A2:D200` ✅

## Data Structure

The spreadsheet contains Unity assets with this structure:
```
| Asset Title | Asset Link | Asset Category | Asset Download URL |
|-------------|------------|----------------|-------------------|
| 2D Icons - 150 Space Rank | https://assetstore.unity.com/... | 2D | https://drive.google.com/... |
| 4416 RPG Icons Pixel Art | https://assetstore.unity.com/... | 2D | https://drive.google.com/... |
```

## Categories Available

Based on the API response, the following categories are available:
- **2D**: 2D graphics, icons, and UI elements
- **3D**: 3D models, environments, and characters  
- **Tools**: Development tools and utilities
- **VFX**: Visual effects and particles

## Environment Variables Setup

Your `.env.local` file should contain:

```bash
# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here.apps.googleusercontent.com

# Google Sheets API Configuration
REACT_APP_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key_here

# Other API Keys (add as needed)
# REACT_APP_OTHER_API_KEY=your_other_api_key_here
```

## Testing the API

You can test the API by visiting these URLs in your browser (replace with your actual values):

1. **Get Sheet Names:**
```
https://sheets.googleapis.com/v4/spreadsheets/your_spreadsheet_id_here?key=your_google_sheets_api_key_here&fields=sheets.properties.title
```

2. **Get Official Sheet Data:**
```
https://sheets.googleapis.com/v4/spreadsheets/your_spreadsheet_id_here/values/Official!A2:D200?key=your_google_sheets_api_key_here
```

3. **Get UnOfficial Sheet Data:**
```
https://sheets.googleapis.com/v4/spreadsheets/your_spreadsheet_id_here/values/UnOfficial!A2:D200?key=your_google_sheets_api_key_here
```

## Troubleshooting

### If you see "Using fallback data":
1. **Check environment variables** are set correctly
2. **Restart development server** after updating `.env.local`
3. **Check browser console** for detailed error messages

### If you get CORS errors:
1. **Use HTTPS** or localhost
2. **Check API key restrictions** in Google Cloud Console
3. **Ensure Google Sheets API** is enabled

## API Response Examples

### Sheet Names Response:
```json
{
  "sheets": [
    { "properties": { "title": "Official" } },
    { "properties": { "title": "UnOfficial" } }
  ]
}
```

### Data Response:
```json
{
  "range": "Official!A2:D200",
  "majorDimension": "ROWS",
  "values": [
    ["2D Icons - 150 Space Rank", "https://assetstore.unity.com/", "2D", "https://drive.google.com/"]
  ]
}
```

## Next Steps

1. **Restart your development server:**
   ```bash
   npm start
   ```

2. **Check the Resources page** - you should now see all the Unity assets loaded from Google Sheets

3. **Verify in browser console** - you should see:
   - "Google Sheets API key is configured"
   - "Using the working API key - this should work correctly!"
   - "Found sheets: ['Official', 'UnOfficial']"
   - "Total assets fetched from all sheets: [number]" 