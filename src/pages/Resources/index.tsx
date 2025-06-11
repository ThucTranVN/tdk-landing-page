import { lazy, useState, useEffect, useMemo, useRef } from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";
import { Spin, Alert, Typography, Tabs, Input, Button, Space } from "antd";
import { SearchOutlined, KeyOutlined, CloseOutlined } from "@ant-design/icons";
import { fetchUnityAssetsFromGoogleSheets, fetchUnityAssetsFallback, UnityAssetsData, UnityAsset } from "../../services/googleSheetsService";
import AssetCategory from "../../components/AssetCategory";
import { useTheme } from "../../context/ThemeContext";

const Container = lazy(() => import("../../common/Container"));

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

const ResourcesWrapper = styled.div`
  padding: 8rem 0 5rem;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
    padding-top: 1rem;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-light);
  }
  
  p {
    font-size: 1.1rem;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const WarningMessage = styled.div`
  background: ${props => props.theme === 'dark' ? '#2d2d00' : '#fff3cd'};
  border: 1px solid ${props => props.theme === 'dark' ? '#4d4d00' : '#ffeaa7'};
  border-radius: 8px;
  padding: 16px 24px;
  margin: 2rem auto 0;
  max-width: 600px;
  text-align: center;
  
  p {
    color: ${props => props.theme === 'dark' ? '#ffeb3b' : '#856404'};
    font-size: 1rem;
    margin: 0;
    font-weight: 500;
  }
  
  .warning-icon {
    color: #f39c12;
    margin-right: 8px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const ErrorContainer = styled.div`
  margin: 2rem 0;
`;

const VirtualKeyboard = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--background-light);
  border-top: 1px solid var(--text-light);
  padding: 12px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: slideUp 0.3s ease-out;
  max-height: 60vh;
  overflow-y: auto;
  
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  
  .keyboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    position: sticky;
    top: 0;
    background: var(--background-light);
    z-index: 2;
    padding: 4px 0;
    
    .keyboard-title {
      font-size: 14px;
      color: var(--text-light);
      font-weight: 500;
    }
    
    .close-keyboard {
      background: none;
      border: none;
      color: var(--text-light);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      
      &:hover {
        background: var(--background-grey);
      }
    }
  }
  
  .keyboard-layout {
    display: flex;
    flex-direction: column;
    gap: 4px;
    
    .keyboard-row {
      display: flex;
      justify-content: center;
      gap: 3px;
      
      .key {
        min-width: 36px;
        height: 36px;
        border: 1px solid var(--text-light);
        border-radius: 6px;
        background: var(--background-light);
        color: var(--text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        user-select: none;
        
        &:hover {
          background: var(--background-grey);
          border-color: var(--primary-blue);
        }
        
        &:active {
          background: var(--text-light);
          transform: scale(0.95);
        }
        
        &.space {
          min-width: 180px;
        }
        
        &.backspace {
          min-width: 50px;
          font-size: 10px;
        }
        
        &.enter {
          min-width: 50px;
          background: var(--primary-blue);
          color: white;
          border-color: var(--primary-blue);
          font-size: 10px;
          
          &:hover {
            background: #0056b3;
            border-color: #0056b3;
          }
        }
        
        /* Special styling for number keys */
        &:nth-child(-n+10) {
          background: var(--background-grey);
          border-color: var(--text-light);
          font-weight: 600;
        }
        
        /* Special styling for symbol keys */
        &:nth-child(n+11) {
          background: var(--background-grey);
          border-color: var(--text-light);
          font-size: 11px;
        }
      }
    }
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 8px;
    
    .keyboard-layout .keyboard-row .key {
      min-width: 32px;
      height: 32px;
      font-size: 11px;
      
      &.space {
        min-width: 120px;
      }
      
      &.backspace,
      &.enter {
        min-width: 45px;
        font-size: 9px;
      }
    }
  }
`;

const SearchContainer = styled.div`
  margin: 2rem auto 3rem;
  max-width: 700px;
  padding: 0 1rem;
  position: relative;
  
  .google-search-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: var(--background-light);
    border: 1px solid var(--text-light);
    border-radius: 24px;
    padding: 8px 16px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.28);
    transition: all 0.2s ease;
    
    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
      border-color: var(--primary-blue);
    }
    
    &:focus-within {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
      border-color: var(--primary-blue);
    }
    
    .input-container {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      
      .search-input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 16px;
        color: var(--text-color);
        background: transparent;
        padding: 8px 12px;
        padding-right: 40px;
        
        &::placeholder {
          color: var(--text-light);
        }
      }
      
      .clear-button {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        border: none;
        border-radius: 50%;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        z-index: 2;
        
        &:hover {
          background: var(--background-grey);
        }
        
        &:active {
          background: var(--text-light);
        }
        
        .anticon {
          font-size: 14px;
          color: var(--text-light);
        }
      }
    }
    
    .search-buttons {
      display: flex;
      align-items: center;
      gap: 8px;
      
      .search-button {
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover {
          background: var(--background-grey);
        }
        
        &:active {
          background: var(--text-light);
        }
        
        .anticon {
          font-size: 18px;
          color: var(--text-light);
        }
        
        &.search-btn {
          .anticon {
            color: var(--primary-blue);
          }
          
          &:hover {
            background: rgba(24, 144, 255, 0.1);
          }
        }
      }
    }
  }
