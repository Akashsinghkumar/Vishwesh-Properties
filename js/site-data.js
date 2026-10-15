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
            displayTitle: "3 BHK Luxury Villa in Sultanpur Highway, Lucknow at 72.50 L",
            displayPrice: "₹72.50 Lakh - 76 Lakh",
            strikePrice: "₹76.00 Lakh - 80 Lakh",
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
            displayTitle: "3 BHK Luxury Villa in Raebareli Road, Lucknow at 85 L",
            displayPrice: "₹85.00 Lakh - 90 Lakh",
            strikePrice: "₹89.00 Lakh - 95 Lakh",
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
            displayTitle: "3 BHK High-Rise Flat in Gomti Nagar Extension, Lucknow at 1.20 Cr.",
            displayPrice: "₹1.20 Cr. - 1.35 Cr.",
            strikePrice: "₹1.25 Cr. - 1.42 Cr.",
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
            displayTitle: "LDA Approved Residential Plot in Kisan Path, Lucknow at 28.50 L",
            displayPrice: "₹28.50 Lakh - 32 Lakh",
            strikePrice: "₹31.00 Lakh - 35 Lakh",
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
            displayTitle: "3 BHK Flat in Gomti Nagar Extension, Lucknow at 95 L - 1.10 Cr.",
            displayPrice: "₹95.00 Lakh - 1.10 Cr.",
            strikePrice: "₹1.00 Cr. - 1.15 Cr.",
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
            displayTitle: "Prime Commercial Retail Showroom in Faizabad Road, Lucknow at 1.45 Cr.",
            displayPrice: "₹1.45 Cr. - 1.60 Cr.",
            strikePrice: "₹1.52 Cr. - 1.68 Cr.",
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
            displayTitle: "Gated Township Plots near Kisan Path Ring Road, Lucknow at 36 L",
            displayPrice: "₹36.00 Lakh - 42 Lakh",
            strikePrice: "₹39.00 Lakh - 45 Lakh",
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
            displayTitle: "4 BHK Signature Duplex Villa in Vrindavan Yojna, Lucknow at 1.65 Cr.",
            displayPrice: "₹1.65 Cr. - 1.85 Cr.",
            strikePrice: "₹1.75 Cr. - 1.95 Cr.",
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
            displayTitle: "Commercial Plot for Warehouse & Showroom in Sultanpur Highway at 88 L",
            displayPrice: "₹88.00 Lakh - 98 Lakh",
            strikePrice: "₹93.00 Lakh - 1.05 Cr.",
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
            var titleText = prop.displayTitle || prop.title;
            var priceText = prop.displayPrice || (prop.price + (prop.price.includes('Cr') || prop.price.includes('Lakh') ? '*' : ''));
            var strikeText = prop.strikePrice || '';
            var waMsg = encodeURIComponent("Hi Vishwas Property, I am interested in " + titleText + " (" + (prop.displayPrice || prop.price) + "). Please share details.");

            return '<div class="col-xl-4 col-lg-6 col-md-6 mb-30">' +
                '<div class="homelengo-box" style="border-radius: 16px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.06); transition: all 0.3s ease; background: #ffffff;">' +
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
                        '</a>' +
                    '</div>' +
                    '<div class="archive-bottom" style="padding: 18px 20px 20px;">' +
                        '<h5 style="font-size: 16px; font-weight: 700; color: #111827; line-height: 1.4; margin: 0 0 8px; min-height: 44px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">' +
                            '<a href="property-details-v1.html" class="link" style="color: #111827; text-decoration: none;">' + titleText + '</a>' +
                        '</h5>' +
                        '<div class="d-flex align-items-center" style="gap: 5px; color: #526078; font-size: 13.5px; margin-bottom: 12px;">' +
                            '<svg width="15" height="15" viewBox="0 0 24 24" fill="#008744" style="flex-shrink: 0;"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>' +
                            '<span>' + prop.cityArea + '</span>' +
                        '</div>' +
                        '<div style="margin-top: 10px;">' +
                            '<div style="font-size: 21px; font-weight: 800; color: #111827; line-height: 1.2;">' + priceText + '<sup>*</sup></div>' +
                            (strikeText ? '<div style="font-size: 13px; color: #e5232a; text-decoration: line-through; margin-top: 2px; font-weight: 600;">' + strikeText + '<sup>*</sup></div>' : '') +
                        '</div>' +
                        '<a href="https://wa.me/918299667747?text=' + waMsg + '" target="_blank" rel="noopener" class="prop-card-whatsapp-btn" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; height: 44px; background: #008744; color: #ffffff; border-radius: 999px; font-weight: 700; text-decoration: none; margin-top: 14px; font-size: 15px; box-shadow: 0 4px 12px rgba(0, 135, 68, 0.22); transition: all 0.2s ease;" onmouseover="this.style.background=\'#007038\'; this.style.transform=\'translateY(-1px)\'" onmouseout="this.style.background=\'#008744\'; this.style.transform=\'none\'">' +
                            '<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.214 8.214 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.11.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>' +
                            '<span>WhatsApp</span>' +
                        '</a>' +
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
