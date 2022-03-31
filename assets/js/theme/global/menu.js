import collapsibleFactory from '../common/collapsible';
import collapsibleGroupFactory from '../common/collapsible-group';
import React from 'react'
import * as ReactDOMClient from 'react-dom/client';

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const AlphabetItems = () => (
    <ul className='brands-items__list'>
      {alphabet.map((item, index) =>
        <li key={index}>
          <a href={`/brands/?starting=${item}`}>{item}</a>
        </li>
      )}
    </ul>
)

const PLUGIN_KEY = 'menu';

/*
 * Manage the behaviour of a menu
 * @param {jQuery} $menu
 */
class Menu {
    constructor($menu) {
        this.$menu = $menu;
        this.$body = $('body');
        this.hasMaxMenuDisplayDepth = this.$body.find('.navPages-list').hasClass('navPages-list-depth-max');

        // Init collapsible
        this.collapsibles = collapsibleFactory('[data-collapsible]', { $context: this.$menu });
        this.collapsibleGroups = collapsibleGroupFactory($menu);

        // Auto-bind
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);

        // Listen
        this.bindEvents();
        this.onReady();
    }

    onReady() {
        const container = document.getElementById('alphabet-brands');
        const root = ReactDOMClient.createRoot(container);
        root.render(<AlphabetItems />);
    }

    collapseAll() {
        this.collapsibles.forEach(collapsible => collapsible.close());
        this.collapsibleGroups.forEach(group => group.close());
    }

    collapseNeighbors($neighbors) {
        const $collapsibles = collapsibleFactory('[data-collapsible]', { $context: $neighbors });

        $collapsibles.forEach($collapsible => $collapsible.close());
    }

    bindEvents() {
        this.$menu.on('click', this.onMenuClick);
        this.$body.on('click', this.onDocumentClick);
    }

    unbindEvents() {
        this.$menu.off('click', this.onMenuClick);
        this.$body.off('click', this.onDocumentClick);
    }

    onMenuClick(event) {
        event.stopPropagation();

        if (this.hasMaxMenuDisplayDepth) {
            const $neighbors = $(event.target).parent().siblings();

            this.collapseNeighbors($neighbors);
        }
    }

    onDocumentClick() {
        this.collapseAll();
    }
}

/*
 * Create a new Menu instance
 * @param {string} [selector]
 * @return {Menu}
 */
export default function menuFactory(selector = `[data-${PLUGIN_KEY}]`) {
    const $menu = $(selector).eq(0);
    const instanceKey = `${PLUGIN_KEY}Instance`;
    const cachedMenu = $menu.data(instanceKey);

    if (cachedMenu instanceof Menu) {
        return cachedMenu;
    }

    const menu = new Menu($menu);

    $menu.data(instanceKey, menu);

    return menu;
}

$(document).ready(function() {    
    var openArrow = $('.brands-icon-open');
    openArrow.click(() => {
        openArrow.toggleClass('open');
        var menu = document.querySelector('.brands-items__list');
        menu.classList.toggle('open')
    });   
}); 