`;

const SearchResultsInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
  animation: fadeInUp 0.5s ease-out;
  
  .results-count {
    font-size: 16px;
    color: var(--text-light);
    font-weight: 500;
    background: var(--background-light);
    padding: 12px 24px;
    border-radius: 20px;
    display: inline-block;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(24, 144, 255, 0.1);
  }
  
  .search-term {
    color: var(--primary-blue);
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(24, 144, 255, 0.1);
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledTabs = styled(Tabs)`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  width: 100%;
  font-weight: 300;
  font-size: 1.25em;

  .ant-tabs-nav {
    margin-bottom: 0;
    padding: 0;
  }

  .ant-tabs-nav-list {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .ant-tabs-tab {
    position: relative;
    margin: 0;
    padding: 0.5em 1em;
    font-size: 0.9em;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
    
    &:hover {
      color: var(--primary-blue);
    }
    
    &.ant-tabs-tab-active {
      color: var(--primary-blue);
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid var(--primary-blue);
      }
    }
  }
  
  .ant-tabs-content {
    padding: 2rem 0;
  }
  
  .ant-tabs-tab-btn {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
  }
  
  .ant-tabs-ink-bar {
    display: none;
  }
  
  .ant-tabs-content-holder {
    margin-top: 2em;
  }
`;

const TabContent = styled.div`
  min-height: 400px;
