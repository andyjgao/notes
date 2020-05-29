- # Key Architecture of Chrome Extensions
    - Background Script: 
        - Chrome Extension's Event Handler. **It listens for browser events.** Lies dormant until event is fired and performs related logic. Effective scripts are loaded only when it is need and unloaded when idle
        - Set up Listeners Synchronously or else it won't work
            - Good:
                - ``` chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });

  // This will run when a bookmark is created.
  chrome.bookmarks.onCreated.addListener(function() {
    // do something
  }); ```
            - Bad: 
                - ```chrome.runtime.onInstalled.addListener(function() {
    // ERROR! Events must be registered synchronously from the start of
    // the page.
    chrome.bookmarks.onCreated.addListener(function() {
      // do something
    });
  });```
    - UI Elements
        - Should be Purposeful and Minimal
        - Most contain browser action or page action. May also contain** context menus, omnibox, keyboard shortcut**
        - When using **Popup script **and **Page Action**, you can use **declarative content API** to set rules to background script so that it will only allow an extension to be used when conditions are met
    - Content Scripts
        - **Extensions that read/write to web pages** utilize content scripts, which contain js that executes in the context of a page. 
        - Read & modify DOM of web page
            - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fandyjgao%2FCc2wkfT658?alt=media&token=ae56b25b-720e-41f2-b233-d91843f12771)
        - Can exchange messages and store values using **storage API**
            - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fandyjgao%2F84kbrAaLQk?alt=media&token=6386bd01-22b1-4b61-8d59-2eebdd744c2d)
        - Options Page
            - Enables customization of extension
    - ## Using Chrome APIs
        - Chrome provides **extension specific APIs** in addition to all of the APIs provided for web pages.
            - Ex: Extensions & web pages can both access __window.open()__ but extensions can also specify which window that URL should be displayed by using tabs.create
        - Note: **Most Chrome API methods are asynchronous** so make sure to use callbacks when needing to run 2 functions in succession

# Backlinks
## [April 21st, 2020](<April 21st, 2020.md>)
- 21:30 Reading about [Chrome Extensions](<Chrome Extensions.md>)

## [April 24th, 2020](<April 24th, 2020.md>)
- How to Use React w/ [Chrome Extensions](<Chrome Extensions.md>)

## [P:PomoTab](<P:PomoTab.md>)
- **[Tags](<Tags.md>):** #[Chrome Extensions](<Chrome Extensions.md>)

## [P:RoamQuery Extension](<P:RoamQuery Extension.md>)
- **[Tags](<Tags.md>):** #[Chrome Extensions](<Chrome Extensions.md>)

