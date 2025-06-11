import React from 'react';
import { Button, Modal, message } from 'antd';
import { DownloadOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { withTranslation } from 'react-i18next';

const DownloadButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  
  &.authenticated {
    background: var(--primary-blue);
    border-color: var(--primary-blue);
    color: white;
    
    &:hover {
      background: #0056b3;
      border-color: #0056b3;
    }
  }
  
  &.unauthenticated {
    background: var(--background-grey);
    border-color: var(--text-light);
    color: var(--text-color);
    
    &:hover {
      border-color: var(--primary-blue);
      color: var(--primary-blue);
    }
  }
`;

interface ProtectedDownloadProps {
  downloadUrl: string;
  fileName: string;
  t: any;
}

const ProtectedDownload: React.FC<ProtectedDownloadProps> = ({ downloadUrl, fileName, t }) => {
  const { isAuthenticated, user } = useAuth();

  const handleDownload = () => {
    if (!isAuthenticated) {
      Modal.info({
        title: t("Login Required", "Login Required"),
        content: (
          <div>
            <p>{t("Please log in with your Google account to download this asset.", "Please log in with your Google account to download this asset.")}</p>
            <p style={{ marginTop: '8px', fontSize: '14px', color: 'var(--text-light)' }}>
              {t("This helps us track downloads and provide better support.", "This helps us track downloads and provide better support.")}
            </p>
          </div>
        ),
        okText: t("OK", "OK"),
        centered: true,
      });
      return;
    }

    // Proceed with download
    try {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      message.success(t("Download started!", "Download started!"));
      
      // Here you could also log the download to your analytics
      console.log(`Download: ${fileName} by user: ${user?.email}`);
    } catch (error) {
      console.error('Download error:', error);
      message.error(t("Download failed. Please try again.", "Download failed. Please try again."));
    }
  };

  return (
    <DownloadButton
      type="primary"
      icon={isAuthenticated ? <DownloadOutlined /> : <LockOutlined />}
      onClick={handleDownload}
      className={isAuthenticated ? 'authenticated' : 'unauthenticated'}
    >
      {isAuthenticated 
        ? t("Download", "Download")
        : t("Login to Download", "Login to Download")
      }
    </DownloadButton>
  );
};

export default withTranslation()(ProtectedDownload); 