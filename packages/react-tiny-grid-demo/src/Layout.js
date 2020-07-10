// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import styled, { ThemeProvider } from 'styled-components';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faBolt,
//   faQuestionCircle,
//   faFeather,
//   faCog,
//   faGlobe,
//   faTimes,
//   faChevronDown,
//   faUser,
//   faDollarSign,
//   faBell,
//   faCheck,
//   faHeart,
//   faExclamationCircle,
//   faChevronRight,
//   faChevronLeft,
//   faBoxes,
//   faPalette,
//   faMousePointer,
// } from '@fortawesome/free-solid-svg-icons';
// import MenuItem from './components/MenuItem';
// import SubMenuItem from './components/SubMenuItem';
// import SubMenu from './components/SubMenu';
// import Tablet from './components/Tablet';
// import Mobile from './components/Mobile';
// import Menu from './components/Menu';
// import MobileSubMenuItem from './components/MobileSubMenuItem';
// import MobileMenuItem from './components/MobileMenuItem';
// import MobileMenu from './components/MobileMenu';
// import MobileSubMenu from './components/MobileSubMenu';
// import MobileMenuToggle from './components/MobileMenuToggle';
// import Header from './components/Header';
// import { theme } from './theme';
// import H1 from './components/H1';
// import H2 from './components/H2';
// import H3 from './components/H3';
// import H4 from './components/H4';
// import H5 from './components/H5';
// import H6 from './components/H6';
// import Row from './components/Row';
// import Button from './components/Button';
// import InternalLink from './components/InternalLink';
// import Collapse from './components/Collapse';
// import { pathnameIncludes } from './utils/pathnameIncludes';

// library.add(
//   faQuestionCircle,
//   faFeather,
//   faCog,
//   faGlobe,
//   faTimes,
//   faCheck,
//   faChevronDown,
//   faUser,
//   faBell,
//   faDollarSign,
//   faHeart,
//   faExclamationCircle,
//   faChevronRight,
//   faChevronLeft,
//   faBoxes,
//   faPalette,
//   faMousePointer,
// );

// const Layout = ({ children, component }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <ThemeProvider theme={theme}>
//       <Wrapper>
//         <Header
//           fixed
//           color={component ? 'primary' : 'transparent'}
//           scrollColor="primary"
//           height={component ? 55 : 105}
//           scrollHeight={component ? 55 : 65}
//         >
//           <H1 customStyles={'font-size: 32px; position: relative; top: -1px;'} className="m-none">
//             System
//           </H1>
//           <Mobile>
//             <MobileMenuToggle
//               open={mobileMenuOpen}
//               toggleFunction={() => setMobileMenuOpen(!mobileMenuOpen)}
//             />
//           </Mobile>
//           <Tablet>
//             <Menu>
//               <MenuItem>
//                 <a href="/">Home</a>
//               </MenuItem>
//               <MenuItem submenu>
//                 <InternalLink to="/components">Components</InternalLink>
//                 <SubMenu>
//                   <SubMenuItem>
//                     <InternalLink to="/components/layout">Layout</InternalLink>
//                   </SubMenuItem>
//                   <SubMenuItem>
//                     <InternalLink to="/components/inputs">Inputs</InternalLink>
//                   </SubMenuItem>
//                   <SubMenuItem>
//                     <InternalLink to="/components/display">
//                       Display
//                     </InternalLink>
//                   </SubMenuItem>
//                 </SubMenu>
//               </MenuItem>
//               <MenuItem square>
//                 <a href="/">
//                   <FontAwesomeIcon
//                     icon="heart"
//                     style={{ width: 20, height: 20, fontSize: 24 }}
//                   />
//                 </a>
//               </MenuItem>
//             </Menu>
//           </Tablet>
//         </Header>
//         <Mobile>
//           <MobileMenu open={mobileMenuOpen}>
//             <MobileMenuItem>
//               <a href="/">Home</a>
//             </MobileMenuItem>
//             <MobileMenuItem submenu>
//               <InternalLink to="/components">Components</InternalLink>
//               <MobileSubMenu>
//                 <MobileSubMenuItem>
//                   <InternalLink to="/components/layout">Layout</InternalLink>
//                 </MobileSubMenuItem>
//                 <MobileSubMenuItem>
//                   <InternalLink to="/components/inputs">Inputs</InternalLink>
//                 </MobileSubMenuItem>
//                 <MobileSubMenuItem>
//                   <InternalLink to="/components/display">Display</InternalLink>
//                 </MobileSubMenuItem>
//               </MobileSubMenu>
//             </MobileMenuItem>
//           </MobileMenu>
//         </Mobile>

