function findNode(tree, id) {
    if (tree == undefined || tree.size === 0) return null;
    let item = tree.filter((item)=>item.id === id);
    if (item.size > 0) return item[0];
    tree.children.forEach(child => {
        let item = findNode(child, id);
        if (item !== null && item.size > 0) return item[0];
    });
    return null;
}

export default createLegendTree = (items) => {
    let legend = items.filter((item)=>item.level = 1);
    if (legend.size === 0) return items;

    let itemsToAdd = [];
    let currentLevel = 2;
    let lastFoundParent = legend[0];

    while ((itemsToAdd = items.filter((item) => item.level = currentLevel)).size !== 0){
        itemsToAdd.forEach(item => {
            if (item.parentId !== lastFoundParent.id){
                const newParent = findParent(legend, item.parentId);
                if (newParent === null) {
                    console.warn("A legend item couldn't be matched to its parent.");
                } else {
                    lastFoundParent = newParent;
                }
            }
            if (item.parentId !== lastFoundParent.id) lastFoundParent.children.push(item);
        });
    }

    return legend;
}
