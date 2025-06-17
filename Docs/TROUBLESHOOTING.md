# Google Sheets API Troubleshooting Guide

## Common Issues and Solutions

### 1. "Using fallback data" Warning

**Symptoms:**
- You see a warning message about using fallback data
- No assets are loaded from Google Sheets
- Console shows "Google Sheets API key not available"

**Solutions:**
1. **Check Environment Variables:**
   ```bash
   # Make sure you have .env.local file with:
   REACT_APP_GOOGLE_SHEETS_API_KEY=your_actual_api_key_here
   ```

2. **Restart Development Server:**
   ```bash
   npm start
   ```

3. **Check API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to "APIs & Services" > "Credentials"
   - Verify your API key is active and not restricted

### 2. "Failed to fetch sheet names" Error

**Symptoms:**
- Console shows "Failed to fetch sheet names: 403 Forbidden"
- API key is configured but still getting errors

**Solutions:**
1. **Enable Google Sheets API:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

2. **Check API Key Restrictions:**
   - Go to "APIs & Services" > "Credentials"
   - Click on your API key
   - Under "API restrictions", make sure "Google Sheets API" is selected
   - Or set to "Don't restrict key" for testing

3. **Check Spreadsheet Permissions:**
   - Make sure your Google Sheet is set to "Anyone with the link can view"
   - Or add your Google account as a viewer

### 3. "No valid data found in sheet" Warning

**Symptoms:**
- API connects successfully but no assets are found
- Console shows "No valid data found in sheet"

**Solutions:**
1. **Check Spreadsheet Structure:**
   Your sheet should have this format:
   ```
   | Asset Title | Asset Link | Asset Category | Asset Download URL |
   |-------------|------------|----------------|-------------------|
   | 2D Icons    | https://... | 2D            | https://...       |
   ```

2. **Check Sheet Name:**
   - Default sheet name is "Sheet1"
   - Make sure the sheet exists and has data

3. **Check Data Range:**
   - Current range is A2:D200 (skips header, reads up to 200 rows)
   - Make sure your data starts from row 2 (row 1 is header)

### 4. "Spreadsheet not found" Error

**Symptoms:**
- Console shows "404 Not Found" or "Spreadsheet not found"

**Solutions:**
1. **Verify Spreadsheet ID:**
   - Current ID: `2PACX-1vS4YwtVc2J6b8qL4RsvXMVSO1_pECI9RWpmunMYMtddLyXg2_1ZNcSGkHY70n4-ea0DFuzo9VQJGj2p`
   - Check if this is the correct spreadsheet ID
   - Get the ID from your spreadsheet URL

2. **Check Spreadsheet URL:**
   - Make sure the spreadsheet is accessible
   - Try opening it in an incognito window

### 5. CORS Issues

**Symptoms:**
- Console shows CORS errors
- Network tab shows failed requests

**Solutions:**
1. **Use HTTPS:**
   - Make sure you're running on HTTPS or localhost
   - Google APIs require secure connections

2. **Check API Key Domain Restrictions:**
   - If you have domain restrictions, add your domain
   - For development, add `localhost` and `127.0.0.1`

## Debugging Steps

### 1. Check Console Logs
Open browser console and look for:
- API key configuration messages
- Sheet names being fetched
- Data processing logs
- Error messages

### 2. Test API Manually
Try this URL in your browser (replace with your API key):
```
https://sheets.googleapis.com/v4/spreadsheets/2PACX-1vS4YwtVc2J6b8qL4RsvXMVSO1_pECI9RWpmunMYMtddLyXg2_1ZNcSGkHY70n4-ea0DFuzo9VQJGj2p?key=YOUR_API_KEY&fields=sheets.properties.title
```

### 3. Check Network Tab
1. Open browser DevTools
2. Go to Network tab
3. Refresh the page
4. Look for requests to `sheets.googleapis.com`
5. Check response status and content

## Environment Setup Checklist

- [ ] Google Sheets API enabled in Google Cloud Console
- [ ] API key created and copied
- [ ] `.env.local` file created with `REACT_APP_GOOGLE_SHEETS_API_KEY`
- [ ] Development server restarted after adding environment variables
- [ ] Spreadsheet is accessible and has correct structure
- [ ] Spreadsheet permissions allow public read access

## Testing Your Setup

1. **Create a test spreadsheet:**
   ```
   | Title | Link | Category | Download URL |
   |-------|------|----------|--------------|
   | Test Asset | https://example.com | 2D | https://example.com/download |
   ```

2. **Update the spreadsheet ID in the code:**
   ```typescript
   const SPREADSHEET_ID = 'your_test_spreadsheet_id';
   ```

3. **Test the API:**
   - Check console for successful data fetching
   - Verify assets appear on the Resources page

## Getting Help

If you're still having issues:
1. Check the browser console for specific error messages
2. Verify your Google Cloud Console setup
3. Test with a simple spreadsheet first
4. Check if the API key has proper permissions 