//         {component ? (
//           <>
//             <br />
//             <br />
//             <Row spacing={[12]} breakpoints={[576, 850, 1200]}>
//               <div widths={[4, 3, 2]} style={{ position: 'sticky', top: 0 }}>
//                 <div
//                   style={{
//                     borderRight: `1px solid ${theme.color.gray.two}`,
//                     height: '100%',
//                     position: 'sticky',
//                     left: 0,
//                     width: '100%',
//                     top: 0,
//                     boxShadow: 'none',
//                     padding: '32px 16px',
//                   }}
//                 >
//                   <H6 className="m-none">Getting Started</H6>
//                   <InternalLink
//                     className="no-styling"
//                     customStyles={`
//                       color: inherit;
//                       display: block;
//                       font-size: 15px;
//                       padding: 12px 16px;
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                       background: white;
//                       :hover {
//                         background: ${theme.color.primary}10;
//                       }
//                     `}
//                     to="/components/container"
//                   >
//                     Quick Start
//                   </InternalLink>
//                   <InternalLink
//                     className="no-styling"
//                     customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           left: -16px;
//                           position: relative;
//                           width: calc(100% + 32px);
//                           background: white;
//                         :hover {
//                           background: ${theme.color.primary}10;
//                         }
//                       `}
//                     to="/components/container"
//                   >
//                     Theming
//                   </InternalLink>
//                   <Collapse
//                     startOpen={
//                       pathnameIncludes('section') ||
//                       pathnameIncludes('container') ||
//                       pathnameIncludes('grid') ||
//                       pathnameIncludes('flex') ||
//                       pathnameIncludes('hidden') ||
//                       pathnameIncludes('header')
//                     }
//                     customStyles={`
//                       border-top: 1px solid ${theme.color.gray.two};
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       padding: 0px 16px;
//                       position: relative;
//                     `}
//                     titleStyles={`
//                       padding: 10px 16px;
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                       :hover {
//                         background: ${theme.color.primary}10;
//                       }
//                     `}
//                     bodyStyles={`
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                     `}
//                   >
//                     <div>
//                       <H6 className="m-none">Layout</H6>
//                     </div>
//                     <div>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('section')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('section')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('section')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('section')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/section"
//                       >
//                         Section
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('container')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('container')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('container')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('container')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/container"
//                       >
//                         Container
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('grid')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('grid')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('grid')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('grid')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/grid"
//                       >
//                         Grid
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('flex')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('flex')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('flex')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('flex')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/flex"
//                       >
//                         Flex
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('hidden')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('hidden')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('hidden')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('hidden')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/hidden"
//                       >
//                         Hidden
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('header')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('header')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('header')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('header')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/header"
//                       >
//                         Header
//                       </InternalLink>
//                     </div>
//                   </Collapse>
//                   <Collapse
//                     startOpen={
//                       pathnameIncludes('/menu') ||
//                       pathnameIncludes('mobile-menu') ||
//                       pathnameIncludes('dropdown') ||
//                       pathnameIncludes('tabs')
//                     }
//                     customStyles={`
//                       border-top: 1px solid ${theme.color.gray.two};
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       padding: 0px 16px;
//                       position: relative;
//                     `}
//                     titleStyles={`
//                       padding: 10px 16px;
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                       :hover {
//                         background: ${theme.color.primary}10;
//                       }
//                     `}
//                     bodyStyles={`
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                     `}
//                   >
//                     <div>
//                       <H6 className="m-none">Navigation</H6>
//                     </div>
//                     <div>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('/menu')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('/menu')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('/menu')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('/menu')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/container"
//                       >
//                         Menu
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('mobile-menu')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('mobile-menu')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('mobile-menu')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('mobile-menu')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/mobile-menu"
//                       >
//                         Mobile Menu
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('dropdown')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('dropdown')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('dropdown')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('dropdown')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/dropdown"
//                       >
//                         Dropdown
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('tabs')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('tabs')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('tabs')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('tabs')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/tabs"
//                       >
//                         Tabs
//                       </InternalLink>
//                     </div>
//                   </Collapse>
//                   <Collapse
//                     startOpen={
//                       pathnameIncludes('alert') ||
//                       pathnameIncludes('notification') ||
//                       pathnameIncludes('badge') ||
//                       pathnameIncludes('info') ||
//                       pathnameIncludes('typography') ||
//                       pathnameIncludes('modal')
//                     }
//                     customStyles={`
//                       border-top: 1px solid ${theme.color.gray.two};
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       padding: 0px 16px;
//                       position: relative;
//                     `}
//                     titleStyles={`
//                       padding: 10px 16px;
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                       :hover {
//                         background: ${theme.color.primary}10;
//                       }
//                     `}
//                     bodyStyles={`
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                     `}
//                   >
//                     <div>
//                       <H6 className="m-none">Display</H6>
//                     </div>
//                     <div>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('alert')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('alert')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('alert')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('alert')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/alert"
//                       >
//                         Alert
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('notification')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('notification')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('notification')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('notification')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/notification"
//                       >
//                         Notification
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('badge')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('badge')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('badge')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('badge')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/badge"
//                       >
//                         Badge
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('info')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('info')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('info')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('info')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/info"
//                       >
//                         Info
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('modal')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('modal')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('modal')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('modal')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/modal"
//                       >
//                         Modal
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('typography')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('typography')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('typography')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('typography')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/typography"
//                       >
//                         Typography
//                       </InternalLink>
//                     </div>
//                   </Collapse>
//                   <Collapse
//                     startOpen={
//                       pathnameIncludes('button') ||
//                       pathnameIncludes('input') ||
//                       pathnameIncludes('textarea') ||
//                       pathnameIncludes('select') ||
//                       pathnameIncludes('checkboxes') ||
//                       pathnameIncludes('radio-buttons') ||
//                       pathnameIncludes('toggle') ||
//                       pathnameIncludes('slider')
//                     }
//                     customStyles={`
//                       border-top: 1px solid ${theme.color.gray.two};
//                       border-bottom: 1px solid ${theme.color.gray.two};
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       padding: 0px 16px;
//                       position: relative;
//                     `}
//                     titleStyles={`
//                       padding: 10px 16px;
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                       :hover {
//                         background: ${theme.color.primary}10;
//                       }
//                     `}
//                     bodyStyles={`
//                       width: calc(100% + 32px);
//                       left: -16px;
//                       position: relative;
//                     `}
//                   >
//                     <>
//                       <H6 className="m-none">Input</H6>
//                     </>
//                     <>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('button')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('button')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('button')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('button')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/button"
//                       >
//                         Button
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('input')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('input')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('input')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('input')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/input"
//                       >
//                         Input
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('textarea')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('textarea')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('textarea')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('textarea')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/textarea"
//                       >
//                         Text Area
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('select')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('select')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('select')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('select')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/select"
//                       >
//                         Select
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('checkboxes')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('checkboxes')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('checkboxes')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('checkboxes')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/checkboxes"
//                       >
//                         Checkboxes
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('radio-buttons')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('radio-buttons')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('radio-buttons')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('radio-buttons')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/radio-buttons"
//                       >
//                         Radio Buttons
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('toggle')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('toggle')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('toggle')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('toggle')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/toggle"
//                       >
//                         Toggle
//                       </InternalLink>
//                       <InternalLink
//                         className="no-styling"
//                         customStyles={`
//                           color: inherit;
//                           display: block;
//                           font-size: 15px;
//                           padding: 12px 16px;
//                           background: ${
//                             pathnameIncludes('slider')
//                               ? theme.color.primary
//                               : '#ffffff'
//                           }10;
//                           color: ${
//                             pathnameIncludes('slider')
//                               ? theme.color.primary
//                               : 'inherit'
//                           };
//                           :hover {
//                             background: ${
//                               pathnameIncludes('slider')
//                                 ? `${theme.color.primary}10`
//                                 : `${theme.color.primary}10`
//                             };
//                             color: ${
//                               pathnameIncludes('slider')
//                                 ? theme.color.primary
//                                 : 'inherit'
//                             };
//                           }
//                         `}
//                         to="/components/slider"
//                       >
//                         Slider
//                       </InternalLink>
//                     </>
//                   </Collapse>
//                 </div>
//               </div>
//               <div widths={[8, 9, 10]}>{children}</div>
//             </Row>
//           </>
//         ) : (
//           <>{children}</>
//         )}
//       </Wrapper>
//     </ThemeProvider>
//   );
// };

// const Wrapper = styled.div`
//   color: ${(props) => props.theme.color.heading};
// `;

// export default Layout;
