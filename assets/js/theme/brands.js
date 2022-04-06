import CatalogPage from './catalog';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';

export default class Brands extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
        this.currentUrl = window.location.href;
        this.brandsContainer = document.getElementById('brands-filter')
    }

    onReady() {
        this.checkURL()
    }

    checkURL() {
        this.currentUrl.includes('brands/?starting') ? this.clearBrandsContainer() : null;
    }

    clearBrandsContainer () {
        this.brandsContainer.innerHTML = `<p style='font-size: 20px; text-align: center'>Loading...</p>`;
        this.getBrandsInfo()
    }

    getBrandsInfo () {
        var token = this.context.token;
        var serverData = ''

        fetch('/graphql', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                query: `
                query MyFirstQuery {
                site {
                        brands {
                            edges {
                                node {
                                    name,
                                    defaultImage {
                                        urlOriginal,
                                        altText
                                    }
                                    seo {
                                        metaDescription 
                                    }
                                }
                            }
                        }
                    }
                }
                `
            }),
        })
        .then(res => res.json())
        .then(json => {
            serverData = json?.data?.site?.brands?.edges;
            var filterParametr = this.currentUrl.split('').slice(-1).join('');
            const filterServerData = serverData.filter((el) => el.node.name[0].toLowerCase() == filterParametr);
            if (filterServerData.length) {
                this.brandsContainer.innerHTML =''
                for (let el = 0; el < filterServerData.length; el++) {
                    var li = document.createElement('li');
                    li.setAttribute('class', 'filtered-brand__item')
                    li.setAttribute('style', 'padding: 20px;')
                    li.innerHTML = `<div class='brand-img__container'>
                                        <a href='/${filterServerData[el]?.node?.name}'><img src='${filterServerData[el]?.node?.defaultImage?.urlOriginal}' alt='${filterServerData[el]?.node?.name}'/></a>
                                    </div>
                                    <div class="brand-info__container">
                                        <h3 class="brand-name"><a href='/${filterServerData[el]?.node?.name}'>${filterServerData[el]?.node?.name}</a></h3>
                                        <p class="brand-description" style='font-size:20px'>${filterServerData[el]?.node?.seo?.metaDescription}</p>
                                    </div>`;
                    this.brandsContainer.append(li);
                  }
            } else {
                this.brandsContainer.innerHTML = `<p style='font-size: 20px; text-align: center'>There are no Brands starting from ${filterParametr}</p>`
            }
        });
    }
}
