/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/utils/form-utils';
import modalFactory from './global/modal';

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
        this.reviewModal = modalFactory('#modal-review-form')[0];
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        this.bulkPricingHandler();

        const $reviewForm = classifyForm('.writeReview-form');

        if ($reviewForm.length === 0) return;

        const review = new Review({ $reviewForm });

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
            this.ariaDescribeReviewInputs($reviewForm);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
        this.createBrandInfo ();
    }
    
    createBrandInfo () {
        var productBrand = this.context.productBrand
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
            const brandInfo = serverData.filter(item => item?.node?.name == productBrand);
            
            var brandImg = document.createElement('img');
            brandImg.setAttribute('src', `${brandInfo[0]?.node?.defaultImage?.urlOriginal}`);
            brandImg.setAttribute('alt',`${brandInfo[0]?.node?.defaultImage?.altText}`);
            var imgContainer = document.getElementById('brand-img');
            imgContainer.append(brandImg);
            
            var brandDescription = document.createElement('p');
            brandDescription.innerHTML = `${brandInfo[0]?.node?.seo?.metaDescription}`;
            var brandContainer = document.getElementById('brand-description');
            brandContainer.append(brandDescription);
        });
    }

    ariaDescribeReviewInputs($form) {
        $form.find('[data-input]').each((_, input) => {
            const $input = $(input);
            const msgSpanId = `${$input.attr('name')}-msg`;

            $input.siblings('span').attr('id', msgSpanId);
            $input.attr('aria-describedby', msgSpanId);
        });
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }
}
