/**
 * Vishwas Property - Blog Manager
 * Handles blog dataset, user-uploaded imagery, pagination (1, 2, 3), 
 * and responsive layout. Search bar, categories, and popular tags removed as requested.
 */

(function () {
    "use strict";

    var BLOG_POSTS = [
        // Page 1 (User Uploaded Images)
        {
            id: 1,
            title: "Mastering Suburban Housing: Why Gated Villa Communities are Booming in Lucknow",
            image: "images/blog/blog-suburban-villas.png",
            category: "Community Spotlight",
            date: "March 15, 2026",
            excerpt: "Exploring the rise of master-planned suburban gated townships along Sultanpur Highway and Kisan Path, where modern security, clubhouses, wide tree-lined avenues, and green open spaces meet multi-year appreciation potential.",
            link: "blog-detail.html"
        },
        {
            id: 2,
            title: "Transforming Spaces: Modern Interior Decor and Living Room Renovation Trends",
            image: "images/blog/blog-interior-renovation.png",
            category: "Interior Inspiration",
            date: "March 12, 2026",
            excerpt: "A comprehensive guide to elevating your villa or luxury flat with warm ambient lighting, open floor concept living, contemporary wooden paneling, bespoke furniture, and space-maximizing aesthetics.",
            link: "blog-detail.html"
        },
        {
            id: 3,
            title: "Mediterranean Villa Architecture: Timeless Luxury Living & Elevation Design",
            image: "images/blog/blog-mediterranean-villa.png",
            category: "Home Construction",
            date: "March 08, 2026",
            excerpt: "Classic arches, sun-drenched courtyards, and tiled pitched roofing are redefining luxury private estates in Lucknow. Here is what to know before building your dream architectural villa.",
            link: "blog-detail.html"
        },
        {
            id: 4,
            title: "Contemporary Duplex Design on Kisan Path: Sustainable Architecture & High ROI",
            image: "images/blog/blog-contemporary-duplex.png",
            category: "Investment Insights",
            date: "March 02, 2026",
            excerpt: "A look into avant-garde duplex villas combining brick textures, tinted architectural glass, and rooftop terrace gardens designed for maximum capital appreciation and multi-family living.",
            link: "blog-detail.html"
        },

        // Page 2
        {
            id: 5,
            title: "Top High ROI Property Corridors in Lucknow: Kisan Path & Sultanpur Highway Guide",
            image: "images/home/house-11.jpg",
            category: "Investment Insights",
            date: "February 24, 2026",
            excerpt: "Lucknow's outer ring road and Kisan Path have emerged as the fastest-growing property appreciation belts with mega logistics parks, direct airport connectivity, and prime institutional expansion.",
            link: "blog-detail.html"
        },
        {
            id: 6,
            title: "LDA Approved Plots vs Private Developer Layouts: How to Buy Safely in Lucknow",
            image: "images/home/house-1.jpg",
            category: "Legal Guidance",
            date: "February 18, 2026",
            excerpt: "Before putting your savings into residential land in UP, learn how to verify 143 land conversion, RERA registration, mutation (Dakhil Kharij), and registry documentation with 100% peace of mind.",
            link: "blog-detail.html"
        },
        {
            id: 7,
            title: "Commercial Office Spaces on Faizabad Road & Shaheed Path: Lease Valuation Guide",
            image: "images/home/house-15.jpg",
            category: "Market Updates",
            date: "February 12, 2026",
            excerpt: "Grade-A office inventory, corporate coworking demand, and steady lease rental yields in prime business hubs across Lucknow explained for private investors.",
            link: "blog-detail.html"
        },
        {
            id: 8,
            title: "Shaheed Path & Gomti Nagar Extension: Why IT & Medical Hubs Boost Rental Returns",
            image: "images/home/house-29.jpg",
            category: "Buying Tips",
            date: "February 05, 2026",
            excerpt: "Proximity to Medanta Hospital, Ekana International Stadium, Phoenix Palassio Mall, and IT City is driving unprecedented rental yield for 2 & 3 BHK residences.",
            link: "blog-detail.html"
        },

        // Page 3
        {
            id: 9,
            title: "Commercial Plots on Ring Roads: Setting Up Showrooms, Godowns & Warehouses",
            image: "images/home/house-12.jpg",
            category: "Market Updates",
            date: "January 28, 2026",
            excerpt: "Commercial plots directly facing 4-lane and 6-lane highways offer steady rental returns and multi-fold valuation growth as logistics demand expands across Uttar Pradesh.",
            link: "blog-detail.html"
        },
        {
            id: 10,
            title: "Home Loan & Project Financing Guide: Interest Rates, Eligibility & Tax Benefits",
            image: "images/home/house-7.jpg",
            category: "Buying Tips",
            date: "January 21, 2026",
            excerpt: "Smart property financing tips: comparing SBI, HDFC, and ICICI home loan terms, processing fee waivers, PMAY subsidy benefits, and tax savings under Section 80C and 24b.",
            link: "blog-detail.html"
        },
        {
            id: 11,
            title: "Smart Budget Renovation: Increasing Resale Value of Existing Lucknow Flats",
            image: "images/home/house-8.jpg",
            category: "Interior Inspiration",
            date: "January 15, 2026",
            excerpt: "Key high-return updates including modular kitchen refits, modern bathroom fixtures, false ceilings, and waterproof paint that add instant equity and charm.",
            link: "blog-detail.html"
        },
        {
            id: 12,
            title: "Legal Checklist for Property Registration & Stamp Duty in Uttar Pradesh",
            image: "images/home/house-10.jpg",
            category: "Legal Guidance",
            date: "January 08, 2026",
            excerpt: "Step-by-step breakdown of IGRSUP portal procedures, e-stamp calculation, encumbrance certificate verification, and avoiding fraudulent transactions.",
            link: "blog-detail.html"
        }
    ];

    var ITEMS_PER_PAGE = 4;
    var currentPage = 1;

    function renderBlogList() {
        var container = document.getElementById("flatBlogListContainer");
        if (!container) return;

        var totalItems = BLOG_POSTS.length;
        var totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

        if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        if (currentPage < 1) {
            currentPage = 1;
        }

        var startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        var pagePosts = BLOG_POSTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

        var html = "";
        pagePosts.forEach(function (post) {
            html += '<div class="flat-blog-item" style="background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #f1f5f9; box-shadow: 0 4px 20px rgba(0,0,0,0.04); margin-bottom: 35px; transition: transform 0.25s ease, box-shadow 0.25s ease;">' +
                '<a href="' + post.link + '" class="img-style" style="border-radius: 16px 16px 0 0; overflow: hidden; display: block; position: relative;">' +
                    '<img class="lazyload" data-src="' + post.image + '" src="' + post.image + '" alt="' + post.title + '" style="height: 380px; width: 100%; object-fit: cover; transition: transform 0.4s ease;">' +
                    '<span style="position: absolute; top: 18px; left: 18px; background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(8px); color: #ffffff; padding: 5px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">' + post.category + '</span>' +
                '</a>' +
                '<div class="content-box" style="padding: 24px 28px 28px;">' +
                    '<h5 class="title text-black-2" style="font-size: 20px; font-weight: 700; line-height: 1.4; margin-bottom: 12px;">' +
                        '<a href="' + post.link + '" class="link" style="color: #111827; text-decoration: none;">' + post.title + '</a>' +
                    '</h5>' +
                    '<div class="post-author d-flex align-items-center" style="gap: 16px; margin-bottom: 14px; font-size: 13px; color: #64748b;">' +
                        '<span class="text-primary fw-6 d-inline-flex align-items-center" style="gap: 6px;">' +
                            '<svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.5V8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5H13C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8V8.5M8.70667 4.20667L7.29333 2.79333C7.20048 2.70037 7.09022 2.62661 6.96886 2.57628C6.84749 2.52595 6.71739 2.50003 6.586 2.5H3C2.60218 2.5 2.22064 2.65804 1.93934 2.93934C1.65804 3.22064 1.5 3.60218 1.5 4V12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5H13C13.3978 13.5 13.7794 13.342 14.0607 13.0607C14.342 12.7794 14.5 12.3978 14.5 12V6C14.5 5.60218 14.342 5.22064 14.0607 4.93934C13.7794 4.65804 13.3978 4.5 13 4.5H9.414C9.14887 4.49977 8.89402 4.39426 8.70667 4.20667Z" stroke="#e5232a" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                            post.category +
                        '</span>' +
                        '<span class="fw-6 text-variant-1">•</span>' +
                        '<span class="fw-6 text-variant-1">' + post.date + '</span>' +
                    '</div>' +
                    '<p class="description" style="color: #4b5563; line-height: 1.65; font-size: 14.5px; margin-bottom: 18px;">' + post.excerpt + '</p>' +
                    '<div style="display: flex; align-items: center; justify-content: space-between;">' +
                        '<a href="' + post.link + '" style="color: #e5232a; font-weight: 700; font-size: 14px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px;">Read Full Article →</a>' +
                        '<span style="font-size: 12px; color: #94a3b8;">5 min read</span>' +
                    '</div>' +
                '</div>' +
            '</div>';
        });

        container.innerHTML = html;
        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        var pagContainer = document.getElementById("blogPaginationContainer");
        if (!pagContainer) return;

        if (totalPages <= 1) {
            pagContainer.innerHTML = "";
            return;
        }

        // Clean 1, 2, 3 pagination
        var html = '<ul class="justify-content-center wd-navigation" style="display: flex; gap: 8px; list-style: none; padding: 0; margin-top: 30px;">';

        // Prev
        var prevDisabled = currentPage === 1 ? ' style="opacity: 0.4; pointer-events: none;"' : '';
        html += '<li><a href="javascript:void(0)" class="nav-item blog-pag-prev"' + prevDisabled + ' aria-label="Previous Page"><i class="icon icon-arr-l"></i></a></li>';

        // Page buttons (1, 2, 3...)
        for (var i = 1; i <= totalPages; i++) {
            var activeClass = (i === currentPage) ? ' active' : '';
            html += '<li><a href="javascript:void(0)" class="nav-item blog-pag-num' + activeClass + '" data-page="' + i + '">' + i + '</a></li>';
        }

        // Next
        var nextDisabled = currentPage === totalPages ? ' style="opacity: 0.4; pointer-events: none;"' : '';
        html += '<li><a href="javascript:void(0)" class="nav-item blog-pag-next"' + nextDisabled + ' aria-label="Next Page"><i class="icon icon-arr-r"></i></a></li>';

        html += '</ul>';
        pagContainer.innerHTML = html;

        // Bind click events
        var numBtns = pagContainer.querySelectorAll(".blog-pag-num");
        numBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                var p = parseInt(this.getAttribute("data-page"), 10);
                if (p && p !== currentPage) {
                    currentPage = p;
                    renderBlogList();
                    scrollToBlogTop();
                }
            });
        });

        var prevBtn = pagContainer.querySelector(".blog-pag-prev");
        if (prevBtn) {
            prevBtn.addEventListener("click", function () {
                if (currentPage > 1) {
                    currentPage--;
                    renderBlogList();
                    scrollToBlogTop();
                }
            });
        }

        var nextBtn = pagContainer.querySelector(".blog-pag-next");
        if (nextBtn) {
            nextBtn.addEventListener("click", function () {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderBlogList();
                    scrollToBlogTop();
                }
            });
        }
    }

    function scrollToBlogTop() {
        var el = document.getElementById("flatBlogListContainer");
        if (el) {
            var yOffset = -100;
            var y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    }

    function init() {
        var container = document.getElementById("flatBlogListContainer");
        if (!container) return;
        renderBlogList();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    window.BLOG_MANAGER = {
        posts: BLOG_POSTS,
        render: renderBlogList
    };
})();
