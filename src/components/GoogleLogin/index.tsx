import React from 'react';
import { GoogleLogin as GoogleLoginButton } from '@react-oauth/google';
import { Button, Avatar, Dropdown, Menu, Space } from 'antd';
import { UserOutlined, LogoutOutlined, GoogleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { withTranslation } from 'react-i18next';

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: var(--background-grey);
  }
  
  .user-name {
    color: var(--text-color);
    font-weight: 500;
    font-size: 14px;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .user-email {
    color: var(--text-light);
    font-size: 12px;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const LoginButton = styled(Button)`
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
`;

const GoogleLogin: React.FC<{ t: any }> = ({ t }) => {
  const { user, isAuthenticated, login, logout } = useAuth();

  const handleLoginSuccess = (credentialResponse: any) => {
    if (credentialResponse.credential) {
      login(credentialResponse.credential);
    }
  };

  const handleLoginError = () => {
    console.error('Login Failed');
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <div>
          <div style={{ fontWeight: 500 }}>{user?.name}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-light)' }}>{user?.email}</div>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
        {t("Logout", "Logout")}
      </Menu.Item>
    </Menu>
  );

  if (isAuthenticated && user) {
    return (
      <LoginContainer>
        <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
          <UserInfo>
            <Avatar 
              src={user.picture} 
              size={32}
              icon={<UserOutlined />}
            />
            <div>
              <div className="user-name">{user.name}</div>
              <div className="user-email">{user.email}</div>
            </div>
          </UserInfo>
        </Dropdown>
      </LoginContainer>
    );
  }

  return (
    <LoginContainer>
      <GoogleLoginButton
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
        useOneTap
        theme="outline"
        size="large"
        text="signin_with"
        shape="rectangular"
        locale="en"
      />
    </LoginContainer>
  );
};

export default withTranslation()(GoogleLogin); 