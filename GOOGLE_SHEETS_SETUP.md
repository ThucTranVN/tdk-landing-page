# Google Sheets API Setup Guide

## Overview
This project now uses the Google Sheets API to fetch Unity assets data dynamically from your Google Sheets.

## Setup Instructions

### 1. Get Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"
4. Create API credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key

### 2. Configure Environment Variables

Create a `.env` file in your project root with:

```env
REACT_APP_GOOGLE_SHEETS_API_KEY=your_google_sheets_api_key_here
```

### 3. Google Sheets Configuration

Your Google Sheets should have the following structure:

| Asset Title | Asset Link | Asset Category | Asset Download URL |
|-------------|------------|----------------|-------------------|
| 2D Icons - 150 Space Rank | https://assetstore.unity.com/... | 2D | |
| 4416 RPG Icons Pixel Art | https://assetstore.unity.com/... | 2D | |

### 4. Current Configuration

- **Spreadsheet ID**: `2PACX-1vS4YwtVc2J6b8qL4RsvXMVSO1_pECI9RWpmunMYMtddLyXg2_1ZNcSGkHY70n4-ea0DFuzo9VQJGj2p`
- **Sheet Name**: `Sheet1`
- **Range**: `A2:D200` (skips header row, fetches up to 200 rows)

### 5. Features

- **Dynamic Data**: Fetches real-time data from Google Sheets
- **Fallback System**: Uses static data if API is unavailable
- **Error Handling**: Shows appropriate error messages
- **Loading States**: Displays loading spinner while fetching
- **Tabbed Interface**: Organizes assets by category in tabs

### 6. Security Notes

- The API key is restricted to Google Sheets API only
- Consider setting up API key restrictions in Google Cloud Console
- The API key is exposed in the frontend (public), so use appropriate restrictions

### 7. Troubleshooting

If you see "Using fallback data" warning:
1. Check if your API key is correct
2. Verify the spreadsheet ID is correct
3. Ensure the Google Sheets API is enabled
4. Check if the sheet name and range are correct

## API Endpoint

The service fetches data from:
```
https://sheets.googleapis.com/v4/spreadsheets/{SPREADSHEET_ID}/values/{SHEET_NAME}!{RANGE}?key={API_KEY}
``` 