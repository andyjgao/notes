- Projects::
    - Due Date:: [[May 3rd, 2020]]
    - Completed Date:: [[May 4th, 2020]]
    - Status:: #[[archive]]
    - Goal:: Complete a Chrome Extension
    - Tags:: #[[Chrome Extensions]]
- ## Idea
    - Build a Chrome Extension that when a new tab is opened the user is able to see an adjustable pomodoro timer
    - Must make sure design satisfies Visceral Aesthetics
    - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fandyjgao%2FiFRceHGp-y?alt=media&token=9428cda7-3ecf-4c2c-85d9-53a2e80a8ef2)
- ## React Hooks
    - Video
        - {{youtube: https://www.youtube.com/watch?v=f6HYLHrYpGs}}
    - 13:26 - Adding Components to App.js
    - 15:11 - Adding Dummy Values of Initial Expenses 
    - 23:46 - adding useState
    - 28:42 - props passing and using reduce functional programming
    - 29:29 - destructuring expenses props into ExpenseList
- ## Logic Structure of App
    - App starts - Time: 25:00
        - Start/Pause Button
            - sets start to false/true
                - if true => timer runs
                - else => timer pauses
        - Reset Button
            - Sets time to 25:00
            - Sets start to false
    - App reaches - Time: 0:00
        - rest is Set to True;
        - 
- ## TODOS:
    - Core functionalities
        - {{[[DONE]]}} Get Rest Timer Working
        - {{[[DONE]]}} Insert PomoTab Logo
        - {{[[DONE]]}} Create a List of Possible TODOS to be able to be added
    - Added features
        - Create a Settings Page
            - {{[[TODO]]}} Allow Customizable Audio
            - {{[[TODO]]}} Allow Customizable Time
                - Thought about adding buttons, but probably alot easier to add it in settings? we shall see
    - Optimize Tasks
        - {{[[TODO]]}} Figure out how to optimize focusSet
- ## Bugs
    - Timer lags when on inactive tab
        - Find end time
        - Subtract it from time now
        - use that as timer 
- ## Write-up:
    Tech Stack: ReactJS (Hooks), MaterialUI
    Duration: 1 Day
    PomoTab is a Chrome Extension rendering a minimalist Pomodoro timer in each new tab. The app is designed based on a philosophy of minimalism + function. Every component serves a purpose. 
    Features:
        PomoTab when you open a new tab
        25 Minute Study Timer + 5 Minute Break
        Start/Pause + Reset Button
        Focus Box
        Light Mode / Dark Mode
    Future Features:
        Customization of Study/Break timer
        Customization of Alarm Sound
        Pomodoro Completion Counter
    ## Problem
        I built this Chrome Extension after I could not find an extension that offered a simple Pomodoro Timer with no extra frills. Almost every extension I installed was feature bloated and did not serve my use-case of a simple, minimal Pomodoro Timer.  
    ## Goal
        Build a minimalist Pomodoro Timer. It must have only the necessary features and be easy to use/access. 
    ## Ideation
        Low-Fidelity Mock Up
            ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fandyjgao%2FiFRceHGp-y?alt=media&token=9428cda7-3ecf-4c2c-85d9-53a2e80a8ef2)
    ## Roadblocks
        The primary roadblock I ran into was trying to use **React Hooks** with the **setInterval() **JavaScript function. React is built off of the declarative programming paradigm while the setInterval() API is imperative. These conflicting models caused a lot of unintended behavior for me -- resulting in the timer skipping seconds randomly. I found [this article](https://overreacted.io/making-setinterval-declarative-with-react-hooks/) very helpful in solving my issue.
    ## End Result
        After a couple hours of grinding, I ended up with the following result: 
        ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fandyjgao%2FQutj6w27Y7.png?alt=media&token=1caea9f3-0a67-4473-b1c0-2dabcf340cf0)
        I was pretty happy with the result. And I learned a good amount about React Hooks and Chrome Extensions.
    If you want a minimalist Pomodoro Timer, [add the extension here](https://chrome.google.com/webstore/detail/pomotab/dbpkgeidmoofficdjjpikfachonamakh).
