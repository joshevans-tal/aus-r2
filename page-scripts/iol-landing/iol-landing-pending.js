// -----------------------------------------------------------------------------------------------------------------
        // CREATE PAGE CONTENT STRUCTURE
        // -----------------------------------------------------------------------------------------------------------------

        // BODY CONTAINER IS id="content-container"
        let bodyContainer = document.getElementById("content-container");


        let page = `<h6 style="margin:0;">Welcome Geraldine,</h6><br>
        <p>Your existing cover and options are shown on this page.<br><br></p>
        <p>If you have an incomplete application open, you can continue by clicking on Resume Application to the right of the screen. You will have to complete or close this application before starting a new application.<br><br></p>`;
        
        page += `<div class="iol-tile-container">`;
        page += createIOLCoverTile(`
        <p>Death Cover</p><br>
        <p style="font-size:1.5rem; font-weight: bold;">$184,000</p>
        <p>Pending</p>
        `);
        page += createIOLCoverTile(`
        <p>Total & Permanent Disablement Cover</p>
        <p style="font-size:1.5rem; font-weight: bold;">No cover</p>
        `);
        page += createIOLCoverTile(`
        <p>Income Protection</p><br>
        <p style="font-size:1.5rem; font-weight: bold;">No cover</p>
        `);
        page += createIOLCoverTile(`
        <p>Work Rating</p><br>
        <p style="font-size:1.5rem; font-weight: bold;">Blue collar</p>
        `);

        page += `</div>`;

        page += `<div class="iol-accent-bg" style="padding:16px 16px 24px 16px; margin-top: 12px;">
        <p class="caption" style="text-align: center;">
        Your cover is described as 'No Cover' because it hasn't started yet.<br>
        To start your cover, select 'Start your Basic Cover' or 'Manage my Cover'. 
        </p>
        </div></div>`;

        page += `<div class="iol-tile-container" style="margin-top: 20px;">`;
        page += createIOLActionTile(
            `<p><img src="./images/iol-landing-images/start-cover-icon.svg" width="60px"/></p>`,
            `<p>Start your <br>basic cover</p>`,
            `01-warm-welcome.html`,
            'tile1');
        page += createIOLActionTile(
            `<p><img src="./images/iol-landing-images/change-cover-icon.svg" width="60px"/></p>`,
            `<p>Manage <br>your cover</p>`,
            `01-warm-welcome.html`,
            'tile2');

        page += createIOLActionTile(
            `<p><img src="./images/iol-landing-images/transfer-cover-icon.svg" width="60px"/></p>`,
            `<p>Transfer cover<br>to us</p>`,
            `#`,
            'tile3');

        page += createIOLActionTile(
            `<p><img src="./images/iol-landing-images/work-rating-icon.svg" width="60px"/></p>`,
            `<p>Change your<br>work rating</p>`,
            `#`,
            'tile4');
        page += `</div>`;
        // page += tcCTA(
        //     // Set cta layout DEFAULT should be 'fullwidth' - any other value will collaps the buttons
        //     'fullwidth',
        //     // Define 2D array of buttons
        //     // use double quotes for urls
        //     [
        //         [
        //             'primary',
        //             'large',
        //             'Get started',
        //             `window.location = "01-warm-welcome.html";`
        //         ],
        //         [
        //             'tertiary',
        //             'large',
        //             'Cancel & exit',
        //             `window.alert("This would exit to your insurance dashboard");`
        //         ]
        //     ]

        // );

        bodyContainer.innerHTML += page;

        // bodyContainer.insertAdjacentHTML("afterend", `<div class="body-container elevation-medium" style="max-width: 260px;">Hello</div>`);

        function createIOLCoverTile(content){
            let tile = `<div class="iol-tile iol-accent-bg">${content}</div>`;
            return tile;
        }

        function createIOLActionTile(icon, content, url, id){
            let tile = `
                <div id="${id}-tile" class="iol-tile iol-action" onclick="location.href='${url}';">
                        ${icon}<br>
                        ${content}
                </div>`;
            tile += `
                <div hidden id="${id}-hover" class="iol-tile iol-action bglight" onclick="location.href='${url}';" style="display:none;">
                        ${icon}<br>
                        ${content}
                </div>`;
            return tile;
        }