import React, { useState, useMemo } from "react";
import { Row, Col, Typography, Pagination, Select, Space } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import AssetCard from "../AssetCard";
import { UnityAsset } from "../../services/googleSheetsService";

const { Title, Paragraph } = Typography;
const { Option } = Select;

interface AssetCategoryProps {
  title?: string;
  description?: string;
  assets: UnityAsset[];
}

const CategorySection = styled.div`
  margin-bottom: 48px;
`;

const CategoryHeader = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 16px !important;
  color: var(--primary-blue) !important;
`;

const StyledParagraph = styled(Paragraph)`
  font-size: 16px;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto !important;
`;

const AssetGrid = styled(Row)`
  margin-top: ${props => props.title ? '32px' : '0'};
  margin-bottom: 32px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  padding: 16px 0;
  gap: 16px;
  
  .ant-pagination {
    .ant-pagination-item {
      border-radius: 6px;
      
      &.ant-pagination-item-active {
        background-color: var(--primary-blue);
        border-color: var(--primary-blue);
        
        a {
          color: white;
        }
      }
      
      &:hover {
        border-color: var(--primary-blue);
      }
    }
    
    .ant-pagination-prev,
    .ant-pagination-next {
      border-radius: 6px;
      
      .ant-pagination-item-link {
        border-radius: 6px;
      }
      
      &:hover {
        border-color: var(--primary-blue);
        
        .ant-pagination-item-link {
          color: var(--primary-blue);
        }
      }
    }
    
    .ant-pagination-total-text {
      color: var(--text-light);
    }
  }
  
  .page-selector {
    display: flex;
    align-items: center;
    gap: 8px;
    
    .ant-select {
      min-width: 80px;
      
      .ant-select-selector {
        border-radius: 6px;
      }
    }
  }
`;

const PageInfo = styled.span`
  color: var(--text-light);
  font-size: 14px;
`;

const ItemsPerPage = 10;

const AssetCategory: React.FC<AssetCategoryProps> = ({ title, description, assets }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  // Calculate pagination
  const paginatedAssets = useMemo(() => {
    const startIndex = (currentPage - 1) * ItemsPerPage;
    const endIndex = startIndex + ItemsPerPage;
    return assets.slice(startIndex, endIndex);
  }, [assets, currentPage]);

  const totalPages = Math.ceil(assets.length / ItemsPerPage);

  // Generate page options for dropdown
  const pageOptions = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);

  // Reset to first page when assets change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [assets]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the category section
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDropdownChange = (page: number) => {
    handlePageChange(page);
  };

  return (
    <CategorySection>
      {title && description && (
        <CategoryHeader>
          <StyledTitle level={2}>{title}</StyledTitle>
          <StyledParagraph>{description}</StyledParagraph>
        </CategoryHeader>
      )}
      
      <AssetGrid gutter={[24, 24]} title={title}>
        {paginatedAssets.map((asset, index) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={index}>
            <AssetCard
              title={asset.title}
              link={asset.link}
              category={asset.category}
              downloadUrl={asset.downloadUrl}
            />
          </Col>
        ))}
      </AssetGrid>

      {assets.length > ItemsPerPage && (
        <PaginationContainer>
          <Pagination
            current={currentPage}
            total={assets.length}
            pageSize={ItemsPerPage}
            onChange={handlePageChange}
            showSizeChanger={false}
            showQuickJumper={false}
            showTotal={(total, range) => 
              t('pagination.showingItems', 'Showing {{start}}-{{end}} of {{total}} items', {
                start: range[0],
                end: range[1],
                total: total
              })
            }
            size="default"
          />
          
          <div className="page-selector">
            <PageInfo>{t('pagination.goToPage', 'Go to page:')}</PageInfo>
            <Select
              value={currentPage}
              onChange={handleDropdownChange}
              style={{ width: 80 }}
            >
              {pageOptions.map(page => (
                <Option key={page} value={page}>
                  {page}
                </Option>
              ))}
            </Select>
          </div>
        </PaginationContainer>
      )}
    </CategorySection>
  );
};

export default AssetCategory; 