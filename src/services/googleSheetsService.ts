interface UnityAsset {
  title: string;
  link: string;
  category: string;
  downloadUrl?: string;
}

interface AssetCategory {
  title: string;
  description: string;
  assets: UnityAsset[];
}

interface UnityAssetsData {
  title: string;
  subtitle: string;
  description: string;
  categories: {
    [key: string]: AssetCategory;
  };
}

// Google Sheets API Configuration
const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
// Correct spreadsheet ID that's actually working
const SPREADSHEET_ID = '1eNcgtpMnuypYd1u-fsY2AuO5DUlhVoO39ODS7CJnbo8';
const RANGE = 'A2:D200'; // Skip header row, fetch up to 200 rows

// Check if API key is available
if (!API_KEY) {
  console.warn('REACT_APP_GOOGLE_SHEETS_API_KEY is not set in environment variables. Google Sheets functionality will be limited.');
} else {
  console.log('Google Sheets API key is configured');
  // Check if the API key matches the one in .env.local
  if (API_KEY === process.env.REACT_APP_GOOGLE_SHEETS_API_KEY) {
    console.log('✅ Using the API key from .env.local');
  }
}

// Function to get all sheet names from the spreadsheet
const getAllSheetNames = async (): Promise<string[]> => {
  if (!API_KEY) {
    throw new Error('Google Sheets API key is not configured');
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?key=${API_KEY}&fields=sheets.properties.title`;
    
    console.log('Fetching sheet names from URL:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response Error:', response.status, response.statusText);
      console.error('Error Details:', errorText);
      throw new Error(`Failed to fetch sheet names: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    console.log('Received sheet data:', data);
    
    if (!data.sheets || !Array.isArray(data.sheets)) {
      throw new Error('Invalid sheet data format received');
    }
    
    const sheetNames = data.sheets.map((sheet: any) => sheet.properties.title);
    console.log('Available sheet names:', sheetNames);
    
    return sheetNames;
  } catch (error) {
    console.error('Error fetching sheet names:', error);
    throw error;
  }
};

// Function to fetch data from a specific sheet
const fetchDataFromSheet = async (sheetName: string): Promise<UnityAsset[]> => {
  if (!API_KEY) {
    throw new Error('Google Sheets API key is not configured');
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheetName}!${RANGE}?key=${API_KEY}`;
    
    console.log(`Fetching data from sheet "${sheetName}" from URL:`, url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API Response Error for sheet "${sheetName}":`, response.status, response.statusText);
      console.error('Error Details:', errorText);
      console.warn(`Failed to fetch data from sheet "${sheetName}": ${response.status} ${response.statusText}`);
      return [];
    }
    
    const data = await response.json();
    
    console.log(`Received data from sheet "${sheetName}":`, data);
    
    if (!data.values || !Array.isArray(data.values)) {
      console.warn(`No valid data found in sheet "${sheetName}"`);
      return [];
    }
    
    // Process the data
    const assets: UnityAsset[] = [];
    
    data.values.forEach((row: string[], index: number) => {
      if (row.length >= 3) {
        const [title, link, category, downloadUrl] = row;
        
        // Only add assets that have title, link, and category
        if (title && link && category) {
          assets.push({
            title: title.trim(),
            link: link.trim(),
            category: category.trim(),
            downloadUrl: downloadUrl ? downloadUrl.trim() : ''
          });
        } else {
          console.warn(`Skipping row ${index + 2} (${index + 1} in data): Missing required fields`, row);
        }
      } else {
        console.warn(`Skipping row ${index + 2} (${index + 1} in data): Insufficient columns`, row);
      }
    });
    
    console.log(`Processed ${assets.length} assets from sheet "${sheetName}"`);
    return assets;
  } catch (error) {
    console.error(`Error fetching data from sheet "${sheetName}":`, error);
    return [];
  }
};

export const fetchUnityAssetsFromGoogleSheets = async (): Promise<UnityAssetsData> => {
  try {
    // Check if API key is available
    if (!API_KEY) {
      console.warn('Google Sheets API key not available, using fallback data');
      return fetchUnityAssetsFallback();
    }

    console.log('Starting to fetch Unity assets from Google Sheets...');
    console.log('Spreadsheet ID:', SPREADSHEET_ID);

    // First, get all sheet names
    const sheetNames = await getAllSheetNames();
    console.log('Found sheets:', sheetNames);
    
    // Fetch data from all sheets
    const allAssets: UnityAsset[] = [];
    
    for (const sheetName of sheetNames) {
      const sheetAssets = await fetchDataFromSheet(sheetName);
      allAssets.push(...sheetAssets);
    }
    
    console.log(`Total assets fetched from all sheets: ${allAssets.length}`);
    
    if (allAssets.length === 0) {
      console.warn('No assets found in any sheets, using fallback data');
      return fetchUnityAssetsFallback();
    }
    
    // Group assets by category
    const categories: { [key: string]: AssetCategory } = {};
    
    allAssets.forEach(asset => {
      if (!categories[asset.category]) {
        categories[asset.category] = {
          title: `${asset.category} Assets`,
          description: `High-quality ${asset.category.toLowerCase()} assets for Unity development`,
          assets: []
        };
      }
      categories[asset.category].assets.push(asset);
    });
    
    console.log('Categories created:', Object.keys(categories));
    
    return {
      title: "Unity Asset Resources",
      subtitle: "Professional Game Development Assets",
      description: "Access our comprehensive collection of Unity assets including 2D graphics, 3D models, and development tools to accelerate your game development projects.",
      categories
    };
    
  } catch (error) {
    console.error('Error fetching Unity assets from Google Sheets:', error);
    // Return fallback data if there's an error
    return fetchUnityAssetsFallback();
  }
};

// Fallback function for when API key is not available
export const fetchUnityAssetsFallback = async (): Promise<UnityAssetsData> => {
  console.log('Using fallback data - no API key or API error occurred');
  // Return a basic structure when API is not available
  return {
    title: "Unity Asset Resources",
    subtitle: "Professional Game Development Assets",
    description: "Access our comprehensive collection of Unity assets including 2D graphics, 3D models, and development tools to accelerate your game development projects.",
    categories: {
      "2D": {
        title: "2D Assets",
        description: "High-quality 2D graphics, icons, and UI elements for your games",
        assets: []
      },
      "3D": {
        title: "3D Assets",
        description: "Professional 3D models, environments, and characters",
        assets: []
      },
      "Tools": {
        title: "Development Tools",
        description: "Essential Unity tools and utilities for game development",
        assets: []
      }
    }
  };
};

export type { UnityAsset, AssetCategory, UnityAssetsData }; 