`;

const Resources = ({ t }: { t: any }) => {
  const [assetsData, setAssetsData] = useState<UnityAssetsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);
  const dataLoadedRef = useRef(false);
  const { theme } = useTheme();

  // Test translation function
  console.log('Translation test:', t('resources.title'));
  console.log('Translation function:', typeof t);

  useEffect(() => {
    // Only load data once, not on every language change
    if (dataLoadedRef.current) {
      return;
    }

    const loadAssets = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to fetch from Google Sheets API first
        const data = await fetchUnityAssetsFromGoogleSheets();
        setAssetsData(data);
        dataLoadedRef.current = true;
        
      } catch (err) {
        console.error('Error loading assets from Google Sheets API:', err);
        
        // If API fails, try fallback
        try {
          const fallbackData = await fetchUnityAssetsFallback();
          setAssetsData(fallbackData);
          setError(t('resources.error.fallback', 'Using fallback data - Google Sheets API not available'));
          dataLoadedRef.current = true;
        } catch (fallbackErr) {
          setError(t('resources.error.loadFailed', 'Failed to load assets. Please check your API configuration.'));
          dataLoadedRef.current = true;
        }
      } finally {
        setLoading(false);
      }
    };

    loadAssets();
  }, []); // Remove t from dependencies to prevent re-fetching on language change

  // Filter assets based on search term
  const filteredAssetsData = useMemo(() => {
    if (!assetsData || !searchTerm.trim()) {
      return assetsData;
    }

    const searchLower = searchTerm.toLowerCase();
    const filteredCategories: { [key: string]: any } = {};

    Object.entries(assetsData.categories).forEach(([categoryKey, categoryData]) => {
      const filteredAssets = categoryData.assets.filter((asset: UnityAsset) =>
        asset.title.toLowerCase().includes(searchLower) ||
        asset.category.toLowerCase().includes(searchLower) ||
        (asset.downloadUrl && asset.downloadUrl.toLowerCase().includes(searchLower))
      );

      if (filteredAssets.length > 0) {
        filteredCategories[categoryKey] = {
          ...categoryData,
          assets: filteredAssets
        };
      }
    });

    return {
      ...assetsData,
      categories: filteredCategories
    };
  }, [assetsData, searchTerm]);

  // Calculate total search results
  const totalSearchResults = useMemo(() => {
    if (!filteredAssetsData) return 0;
    return Object.values(filteredAssetsData.categories).reduce(
      (total, category) => total + category.assets.length,
      0
    );
  }, [filteredAssetsData]);

  const handleSearch = () => {
    // Search is handled by the input onChange
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  const handleVirtualKeyboard = () => {
    setShowVirtualKeyboard(!showVirtualKeyboard);
  };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setSearchTerm(prev => prev.slice(0, -1));
    } else if (key === 'space') {
      setSearchTerm(prev => prev + ' ');
    } else if (key === 'enter') {
      setShowVirtualKeyboard(false);
    } else {
      setSearchTerm(prev => prev + key);
    }
  };

  const keyboardLayout = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
    ['@', '#', '$', '%', '&', '*', '(', ')', '-', '+'],
    ['!', '"', "'", ',', '.', '?', '/', '\\', '|', ';'],
    ['space', 'enter']
  ];

  if (loading) {
    return (
      <Container>
        <ResourcesWrapper>
          <LoadingContainer>
            <Spin size="large" />
          </LoadingContainer>
        </ResourcesWrapper>
      </Container>
    );
  }

  if (error && !assetsData) {
    return (
      <Container>
        <ResourcesWrapper>
          <ErrorContainer>
            <Alert
              message={t('resources.error.loadingError', "Error Loading Assets")}
              description={error}
              type="error"
              showIcon
            />
          </ErrorContainer>
        </ResourcesWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <ResourcesWrapper>
        <HeroSection>
          <Title level={1}>{t('resources.title') || assetsData?.title || "Unity Asset Resources"}</Title>
          <Title level={2}>{t('resources.subtitle') || assetsData?.subtitle}</Title>
          <Paragraph>{t('resources.description') || assetsData?.description}</Paragraph>
          <WarningMessage theme={theme}>
            <p>⚠️ {t('resources.warning') || "These assets are for learning and research purposes only, not for commercial projects."}</p>
          </WarningMessage>
        </HeroSection>

        {error && (
          <ErrorContainer>
            <Alert
              message={t('resources.error.title', "Warning")}
              description={error}
              type="warning"
              showIcon
            />
          </ErrorContainer>
        )}

        {/* Google-style Search Bar */}
        <SearchContainer>
          <div className="google-search-wrapper">
            <div className="input-container">
              <input
                type="text"
                className="search-input"
                placeholder={t('resources.search.placeholder', "Search assets by title, category, or download URL...")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              {searchTerm && (
                <button
                  className="clear-button"
                  onClick={handleClear}
                  title={t('resources.search.clear', "Clear")}
                >
                  <CloseOutlined />
                </button>
              )}
            </div>
            <div className="search-buttons">
              <button
                className="search-button"
                onClick={handleVirtualKeyboard}
                title={t('resources.search.virtualKeyboard', "Virtual Keyboard")}
              >
                <KeyOutlined />
              </button>
              <button
                className="search-button search-btn"
                onClick={handleSearch}
                title={t('resources.search.search', "Search")}
              >
                <SearchOutlined />
              </button>
            </div>
          </div>
        </SearchContainer>

        {/* Search Results Info */}
        {searchTerm && (
          <SearchResultsInfo>
            <div className="results-count">
              {t('resources.search.resultsFound', "Found")} <span className="search-term">{totalSearchResults}</span> {t('resources.search.assets', "assets")} {t('resources.search.matching', "matching")} "<span className="search-term">{searchTerm}</span>"
            </div>
          </SearchResultsInfo>
        )}

        {filteredAssetsData?.categories && (
          <StyledTabs defaultActiveKey="2D" size="large" centered>
            {Object.entries(filteredAssetsData.categories).map(([categoryKey, categoryData]) => (
              <TabPane 
                tab={`${categoryKey} (${categoryData.assets.length})`} 
                key={categoryKey}
              >
                <TabContent>
                  <AssetCategory
                    title=""
                    description=""
                    assets={categoryData.assets}
                  />
                </TabContent>
              </TabPane>
            ))}
          </StyledTabs>
        )}

        {/* No results message */}
        {searchTerm && Object.keys(filteredAssetsData?.categories || {}).length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <Title level={3} style={{ color: '#666' }}>
              {t('resources.search.noResults', "No assets found matching")} "<span style={{ color: '#1890ff' }}>{searchTerm}</span>"
            </Title>
            <Paragraph style={{ color: '#888' }}>
              {t('resources.search.noResultsSuggestion', "Try searching with different keywords or browse all categories above.")}
            </Paragraph>
          </div>
        )}

        {/* Virtual Keyboard */}
        {showVirtualKeyboard && (
          <VirtualKeyboard>
            <div className="keyboard-header">
              <span className="keyboard-title">{t('resources.virtualKeyboard.title', "Virtual Keyboard")}</span>
              <button 
                className="close-keyboard"
                onClick={() => setShowVirtualKeyboard(false)}
                title={t('resources.virtualKeyboard.close', "Close Keyboard")}
              >
                <CloseOutlined />
              </button>
            </div>
            <div className="keyboard-layout">
              {keyboardLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                  {row.map((key) => (
                    <button
                      key={key}
                      className={`key ${key}`}
                      onClick={() => handleKeyPress(key)}
                    >
                      {key === 'backspace' ? '⌫' : key === 'space' ? t('resources.virtualKeyboard.space', 'Space') : key === 'enter' ? t('resources.virtualKeyboard.enter', 'Enter') : key.toUpperCase()}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </VirtualKeyboard>
        )}
      </ResourcesWrapper>
    </Container>
  );
};

export default withTranslation()(Resources); 