var observer = new MutationObserver(function(
  mutations
) {
  // For the sake of...observation...let's output the mutation to console to see how this all works
  mutations.forEach(function(mutation) {
    console.log(mutation.type)
  })
})

// Notify me of everything!
var observerConfig = {
  attributes: true,
  childList: true,
  characterData: true
}

// Node, config
// In this case we'll listen to all changes to body and child nodes
var targetNode = document.body
observer.observe(targetNode, observerConfig)
