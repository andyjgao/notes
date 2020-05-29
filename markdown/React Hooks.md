- [value, setValue] = useState(initVal) sets value to initVal and lets you change value by setValue(newVal)
- useEffect allows you to perform side effects in your code.
    - ```useEffect(()=>{
               AppState.addEventListener("change", handleStateChange);
               return () => AppState.removeEventListener("change", handleState Change)
               })```
