/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React, { PureComponent } from 'react';
import { Balloon, Icon, Nav } from '@alifd/next';
import IceImg from '@icedesign/img';
import Layout from '@icedesign/layout';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { headerMenuConfig } from '../../../../menuConfig';
import Logo from '../Logo';

import './scss/base.scss';

export default class Header extends PureComponent {


  render() {
    const { isMobile, className, style } = this.props;

    return (
      <Layout.Header
        theme={'dark'}
        className={cx('ice-design-layout-header', className)}
        style={{ ...style }}
      >
        <Logo />

        <div className="ice-design-layout-header-menu">
          {/* Header 菜单项 begin */}
          {headerMenuConfig && headerMenuConfig.length > 0 ? (
            <Nav direction="hoz" type="secondary" selectedKeys={[]}>
              {headerMenuConfig.map((nav, idx) => {
                const linkProps = {};
                if (nav.newWindow) {
                  linkProps.href = nav.path;
                  linkProps.target = '_blank';
                } else if (nav.external) {
                  linkProps.href = nav.path;
                } else {
                  linkProps.to = nav.path;
                }
                return (
                  <Nav.Item key={idx} icon={nav.icon ? nav.icon: null}>
                    {linkProps.to ? (
                      <Link {...linkProps}>
                        {!isMobile ? nav.name : null}
                      </Link>
                    ) : (
                      <a {...linkProps}>
                        {!isMobile ? nav.name : null}
                      </a>
                    )}
                  </Nav.Item>
                );
              })}
            </Nav>
          ) : null}
          {/* Header 菜单项 end */}

          {/* Header 右侧内容块 */}
          <Balloon
            trigger={
              <div className="ice-design-header-userpannel">
                <IceImg
                  height={40}
                  width={40}
                  src="https://imgchr.com/i/Cu3Dne"
                  className="user-avatar"
                />
                <div className="user-profile">
                  <span className="user-name">蒋涵</span>
                  <br />
                </div>
                <Icon
                  type="smile"
                  size="xs"
                  className="icon-down"
                />
              </div>
            }
            closable={false}
            className="user-profile-menu"
          >
          </Balloon>
        </div>
      </Layout.Header>
    );
  }
}
