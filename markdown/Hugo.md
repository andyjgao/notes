- The following is a handbook of notes for the Hugo Static Generator Framework
- # Content Organization
    - ## /Content File Structure Organization
        - ```.
└── content
    └── about
    |   └── index.md  // <- https://example.com/about/
    ├── posts
    |   ├── firstpost.md   // <- https://example.com/posts/firstpost/
    |   ├── happy
    |   |   └── ness.md  // <- https://example.com/posts/happy/ness/
    |   └── secondpost.md  // <- https://example.com/posts/secondpost/
    └── quote
        ├── first.md       // <- https://example.com/quote/first/
        └── second.md      // <- https://example.com/quote/second/ ```
    - ## Path Breakdown in Hugo
        - ### Index Pages: _index.md
            - These files allow you add front matter and content to list templates
            - They can be placed at every level in an organizational structure in order to edit the index.html of that section
        - ### Single Pages in Sections
            - Single pages will be rendered as single page templates:
                - ```                    path ("posts/my-first-hugo-post.md")
.       ⊢-----------^------------⊣
.      section        slug
.       ⊢-^-⊣⊢--------^----------⊣
content/posts/my-first-hugo-post.md ```
    - ## Paths Explained
        - ### section
            - This is determined via location of content.
                - All items under content/post/ will belong under post section
        - ### slug
            - This is either `name.extension` or `name/`. Value is determined by either
                - file's name `post1.md`
                - front matter overrides i.e. alias or slug
                    - content/posts/old-post.md will render as example.com/posts/new-post/
                    - ```---
title: A new post with the filename old-post.md
slug: "new-post"
---```
    - ## Overriding Destination Paths via Front Matter
        - ### type
            - Type can be specified and may be useful if you want to create a unique layout for specific types i.e. `layouts/new/mylayout.html`
            - ```---
title: My Post
type: new
layout: mylayout
---```
        - ### url
            - You can specify the url and override existing url rules completely
                - ```---
title: Old URL
url: /blog/new-url/
---```
- # Page Bundles
    - helpful resource: https://scripter.co/hugo-leaf-and-branch-bundles/
    - A Page Bundle can either be:
        - Leaf Bundle
        - Branch Bundle
    - ## Leaf Bundles
        - What is a Leaf Bundle?  [[[[interval]]::5.6]] [[[[factor]]::2.30]] [[April 22nd, 2020]]
            - A directory at any Hierarchy within `/content/` that contains `index.md`
        - ### Example
            - ```content/
├── about Bundle 1
│   ├── index.md
├── posts
│   ├── my-post Bundle 2
│   │   ├── content1.md
│   │   ├── content2.md
│   │   ├── image1.jpg
│   │   ├── image2.png
│   │   └── index.md
│   └── my-other-post Bundle 3
│       └── index.md
│
└── another-section
    ├── ..
    └── not-a-leaf-bundle
        ├── ..
        └── another-leaf-bundle Bundle 4
            └── index.md```
    - ## Headless Bundle
        - What is a headless Bundle?
            - A bundle that is configured not to get published
                - It has no Permalink, no rendered HTML, not a part of `.Site.RegularPages`
        - Retrievable via `.Site.GetPage`
            -    ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fandyjgao%2FzfiFa7YkSE?alt=media&token=ad96287c-6af0-441b-8662-7476471ff339)
            - Explanation of the above example:
                - Get the `some-headless-bundle` Page “object”.
                - Collect a __slice__ of resources in this __Page Bundle__ that matches `"author*"` using  `.Resources.Match`.
                - Loop through that __slice__ of nested pages, and output their`.Title` and `.Content`.
        - A leaf bundle (and only leaf) is able to be made headless by adding `headless= **true**` in the `index.md` Front Matter.
        - Use Cases:
            - Shared media galleries
            - Reusable page content “snippets”
    - ## Branch Bundles
        - What is a Branch Bundle?
            - Any directory at any hierarchy within `/content/` that contains `_index.md`
        - 
- # Front Matter
    - What is Front Matter?
        - It's metadata attached to an instance of a content type
    - Formats accepted by Hugo
        - **TOML**: +++
        - **YAML**: ---
        - **JSON**: {}
        - ORG (see Hugo)
    - ## Predefined Variables
        - ### aliases
            - allows you to redirect urls to this specific content
        - ### audio
            - array of audio files
        - ### cascade
            - a way to pass down values/variables down to its descendants.
                - Inside `content/blog/_index.md` you can now select image when .Params.banner is invoked
                - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fandyjgao%2FmyaOu_HCrr?alt=media&token=e03899e1-e28a-4ce0-9806-37d96cc906fe)
        - ### draft
            - if set to true content will not be rendered unless --buildDrafts is set
        - ### expiryDate
            - date when content will no longer be displayed
        - See more on Hugo Page: https://gohugo.io/content-management/front-matter/
    - 
