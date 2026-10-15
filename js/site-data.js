/**
 * Vishwas Property - Unified Data Source
 * Central repository for Business Details, Services, Properties/Projects, and Testimonials.
 */

window.SITE_DATA = {
    businessInfo: {
        name: "Vishwas Property",
        legalName: "Vishwas Property - Real Estate Consultancy & Property Advisory",
        tagline: "Real Estate Consultancy & Property Advisory in Lucknow",
        description: "Vishwas Property is a leading real estate consultancy firm in Lucknow, dedicated to helping individuals, families, and investors make confident and informed property decisions. We assist our clients in identifying genuine, legally compliant, and suitable properties for both end-use and investment purposes. Our expertise includes residential and commercial properties, plots, apartments, villas, and investment opportunities across Lucknow. With a strong focus on transparency, genuine property options, and client-centric guidance, we strive to make the property buying and selling process simple, secure, and hassle-free.",
        shortDescription: "Your trusted real estate consultancy firm in Lucknow for buying, selling, and investing in genuine, verified properties.",
        phones: ["8299667747", "8302346055"],
        whatsapp: ["8299667747", "8302346055"],
        email: "vishwaspropertylucknow@gmail.com",
        address: "Lucknow Sultanpur highway near kisan path and jalsa resort.",
        city: "Lucknow",
        state: "Uttar Pradesh",
        pincode: "226501",
        landmark: "Near Kisan Path & Jalsa Resort, Sultanpur Highway"
    },

    services: [
        {
            id: 1,
            title: "Property Sales & Purchase",
            shortDesc: "Professional assistance for buying and selling residential and commercial properties.",
            fullDesc: "Professional assistance for buying and selling residential and commercial properties, including plots, apartments, villas, and other real estate assets.",
            icon: "icon-house-line",
            badge: "Sales & Purchase"
        },
        {
            id: 2,
            title: "Property Investment Advisory",
            shortDesc: "Strategic guidance to identify high-growth real estate investment opportunities in Lucknow.",
            fullDesc: "Guidance to identify suitable real estate investment opportunities based on location, budget, future growth potential, and investment objectives.",
            icon: "icon-sliders-horizontal",
            badge: "Investment"
        },
        {
            id: 3,
            title: "Property Consultation",
            shortDesc: "End-to-end legal verification, market valuation, and guided property decision-making.",
            fullDesc: "End-to-end consultation to help clients evaluate properties, understand available options, and make informed real estate decisions.",
            icon: "icon-shield-check",
            badge: "Consultation"
        },
        {
            id: 4,
            title: "Residential & Commercial Properties",
            shortDesc: "Curated portfolio of prime residential homes and high-footfall commercial spaces in Lucknow.",
            fullDesc: "Assistance in finding suitable residential and commercial properties across key locations of Lucknow.",
            icon: "icon-city",
            badge: "Residential & Commercial"
        }
    ],

    properties: [
        {
            id: "VP-101",
            title: "Shalimar Luxury Greens Villa & Residency",
            category: "villa",
            tabCategory: "villa",
            type: "For Sale",
            price: "₹72,50,000",
            priceNumeric: 7250000,
            location: "Sultanpur Highway, near Kisan Path & Jalsa Resort, Lucknow",
            cityArea: "Sultanpur Highway, Lucknow",
            beds: 3,
            baths: 2,
            area: "1,150 SqFt",
            badge: "Featured",
            badgeStyle: "primary",
            image: "images/home/house-1.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png1.png",
            featured: true
        },
        {
            id: "VP-102",
            title: "Omaxe Metro City Luxury Villa",
            category: "villa",
            tabCategory: "villa",
            type: "For Sale",
            price: "₹85,00,000",
            priceNumeric: 8500000,
            location: "Raebareli Road, near SGPGI, Lucknow",
            cityArea: "Raebareli Road, Lucknow",
            beds: 3,
            baths: 3,
            area: "1,450 SqFt",
            badge: "Verified",
            badgeStyle: "style-1",
            image: "images/home/house-8.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png2.png",
            featured: true
        },
        {
            id: "VP-103",
            title: "Eldeco Solano High-Rise Residencies",
            category: "apartment",
            tabCategory: "house",
            type: "For Sale",
            price: "₹1,20,00,000",
            priceNumeric: 12000000,
            location: "Amar Shaheed Path, Gomti Nagar Extension, Lucknow",
            cityArea: "Gomti Nagar Ext., Lucknow",
            beds: 3,
            baths: 3,
            area: "1,750 SqFt",
            badge: "Hot Deal",
            badgeStyle: "primary",
            image: "images/home/house-29.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png3.png",
            featured: true
        },
        {
            id: "VP-104",
            title: "LDA Approved Premium Residential Plots",
            category: "plot",
            tabCategory: "studio",
            type: "For Sale",
            price: "₹28,50,000",
            priceNumeric: 2850000,
            location: "Sultanpur Highway, adjacent Kisan Path, Lucknow",
            cityArea: "Kisan Path, Lucknow",
            beds: 0,
            baths: 0,
            area: "1,200 SqFt",
            badge: "Immediate Registry",
            badgeStyle: "style-1",
            image: "images/home/house-19.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png4.png",
            featured: true
        },
        {
            id: "VP-105",
            title: "Rishita Manhattan Luxury 3 BHK Apartments",
            category: "apartment",
            tabCategory: "house",
            type: "For Sale",
            price: "₹95,00,000",
            priceNumeric: 9500000,
            location: "Sector 7, Gomti Nagar Extension, Lucknow",
            cityArea: "Gomti Nagar Ext., Lucknow",
            beds: 3,
            baths: 2,
            area: "1,650 SqFt",
            badge: "Featured",
            badgeStyle: "primary",
            image: "images/home/house-2.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png5.png",
            featured: true
        },
        {
            id: "VP-106",
            title: "Prime Commercial Retail Showroom & Office Space",
            category: "commercial",
            tabCategory: "villa",
            type: "For Sale",
            price: "₹1,45,00,000",
            priceNumeric: 14500000,
            location: "Faizabad Road, near Crown Mall, Lucknow",
            cityArea: "Faizabad Road, Lucknow",
            beds: 0,
            baths: 2,
            area: "2,100 SqFt",
            badge: "High ROI",
            badgeStyle: "style-1",
            image: "images/home/house-3.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png6.png",
            featured: true
        },
        {
            id: "VP-107",
            title: "Gated Township Plots near Kisan Path Ring Road",
            category: "plot",
            tabCategory: "studio",
            type: "For Sale",
            price: "₹36,00,000",
            priceNumeric: 3600000,
            location: "Kisan Path Ring Road, Lucknow",
            cityArea: "Kisan Path, Lucknow",
            beds: 0,
            baths: 0,
            area: "1,500 SqFt",
            badge: "Verified",
            badgeStyle: "primary",
            image: "images/home/house-11.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png7.png",
            featured: true
        },
        {
            id: "VP-108",
            title: "Signature Duplex Designer Villa",
            category: "villa",
            tabCategory: "villa",
            type: "For Sale",
            price: "₹1,65,00,000",
            priceNumeric: 16500000,
            location: "Vrindavan Yojna, Shaheed Path, Lucknow",
            cityArea: "Vrindavan Yojna, Lucknow",
            beds: 4,
            baths: 4,
            area: "2,400 SqFt",
            badge: "Luxury",
            badgeStyle: "style-1",
            image: "images/home/house-16.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png8.png",
            featured: true
        },
        {
            id: "VP-109",
            title: "Commercial Plots for Warehouse & Showroom",
            category: "commercial",
            tabCategory: "villa",
            type: "For Sale",
            price: "₹88,00,000",
            priceNumeric: 8800000,
            location: "Sultanpur Highway Corridor, Lucknow",
            cityArea: "Sultanpur Highway, Lucknow",
            beds: 0,
            baths: 0,
            area: "3,200 SqFt",
            badge: "Prime Location",
            badgeStyle: "primary",
            image: "images/home/house-12.jpg",
            agent: "Vishwas Property Advisor",
            agentImg: "images/avatar/avt-png9.png",
            featured: true
        }
    ],

    testimonials: [
        {
            id: 1,
            name: "Ramesh Chandra Verma",
            role: "Senior Govt. Officer, Lucknow",
            review: "Buying our residential plot on Sultanpur Highway through Vishwas Property was the best decision. Their team verified all LDA land records, ensured clean registry, and made the whole process 100% stress-free.",
            avatar: "images/avatar/avt-png1.png",
            rating: 5
        },
        {
            id: 2,
            name: "Dr. Ananya Srivastava",
            role: "Consultant, Medanta Super-speciality, Lucknow",
            review: "Vishwas Property helped me find a ready-to-move luxury villa in Gomti Nagar Extension. Extremely transparent consultancy, honest pricing with zero hidden charges. Highly recommended for genuine properties!",
            avatar: "images/avatar/avt-png2.png",
            rating: 5
        },
        {
            id: 3,
            name: "Pradeep Kumar Gupta",
            role: "Retail Business Owner, Lucknow",
            review: "I was looking for commercial investment near Kisan Path with high future appreciation. The Vishwas team provided an in-depth market analysis and guided me to the perfect commercial space. Exceptional advisory!",
            avatar: "images/avatar/avt-png4.png",
            rating: 5
        },
        {
            id: 4,
            name: "Vikramaditya Singh",
            role: "NRI Property Investor",
            review: "Being based outside Lucknow, I needed someone genuinely trustworthy on the ground. Vishwas Property handled end-to-end documentation, legal checks, and site inspections with total integrity. Truly lives up to 'Vishwas'.",
            avatar: "images/avatar/avt-png7.png",
            rating: 5
        },
        {
            id: 5,
            name: "Sunil & Meera Mehrotra",
            role: "Residents, Aliganj Lucknow",
            review: "We sold our ancestral property and invested in a duplex villa on Shaheed Path with Vishwas Property. Their prompt communication, fair market valuation, and professional guidance saved us immense time and money.",
            avatar: "images/avatar/avt-png8.png",
            rating: 5
        }
    ],

    /**
     * Unified Rendering Helpers
     */
    helpers: {
        formatCurrency: function (num) {
            return "₹" + num.toLocaleString("en-IN");
        },

        // Render card HTML for a property
        createPropertyCard: function (prop) {
            var bedsMeta = prop.beds > 0 ? '<li class="item"><i class="icon icon-bed"></i><span class="text-variant-1">Beds:</span><span class="fw-6">' + prop.beds + '</span></li>' : '';
            var bathsMeta = prop.baths > 0 ? '<li class="item"><i class="icon icon-bath"></i><span class="text-variant-1">Baths:</span><span class="fw-6">' + prop.baths + '</span></li>' : '';
            var areaMeta = '<li class="item"><i class="icon icon-sqft"></i><span class="text-variant-1">' + (prop.category === 'plot' ? 'Plot:' : 'Sqft:') + '</span><span class="fw-6">' + prop.area + '</span></li>';

            return '<div class="col-xl-4 col-lg-6 col-md-6 mb-30">' +
                '<div class="homelengo-box">' +
                    '<div class="archive-top">' +
                        '<a href="property-details-v1.html" class="images-group">' +
                            '<div class="images-style">' +
                                '<img src="' + prop.image + '" alt="' + prop.title + '" style="height: 240px; width: 100%; object-fit: cover;">' +
                            '</div>' +
                            '<div class="top">' +
                                '<ul class="d-flex gap-6">' +
                                    '<li class="flag-tag ' + (prop.badgeStyle || 'primary') + '">' + prop.badge + '</li>' +
                                    '<li class="flag-tag style-1">' + prop.type + '</li>' +
                                '</ul>' +
                            '</div>' +
                            '<div class="bottom">' +
                                '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                                    '<path d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
                                    '<path d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
                                '</svg>' +
                                prop.cityArea +
                            '</div>' +
                        '</a>' +
                    '</div>' +
                    '<div class="archive-bottom">' +
                        '<div class="content-top">' +
                            '<h6 class="text-capitalize"><a href="property-details-v1.html" class="link">' + prop.title + '</a></h6>' +
                            '<ul class="meta-list mt-8">' +
                                bedsMeta + bathsMeta + areaMeta +
                            '</ul>' +
                        '</div>' +
                        '<div class="content-bottom d-flex align-items-center justify-content-between pt-12 mt-12" style="border-top: 1px solid #f0f0f0;">' +
                            '<div class="d-flex gap-8 align-items-center">' +
                                '<div class="avatar avt-40 round">' +
                                    '<img src="' + prop.agentImg + '" alt="Vishwas Advisor">' +
                                '</div>' +
                                '<span class="caption-1 fw-5">' + prop.agent + '</span>' +
                            '</div>' +
                            '<h6 class="price text-primary fw-7">' + prop.price + '</h6>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        },

        // Render card HTML for sidebar latest property
        createSidebarPropertyItem: function (prop) {
            var bedsHtml = prop.beds > 0 ? '<li class="item"><i class="icon icon-bed"></i><span class="text-variant-1">Beds:</span><span class="fw-6">' + prop.beds + '</span></li>' : '';
            var areaHtml = '<li class="item"><i class="icon icon-crop"></i><span class="text-variant-1">Size:</span><span class="fw-6">' + prop.area + '</span></li>';

            return '<li class="latest-property-item">' +
                '<a href="property-details-v1.html" class="images-style">' +
                    '<img src="' + prop.image + '" alt="' + prop.title + '" style="height: 80px; width: 100px; object-fit: cover; border-radius: 8px;">' +
                '</a>' +
                '<div class="content">' +
                    '<div class="text-capitalize text-btn"><a href="property-details-v1.html" class="link">' + prop.title + '</a></div>' +
                    '<ul class="meta-list mt-6">' +
                        bedsHtml + areaHtml +
                    '</ul>' +
                    '<div class="mt-8 text-btn text-primary fw-7">' + prop.price + '</div>' +
                '</div>' +
            '</li>';
        },

        // Render Testimonial Slider item
        createTestimonialItem: function (tes) {
            var starsHtml = '';
            for (var i = 0; i < tes.rating; i++) {
                starsHtml += '<li class="icon icon-star text-warning"></li>';
            }

            return '<div class="swiper-slide">' +
                '<div class="box-tes-item">' +
                    '<span class="icon icon-quote"></span>' +
                    '<p class="note body-2">"' + tes.review + '"</p>' +
                    '<div class="box-avt d-flex align-items-center gap-12 mt-16">' +
                        '<div class="avatar avt-60 round">' +
                            '<img src="' + tes.avatar + '" alt="' + tes.name + '">' +
                        '</div>' +
                        '<div class="info">' +
                            '<h6 class="name">' + tes.name + '</h6>' +
                            '<p class="caption-2 text-variant-1 mt-4">' + tes.role + '</p>' +
                            '<ul class="list-star d-flex gap-4 mt-6">' +
                                starsHtml +
                            '</ul>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        },

        // Render Service item
        createServiceCard: function (srv) {
            return '<div class="col-lg-3 col-md-6 mb-30">' +
                '<div class="box-service style-1 p-24" style="background:#fff; border-radius:16px; border:1px solid #edf0f5; height:100%; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 6px 20px rgba(0,0,0,0.03); transition:all 0.3s ease;">' +
                    '<div>' +
                        '<div class="icon-box mb-16" style="width:60px; height:60px; border-radius:12px; background:rgba(21,99,223,0.08); display:flex; align-items:center; justify-content:center; color:#1563df; font-size:24px;">' +
                            '<span class="badge-num fw-7 fs-18">0' + srv.id + '</span>' +
                        '</div>' +
                        '<h5 class="title fw-7 mb-10">' + srv.title + '</h5>' +
                        '<p class="desc text-variant-1 body-2" style="line-height:1.6;">' + srv.fullDesc + '</p>' +
                    '</div>' +
                    '<div class="mt-20 pt-16" style="border-top:1px solid #f2f3f5;">' +
                        '<a href="contact.html" class="tf-btn-link text-primary fw-6 d-inline-flex align-items-center gap-6">Get Consultation <i class="icon icon-arrow-right2"></i></a>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }
    },

    /**
     * Auto-init & bind to page DOM
     */
    init: function () {
        var data = window.SITE_DATA;
        if (!data) return;

        // 1. Populate dynamic properties in index.html if container exists
        var viewAllContainer = document.getElementById("viewAllPropertiesContainer");
        if (viewAllContainer) {
            var htmlAll = '';
            data.properties.forEach(function (prop) {
                htmlAll += data.helpers.createPropertyCard(prop);
            });
            viewAllContainer.innerHTML = htmlAll;
        }

        // 1b. Populate all properties grid in sidebar-grid.html
        var allGridContainer = document.getElementById("allPropertiesGridContainer");
        if (allGridContainer) {
            var htmlGrid = '';
            data.properties.forEach(function (prop) {
                htmlGrid += data.helpers.createPropertyCard(prop);
            });
            allGridContainer.innerHTML = htmlGrid;
        }

        // 2. Populate filtered tabs in index.html
        var residentialContainer = document.getElementById("residentialPropertiesContainer");
        if (residentialContainer) {
            var htmlRes = '';
            data.properties.filter(function (p) { return p.category === 'villa' || p.category === 'apartment'; }).forEach(function (prop) {
                htmlRes += data.helpers.createPropertyCard(prop);
            });
            residentialContainer.innerHTML = htmlRes;
        }

        var commercialContainer = document.getElementById("commercialPropertiesContainer");
        if (commercialContainer) {
            var htmlComm = '';
            data.properties.filter(function (p) { return p.category === 'commercial'; }).forEach(function (prop) {
                htmlComm += data.helpers.createPropertyCard(prop);
            });
            commercialContainer.innerHTML = htmlComm;
        }

        var plotsContainer = document.getElementById("plotsPropertiesContainer");
        if (plotsContainer) {
            var htmlPlots = '';
            data.properties.filter(function (p) { return p.category === 'plot'; }).forEach(function (prop) {
                htmlPlots += data.helpers.createPropertyCard(prop);
            });
            plotsContainer.innerHTML = htmlPlots;
        }

        var apartmentsContainer = document.getElementById("apartmentsPropertiesContainer");
        if (apartmentsContainer) {
            var htmlApt = '';
            data.properties.filter(function (p) { return p.category === 'apartment'; }).forEach(function (prop) {
                htmlApt += data.helpers.createPropertyCard(prop);
            });
            apartmentsContainer.innerHTML = htmlApt;
        }

        var villasContainer = document.getElementById("villasPropertiesContainer");
        if (villasContainer) {
            var htmlVil = '';
            data.properties.filter(function (p) { return p.category === 'villa'; }).forEach(function (prop) {
                htmlVil += data.helpers.createPropertyCard(prop);
            });
            villasContainer.innerHTML = htmlVil;
        }

        // 3. Populate sidebar latest properties in sidebar-grid.html and property-details-v1.html
        var sidebarPropertiesContainer = document.getElementById("sidebarLatestPropertiesContainer");
        if (sidebarPropertiesContainer) {
            var htmlSidebar = '';
            data.properties.slice(0, 4).forEach(function (prop) {
                htmlSidebar += data.helpers.createSidebarPropertyItem(prop);
            });
            sidebarPropertiesContainer.innerHTML = htmlSidebar;
        }

        // 4. Populate testimonials slider
        var testimonialWrapper = document.getElementById("testimonialsDynamicWrapper");
        if (testimonialWrapper) {
            var htmlTes = '';
            data.testimonials.forEach(function (tes) {
                htmlTes += data.helpers.createTestimonialItem(tes);
            });
            testimonialWrapper.innerHTML = htmlTes;
        }

        // 5. Populate services grid in our-service.html & index.html
        var servicesContainer = document.getElementById("servicesDynamicContainer");
        if (servicesContainer) {
            var htmlSrv = '';
            data.services.forEach(function (srv) {
                htmlSrv += data.helpers.createServiceCard(srv);
            });
            servicesContainer.innerHTML = htmlSrv;
        }

        // 6. Update business details across DOM
        var businessDescEls = document.querySelectorAll(".site-business-description");
        businessDescEls.forEach(function (el) {
            el.textContent = data.businessInfo.description;
        });

        var businessAddressEls = document.querySelectorAll(".site-business-address");
        businessAddressEls.forEach(function (el) {
            el.textContent = data.businessInfo.address;
        });
    }
};

// Auto-run on DOM ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.SITE_DATA.init);
} else {
    window.SITE_DATA.init();
}
