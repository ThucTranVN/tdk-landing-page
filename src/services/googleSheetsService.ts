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
const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY || 'AIzaSyBqvJkR_SKTVAIIjq5d9wb26E8q0bYAnxM';
const SPREADSHEET_ID = '1eNcgtpMnuypYd1u-fsY2AuO5DUlhVoO39ODS7CJnbo8';
const RANGE = 'A2:D200'; // Skip header row, fetch up to 200 rows

// Function to get all sheet names from the spreadsheet
const getAllSheetNames = async (): Promise<string[]> => {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}?key=${API_KEY}&fields=sheets.properties.title`;
    
    console.log('Fetching sheet names from URL:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
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
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${sheetName}!${RANGE}?key=${API_KEY}`;
    
    console.log(`Fetching data from sheet "${sheetName}" from URL:`, url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
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
    
    data.values.forEach((row: string[]) => {
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
        }
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
    // First, get all sheet names
    const sheetNames = await getAllSheetNames();
    
    // Fetch data from all sheets
    const allAssets: UnityAsset[] = [];
    
    for (const sheetName of sheetNames) {
      const sheetAssets = await fetchDataFromSheet(sheetName);
      allAssets.push(...sheetAssets);
    }
    
    console.log(`Total assets fetched from all sheets: ${allAssets.length}`);
    
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
    
    return {
      title: "Unity Asset Resources",
      subtitle: "Professional Game Development Assets",
      description: "Access our comprehensive collection of Unity assets including 2D graphics, 3D models, and development tools to accelerate your game development projects.",
      categories
    };
    
  } catch (error) {
    console.error('Error fetching Unity assets from Google Sheets:', error);
    throw error;
  }
};

// Fallback function for when API key is not available
export const fetchUnityAssetsFallback = async (): Promise<UnityAssetsData> => {
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