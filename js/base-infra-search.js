/**
 * Vishwas Property - Base-Infra Style Search & Listing Engine
 * Handles Hero 4-category search switching and full Search/Listing page rendering & live filters.
 */

(function () {
    'use strict';

    // ==========================================
    // 1. HERO SECTION SEARCH (index.html)
    // ==========================================
    function initHeroSearch() {
        var tabsRow = document.getElementById('heroCatTabs');
        var typeInput = document.getElementById('heroSearchTypeInput');
        var searchInput = document.getElementById('heroSearchInput');
        var form = document.getElementById('heroSearchForm');

        if (!tabsRow) return;

        var tabs = tabsRow.querySelectorAll('.hero-cat-box, .hero-cat-tab');

        var placeholders = {
            flat: 'Search Flats & Apartments (e.g. Shaheed Path, Gomti Nagar Ext)...',
            commercial: 'Search Commercials, Offices & Shops (e.g. Faizabad Rd, Vibhuti Khand)...',
            villa: 'Search Luxury Villas & Independent Houses (e.g. Sultanpur Rd)...',
            plot: 'Search Residential & Commercial Plots (e.g. Kisan Path, Raebareli Rd)...'
        };

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function (e) {
                var cat = this.getAttribute('data-cat');
                
                // If user clicks tab with an empty search query, let the default link navigate to search.html?type={cat}
                // But if they have text in the input or want to search, we also update the input state
                if (searchInput && searchInput.value.trim().length > 0) {
                    e.preventDefault();
                    tabs.forEach(function (t) { t.classList.remove('active'); });
                    this.classList.add('active');
                    if (typeInput) typeInput.value = cat;
                    if (searchInput && placeholders[cat]) searchInput.placeholder = placeholders[cat];
                    form.submit();
                } else {
                    // Update active styling
                    tabs.forEach(function (t) { t.classList.remove('active'); });
                    this.classList.add('active');
                    if (typeInput) typeInput.value = cat;
                    if (searchInput && placeholders[cat]) searchInput.placeholder = placeholders[cat];
                }
            });
        });

        if (form) {
            form.addEventListener('submit', function (e) {
                var activeTab = tabsRow.querySelector('.hero-cat-box.active, .hero-cat-tab.active');
                if (activeTab && typeInput) {
                    typeInput.value = activeTab.getAttribute('data-cat') || 'flat';
                }
            });
        }
    }

    // ==========================================
    // 2. DEDICATED SEARCH / LISTING PAGE (search.html)
    // ==========================================
    function initSearchPage() {
        var grid = document.getElementById('baseInfraPropertiesGrid');
        if (!grid) return; // Not on search.html

        // URL Params
        var urlParams = new URLSearchParams(window.location.search);
        var activeCategory = urlParams.get('type') || 'flat';
        var initialQuery = urlParams.get('q') || '';

        // Normalize category
        activeCategory = activeCategory.toLowerCase();
        if (['flat', 'flats', 'apartment', 'apartments'].indexOf(activeCategory) >= 0) activeCategory = 'flat';
        else if (['commercial', 'commercials', 'office', 'shop'].indexOf(activeCategory) >= 0) activeCategory = 'commercial';
        else if (['villa', 'villas', 'house'].indexOf(activeCategory) >= 0) activeCategory = 'villa';
        else if (['plot', 'plots', 'land'].indexOf(activeCategory) >= 0) activeCategory = 'plot';
        else activeCategory = 'flat';

        // Elements
        var headingText = document.getElementById('searchPageHeadingText');
        var breadcrumbText = document.getElementById('searchBreadcrumbCurrent');
        var countBadge = document.getElementById('searchCountBadge');
        var categoryPills = document.querySelectorAll('.search-cat-pill');
        var filterInput = document.getElementById('searchKeywordInput');
        var locationSelect = document.getElementById('searchLocationSelect');
        var statusSelect = document.getElementById('searchStatusSelect');
        var resetBtn = document.getElementById('searchResetBtn');

        var categoryTitles = {
            flat: 'Flats & Apartments in Lucknow',
            commercial: 'Commercial Offices & Shops in Lucknow',
            villa: 'Luxury Villas & Independent Homes in Lucknow',
            plot: 'Residential & Commercial Plots in Lucknow'
        };

        if (filterInput && initialQuery) {
            filterInput.value = initialQuery;
        }

        // Highlight Active Pill
        function updateCategoryUI(cat) {
            activeCategory = cat;
            categoryPills.forEach(function (pill) {
                if (pill.getAttribute('data-cat') === cat) {
                    pill.classList.add('active');
                } else {
                    pill.classList.remove('active');
                }
            });

            if (headingText && categoryTitles[cat]) {
                headingText.textContent = categoryTitles[cat];
            }
            if (breadcrumbText && categoryTitles[cat]) {
                breadcrumbText.textContent = categoryTitles[cat];
            }

            // Update URL without page reload
            var newUrl = window.location.pathname + '?type=' + cat;
            if (filterInput && filterInput.value.trim()) {
                newUrl += '&q=' + encodeURIComponent(filterInput.value.trim());
            }
            window.history.replaceState({ cat: cat }, '', newUrl);

            renderFilteredProperties();
        }

        // Render Properties Matching Filters
        function renderFilteredProperties() {
            if (!window.SITE_DATA || !window.SITE_DATA.properties) return;

            var properties = window.SITE_DATA.properties;
            var q = filterInput ? filterInput.value.trim().toLowerCase() : '';
            var loc = locationSelect ? locationSelect.value.trim().toLowerCase() : '';
            var status = statusSelect ? statusSelect.value.trim().toLowerCase() : '';

            var filtered = properties.filter(function (p) {
                // Category match
                if (p.category !== activeCategory) return false;

                // Keyword match
                if (q) {
                    var matchTitle = (p.title || '').toLowerCase().indexOf(q) >= 0;
                    var matchDisp = (p.displayTitle || '').toLowerCase().indexOf(q) >= 0;
                    var matchLoc = (p.location || '').toLowerCase().indexOf(q) >= 0;
                    var matchCity = (p.cityArea || '').toLowerCase().indexOf(q) >= 0;
                    if (!matchTitle && !matchDisp && !matchLoc && !matchCity) return false;
                }

                // Location match
                if (loc && loc !== 'all') {
                    var pLoc = ((p.location || '') + ' ' + (p.cityArea || '')).toLowerCase();
                    if (pLoc.indexOf(loc) < 0) return false;
                }

                // Status match
                if (status && status !== 'all') {
                    var pStatus = (p.status || '').toLowerCase();
                    if (pStatus.indexOf(status) < 0) return false;
                }

                return true;
            });

            // Update Count Badge
            if (countBadge) {
                countBadge.textContent = filtered.length + ' ' + (filtered.length === 1 ? 'Project' : 'Projects') + ' Available';
            }

            // Render Cards
            if (filtered.length === 0) {
                grid.innerHTML = '<div class="col-12 py-5 text-center">' +
                    '<div style="max-width: 440px; margin: 0 auto; padding: 40px 20px; background: #f8fafc; border: 1.5px dashed #cbd5e1; border-radius: 16px;">' +
                        '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e5232a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 14px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>' +
                        '<h4 style="font-weight: 700; color: #0f172a; margin-bottom: 6px;">No Matching Properties Found</h4>' +
                        '<p style="color: #64748b; font-size: 14px; margin-bottom: 18px;">Try clearing filters or search for another location in Lucknow.</p>' +
                        '<button type="button" id="searchEmptyResetBtn" class="tf-btn primary" style="border-radius: 30px; padding: 8px 24px; font-size: 13px;">Clear All Filters</button>' +
                    '</div>' +
                '</div>';

                var emptyReset = document.getElementById('searchEmptyResetBtn');
                if (emptyReset) {
                    emptyReset.addEventListener('click', resetAllFilters);
                }
            } else {
                var html = '';
                filtered.forEach(function (prop) {
                    html += window.SITE_DATA.helpers.createBaseInfraCard(prop);
                });
                grid.innerHTML = html;
            }
        }

        function resetAllFilters() {
            if (filterInput) filterInput.value = '';
            if (locationSelect) locationSelect.value = 'all';
            if (statusSelect) statusSelect.value = 'all';
            renderFilteredProperties();
        }

        // Category Pill Click Listeners
        categoryPills.forEach(function (pill) {
            pill.addEventListener('click', function (e) {
                e.preventDefault();
                var cat = this.getAttribute('data-cat');
                updateCategoryUI(cat);
            });
        });

        // Live Filters Listeners
        if (filterInput) {
            filterInput.addEventListener('input', function () {
                renderFilteredProperties();
            });
        }

        if (locationSelect) {
            locationSelect.addEventListener('change', function () {
                renderFilteredProperties();
            });
        }

        if (statusSelect) {
            statusSelect.addEventListener('change', function () {
                renderFilteredProperties();
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', function (e) {
                e.preventDefault();
                resetAllFilters();
            });
        }

        // Initialize state
        updateCategoryUI(activeCategory);
    }

    // Initialize on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initHeroSearch();
            initSearchPage();
        });
    } else {
        initHeroSearch();
        initSearchPage();
    }
})();
