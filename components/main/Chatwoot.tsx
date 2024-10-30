'use client';

import Script from 'next/script';

export default function Chatwoot() {
    return (
        <>
            <Script
                id="chatwoot-settings"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.chatwootSettings = {
              "position": "right",
              "type": "expanded_bubble",
              "launcherTitle": "Chat with us"
            };
          `,
                }}
            />
            <Script
                src="https://chat.gab-cat.me/packs/js/sdk.js"
                strategy="afterInteractive"
                onLoad={() => {
                    /* @ts-expect-error */
                    window.chatwootSDK.run({
                        websiteToken: 'ikBZ8R1qMri6BKhJyhiiXs7H',
                        baseUrl: 'https://chat.gab-cat.me',
                    });
                }}
            />
        </>
    );
}
