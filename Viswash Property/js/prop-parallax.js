/**
 * Vishwas Property - Horizontal Parallax Interactive Showcase
 * Smooth cursor-following parallax scroll, mouse-wheel horizontal translation,
 * pointer drag-to-scroll, and multi-plane image depth effects.
 */
(function () {
    'use strict';

    function initTopPropertiesParallax() {
        var section = document.getElementById('topPropertiesSection');
        var viewport = document.getElementById('topPropParallaxViewport');
        var track = document.getElementById('topPropParallaxTrack');
        var progressBar = document.getElementById('propParallaxProgressBar');
        var btnPrev = document.getElementById('propParallaxPrev');
        var btnNext = document.getElementById('propParallaxNext');

        if (!viewport || !track) return;

        var isHovered = false;
        var isDragging = false;
        var startX = 0;
        var dragStartScroll = 0;
        var currentScrollX = 0;
        var targetScrollX = 0;
        var animationFrameId = null;
        var mouseRatio = 0.5;

        function getMaxScroll() {
            return Math.max(0, track.scrollWidth - viewport.clientWidth);
        }

        // Lerp animation loop for butter-smooth parallax glide
        function animateParallax() {
            var maxScroll = getMaxScroll();
            if (maxScroll > 0) {
                // Smooth interpolation (lerp)
                var ease = isDragging ? 0.35 : 0.08;
                currentScrollX += (targetScrollX - currentScrollX) * ease;

                // Clamp
                if (currentScrollX < 0) currentScrollX = 0;
                if (currentScrollX > maxScroll) currentScrollX = maxScroll;

                viewport.scrollLeft = currentScrollX;

                // Update progress bar
                if (progressBar) {
                    var percent = (currentScrollX / maxScroll) * 100;
                    progressBar.style.width = Math.max(12, Math.min(100, percent)) + '%';
                }

                // Image subtle 3D parallax depth shift inside cards
                var cards = track.querySelectorAll('.prop-parallax-item');
                var viewportCenter = currentScrollX + (viewport.clientWidth / 2);

                cards.forEach(function (card) {
                    var cardCenter = card.offsetLeft + (card.offsetWidth / 2);
                    var delta = (cardCenter - viewportCenter) / (viewport.clientWidth / 2); // -1 to 1
                    var img = card.querySelector('.images-style img');
                    if (img) {
                        var imgShift = delta * -12; // subtle opposite shift
                        img.style.setProperty('--parallax-img-x', imgShift.toFixed(2) + 'px');
                    }
                });
            }

            animationFrameId = requestAnimationFrame(animateParallax);
        }

        // Start animation loop
        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(animateParallax);
        }

        // 1. Mouse Enter / Leave
        function onMouseEnter(e) {
            isHovered = true;
            updateTargetFromCursor(e);
        }

        function onMouseLeave() {
            isHovered = false;
            // When cursor leaves, keep current position gently
        }

        // 2. Cursor Parallax Glide on Mousemove
        function updateTargetFromCursor(e) {
            if (isDragging) return;
            var maxScroll = getMaxScroll();
            if (maxScroll <= 0) return;

            var rect = viewport.getBoundingClientRect();
            // Mouse X relative to container
            var clientX = e.clientX;
            if (clientX < rect.left) clientX = rect.left;
            if (clientX > rect.right) clientX = rect.right;

            var relX = clientX - rect.left;
            // Pad 8% on each side so user doesn't have to hit the exact pixel edge to reach the ends
            var padding = rect.width * 0.08;
            var activeWidth = rect.width - (padding * 2);
            var clampedX = Math.max(0, Math.min(activeWidth, relX - padding));
            mouseRatio = activeWidth > 0 ? clampedX / activeWidth : 0.5;

            targetScrollX = mouseRatio * maxScroll;
        }

        function onMouseMove(e) {
            if (isHovered && !isDragging) {
                updateTargetFromCursor(e);
            }
        }

        if (section) {
            section.addEventListener('mouseenter', onMouseEnter);
            section.addEventListener('mouseleave', onMouseLeave);
            section.addEventListener('mousemove', onMouseMove);
        }

        // 3. Mouse Wheel Support (Horizontal scroll on vertical wheel)
        viewport.addEventListener('wheel', function (e) {
            var maxScroll = getMaxScroll();
            if (maxScroll <= 0) return;

            var delta = e.deltaY || e.deltaX;
            if (Math.abs(delta) > 4) {
                // Smooth horizontal delta
                targetScrollX = Math.max(0, Math.min(maxScroll, targetScrollX + delta * 1.6));
                // Only prevent default if within active scrolling range
                if ((delta > 0 && targetScrollX < maxScroll) || (delta < 0 && targetScrollX > 0)) {
                    e.preventDefault();
                }
            }
        }, { passive: false });

        // 4. Pointer / Drag to Scroll
        viewport.addEventListener('mousedown', function (e) {
            // Only left mouse button
            if (e.button !== 0) return;
            isDragging = true;
            startX = e.pageX - viewport.offsetLeft;
            dragStartScroll = currentScrollX;
            viewport.classList.add('is-dragging');
        });

        window.addEventListener('mousemove', function (e) {
            if (!isDragging) return;
            e.preventDefault();
            var x = e.pageX - viewport.offsetLeft;
            var walk = (x - startX) * 1.5;
            var maxScroll = getMaxScroll();
            targetScrollX = Math.max(0, Math.min(maxScroll, dragStartScroll - walk));
        });

        window.addEventListener('mouseup', function () {
            if (isDragging) {
                isDragging = false;
                viewport.classList.remove('is-dragging');
            }
        });

        // 5. Navigation Buttons (Prev / Next)
        var cardStep = 400; // scroll by ~1 card

        if (btnPrev) {
            btnPrev.addEventListener('click', function (e) {
                e.preventDefault();
                var maxScroll = getMaxScroll();
                targetScrollX = Math.max(0, targetScrollX - cardStep);
            });
        }

        if (btnNext) {
            btnNext.addEventListener('click', function (e) {
                e.preventDefault();
                var maxScroll = getMaxScroll();
                targetScrollX = Math.min(maxScroll, targetScrollX + cardStep);
            });
        }

        // Keep synced on resize
        window.addEventListener('resize', function () {
            var maxScroll = getMaxScroll();
            if (targetScrollX > maxScroll) targetScrollX = maxScroll;
            if (currentScrollX > maxScroll) currentScrollX = maxScroll;
        });

        // Touch native momentum sync
        viewport.addEventListener('scroll', function () {
            if (!isHovered && !isDragging) {
                currentScrollX = viewport.scrollLeft;
                targetScrollX = viewport.scrollLeft;
                var maxScroll = getMaxScroll();
                if (progressBar && maxScroll > 0) {
                    var percent = (currentScrollX / maxScroll) * 100;
                    progressBar.style.width = Math.max(12, Math.min(100, percent)) + '%';
                }
            }
        }, { passive: true });
    }

    // Initialize on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTopPropertiesParallax);
    } else {
        initTopPropertiesParallax();
    }
})();
