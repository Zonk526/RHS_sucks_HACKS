const maxStockFood = () => {
    const { stateNode : { state, setState } } = Object.values((function react(potentialDiv = document.querySelector('body>div')) 
        {return Object.values(potentialDiv)[1]?.children?.[0]?._owner.stateNode ? potentialDiv : react(potentialDiv.querySelector(':scope>div'));
    })())[1].children[0]._owner;

    setState({ foods: state.foods.map(e => ({ ...e, stock: 99, level: e.level })) })
}

maxStockFood();
