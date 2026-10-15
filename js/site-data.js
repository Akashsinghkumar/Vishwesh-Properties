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
        // ==================== FLATS / APARTMENTS ====================
        {
            id: "VP-FLAT-01",
            title: "ABHYUDAYA CELESTIAL",
            displayTitle: "Abhyudaya Celestial Ultra Luxury Flats",
            category: "flat",
            tabCategory: "flat",
            type: "For Sale",
            priceRange: "₹ 1.66 Cr. - 2.17 Cr.",
            price: "₹1,66,00,000",
            priceNumeric: 16600000,
            location: "GH-18, Shalimar OneWorld Township, Shaheed Path, Lucknow",
            cityArea: "Shaheed Path, Lucknow",
            area: "1.14 Acre",
            size: "117 Units",
            status: "New Launch",
            statusBadge: "New Launch",
            badgeStyle: "new-launch",
            possession: "Apr 2030",
            beds: 3,
            baths: 3,
            image: "images/home/house-1.jpg",
            featured: true
        },
        {
            id: "VP-FLAT-02",
            title: "THE ROYAL RETREAT",
            displayTitle: "The Royal Retreat Luxury High-Rise Towers",
            category: "flat",
            tabCategory: "flat",
            type: "For Sale",
            priceRange: "₹ 1.85 Cr. - 2.45 Cr.",
            price: "₹1,85,00,000",
            priceNumeric: 18500000,
            location: "Shalimar OneWorld Township, Gomti Nagar Extension, Lucknow",
            cityArea: "Gomti Nagar Ext., Lucknow",
            area: "3.61 Acre",
            size: "4 Towers",
            status: "New Launch",
            statusBadge: "New Launch",
            badgeStyle: "new-launch",
            possession: "Dec 2030",
            beds: 4,
            baths: 4,
            image: "images/home/house-2.jpg",
            featured: true
        },
        {
            id: "VP-FLAT-03",
            title: "EVARA SHADES RESIDENCY",
            displayTitle: "Evara Shades Premium 3 BHK Apartments",
            category: "flat",
            tabCategory: "flat",
            type: "For Sale",
            priceRange: "₹ 91 Lakh - 1.04 Cr.",
            price: "₹91,00,000",
            priceNumeric: 9100000,
            location: "Faizabad Road, near Crown Mall, Lucknow",
            cityArea: "Faizabad Road, Lucknow",
            area: "945 sq.ft.",
            size: "69 Units",
            status: "Ongoing",
            statusBadge: "Ongoing",
            badgeStyle: "ongoing",
            possession: "Nov 2027",
            beds: 3,
            baths: 2,
            image: "images/home/house-3.jpg",
            featured: true
        },
        {
            id: "VP-FLAT-04",
            title: "RISHITA MANHATTAN RESIDENCY",
            displayTitle: "Rishita Manhattan Luxury 3 & 4 BHK Flats",
            category: "flat",
            tabCategory: "flat",
            type: "For Sale",
            priceRange: "₹ 95 Lakh - 1.35 Cr.",
            price: "₹95,00,000",
            priceNumeric: 9500000,
            location: "Sector 7, Gomti Nagar Extension, Lucknow",
            cityArea: "Gomti Nagar Ext., Lucknow",
            area: "1,650 sq.ft.",
            size: "3 & 4 BHK",
            status: "Ready to Move",
            statusBadge: "Ready to Move",
            badgeStyle: "ready",
            possession: "Immediate",
            beds: 3,
            baths: 3,
            image: "images/home/house-4.jpg",
            featured: true
        },
        {
            id: "VP-FLAT-05",
            title: "ELDECO SOLANO RESIDENCY",
            displayTitle: "Eldeco Solano High-Rise Apartments",
            category: "flat",
            tabCategory: "flat",
            type: "For Sale",
            priceRange: "₹ 1.20 Cr. - 1.48 Cr.",
            price: "₹1,20,00,000",
            priceNumeric: 12000000,
            location: "Amar Shaheed Path, Gomti Nagar Extension, Lucknow",
            cityArea: "Shaheed Path, Lucknow",
            area: "1,750 sq.ft.",
            size: "3 BHK Units",
            status: "Ongoing",
            statusBadge: "Ongoing",
            badgeStyle: "ongoing",
            possession: "Mar 2028",
            beds: 3,
            baths: 3,
            image: "images/home/house-29.jpg",
            featured: true
        },

        // ==================== COMMERCIALS (OFFICES & SHOPS) ====================
        {
            id: "VP-COMM-01",
            title: "CROWN RETAIL COMMERCIAL HUB",
            displayTitle: "Prime Commercial Retail Showrooms & Shops",
            category: "commercial",
            tabCategory: "commercial",
            type: "For Sale",
            priceRange: "₹ 1.45 Cr. - 2.80 Cr.",
            price: "₹1,45,00,000",
            priceNumeric: 14500000,
            location: "Main Faizabad Road, opposite Crown Mall, Lucknow",
            cityArea: "Faizabad Road, Lucknow",
            area: "2.5 Acre",
            size: "84 Units",
            status: "Ongoing",
            statusBadge: "Ongoing",
            badgeStyle: "ongoing",
            possession: "Dec 2026",
            beds: 0,
            baths: 2,
            image: "images/home/house-5.jpg",
            featured: true
        },
        {
            id: "VP-COMM-02",
            title: "SULTANPUR HIGHWAY LOGISTICS PARK",
            displayTitle: "Commercial Plots & Showrooms, Sultanpur Road",
            category: "commercial",
            tabCategory: "commercial",
            type: "For Sale",
            priceRange: "₹ 88 Lakh - 1.85 Cr.",
            price: "₹88,00,000",
            priceNumeric: 8800000,
            location: "Sultanpur Highway, near Kisan Path & Jalsa Resort, Lucknow",
            cityArea: "Sultanpur Highway, Lucknow",
            area: "3,200 sq.ft.",
            size: "Commercial SCO",
            status: "New Launch",
            statusBadge: "New Launch",
            badgeStyle: "new-launch",
            possession: "Immediate Registry",
            beds: 0,
            baths: 0,
            image: "images/home/house-6.jpg",
            featured: true
        },
        {
            id: "VP-COMM-03",
            title: "EKANA CORPORATE & RETAIL PLAZA",
            displayTitle: "High-Footfall Retail Suites & Corporate Offices",
            category: "commercial",
            tabCategory: "commercial",
            type: "For Sale",
            priceRange: "₹ 75 Lakh - 1.95 Cr.",
            price: "₹75,00,000",
            priceNumeric: 7500000,
            location: "Shaheed Path, near Ekana Stadium & IT City, Lucknow",
            cityArea: "IT City, Lucknow",
            area: "1.85 Acre",
            size: "120 Units",
            status: "Ongoing",
            statusBadge: "Ongoing",
            badgeStyle: "ongoing",
            possession: "Oct 2027",
            beds: 0,
            baths: 2,
            image: "images/home/house-7.jpg",
            featured: true
        },
        {
            id: "VP-COMM-04",
            title: "VIBHUTI HIGH-STREET CORPORATE TOWER",
            displayTitle: "Grade-A Corporate Offices & Anchor Retail",
            category: "commercial",
            tabCategory: "commercial",
            type: "For Sale",
            priceRange: "₹ 1.25 Cr. - 3.20 Cr.",
            price: "₹1,25,00,000",
            priceNumeric: 12500000,
            location: "Vibhuti Khand, Gomti Nagar Commercial Hub, Lucknow",
            cityArea: "Gomti Nagar, Lucknow",
            area: "1,800 sq.ft.",
            size: "Offices & Shops",
            status: "Ready to Move",
            statusBadge: "Ready to Move",
            badgeStyle: "ready",
            possession: "Immediate",
            beds: 0,
            baths: 2,
            image: "images/home/house-8.jpg",
            featured: true
        },

        // ==================== VILLAS (INDEPENDENT HOMES) ====================
        {
            id: "VP-VILLA-01",
            title: "SHALIMAR LUXURY GREENS VILLA",
            displayTitle: "3 BHK Designer Luxury Villa with Private Garden",
            category: "villa",
            tabCategory: "villa",
            type: "For Sale",
            priceRange: "₹ 72.50 Lakh - 85 Lakh",
            price: "₹72,50,000",
            priceNumeric: 7250000,
            location: "Sultanpur Highway, near Kisan Path & Jalsa Resort, Lucknow",
            cityArea: "Sultanpur Highway, Lucknow",
            area: "1,150 sq.ft.",
            size: "3 BHK Duplex",
            status: "Ready to Move",
            statusBadge: "Ready to Move",
            badgeStyle: "ready",
            possession: "Immediate",
            beds: 3,
            baths: 2,
            image: "images/home/house-9.jpg",
            featured: true
        },
        {
            id: "VP-VILLA-02",
            title: "OMAXE METRO CITY GRAND VILLA",
            displayTitle: "3 & 4 BHK Luxury Gated Villas, Raebareli Road",
            category: "villa",
            tabCategory: "villa",
            type: "For Sale",
            priceRange: "₹ 85 Lakh - 1.15 Cr.",
            price: "₹85,00,000",
            priceNumeric: 8500000,
            location: "Raebareli Road, near SGPGI & Outer Ring Road, Lucknow",
            cityArea: "Raebareli Road, Lucknow",
            area: "1,450 sq.ft.",
            size: "3 & 4 BHK",
            status: "Ongoing",
            statusBadge: "Ongoing",
            badgeStyle: "ongoing",
            possession: "Dec 2026",
            beds: 3,
            baths: 3,
            image: "images/home/house-10.jpg",
            featured: true
        },
        {
            id: "VP-VILLA-03",
            title: "SIGNATURE DUPLEX DESIGNER VILLA",
            displayTitle: "4 BHK Premium Duplex Villa, Vrindavan Yojna",
            category: "villa",
            tabCategory: "villa",
            type: "For Sale",
            priceRange: "₹ 1.65 Cr. - 1.95 Cr.",
            price: "₹1,65,00,000",
            priceNumeric: 16500000,
            location: "Sector 5, Vrindavan Yojna, Shaheed Path, Lucknow",
            cityArea: "Vrindavan Yojna, Lucknow",
            area: "2,400 sq.ft.",
            size: "4 BHK Duplex",
            status: "Ready to Move",
            statusBadge: "Ready to Move",
            badgeStyle: "ready",
            possession: "Immediate",
            beds: 4,
            baths: 4,
            image: "images/home/house-11.jpg",
            featured: true
        },
        {
            id: "VP-VILLA-04",
            title: "GOMTI GREEN VALLEY INDEPENDENT VILLA",
            displayTitle: "3 BHK Independent Villa in Gated Community",
            category: "villa",
            tabCategory: "villa",
            type: "For Sale",
            priceRange: "₹ 68 Lakh - 79 Lakh",
            price: "₹68,00,000",
            priceNumeric: 6800000,
            location: "Faizabad Road Corridor, near Kisan Path, Lucknow",
            cityArea: "Faizabad Road, Lucknow",
            area: "1,250 sq.ft.",
            size: "3 BHK Villa",
            status: "Ongoing",
            statusBadge: "Ongoing",
            badgeStyle: "ongoing",
            possession: "Aug 2026",
            beds: 3,
            baths: 3,
            image: "images/home/house-12.jpg",
            featured: true
        },

        // ==================== PLOTS (LAND PARCELS) ====================
        {
            id: "VP-PLOT-01",
            title: "LUCKNOW GREENS TOWNSHIP PLOTS",
            displayTitle: "LDA & RERA Approved Residential Plots, Sultanpur Road",
            category: "plot",
            tabCategory: "plot",
            type: "For Sale",
            priceRange: "₹ 28.50 Lakh - 65 Lakh",
            price: "₹28,50,000",
            priceNumeric: 2850000,
            location: "NH-56, Sultanpur Highway, near Kisan Path & Jalsa Resort, Lucknow",
            cityArea: "Sultanpur Highway, Lucknow",
            area: "125 Acres",
            size: "800 - 3200 sq.ft.",
            status: "New Launch",
            statusBadge: "New Launch",
            badgeStyle: "new-launch",
            possession: "Immediate Registry",
            beds: 0,
            baths: 0,
            image: "images/home/house-13.jpg",
            featured: true
        },
        {
            id: "VP-PLOT-02",
            title: "KISAN PATH RING ROAD TOWNSHIP PLOTS",
            displayTitle: "Gated Township Plots with Wide 40ft Internal Roads",
            category: "plot",
            tabCategory: "plot",
            type: "For Sale",
            priceRange: "₹ 36 Lakh - 55 Lakh",
            price: "₹36,00,000",
            priceNumeric: 3600000,
            location: "Kisan Path Ring Road Corridor, Lucknow",
            cityArea: "Kisan Path, Lucknow",
            area: "25 Acres",
            size: "1000 - 2500 sq.ft.",
            status: "Ready to Move",
            statusBadge: "Ready to Move",
            badgeStyle: "ready",
            possession: "Immediate Registry",
            beds: 0,
            baths: 0,
            image: "images/home/house-14.jpg",
            featured: true
        },
        {
            id: "VP-PLOT-03",
            title: "IT CITY & NEW JAIL ROAD PLOTS",
            displayTitle: "Fast Growing Residential Land near HCL IT City",
            category: "plot",
            tabCategory: "plot",
            type: "For Sale",
            priceRange: "₹ 24 Lakh - 48 Lakh",
            price: "₹24,00,000",
            priceNumeric: 2400000,
            location: "New Jail Road, IT City Growth Corridor, Lucknow",
            cityArea: "IT City Corridor, Lucknow",
            area: "15 Acres",
            size: "900 - 1800 sq.ft.",
            status: "New Launch",
            statusBadge: "New Launch",
            badgeStyle: "new-launch",
            possession: "Immediate Registry",
            beds: 0,
            baths: 0,
            image: "images/home/house-15.jpg",
            featured: true
        },
        {
            id: "VP-PLOT-04",
            title: "RAEBARELI ROAD APPROVED TOWNSHIP PLOTS",
            displayTitle: "Approved Residential Land near SGPGI & Outer Ring Road",
            category: "plot",
            tabCategory: "plot",
            type: "For Sale",
            priceRange: "₹ 32 Lakh - 58 Lakh",
            price: "₹32,00,000",
            priceNumeric: 3200000,
            location: "Raebareli Road, near SGPGI Hospital, Lucknow",
            cityArea: "Raebareli Road, Lucknow",
            area: "30 Acres",
            size: "1200 - 2400 sq.ft.",
            status: "Ongoing",
            statusBadge: "Ongoing",
            badgeStyle: "ongoing",
            possession: "Immediate Registry",
            beds: 0,
            baths: 0,
            image: "images/home/house-16.jpg",
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

        // Render Base-Infra Style Property Card (with Vishwas Red Theme)
        createBaseInfraCard: function (prop) {
            var titleText = prop.title || prop.displayTitle;
            var priceText = prop.priceRange || prop.displayPrice || prop.price;
            var badgeText = prop.statusBadge || prop.badge || "Verified";
            var badgeClass = (badgeText.toLowerCase().indexOf("new") >= 0) ? "bi-badge-new" : ((badgeText.toLowerCase().indexOf("ready") >= 0) ? "bi-badge-ready" : "bi-badge-ongoing");
            var waMsg = encodeURIComponent("Hello Vishwas Property, I am interested in " + titleText + " (" + priceText + ", " + prop.location + "). Please share brochure & price breakdown.");

            return '<div class="col-xl-3 col-lg-4 col-md-6 col-12 mb-4 base-infra-col" data-category="' + prop.category + '">' +
                '<div class="base-infra-card">' +
                    '<div class="bi-img-wrap">' +
                        '<img src="' + prop.image + '" alt="' + titleText + '" loading="lazy">' +
                        '<span class="bi-status-badge ' + badgeClass + '">' + badgeText + '</span>' +
                        '<span class="bi-price-pill">' + priceText + '</span>' +
                    '</div>' +
                    '<div class="bi-card-content">' +
                        '<h4 class="bi-card-title" title="' + titleText + '">' + titleText + '</h4>' +
                        '<div class="bi-card-location">' +
                            '<svg width="14" height="14" viewBox="0 0 24 24" fill="#e5232a"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>' +
                            '<span>' + prop.location + '</span>' +
                        '</div>' +
                        '<div class="bi-specs-grid">' +
                            '<div class="bi-spec-box">' +
                                '<div class="bi-spec-label">Area</div>' +
                                '<div class="bi-spec-val">' + (prop.area || 'N/A') + '</div>' +
                            '</div>' +
                            '<div class="bi-spec-box">' +
                                '<div class="bi-spec-label">Size</div>' +
                                '<div class="bi-spec-val">' + (prop.size || '3 BHK') + '</div>' +
                            '</div>' +
                            '<div class="bi-spec-box">' +
                                '<div class="bi-spec-label">Status</div>' +
                                '<div class="bi-spec-val">' + (prop.status || 'Ongoing') + '</div>' +
                            '</div>' +
                            '<div class="bi-spec-box">' +
                                '<div class="bi-spec-label">Possession</div>' +
                                '<div class="bi-spec-val">' + (prop.possession || 'Ready') + '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="bi-card-actions">' +
                            '<a href="https://wa.me/918299667747?text=' + waMsg + '" target="_blank" rel="noopener" class="bi-btn-wa">' +
                                '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.214 8.214 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.11.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>' +
                                'Enquire' +
                            '</a>' +
                            '<a href="tel:8299667747" class="bi-btn-call">' +
                                '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>' +
                                'Call' +
                            '</a>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>';
        },

        // Render card HTML for featured section
        createPropertyCard: function (prop) {
            return this.createBaseInfraCard(prop);
        },

        createSidebarPropertyItem: function (prop) {
            var bedsHtml = prop.beds > 0 ? '<li class="item"><i class="icon icon-bed"></i><span class="text-variant-1">Beds:</span><span class="fw-6">' + prop.beds + '</span></li>' : '';
            var areaHtml = '<li class="item"><i class="icon icon-crop"></i><span class="text-variant-1">Size:</span><span class="fw-6">' + prop.area + '</span></li>';

            return '<li class="latest-property-item">' +
                '<a href="search.html?type=' + prop.category + '" class="images-style">' +
                    '<img src="' + prop.image + '" alt="' + prop.title + '" style="height: 80px; width: 100px; object-fit: cover; border-radius: 8px;">' +
                '</a>' +
                '<div class="content">' +
                    '<div class="text-capitalize text-btn"><a href="search.html?type=' + prop.category + '" class="link">' + prop.title + '</a></div>' +
                    '<ul class="meta-list mt-6">' +
                        bedsHtml + areaHtml +
                    '</ul>' +
                    '<div class="mt-8 text-btn text-primary fw-7">' + (prop.priceRange || prop.price) + '</div>' +
                '</div>' +
            '</li>';
        },

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
        }
    }
};
