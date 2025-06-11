import React from "react";
import { Card, Tag, Button, Space } from "antd";
import { DownloadOutlined, LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const { Meta } = Card;

interface AssetCardProps {
  title: string;
  link: string;
  category: string;
  downloadUrl?: string;
}

const StyledCard = styled(Card)`
  margin-bottom: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  height: 100%;
  border: 1px solid var(--text-light);
  background: var(--background-light);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--primary-blue);
  }
  
  .ant-card-body {
    padding: 16px;
  }
  
  .ant-card-meta-title {
    white-space: normal !important;
    word-wrap: break-word !important;
    line-height: 1.3 !important;
    margin-bottom: 8px !important;
    font-size: 14px !important;
    font-weight: 500;
    min-height: 36px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--text-color);
  }
  
  .ant-card-meta-description {
    margin-bottom: 12px !important;
  }
`;

const CategoryTag = styled(Tag)`
  margin-bottom: 12px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 11px;
  padding: 2px 8px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const AssetInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const AssetSource = styled.div`
  font-size: 12px;
  color: var(--text-light);
  font-weight: 400;
`;

const AssetLink = styled.a`
  font-size: 12px;
  color: var(--primary-blue);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: var(--primary-green);
    text-decoration: underline;
  }
`;

const ActionButton = styled(Button)`
  border-radius: 6px;
  font-size: 13px;
  height: 32px;
  padding: 0 16px;
  font-weight: 600;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  width: 100%;
  
  &.ant-btn-primary {
    background: linear-gradient(135deg, var(--primary-blue), #096dd9);
    color: white;
    
    &:hover {
      background: linear-gradient(135deg, #40a9ff, var(--primary-blue));
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(24, 144, 255, 0.3);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(24, 144, 255, 0.2);
    }
  }
  
  &.ant-btn-default {
    background: var(--background-grey);
    border: 1px solid var(--text-light);
    color: var(--text-color);
    
    &:hover {
      background: rgba(24, 144, 255, 0.1);
      border-color: var(--primary-blue);
      color: var(--primary-blue);
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(64, 169, 255, 0.2);
    }
    
    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(64, 169, 255, 0.1);
    }
  }
`;

const AssetCard: React.FC<AssetCardProps> = ({ title, link, category, downloadUrl }) => {
  const { t } = useTranslation();

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "2d":
        return "blue";
      case "3d":
        return "green";
      case "tools":
        return "orange";
      case "audio":
        return "purple";
      case "effects":
        return "cyan";
      case "characters":
        return "red";
      case "environments":
        return "magenta";
      case "ui":
        return "volcano";
      case "animations":
        return "gold";
      case "scripts":
        return "lime";
      case "textures":
        return "geekblue";
      case "models":
        return "purple";
      case "particles":
        return "cyan";
      case "shaders":
        return "magenta";
      case "music":
        return "purple";
      case "sound":
        return "cyan";
      case "materials":
        return "orange";
      case "lighting":
        return "gold";
      case "physics":
        return "blue";
      case "ai":
        return "red";
      case "networking":
        return "geekblue";
      case "mobile":
        return "lime";
      case "vr":
        return "magenta";
      case "ar":
        return "purple";
      case "plugins":
        return "volcano";
      case "templates":
        return "gold";
      case "tutorials":
        return "cyan";
      case "examples":
        return "lime";
      case "demos":
        return "orange";
      case "packages":
        return "blue";
      case "libraries":
        return "green";
      case "frameworks":
        return "red";
      case "utilities":
        return "magenta";
      case "extensions":
        return "purple";
      case "addons":
        return "cyan";
      case "modules":
        return "orange";
      case "components":
        return "gold";
      case "systems":
        return "lime";
      case "engines":
        return "blue";
      case "platforms":
        return "green";
      case "services":
        return "red";
      case "apis":
        return "magenta";
      case "sdks":
        return "purple";
      case "middleware":
        return "cyan";
      case "backends":
        return "orange";
      case "frontends":
        return "gold";
      case "databases":
        return "lime";
      case "cloud":
        return "blue";
      case "security":
        return "red";
      case "analytics":
        return "magenta";
      case "monetization":
        return "purple";
      case "social":
        return "cyan";
      case "multiplayer":
        return "orange";
      case "singleplayer":
        return "gold";
      case "casual":
        return "lime";
      case "hardcore":
        return "blue";
      case "indie":
        return "green";
      case "aaa":
        return "red";
      case "mobile":
        return "magenta";
      case "pc":
        return "purple";
      case "console":
        return "cyan";
      case "web":
        return "orange";
      case "cross-platform":
        return "gold";
      default:
        return "blue";
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    } else {
      // If no download URL, open the asset store link
      window.open(link, "_blank");
    }
  };

  return (
    <StyledCard>
      <CategoryTag color={getCategoryColor(category)}>
        {category}
      </CategoryTag>
      
      <Meta
        title={title}
        description={
          <div>
            <AssetInfo>
              <AssetSource>Unity Asset Store</AssetSource>
              <AssetLink href={link} target="_blank" rel="noopener noreferrer">
                <LinkOutlined />
                {t('assetCard.viewAsset', 'View Asset')}
              </AssetLink>
            </AssetInfo>
            
            <ActionButton 
              type="primary" 
              icon={<DownloadOutlined />} 
              onClick={handleDownload}
              size="small"
            >
              {t('assetCard.download', 'Download')}
            </ActionButton>
          </div>
        }
      />
    </StyledCard>
  );
};

export default AssetCard; 