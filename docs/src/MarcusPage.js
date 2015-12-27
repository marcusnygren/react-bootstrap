import React from 'react';
import findIndex from 'lodash-compat/array/findIndex';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import Waypoint from 'react-waypoint';

import Nav from '../../src/Nav';
import NavItem from '../../src/NavItem';

import Anchor from './Anchor';
import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import SubNav from './SubNav';

import InplaceEditorSection from './sections/InplaceEditorSection';

// order matters
/* eslint-disable indent */
const sections = {
  buttons: '#buttons',
    btnGroups: '#btn-groups',
    dropdowns: '#btn-dropdowns',
    menuitems: '#menu-items',
  overlays: '#overlays',
    modals: '#modals',
    tooltips: '#tooltips',
    popovers: '#popovers',
    customOverlays: '#custom-overlays',
  navigation: '#navigation',
    navs: '#navs',
    navbars: '#navbars',
    crumbs: '#breadcrumbs',
    tabs: '#tabs',
    pagination: '#pagination',
    pager: '#pager',
  layout: '#page-layout',
    grid: '#grid',
    jumbotron: '#jumbotron',
    pageHeader: '#page-header',
    listGroup: '#list-group',
    tables: '#tables',
    panels: '#panels',
    wells: '#wells',
  forms: '#forms',
  media: '#media-content',
    images: '#images',
    thumbnails: '#thumbnails',
    embed: '#responsive-embed',
    carousels: '#carousels',
  misc: '#misc',
    icons: '#glyphicons',
    labels: '#labels',
    badges: '#badges',
    alerts: '#alerts',
    progress: '#progress',
  utilities: '#utilities',
    transitions: '#transitions',
  missing: '#missing',
    affix: '#affix',
    scrollspy: '#scrollspy'
};
/* eslint-enable indent */

function prevSection(href) {
  let keys = Object.keys(sections);
  let idx = findIndex(keys, k => sections[k] === href);
  return sections[keys[Math.max(idx - 1, 0)]];
}

let ScrollSpy = ({ href, onSpy }) => (
  <Waypoint
    onEnter={(e, dir) => dir === 'above' && onSpy(href)}
    onLeave={(e, dir) => {
      if (dir === 'above') { onSpy(href); }
      if (dir === 'below') { onSpy(prevSection(href)); }
    }}
  />
);

const MarcusPage = React.createClass({
  getInitialState() {
    return {
      activeNavItemHref: null
    };
  },

  getMain() {
    return this.refs.main;
  },

  handleNavItemSelect(key, href) {
    window.location = href;
    this.setActiveNavItem();
  },

  componentDidMount() {
    this.setActiveNavItem();
  },

  setActiveNavItem(href = window.location.hash) {
    this.setState({
      activeNavItemHref: href
    });
  },

  render() {
    return (
        <div>
          <NavMain activePage="marcus" />

          <PageHeader
            title="Marcus components"
            subTitle="Use of custom React components" />

          <div className="container bs-docs-container">
            <div className="row">
              <div className="col-md-9" role="main">
                <div className="bs-docs-section">
                  <p className="lead">Lorum ipsum.</p>

                  <InplaceEditorSection />

                  <h3>Step by step</h3>
                  <p>Step by step.</p>

                </div>
              </div>
            </div>
          </div>

          <PageFooter />
        </div>
    );
  }
});

export default MarcusPage;
