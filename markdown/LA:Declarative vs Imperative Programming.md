- Literature Notes::
    - Author::[[Ian Mundy]]
    - Source:: https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2
    - Recommended By:: 
    - Tags:: #Articles #programming
    - Notes::
        - Declarative Programming:
            - Logic of computation without describing control flow
            - Metaphor: Asking Friend to paint a landscape. You are not giving the friend instructions to paint it or how its done as long as its done.
            - Declarative code to change button color:
                - ```class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}```
        - Imperative Programming
            - Programming Paradigm that uses statements to change program's state
            - Metaphor: A painting instructor giving you instructions step-by-step on how to paint
            - Imperative code to change button color:
                - ```const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn); ```
        - Important things to note:
            - In React, don't think about how to accomplish a task, but rather what a component will look like in a new state
            - Avoid using Refs when possible
            - Return functions that return necessary info to render a component.
            - Communicate via parent components, not siblings
- Highlights
    - **Extracted Annotations (4/26/2020, 9:09:03 PM)**
    - "Declarative programming is a programming paradigm ... that expresses the logic of a computation without describing its control flow. Imperative programming is a programming paradigm that uses statements that change a program's state." ([Mundy 2018:2](zotero://open-pdf/library/items/DQVXT8J3?page=2))
    - "Declarative Programming is like asking your friend to draw a landscape. You don't care how they draw it, that's up to them. Imperative Programming is like your friend listening to Bob Ross tell them how to paint a landscape. While good ole Bob Ross isn't exactly commanding, he is giving them step by step directions to get the desired result." ([Mundy 2018:2](zotero://open-pdf/library/items/DQVXT8J3?page=2))
    - "When writing React, it's often good not to think of how you want to accomplish a result, but instead what the component should look like in it's new state." ([Mundy 2018:3](zotero://open-pdf/library/items/DQVXT8J3?page=3))
    - "Avoid Refs. Sure, sometimes they're necessary, but if you feel yourself reaching for refs then it can often mean you're doing something wrong." ([Mundy 2018:4](zotero://open-pdf/library/items/DQVXT8J3?page=4))
    - "Instead of returning functions that render a component, prefer to return functions that return the necessary information to render a component. In the first we are instructing what to do(render precisely this thing), while in the second we're just returning some information (use this information to do something" ([Mundy 2018:4](zotero://open-pdf/library/items/DQVXT8J3?page=4))
    - "Communicating between siblings, instead of through components. Try to only communicate with other components through props." ([Mundy 2018:4](zotero://open-pdf/library/items/DQVXT8J3?page=4))
