"use client";

import Script from "next/script";

export default function AuthkeyWidget() {
    return (
        // <Script
        //     src="https://console.authkey.io/js/main.js"
        //     id="authkey-chat-widget"
        //     strategy="lazyOnload"
        //     widget-id="552aef89-ff19-4ddb-8209-2ff77a51301c"
        //     onLoad={() => {
        //         console.log("Authkey widget loaded");
        //     }}
        // />
        <script src="https://console.authkey.io/js/main.js" id="authkey-chat-widget" widget-id="02de703e-7ff8-47c4-a62f-afe57f3a7996" defer></script>
    );
}