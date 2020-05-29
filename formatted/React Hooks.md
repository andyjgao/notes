- [value, setValue] = useState(initVal) sets value to initVal and lets you change value by setValue(newVal)
- useEffect allows you to perform side effects in your code.
    - ```useEffect(()=>{
               AppState.addEventListener("change", handleStateChange);
               return () => AppState.removeEventListener("change", handleState Change)
               })```

# Backlinks
## [April 26th, 2020](<April 26th, 2020.md>)
- A useful article to explain what setInterval doesn't really work when playing with #[React Hooks](<React Hooks.md>)

