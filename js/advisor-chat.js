/**
 * Vishwas Property - Property Advisor Chat Widget & Hero YouTube Video Modal
 */
(function ($) {
    "use strict";

    // --- 1. HERO YOUTUBE VIDEO MODAL LOGIC ---
    // Vishwas Property YouTube Tour Video (Lucknow Greens Township / Sultanpur Highway)
    var defaultYtVideoId = "fjBuybKFWvg";
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
                        <button type="button" class="advisor-chip-btn" data-step="2" data-val="Under ₹40 Lakh">Under ₹40 Lakh</button>
                        <button type="button" class="advisor-chip-btn" data-step="2" data-val="₹40 Lakh - ₹75 Lakh">₹40 Lakh - ₹75 Lakh</button>
                        <button type="button" class="advisor-chip-btn" data-step="2" data-val="₹75 Lakh - ₹1.5 Cr">₹75 Lakh - ₹1.5 Cr</button>
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
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
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
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/>
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
