/**
 * Vishwas Property - Property Advisor Chat Widget & Hero YouTube Video Modal
 */
(function ($) {
    "use strict";

    // --- 1. HERO YOUTUBE VIDEO MODAL LOGIC ---
    // Vishwas Property YouTube Tour Video (Anaya Crown Park Lucknow / Sultanpur Highway)
    var defaultYtVideoId = "cIXxiFTtHmE";
    var ytEmbedUrl = "https://www.youtube-nocookie.com/embed/" + defaultYtVideoId + "?autoplay=1&rel=0";

    function initHeroYoutubeModal() {
        var $triggers = $("#heroYtPlayTrigger, #headerYtPlayTrigger, .hero-yt-play-trigger");
        var $modal = $("#ytVideoModal");
        var $closeBtn = $("#closeYtModalBtn");
        var $iframe = $("#heroYtIframe");

        if (!$triggers.length || !$modal.length) return;

        $triggers.on("click", function (e) {
            e.preventDefault();
            $iframe.attr("src", ytEmbedUrl);
            $modal.addClass("is-open").fadeIn(200);
            $("body").css("overflow", "hidden");
        });

        function closeModal() {
            $modal.removeClass("is-open").fadeOut(200, function () {
                $iframe.attr("src", "");
            });
            $("body").css("overflow", "");
        }

        $closeBtn.on("click", closeModal);

        $modal.on("click", function (e) {
            if ($(e.target).closest(".yt-video-modal-dialog").length === 0) {
                closeModal();
            }
        });

        $(document).on("keydown", function (e) {
            if (e.key === "Escape" && $modal.hasClass("is-open")) {
                closeModal();
            }
        });
    }

    // --- 2. PROPERTY ADVISOR CHAT POPUP WIDGET LOGIC ---
    var userResponses = {
        propertyType: "",
        budget: "",
        location: ""
    };

    var currentStep = 1;

    function renderInitialQuestion() {
        var $body = $("#advisorChatMessages");
        $body.empty();
        currentStep = 1;
        userResponses = { propertyType: "", budget: "", location: "" };

        var html = `
            <div class="advisor-card-bubble" id="step1Bubble">
                <div class="bubble-question">Abhi aap kis tarah ki property dekh rahe hain?</div>
                <div class="advisor-options-grid">
                    <button type="button" class="advisor-chip-btn" data-step="1" data-val="Residential">Residential</button>
                    <button type="button" class="advisor-chip-btn" data-step="1" data-val="Commercial">Commercial</button>
                    <button type="button" class="advisor-chip-btn" data-step="1" data-val="Plot">Plot</button>
                    <button type="button" class="advisor-chip-btn" data-step="1" data-val="Not decided">Not decided</button>
                </div>
            </div>
        `;
        $body.append(html);
        scrollToBottom();
    }

    function showTypingIndicator(callback) {
        var $body = $("#advisorChatMessages");
        var typingHtml = `
            <div class="advisor-typing-indicator" id="advisorTyping">
                <span></span><span></span><span></span>
            </div>
        `;
        $body.append(typingHtml);
        scrollToBottom();

        setTimeout(function () {
            $("#advisorTyping").remove();
            if (typeof callback === "function") callback();
        }, 550);
    }

    function renderBudgetQuestion() {
        showTypingIndicator(function () {
            var $body = $("#advisorChatMessages");
            var html = `
                <div class="advisor-card-bubble" id="step2Bubble">
                    <div class="bubble-question">Aapka estimated budget range kya hai?</div>
                    <div class="advisor-options-grid">
                        <button type="button" class="advisor-chip-btn" data-step="2" data-val="Under ₹40 L">Under ₹40 L</button>
                        <button type="button" class="advisor-chip-btn" data-step="2" data-val="₹40 L - ₹75 L">₹40 L - ₹75 L</button>
                        <button type="button" class="advisor-chip-btn" data-step="2" data-val="₹75 L - ₹1.5 Cr">₹75 L - ₹1.5 Cr</button>
                        <button type="button" class="advisor-chip-btn" data-step="2" data-val="₹1.5 Cr+ Luxury">₹1.5 Cr+ Luxury</button>
                    </div>
                </div>
            `;
            $body.append(html);
            scrollToBottom();
        });
    }

    function renderLocationQuestion() {
        showTypingIndicator(function () {
            var $body = $("#advisorChatMessages");
            var html = `
                <div class="advisor-card-bubble" id="step3Bubble">
                    <div class="bubble-question">Lucknow me preferred location kaunsi hai?</div>
                    <div class="advisor-options-grid">
                        <button type="button" class="advisor-chip-btn" data-step="3" data-val="Sultanpur Road / Kisan Path">Sultanpur Road / Kisan Path</button>
                        <button type="button" class="advisor-chip-btn" data-step="3" data-val="Amar Shaheed Path">Amar Shaheed Path</button>
                        <button type="button" class="advisor-chip-btn" data-step="3" data-val="Gomti Nagar / Ext.">Gomti Nagar / Ext.</button>
                        <button type="button" class="advisor-chip-btn" data-step="3" data-val="Raebareli Road">Raebareli Road</button>
                        <button type="button" class="advisor-chip-btn" data-step="3" data-val="Any Verified Location">Any Verified Location</button>
                    </div>
                </div>
            `;
            $body.append(html);
            scrollToBottom();
        });
    }

    function renderFinalRecommendation() {
        showTypingIndicator(function () {
            var $body = $("#advisorChatMessages");
            var waMsg = "Namaste Ankit ji / Vishwas Property, mai Lucknow me " + (userResponses.propertyType || "property") + 
                        " dekh raha hu. Budget: " + (userResponses.budget || "Flexible") + 
                        ", Location: " + (userResponses.location || "Lucknow") + 
                        ". Kripya verified projects aur site visit details share karein.";
            
            var waLink = "https://wa.me/918299667747?text=" + encodeURIComponent(waMsg);

            var html = `
                <div class="advisor-card-bubble" id="stepFinalBubble">
                    <div class="bubble-question">
                        Bahut badhiya! Aapke selection (<strong>${userResponses.propertyType}</strong>, Budget: <strong>${userResponses.budget}</strong>, Location: <strong>${userResponses.location}</strong>) ke anusar hamare paas LDA/RERA verified options hain.
                    </div>
                    <p style="font-size: 13px; color: #475569; margin: 0 0 10px 0; line-height: 1.45;">
                        Photos, layout plan aur pricing details direct WhatsApp par instant pane ke liye click karein:
                    </p>
                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="advisor-wa-final-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.214 8.214 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.11.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                        </svg>
                        WhatsApp par baat karein
                    </a>
                </div>
            `;
            $body.append(html);
            scrollToBottom();
        });
    }

    function scrollToBottom() {
        var $body = $("#advisorChatMessages");
        setTimeout(function () {
            $body.scrollTop($body[0].scrollHeight);
        }, 50);
    }

    function handleUserInputText(text) {
        if (!text || !text.trim()) return;
        var cleanText = text.trim();
        var $body = $("#advisorChatMessages");

        // Add user message bubble
        $body.append('<div class="advisor-user-bubble">' + cleanText + '</div>');
        $("#advisorChatInput").val("");
        scrollToBottom();

        showTypingIndicator(function () {
            var waMsg = "Namaste Ankit ji / Vishwas Property, " + cleanText;
            var waLink = "https://wa.me/918299667747?text=" + encodeURIComponent(waMsg);

            var replyHtml = `
                <div class="advisor-card-bubble">
                    <div class="bubble-question">Shukriya! Aapke sawal ke liye hamare property guide turant aapse WhatsApp par connect kar rahe hain:</div>
                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="advisor-wa-final-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.214 8.214 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.42 1.44.53.61.2 1.16.17 1.6.11.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                        </svg>
                        WhatsApp par chat shuru karein
                    </a>
                </div>
            `;
            $body.append(replyHtml);
            scrollToBottom();
        });
    }

    function initAdvisorChat() {
        var $trigger = $("#advisorChatTrigger");
        var $widget = $("#advisorChatWidget");
        var $closeBtn = $("#advisorCloseBtn");
        var $resetBtn = $("#advisorResetBtn");
        var $body = $("#advisorChatMessages");
        var $input = $("#advisorChatInput");
        var $sendBtn = $("#advisorChatSend");

        if (!$trigger.length || !$widget.length) return;

        // Render initial step and ensure closed by default
        renderInitialQuestion();
        $widget.removeClass("is-open").hide();

        // Toggle open / close strictly on user click/tap
        $trigger.on("click", function (e) {
            e.stopPropagation();
            if ($widget.hasClass("is-open")) {
                $widget.removeClass("is-open").hide();
            } else {
                $widget.addClass("is-open").show();
                scrollToBottom();
            }
        });

        $closeBtn.on("click", function (e) {
            e.stopPropagation();
            $widget.removeClass("is-open").hide();
        });

        // Click outside closes the chat widget on mobile & desktop
        $(document).on("click", function (e) {
            if ($widget.hasClass("is-open")) {
                if ($(e.target).closest("#advisorChatWidget, #advisorChatTrigger").length === 0) {
                    $widget.removeClass("is-open").hide();
                }
            }
        });

        $resetBtn.on("click", function () {
            renderInitialQuestion();
        });

        // Chip button selection
        $body.on("click", ".advisor-chip-btn", function () {
            var $this = $(this);
            var step = parseInt($this.data("step"), 10);
            var val = $this.data("val");

            // Disable other buttons in the same container
            $this.closest(".advisor-options-grid").find(".advisor-chip-btn").prop("disabled", true);
            $this.addClass("selected");

            // Append user message bubble
            $body.append('<div class="advisor-user-bubble">' + val + '</div>');
            scrollToBottom();

            if (step === 1) {
                userResponses.propertyType = val;
                renderBudgetQuestion();
            } else if (step === 2) {
                userResponses.budget = val;
                renderLocationQuestion();
            } else if (step === 3) {
                userResponses.location = val;
                renderFinalRecommendation();
            }
        });

        // Input send
        $sendBtn.on("click", function () {
            handleUserInputText($input.val());
        });

        $input.on("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                handleUserInputText($input.val());
            }
        });
    }

    $(document).ready(function () {
        initHeroYoutubeModal();
        initAdvisorChat();
    });

})(jQuery);
