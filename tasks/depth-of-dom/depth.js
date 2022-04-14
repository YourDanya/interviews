document.addEventListener('DOMContentLoaded', () => {
    const findDepth = (elem, depth=0) => {
        let maxDepth = depth
        for (let i=0; i<elem.children.length; i++){
            const elemDepth = findDepth(elem.children[i], depth+1)
            if(elemDepth>maxDepth) {
                maxDepth = elemDepth
            }
        }
        return maxDepth
    }

    const top = document.querySelector('.container')

    console.log(findDepth(top))
})